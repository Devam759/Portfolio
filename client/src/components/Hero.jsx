import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFilePdf, FaFileWord, FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import TextType from './TextType'

export default function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDownloadOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleDownload = (format) => {
    const apiBase = import.meta.env.VITE_API_BASE_URL || ''
    window.open(`${apiBase}/api/resume/${format}`, '_blank')
    setDownloadOpen(false)
  }

  return (
    <section 
      id="home" 
      className="relative w-full mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0c] transition-colors"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Photo Section (Left on Desktop) - Architectural Asymmetric Offset Frame */}
        <motion.div
          className="md:col-span-5 flex justify-center order-1"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="relative w-72 sm:w-84 md:w-96 lg:w-[410px] group cursor-target">
            {/* Offset Architectural Wireframe */}
            <div 
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[64px_20px_64px_20px] border-2 border-black dark:border-white transition-transform duration-300 ease-out group-hover:translate-x-2.5 group-hover:translate-y-2.5 pointer-events-none -z-0"
              aria-hidden
            />
            
            {/* Main Picture Frame */}
            <div className="relative z-10 w-full overflow-hidden rounded-[64px_20px_64px_20px] bg-gray-100 dark:bg-[#141418] border border-black/10 dark:border-white/10 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
              <img 
                src="/images/profile.webp" 
                alt="Devam Gupta - Full Stack Developer and Software Engineer Portrait" 
                className="w-full h-auto object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105" 
              />
            </div>
          </div>
        </motion.div>

        {/* Text Section (Right on Desktop) */}
        <motion.div
          className="md:col-span-7 text-center md:text-left order-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium mb-3 font-sans">
            Hello There!
          </p>
          
          {/* Main Title with Typewriter */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-5">
            <TextType
              text="I'm Devam Gupta"
              as="span"
              className="text-black dark:text-white"
              typingSpeed={90}
              initialDelay={400}
              cursorCharacter="|"
              style={{ fontFamily: "'Momo Trust Display', cursive, sans-serif" }}
            />
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 mb-8 font-sans leading-relaxed">
            Full-Stack Developer & Computer Science undergraduate at JKLU. Building production-grade web applications across React, Next.js, Node.js, and cloud workflows.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 relative z-20">
            {/* Download CV Split Button / Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDownloadOpen(!downloadOpen)}
                className="cursor-target inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors shadow-sm"
              >
                <span>Download CV</span>
                <FaChevronDown className={`text-xs transition-transform duration-200 ${downloadOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {downloadOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 left-0 w-44 bg-white dark:bg-[#121216] border border-black/10 dark:border-white/10 rounded-xl shadow-lg p-1.5 z-30 font-sans"
                  >
                    <button
                      onClick={() => handleDownload('pdf')}
                      className="cursor-target w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors text-left"
                    >
                      <FaFilePdf className="text-red-500 text-sm" />
                      <span>PDF Format</span>
                    </button>
                    <button
                      onClick={() => handleDownload('docx')}
                      className="cursor-target w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors text-left"
                    >
                      <FaFileWord className="text-blue-500 text-sm" />
                      <span>Word (.docx)</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="cursor-target inline-flex items-center bg-transparent text-black dark:text-white border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/Devam759"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="cursor-target text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/devam-gupta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="cursor-target text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:devamg759@gmail.com"
              aria-label="Send Email"
              className="cursor-target text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}