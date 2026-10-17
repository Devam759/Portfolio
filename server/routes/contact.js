import express from 'express'
import nodemailer from 'nodemailer'
import Contact from '../models/Contact.js'

const router = express.Router()

// Setup optional email transporter
const createTransporter = () => {
  const user = process.env.EMAIL_USER?.trim()
  const pass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : null

  if (user && pass) {
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user,
        pass,
      },
    })
  }
  return null
}

// POST /api/contact - Create a new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Basic payload check
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields: name, email, and message.',
      })
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      })
    }

    // Save submission to MongoDB
    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    })

    // Send dual emails if email credentials are configured
    const transporter = createTransporter()
    if (transporter) {
      const recipient = process.env.NOTIFICATION_RECIPIENT || 'devamg759@gmail.com'
      const formattedDate = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
      })

      // 1. Notification email to Devam (devamg759@gmail.com)
      const adminMailPromise = transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: recipient,
        replyTo: email.trim(),
        subject: `🔔 New Portfolio Contact Message from ${name.trim()}`,
        text: `New Portfolio Message received:\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nTime: ${formattedDate} IST\n\nMessage:\n${message.trim()}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px;">
            <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #111827; margin: 0 0 6px 0; font-size: 20px;">New Contact Form Submission</h2>
              <p style="color: #6b7280; margin: 0; font-size: 14px;">Received on ${formattedDate} (IST)</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #4b5563; font-weight: 600; width: 90px; vertical-align: top;">Name:</td>
                <td style="padding: 8px 0; color: #111827;">${name.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #4b5563; font-weight: 600; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${email.trim()}" style="color: #2563eb; text-decoration: none;">${email.trim()}</a></td>
              </tr>
            </table>

            <div style="background-color: #f9fafb; border-left: 4px solid #3b82f6; border-radius: 4px; padding: 14px 16px; margin-bottom: 24px;">
              <p style="margin: 0 0 6px 0; font-weight: 600; color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content</p>
              <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap; font-size: 15px;">${message.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>

            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${email.trim()}" style="display: inline-block; background-color: #111827; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply Directly to ${name.trim()}</a>
            </div>
          </div>
        `,
      })

      // 2. Auto-reply confirmation to the sender
      const autoReplyPromise = transporter.sendMail({
        from: `"Devam Gupta" <${process.env.EMAIL_USER}>`,
        to: email.trim(),
        subject: `Thank you for reaching out, ${name.trim()}! Message Received`,
        text: `Hi ${name.trim()},\n\nThank you for reaching out through my portfolio website! I have received your message and will review it and get back to you shortly.\n\nSummary of your message:\n"${message.trim()}"\n\nBest regards,\nDevam Gupta\nFull-Stack Developer\nhttps://portfoliodevam.netlify.app`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px;">
            <h2 style="color: #111827; margin: 0 0 12px 0; font-size: 20px;">Thank You for Reaching Out!</h2>
            <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0;">
              Hi <strong>${name.trim()}</strong>,
            </p>
            <p style="color: #374151; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for contacting me through my portfolio website. I have received your message and will review it and get back to you as soon as possible.
            </p>

            <div style="background-color: #f9fafb; border-left: 4px solid #10b981; border-radius: 4px; padding: 14px 16px; margin-bottom: 24px;">
              <p style="margin: 0 0 6px 0; font-weight: 600; color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Your Message Copy</p>
              <p style="margin: 0; color: #4b5563; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${message.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>

            <p style="color: #6b7280; font-size: 13px; line-height: 1.5; margin: 0 0 20px 0;">
              In the meantime, feel free to connect with me on <a href="https://www.linkedin.com/in/devam-gupta-929239271/" style="color: #2563eb; text-decoration: none; font-weight: 600;">LinkedIn</a> or view my open-source projects on <a href="https://github.com/Devam759" style="color: #2563eb; text-decoration: none; font-weight: 600;">GitHub</a>.
            </p>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 24px;">
              <p style="margin: 0; color: #111827; font-weight: 600; font-size: 14px;">Devam Gupta</p>
              <p style="margin: 2px 0 0 0; color: #6b7280; font-size: 13px;">Full-Stack Developer & Software Engineer</p>
              <p style="margin: 2px 0 0 0; color: #2563eb; font-size: 13px;"><a href="https://portfoliodevam.netlify.app" style="color: #2563eb; text-decoration: none;">portfoliodevam.netlify.app</a></p>
            </div>
          </div>
        `,
      })

      // Send both concurrently
      Promise.allSettled([adminMailPromise, autoReplyPromise]).then((results) => {
        results.forEach((res, idx) => {
          if (res.status === 'rejected') {
            console.error(`Nodemailer notice: Failed to send email [${idx === 0 ? 'Admin alert' : 'Auto-reply'}]:`, res.reason?.message || res.reason)
          }
        })
      })
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received.',
      data: {
        id: newContact._id,
        name: newContact.name,
        createdAt: newContact.createdAt,
      },
    })
  } catch (error) {
    console.error('Error saving contact submission:', error)
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while saving your message. Please try again later.',
    })
  }
})

// GET /api/contact - Retrieve submissions (for evaluation / verification)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50)
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve contact submissions.',
    })
  }
})

export default router
