import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaHome, FaEnvelope, FaCode } from 'react-icons/fa'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found | Devam Gupta'
    return () => {
      document.title = 'Devam Gupta | Full-Stack Developer & Software Engineer'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0a0a0c] dark:text-white flex flex-col justify-between selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Top Header Bar */}
      <header className="p-6 border-b border-gray-200 dark:border-white/10 flex items-center justify-between max-w-6xl mx-auto w-full">
        <Link
          to="/"
          className="text-sm font-bold font-display uppercase tracking-widest text-gray-900 dark:text-white hover:opacity-75 transition-opacity"
        >
          Devam Gupta
        </Link>
        <div className="text-xs font-mono text-gray-500 dark:text-gray-400">
          STATUS // 404_NOT_FOUND
        </div>
      </header>

      {/* Main 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">
              home
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-semibold">404</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Big 404 numeral */}
            <div className="text-8xl sm:text-9xl font-black font-display tracking-tight text-black dark:text-white leading-none mb-4">
              404
            </div>

            <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mb-6"></div>

            <h1 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white mb-3">
              Page Not Found
            </h1>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-sans max-w-md mx-auto mb-10 leading-relaxed">
              The page or slug you requested could not be found on this server. It may have been moved, renamed, or no longer exists.
            </p>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold uppercase tracking-wider rounded-none hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <FaHome className="text-sm" />
                Return Home
              </Link>

              <a
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/20 text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white rounded-none hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <FaCode className="text-sm" />
                View Projects
              </a>

              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/20 text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white rounded-none hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <FaEnvelope className="text-sm" />
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer info */}
      <footer className="p-6 border-t border-gray-200 dark:border-white/10 text-center text-xs text-gray-500 dark:text-gray-400 font-sans">
        &copy; {new Date().getFullYear()} Devam Gupta. All rights reserved.
      </footer>
    </div>
  )
}
