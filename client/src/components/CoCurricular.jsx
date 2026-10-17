import React from 'react'
import { motion } from 'framer-motion'
import { ASSETS } from '../constants/assets'

const coCurricularItems = [
  {
    period: '2026 - 2027',
    role: 'Website Development Team - Leader',
    organization: 'JKLU Sankalp 2027 - Flagship Social & Cultural Initiative',
    category: 'Technical Leadership',
    description:
      'Spearheading the architecture, frontend engineering, and deployment of the official JKLU Sankalp web portal, directing full-stack development, database architecture, and team workflows.',
    brandLogos: [
      {
        name: 'JKLU Sankalp',
        image: ASSETS.logos.sankalpLogo,
        darkImage: ASSETS.logos.sankalpLogoDarkbg,
      },
      { name: 'JKLU', image: ASSETS.logos.jklu, darkImage: ASSETS.logos.jkluDarkbg },
    ],
  },
  {
    period: '2026',
    role: 'Tech & Support - Core',
    organization: 'Sabrang 2026 - Annual University Cultural Fest',
    category: 'Technical Operations',
    description:
      'Served as a core member of the Technical & Support committee, overseeing portal reliability, on-ground digital infrastructure, and coordination across major festival events.',
    brandLogos: [
      { name: 'Sabrang 2026', image: ASSETS.logos.sabrang25 },
      { name: 'JKLU', image: ASSETS.logos.jklu, darkImage: ASSETS.logos.jkluDarkbg },
    ],
  },
  {
    period: '2025',
    role: 'Core Team - Sponsorships',
    organization: "HackJKLU v5.0 (JKLU's National-Level Flagship Hackathon)",
    category: 'Hackathon Operations',
    description:
      "Led sponsorship outreach and corporate partnership operations for the university's flagship national hackathon. Built and maintained a structured outreach database of 500+ prospective sponsors across 24 sectors and prepared analytical partnership progress reports.",
    brandLogos: [
      { name: 'HackJKLU v5.0', image: ASSETS.logos.hackjkluv5 },
      { name: 'JKLU', image: ASSETS.logos.jklu, darkImage: ASSETS.logos.jkluDarkbg },
    ],
  },
  {
    period: 'May 2025 - Jul 2025',
    role: 'Tech Team Leader',
    organization: 'AARAMBH 2025 - JKLU Orientation Program',
    category: 'Technical Leadership',
    description:
      "Headed the technical development team responsible for engineering, testing, and deploying the university's official orientation web platform, collaborating across committees for seamless student onboarding.",
    brandLogos: [
      { name: 'AARAMBH 2025', image: ASSETS.logos.aarambh25 },
      { name: 'JKLU', image: ASSETS.logos.jklu, darkImage: ASSETS.logos.jkluDarkbg },
    ],
  },
  {
    period: '2025',
    role: 'Web Development & Digital Operations',
    organization: 'Sabrang 2025 - Annual University Cultural Fest',
    category: 'Web Architecture',
    description:
      'Engineered and maintained the official festival portal (sabrang.jklu.edu.in) with responsive user interfaces, real-time schedule tracking, and dynamic registration workflows.',
    brandLogos: [
      { name: 'Sabrang 2025', image: ASSETS.logos.sabrang25 },
      { name: 'JKLU', image: ASSETS.logos.jklu, darkImage: ASSETS.logos.jkluDarkbg },
    ],
  },
  {
    period: 'Nov 2025',
    role: 'Technical Operations Volunteer',
    organization: 'NASSCOM Technology Confluence',
    category: 'Industry Confluence',
    description:
      'Supported on-ground technical infrastructure management, networking operations, and coordination for the national-level NASSCOM Technology Confluence at JKLU.',
    brandLogos: [
      { name: 'NASSCOM', image: ASSETS.logos.nasscom },
      { name: 'JKLU', image: ASSETS.logos.jklu, darkImage: ASSETS.logos.jkluDarkbg },
    ],
  },
  {
    period: 'Mar 2025 - May 2025',
    role: 'Education Volunteer & Mentor',
    organization: 'MuskaanShaala Initiative (Student-Led NGO)',
    category: 'Community Service',
    description:
      'Volunteered as a community instructor supporting weekend learning sessions for underprivileged students, teaching foundational digital literacy and mathematics fundamentals.',
    brandLogos: [
      { name: 'JKLU', image: ASSETS.logos.jklu, darkImage: ASSETS.logos.jkluDarkbg },
    ],
  },
]

export default function CoCurricular() {
  return (
    <section id="cocurricular" className="py-24 bg-white dark:bg-[#0a0a0c] transition-colors border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white">
            Co-Curricular & Volunteering
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mt-4"></div>
        </motion.div>

        {/* Stacked Cards Layout Matching Timeline */}
        <div className="space-y-6">
          {coCurricularItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-gray-50/80 dark:bg-[#121216] p-6 sm:p-8 rounded-none border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white transition-all"
            >
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
                              alt={`${brand.name} official emblem logo`}
                              className="w-full h-full object-contain dark:hidden"
                            />
                            <img
                              src={brand.darkImage}
                              alt={`${brand.name} official emblem logo`}
                              className="w-full h-full object-contain hidden dark:block"
                            />
                          </>
                        ) : (
                          <img
                            src={brand.image}
                            alt={`${brand.name} official emblem logo`}
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
                    {item.role}
                  </h3>
                  <div className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 mb-3.5 font-sans">
                    {item.organization}
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
