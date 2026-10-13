import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'VISTA',
    category: 'Full Stack',
    description:
      'Cross-platform smart hostel tracking & attendance platform at JKLU with role-based access for Students and Wardens, featuring facial recognition attendance via MobileFaceNet and leave management.',
    stack: ['React', 'Node.js', 'Flutter', 'Firebase', 'TFLite'],
    image: '/images/projects/VISTA.webp',
    live: 'https://vista-jklu.web.app',
    github: 'https://github.com/Devam759/VISTA.git',
  },
  {
    id: 2,
    title: 'StitchUp',
    category: 'Full Stack',
    description:
      'Doorstep tailor-on-demand platform connecting clients with local tailors, featuring real-time booking, automated measurement tracking, and live delivery status updates.',
    stack: ['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind'],
    image: '/images/projects/StitchUp.webp',
    live: 'https://stitchup-1af69.web.app',
    github: 'https://github.com/ParthDhoot27/stichUP.git',
  },
  {
    id: 3,
    title: "SABRANG'25",
    category: 'Full Stack',
    description:
      "Official festival website for JKLU's annual national fest featuring dynamic event schedules, attendee registrations, responsive UI, and high-performance asset delivery.",
    stack: ['Next.js', 'React', 'Tailwind', 'JavaScript'],
    image: '/images/projects/SABRANG.webp',
    live: 'https://sabrang.jklu.edu.in',
    github: 'https://github.com/suryaansh001/Sabrang25First_Draft.git',
  },
  {
    id: 4,
    title: "AARAMBH'25",
    category: 'Full Stack',
    description:
      "Official web platform for JKLU's university orientation program, coordinating digital schedules, incoming student onboarding, and interactive modules.",
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: '/images/projects/AARAMBH.webp',
    live: 'https://aarambh-demo.vercel.app/',
    github: 'https://github.com/aman67032/aarambh_demo.git',
  },
  {
    id: 5,
    title: "Hacker's Unity",
    category: 'UI/UX',
    description:
      'A self-designed UI project aimed at enhancing the user experience and interface of a hackathon conducting brand.',
    stack: ['React', 'Framer Motion', 'Tailwind'],
    image: '/images/projects/Hackers_Unity.webp',
    live: 'https://hackers-unity.vercel.app/',
    github: 'https://github.com/Devam759/Hackers-Unity.git',
  },
  {
    id: 6,
    title: 'Anokhi',
    category: 'UI/UX',
    description:
      'A personal frontend project focused on redesigning and modernizing the UI of a cultural fashion brand.',
    stack: ['React', 'Next.js', 'Tailwind'],
    image: '/images/projects/Anokhi.webp',
    live: 'https://anokhi.vercel.app/',
    github: 'https://github.com/Devam759/Anokhi.git',
  },
]

const filterTabs = ['All', 'Full Stack']

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All')

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab)

  return (
    <section id="projects" className="py-20 md:py-24 bg-white dark:bg-[#0a0a0c] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display text-gray-900 dark:text-white tracking-tight">
            Projects Showcase
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans text-sm md:text-base">
            Featured full-stack web applications and user interfaces with live deployments and open source code.
          </p>
        </motion.div>

        {/* Filter / Sort Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-target px-5 py-2 rounded-none text-xs md:text-sm font-semibold transition-all font-sans border ${
                activeTab === tab
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
                  : 'bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white dark:bg-[#121216] rounded-none shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white flex flex-col justify-between"
            >
              <div>
                {project.image ? (
                  <div className="relative w-full bg-neutral-100 dark:bg-neutral-900 border-b border-gray-200 dark:border-white/10">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} Project Showcase by Devam Gupta`}
                      className="w-full h-auto block object-contain transition-opacity duration-200"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[2/1] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10" />
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
                <a
                  href={project.live}
                  className="cursor-target inline-flex items-center gap-1.5 text-gray-900 dark:text-gray-200 hover:text-gray-500 dark:hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  LIVE DEMO
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
