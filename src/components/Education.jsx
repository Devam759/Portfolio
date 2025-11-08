import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const education = [
  {
    year: '2020 - 2024',
    degree: 'Bachelor of Technology',
    institution: 'University Name',
    description: 'Computer Science and Engineering',
  },
  {
    year: '2018 - 2020',
    degree: 'Higher Secondary',
    institution: 'School Name',
    description: 'Science Stream',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">Education</h2>
          <div className="w-16 h-0.5 bg-black mx-auto"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500 font-medium mb-2 font-sans">{item.year}</div>
                  <h3 className="text-xl font-semibold mb-2 font-display text-black">{item.degree}</h3>
                  <p className="text-gray-600 font-medium mb-2 font-sans">{item.institution}</p>
                  <p className="text-gray-500 text-sm font-sans">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

