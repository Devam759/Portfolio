import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { ASSETS } from '../constants/assets'

const projects = [
  {
    id: 1,
    title: 'VISTA',
    category: 'Full Stack',
    description:
      'Cross-platform smart hostel tracking & attendance platform at JKLU with role-based access for Students and Wardens, featuring facial recognition attendance via MobileFaceNet and leave management.',
    stack: ['Flutter', 'React', 'Firebase', 'TFLite', 'Node.js'],
    image: ASSETS.projects.vista,
    live: 'https://vista-jklu.web.app',
    github: 'https://github.com/Devam759/VISTA-APP',
  },
  {
    id: 2,
    title: 'Sabrang 2026',
    category: 'Full Stack',
    description:
      'Official modern festival web platform for Sabrang 2026 at JKLU, featuring high-performance responsive UI, event catalog, dynamic registrations, and ticketing.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: ASSETS.projects.sabrang26,
    live: 'https://sabrang-26.vercel.app',
    github: 'https://github.com/Devam759/Sabrang-26',
  },
  {
    id: 3,
    title: 'JKLU Sankalp 2027',
    category: 'Full Stack',
    description:
      'Flagship social and cultural web portal engineered for JKLU Sankalp, featuring program showcases, community outreach, and dynamic interactive modules.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    image: ASSETS.projects.jkluSankalp,
    live: 'https://sankalp-27.vercel.app',
    github: 'https://github.com/Devam759/sankalp-27',
  },
  {
    id: 4,
    title: 'StitchUp',
    category: 'Full Stack',
    description:
      'Doorstep tailor-on-demand platform connecting clients with local tailors, featuring real-time booking, automated measurement tracking, and live delivery status updates.',
    stack: ['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind'],
    image: ASSETS.projects.stitchup,
    live: 'https://stitchup-1af69.web.app',
    github: 'https://github.com/Devam759/StitchUp-Firebase',
  },
  {
    id: 5,
    title: 'Pindi Traders',
    category: 'Frontend',
    description:
      'Commercial wholesale and distribution catalog website featuring responsive product showcases, inquiry generation, and clean brand storytelling.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    image: ASSETS.projects.pindiTraders,
    live: 'https://pindi-traders.vercel.app',
    github: 'https://github.com/Devam759/Pindi-Traders',
  },
  {
    id: 6,
    title: 'AARAMBH 2026',
    category: 'Full Stack',
    description:
      'Comprehensive web portal for the university orientation program, coordinating digital schedules, incoming student onboarding, and interactive modules.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    image: ASSETS.projects.aarambh26,
    live: 'https://aarambh-26.web.app',
    github: 'https://github.com/Devam759/aarambh-26',
  },
  {
    id: 7,
    title: 'JKLU Got Latent',
    category: 'Frontend',
    description:
      'Interactive talent competition voting and scoring web platform with real-time judge scoring, dynamic contestant showcases, and responsive leaderboard.',
    stack: ['JavaScript', 'React', 'Tailwind', 'Vercel'],
    image: ASSETS.projects.jkluGotLatent,
    live: 'https://jklu-got-latent.vercel.app',
    github: 'https://github.com/Devam759/JKLU-GOT-LATENT',
  },
  {
    id: 8,
    title: 'Anokhi',
    category: 'UI/UX',
    description:
      'Personal frontend design project focused on redesigning and modernizing the digital e-commerce UI of a cultural fashion brand.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    image: ASSETS.projects.anokhi,
    live: 'https://anokhi.vercel.app/',
    github: 'https://github.com/Devam759/Anokhi',
  },
  {
    id: 9,
    title: 'Browser Vigilant',
    category: 'Full Stack',
    description:
      'Web-based proctoring and browser integrity monitor designed to detect tab switching, multi-display anomalies, and focus violations during online assessments.',
    stack: ['JavaScript', 'React', 'Tailwind', 'Web APIs'],
    live: 'https://browser-vigilant.vercel.app',
    github: 'https://github.com/Devam759/Browser-Vigilant',
  },
  {
    id: 10,
    title: 'All About Ramayana',
    category: 'Frontend',
    description:
      'Interactive digital storytelling and educational platform exploring the epic Ramayana with thematic visual narratives, character guides, and audio elements.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Firebase'],
    image: ASSETS.projects.allAboutRamayana,
    live: 'http://all-about-ramayana.web.app',
    github: 'https://github.com/Devam759/All-About-Ramayana',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-white dark:bg-[#0a0a0c] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display text-gray-900 dark:text-white tracking-tight">
            Projects Showcase
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans text-sm md:text-base">
            Featured full-stack web applications and user interfaces with live deployments and open source code.
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white dark:bg-[#121216] rounded-none shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-white/10 flex flex-col justify-between"
            >
              <div>
                {project.image ? (
                  <div className="relative w-full aspect-[16/9] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} Project Showcase by Devam Gupta`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 dark:from-neutral-900 dark:via-[#15151a] dark:to-neutral-900 flex items-center justify-center p-6 text-center">
                    <div>
                      <span className="text-xs font-mono font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase">
                        {project.category}
                      </span>
                      <h4 className="text-lg font-bold font-display text-gray-800 dark:text-gray-200 mt-1">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-display text-gray-900 dark:text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-xs font-semibold text-gray-800 dark:text-gray-200 rounded-none font-sans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs font-bold font-sans">
                <a
                  href={project.github}
                  className="cursor-target inline-flex items-center gap-1.5 text-gray-900 dark:text-gray-200 hover:text-gray-500 dark:hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-sm" />
                  GITHUB REPO
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    className="cursor-target inline-flex items-center gap-1.5 text-gray-900 dark:text-gray-200 hover:text-gray-500 dark:hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    LIVE DEMO
                  </a>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500 text-[11px] font-medium tracking-wide">
                    REPOSITORY ONLY
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
