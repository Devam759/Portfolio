import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Timeline', href: '/#timeline' },
  { name: 'Volunteering', href: '/#cocurricular' },
  { name: 'Certifications', href: '/#certifications' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex flex-col items-center px-4 transition-all">
      <nav
        className={`flex items-center justify-between border rounded-full px-4 py-2 md:px-6 md:py-2.5 transition-all duration-300 gap-2 max-w-5xl ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#121216]/95 backdrop-blur-md border-black/10 dark:border-white/15 shadow-md'
            : 'bg-white/80 dark:bg-[#121216]/80 backdrop-blur-sm border-black/5 dark:border-white/10 shadow-sm'
        }`}
      >
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-sans px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-target whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle (lg:hidden) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            className="p-1.5 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-target"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
          </button>
          <span className="text-xs font-bold uppercase tracking-wider font-sans text-gray-900 dark:text-white">
            Menu
          </span>
        </div>

        {/* Theme Toggle Button */}
        <div className="flex items-center pl-2 border-l border-gray-200 dark:border-white/10 ml-1">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            className="cursor-target p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <FaSun className="text-yellow-400 text-sm" /> : <FaMoon className="text-gray-700 text-sm" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 bg-white/95 dark:bg-[#121216]/95 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-2xl shadow-xl px-6 py-4 w-60 text-center font-sans"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
