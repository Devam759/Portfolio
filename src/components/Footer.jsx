import React from 'react'
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-black py-3 md:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Mobile layout: name + phone on the left, icons on the right */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center gap-3">
            <p className="text-white text-[14px] md:text-[16px] font-sans"> Devam Gupta </p>
            <a
              href="tel:+917340015201"
              className="text-white text-[14px] md:text-[16px] font-sans cursor-target"
              aria-label="Copy phone number"
              onClick={(e) => {
                e.preventDefault();
                if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                  navigator.clipboard.writeText('+917340015201');
                }
              }}
              title="Click to copy"
            >
              +91 73400 15201
            </a>
          </div>
          <div className="flex items-center gap-4 text-white">
            <a href="https://github.com/Devam759" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-target hover:text-gray-300">
              <SiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/devam-gupta-929239271/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cursor-target hover:text-gray-300">
              <SiLinkedin size={22} />
            </a>
            <a href="mailto:devamg759@gmail.com" aria-label="Email" className="cursor-target hover:text-gray-300">
              <MdEmail size={22} />
            </a>
            <a href="https://www.instagram.com/who.is.devam/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cursor-target hover:text-gray-300">
              <SiInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Desktop layout: keep centered phone between name and icons */}
        <div className="hidden md:grid grid-cols-3 items-center">
          <p className="text-white text-[14px] md:text-[16px] font-sans"> Devam Gupta </p>
          <div className="text-center">
            <a
              href="tel:+917340015201"
              className="text-white text-[14px] md:text-[16px] font-sans cursor-target"
              aria-label="Copy phone number"
              onClick={(e) => {
                e.preventDefault();
                if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                  navigator.clipboard.writeText('+917340015201');
                }
              }}
              title="Click to copy"
            >
              +91 73400 15201
            </a>
          </div>
          <div className="flex items-center justify-end gap-4 text-white">
            <a href="https://github.com/Devam759" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-target hover:text-gray-300">
              <SiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/devam-gupta-929239271/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cursor-target hover:text-gray-300">
              <SiLinkedin size={22} />
            </a>
            <a href="mailto:devamg759@gmail.com" aria-label="Email" className="cursor-target hover:text-gray-300">
              <MdEmail size={22} />
            </a>
            <a href="https://www.instagram.com/who.is.devam/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cursor-target hover:text-gray-300">
              <SiInstagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

