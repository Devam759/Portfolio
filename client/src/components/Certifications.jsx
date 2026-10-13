import React from 'react'
import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'Machine Learning Operations (MLOps) for Generative AI',
    issuer: 'Google',
    date: 'Jun 2025',
  },
  {
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI',
    date: 'Jan 2025',
  },
  {
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    date: 'Jan 2025',
  },
  {
    title: 'Introduction to Git and GitHub',
    issuer: 'Google',
    date: 'Jan 2025',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan',
    date: 'Dec 2024',
  },
]

const honors = [
  {
    title: '4th Place Winner - HACKSTORM 2024',
    event: 'National Hackathon',
    year: '2024',
    description: 'Built and demonstrated a production-ready MERN stack web application among 70+ competing teams.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#0a0a0c] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            Certifications & Honors
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mt-4"></div>
        </motion.div>

        {/* Section 1: Certifications Index */}
        <div className="mb-16">
          <h3 className="text-lg font-bold font-display tracking-tight text-gray-900 dark:text-white mb-4">
            Certifications
          </h3>

          <div className="border-t border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10 font-sans">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-2 -mx-2 gap-2 sm:gap-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 min-w-0">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 sm:w-20 shrink-0 font-sans">
                    {cert.date}
                  </span>
                  <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </span>
                </div>

                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 shrink-0 pl-0 sm:pl-4">
                  {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Honors & Hackathons Index */}
        <div>
          <h3 className="text-lg font-bold font-display tracking-tight text-gray-900 dark:text-white mb-4">
            Honors & Hackathons
          </h3>

          <div className="border-t border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10 font-sans">
            {honors.map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row sm:items-start justify-between py-4 px-2 -mx-2 gap-2 sm:gap-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 min-w-0">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 sm:w-20 shrink-0 font-sans pt-0.5">
                    {item.year}
                  </span>
                  <div>
                    <div className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 shrink-0 pl-0 sm:pl-4 whitespace-nowrap pt-0.5">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
