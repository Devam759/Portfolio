import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Timeline', id: 'timeline' },
  { name: 'Volunteering', id: 'cocurricular' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const scrollPosition = window.scrollY + 120
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id)
        if (section) {
          const top = section.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.pushState(null, '', '/')
      setActiveSection('home')
      return
    }

    const element = document.getElementById(targetId)
    if (element) {
      const navOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      window.history.pushState(null, '', `#${targetId}`)
      setActiveSection(targetId)
    } else {
      window.location.href = `/#${targetId}`
    }
  }

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex flex-col items-center px-4 transition-all">
      <nav
        className={`flex items-center justify-between border rounded-full px-4 py-2 md:px-6 md:py-2.5 transition-all duration-300 gap-2 max-w-5xl ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#121216]/95 backdrop-blur-md border-black/10 dark:border-white/15 shadow-md'
            : 'bg-white/80 dark:bg-[#121216]/80 backdrop-blur-sm border-black/5 dark:border-white/10 shadow-sm'
        }`}
      >
        {/* Desktop Navigation Links with Smooth Animated Scroll */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-xs font-semibold uppercase tracking-wider transition-all font-sans px-3 py-1.5 rounded-full cursor-target whitespace-nowrap ${
                activeSection === link.id
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
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
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`block py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeSection === link.id
                    ? 'text-black dark:text-white font-extrabold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                }`}
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
