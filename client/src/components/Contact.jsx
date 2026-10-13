import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setFeedbackMessage('Please fill out all fields.')
      return
    }

    setStatus('loading')
    setFeedbackMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('success')
        setFeedbackMessage('Message sent successfully. I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setFeedbackMessage(result.error || 'Failed to submit message.')
      }
    } catch (err) {
      console.error('Contact submission error:', err)
      setStatus('error')
      setFeedbackMessage('Unable to reach server. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0f0f13] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
              Have an opportunity, project, or question? Feel free to reach out via the form or through my contact details.
            </p>

            <div className="space-y-4 pt-2 font-sans text-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Email</div>
                  <a
                    href="mailto:devamg759@gmail.com"
                    className="cursor-target font-medium text-gray-900 dark:text-white hover:underline"
                  >
                    devamg759@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Phone</div>
                  <a
                    href="tel:+917340015201"
                    className="cursor-target font-medium text-gray-900 dark:text-white hover:underline"
                  >
                    +91 73400 15201
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Location</div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Jaipur / Bikaner, Rajasthan, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#121216] p-8 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm"
            >
              {status === 'success' && (
                <div className="mb-6 p-3.5 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/40 text-green-800 dark:text-green-300 font-sans text-xs font-medium">
                  {feedbackMessage}
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-3.5 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40 text-red-800 dark:text-red-300 font-sans text-xs font-medium">
                  {feedbackMessage}
                </div>
              )}

              <div className="space-y-4 font-sans text-sm">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write a message..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="cursor-target w-full bg-black dark:bg-white text-white dark:text-black py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 mt-2"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
