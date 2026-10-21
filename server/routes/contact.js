import express from 'express'
import Contact from '../models/Contact.js'
import { sendContactEmails, getEmailStatus } from '../utils/email.js'

const router = express.Router()

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

    // Dispatch dual emails (admin alert + confirmation auto-reply) asynchronously
    sendContactEmails({
      name: newContact.name,
      email: newContact.email,
      message: newContact.message,
    }).catch((emailErr) => {
      console.error('[Contact Route Email Notice]:', emailErr.message || emailErr)
    })

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

// GET /api/contact - Retrieve submissions (health & admin verification)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50)
    return res.status(200).json({
      success: true,
      count: contacts.length,
      emailStatus: getEmailStatus(),
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
