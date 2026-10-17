import React from 'react'
import { motion } from 'framer-motion'

const timelineItems = [
  {
    period: 'May 2026 - Jul 2026',
    title: 'Web Development Intern',
    organization: 'Hayagreeva Consulting Private Limited',
    category: 'Internship',
    description:
      'Engineered and maintained production web platforms for Maruti Suzuki Arena and Nexa. Delivered responsive frontend interfaces, performed site maintenance, and contributed proactively across web development workflows.',
    brandLogos: [
      { name: 'Hayagreeva Consulting', image: '/logos/hayagreeva.png' },
      { name: 'Maruti Suzuki', image: '/logos/maruti.png' },
    ],
  },
  {
    period: 'Jul 2024 - May 2028',
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'JK Lakshmipat University, Jaipur, Rajasthan',
    category: 'Education',
    description:
      'Undergraduate program covering Data Structures, Web Architectures, Database Systems, Object-Oriented Design, and Machine Learning workflows.',
    brandLogos: [
      {
        name: 'JK Lakshmipat University',
        image: '/logos/jklu.jpg',
        darkImage: '/logos/jklu-darkbg.png',
      },
    ],
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white dark:bg-[#0a0a0c] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mt-4"></div>
        </motion.div>

        {/* Minimalist Vertical Timeline */}
        <div className="relative border-l border-black/10 dark:border-white/15 ml-4 md:ml-12 space-y-10">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-8 md:pl-10"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-black dark:bg-white" />

              <div className="bg-gray-50/80 dark:bg-[#121216] p-6 sm:p-8 rounded-none border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white transition-all">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 items-start">
                  {/* Big Brand Logos */}
                  {item.brandLogos && item.brandLogos.length > 0 && (
                    <div className="flex items-center gap-3 shrink-0">
                      {item.brandLogos.map((brand, bIdx) => (
                        <div
                          key={bIdx}
                          title={brand.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shrink-0 p-1 transition-transform hover:scale-105"
                        >
                          {brand.darkImage ? (
                            <>
                              <img
                                src={brand.image}
                                alt={`${brand.name} official brand logo`}
                                className="w-full h-full object-contain dark:hidden"
                              />
                              <img
                                src={brand.darkImage}
                                alt={`${brand.name} official brand logo`}
                                className="w-full h-full object-contain hidden dark:block"
                              />
                            </>
                          ) : (
                            <img
                              src={brand.image}
                              alt={`${brand.name} official brand logo`}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Content Details */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold font-sans text-gray-600 dark:text-gray-400 mb-2 tracking-normal">
                      {item.period}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>
                    <div className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 mb-3.5 font-sans">
                      {item.organization}
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
