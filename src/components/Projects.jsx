import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'VISTA',
    description:
      'A smart hostel attendance management system that digitizes student check-ins, ensuring accuracy, transparency, and ease for both students and wardens.',
    stack: ['React', 'Node.js', 'MySQL', 'Tailwind'],
    image: '/images/projects/VISTA.png',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'StitchUp',
    description:
      'A streamlined platform that connects tailors and customers, enabling effortless clothing customization and order management.',
    stack: ['React', 'Express.js', 'MongoDB', 'Tailwind'],
    image: '/images/projects/StitchUp.png',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: "SABRANG'25",
    description:
      "a vibrant event website crafted with a dynamic and responsive frontend to showcase JKLU's college’s annual cultural fest.",
    stack: ['React', 'API Integration', 'Tailwind'],
    image: '/images/projects/SABRANG.png',
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: "AARAMBH'25",
    description:
      'An engaging and visually appealing frontend developed to represent our college’s freshers’ event with a modern, user-friendly design.',
    stack: ['HTML', 'CSS', 'JS'],
    image: '/images/projects/AARAMBH.png',
    live: '#',
    github: '#',
  },
  {
    id: 5,
    title: "Hacker's Unity",
    description:
      'A self-designed UI project aimed at enhancing the user experience and interface of a hackathon conducting brand.',
    stack: ['React', 'Framer Motion', 'Tailwind'],
    image: '/images/projects/Hackers_Unity.png',
    live: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Anokhi',
    description:
      'a personal frontend project focused on redesigning and modernizing the UI of a cultural fashion brand.',
    stack: ['React', 'Next.js', 'Tailwind'],
    image: '/images/projects/Anokhi.png',
    live: '#',
    github: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">My Projects</h2>
          <div className="w-16 h-0.5 bg-black mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {project.image ? (
                <img src={project.image} alt={`${project.title} project screenshot`} className="h-48 w-full object-cover" />
              ) : (
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200"></div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 font-display text-black">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded-full font-sans">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2 border-t border-gray-100">
                  <a
                    href={project.live || '#'}
                    className="text-sm font-medium text-black hover:text-gray-600 transition-colors font-sans cursor-target"
                    target="_blank" rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                  <a
                    href={project.github || '#'}
                    className="text-sm font-medium text-black hover:text-gray-600 transition-colors font-sans cursor-target"
                    target="_blank" rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

