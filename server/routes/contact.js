import express from 'express'
import nodemailer from 'nodemailer'
import Contact from '../models/Contact.js'

const router = express.Router()

// Setup optional email transporter
const createTransporter = () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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

    // Optional Nodemailer notification
    const transporter = createTransporter()
    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.NOTIFICATION_RECIPIENT || process.env.EMAIL_USER,
          subject: `New Portfolio Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
            <h3>New Contact Form Message</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f4f4f4; padding: 12px; border-radius: 6px;">${message.replace(/\n/g, '<br>')}</p>
          `,
        })
      } catch (mailError) {
        // Log mail error without failing user submission
        console.error('Nodemailer notice: Failed to send email alert:', mailError.message)
      }
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
