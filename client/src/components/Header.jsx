import React, { useState, useEffect, useRef } from 'react'
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

const menuContainerVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.035,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: {
      duration: 0.16,
      ease: 'easeIn',
    },
  },
}

const menuItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 420,
      damping: 30,
    },
  },
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)

      // Hide mobile navbar on scroll down, instantly restore on scroll up
      if (currentScrollY > 60) {
        if (currentScrollY > lastScrollY.current + 6) {
          // Scrolling DOWN
          setIsVisible(false)
          setMobileMenuOpen(false)
        } else if (currentScrollY < lastScrollY.current - 4) {
          // Scrolling UP
          setIsVisible(true)
        }
      } else {
        // Near top of page, always show
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY

      const scrollPosition = currentScrollY + 120
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
      {/* Mobile Navigation Container (lg:hidden) with hide/reveal on scroll */}
      <div
        className={`w-full max-w-sm sm:max-w-md flex flex-col items-start lg:hidden transition-all duration-300 ease-out ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        {/* Top Floating Row: Menu piece on left, Theme toggle piece on right */}
        <div className="w-full flex items-center justify-between">
          {/* Left Piece: Menu Pill (42px height touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex items-center gap-2 border rounded-full px-4 py-2.5 min-h-[42px] text-xs font-bold uppercase tracking-wider font-sans transition-all duration-300 cursor-target ${
              isScrolled
                ? 'bg-white/95 dark:bg-[#121216]/95 backdrop-blur-md border-black/10 dark:border-white/15 shadow-md text-gray-900 dark:text-white'
                : 'bg-white/80 dark:bg-[#121216]/80 backdrop-blur-sm border-black/5 dark:border-white/10 shadow-sm text-gray-800 dark:text-gray-200'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
            <span>Menu</span>
          </button>

          {/* Right Piece: Theme Toggle Pill (42px x 42px touch target) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            className={`w-[42px] h-[42px] border rounded-full transition-all duration-300 cursor-target flex items-center justify-center ${
              isScrolled
                ? 'bg-white/95 dark:bg-[#121216]/95 backdrop-blur-md border-black/10 dark:border-white/15 shadow-md'
                : 'bg-white/80 dark:bg-[#121216]/80 backdrop-blur-sm border-black/5 dark:border-white/10 shadow-sm'
            }`}
          >
            {theme === 'dark' ? <FaSun className="text-yellow-400 text-sm" /> : <FaMoon className="text-gray-700 text-sm" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu: Compact width, aligned under Menu button */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-2 bg-white/95 dark:bg-[#121216]/95 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-2xl shadow-xl p-1.5 w-52 font-sans overflow-hidden"
            >
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={menuItemVariants}
                    whileTap={{ scale: 0.98 }}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`w-full py-2.5 px-3.5 min-h-[40px] text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-between cursor-target ${
                      activeSection === link.id
                        ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Navigation: Unified Pill Bar (hidden on mobile, lg:flex) */}
      <nav
        className={`hidden lg:flex items-center justify-between border rounded-full px-6 py-2.5 transition-all duration-300 max-w-5xl ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#121216]/95 backdrop-blur-md border-black/10 dark:border-white/15 shadow-md'
            : 'bg-white/80 dark:bg-[#121216]/80 backdrop-blur-sm border-black/5 dark:border-white/10 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-1">
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

        {/* Theme Toggle Button for Desktop */}
        <div className="flex items-center pl-3 border-l border-gray-200 dark:border-white/10 ml-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            className="cursor-target p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            {theme === 'dark' ? <FaSun className="text-yellow-400 text-sm" /> : <FaMoon className="text-gray-700 text-sm" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
