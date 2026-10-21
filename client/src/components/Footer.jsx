import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaArrowUp, FaCheck } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Volunteering', href: '#cocurricular' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { href: 'https://github.com/Devam759', icon: FaGithub, label: 'GitHub', username: '@Devam759' },
  { href: 'https://www.linkedin.com/in/devam-gupta', icon: FaLinkedin, label: 'LinkedIn', username: 'Devam Gupta' },
  { href: 'mailto:devamg759@gmail.com', icon: FaEnvelope, label: 'Email', username: 'devamg759@gmail.com' },
  { href: 'https://www.instagram.com/who.is.devam/', icon: FaInstagram, label: 'Instagram', username: '@who.is.devam' },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopyPhone = (e) => {
    e.preventDefault()
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText('+917340015201')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white dark:bg-[#070709] border-t border-neutral-900 dark:border-white/10 pt-16 pb-12 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Top Callout & Status */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b border-neutral-800 dark:border-white/10">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono block mb-2 font-sans">
              Get In Touch
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white">
              Let's build something exceptional together.
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:devamg759@gmail.com"
              className="cursor-target inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-colors font-sans"
            >
              <FaEnvelope className="text-xs" />
              <span>Say Hello</span>
            </a>

            <button
              onClick={scrollToTop}
              className="cursor-target p-2.5 rounded-full border border-neutral-800 dark:border-white/20 text-neutral-400 hover:text-white hover:border-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Structured Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          {/* Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xl font-bold font-display text-white">
              Devam Gupta
            </h4>
            <p className="text-sm text-neutral-400 font-sans leading-relaxed max-w-sm">
              Full-Stack Developer & Computer Science undergraduate at JK Lakshmipat University, Jaipur. Building production-grade web applications with modern architecture.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400 font-sans">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Based in Jaipur & Bikaner, India • Open for Opportunities</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="cursor-target text-neutral-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles & Contact */}
          <div className="md:col-span-4 space-y-4 font-sans">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
              Connect & Reach
            </div>

            <div className="space-y-2.5 text-sm">
              {socialLinks.map(({ href, icon: Icon, label, username }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="cursor-target flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors group"
                >
                  <Icon className="text-base text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="font-medium">{label}</span>
                  <span className="text-xs text-neutral-400 ml-auto font-mono">{username}</span>
                </a>
              ))}
            </div>

            {/* Click-to-Copy Phone */}
            <div className="pt-2">
              <button
                onClick={handleCopyPhone}
                className="cursor-target w-full flex items-center justify-between p-3 rounded-xl border border-neutral-800 dark:border-white/10 hover:border-neutral-600 bg-neutral-900/50 text-left transition-colors group"
                title="Click to copy phone number"
              >
                <div className="flex items-center gap-2.5 text-xs">
                  <FaPhoneAlt className="text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="text-neutral-300 font-mono">+91 73400 15201</span>
                </div>
                <span className="text-[11px] font-semibold text-neutral-400 group-hover:text-white transition-colors flex items-center gap-1">
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-400 text-xs" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    'Copy'
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 border-t border-neutral-900 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-sans">
          <p>
            © {new Date().getFullYear()} Devam Gupta. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            <span>Built with React, Node.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
