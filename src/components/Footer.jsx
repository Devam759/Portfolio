import React from 'react'
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-black py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <p className="text-white text-[11px] font-sans"> Devam Gupta</p>
          <div className="flex items-center gap-3 text-white">
            <a href="https://github.com/Devam759" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-target hover:text-gray-300">
              <SiGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/devam-gupta-929239271/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cursor-target hover:text-gray-300">
              <SiLinkedin size={16} />
            </a>
            <a href="mailto:devamg759@gmail.com" aria-label="Email" className="cursor-target hover:text-gray-300">
              <MdEmail size={16} />
            </a>
            <a href="https://www.instagram.com/who.is.devam/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cursor-target hover:text-gray-300">
              <SiInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

