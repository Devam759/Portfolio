import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="text-center">
                <p className="text-gray-600 mb-8 text-lg font-sans">Reach out via:</p>
                <div className="flex justify-center gap-6 flex-wrap">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.43 2.865 8.19 6.839 9.508.5.092.683-.217.683-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.607.069-.607 1.004.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.114-4.555-4.956 0-1.094.39-1.989 1.03-2.689-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.851.004 1.707.115 2.507.337 1.91-1.296 2.748-1.027 2.748-1.027.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.689 0 3.852-2.338 4.7-4.566 4.949.36.311.68.921.68 1.856 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.481A9.525 9.525 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 border-2 border-black text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.445-2.136 2.94v5.665H9.354V9h3.414v1.561h.049c.476-.9 1.636-1.85 3.366-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286z"/>
                      <path d="M5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.997 20.452H3.676V9h3.321v11.452z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="mailto:devam@example.com"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 border-2 border-black text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.511l-8 5.334-8-5.334V6h16ZM4 18V8.489l7.386 4.917a1 1 0 0 0 1.228 0L20 8.489V18H4Z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  )
}

