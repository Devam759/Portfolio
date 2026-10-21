import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export const faqData = [
  {
    question: 'Who is Devam Gupta?',
    answer:
      'Devam Gupta is a Full-Stack Software Engineer and Computer Science undergraduate (B.Tech CSE, 2024–2028) at JK Lakshmipat University (JKLU), Jaipur, with roots in Bikaner, Rajasthan. He specializes in designing, building, and deploying scalable web and mobile applications using React, Next.js, Node.js, Express, MongoDB, and Flutter/Firebase.',
  },
  {
    question: 'What technical skills and programming stacks does Devam Gupta specialize in?',
    answer:
      'Devam specializes in the MERN stack (MongoDB, Express.js, React, Node.js), Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Flutter, Dart, Python, and Firebase. His toolkit also encompasses Docker, Git/GitHub, RESTful API architecture, Webhooks, TFLite (MobileFaceNet on-device biometric inference), and Generative AI workflows.',
  },
  {
    question: 'What featured production projects has Devam Gupta engineered?',
    answer:
      'Devam has engineered several production-grade projects: VISTA (a cross-platform smart hostel attendance and tracking system with MobileFaceNet biometric recognition), Sabrang 2026 (the official national cultural fest web portal with dynamic ticketing and event catalogs), JKLU Sankalp 2027 (flagship cultural portal), StitchUp (a doorstep tailor-on-demand platform on the MERN stack), and Pindi Traders (a commercial wholesale distribution catalog).',
  },
  {
    question: 'What professional work experience does Devam Gupta have?',
    answer:
      'Devam completed a Web Development Internship at Hayagreeva Consulting Private Limited (May 2026 – July 2026), where he engineered and maintained automotive web platforms for Maruti Suzuki Arena and Nexa. Additionally, he has served as the Technical Team Leader for AARAMBH and on the Core Sponsorship Team for HackJKLU v5.0, managing outreach across 500+ corporate prospects.',
  },
  {
    question: 'Where is Devam Gupta located, and is he available for remote roles or relocation?',
    answer:
      'Devam is based in Jaipur and Bikaner, Rajasthan, India (IST / UTC+5:30). He is actively open to software engineering internships, junior developer roles, freelance full-stack contracts, and open-source collaborations worldwide, accommodating both remote and on-site arrangements.',
  },
  {
    question: 'How can recruiters or clients contact or hire Devam Gupta?',
    answer:
      'Recruiters and collaborators can contact Devam via email at devamg759@gmail.com, telephone at +91-7340015201, through the contact form on this website, or connect via LinkedIn (linkedin.com/in/devam-gupta) and GitHub (github.com/Devam759).',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-24 bg-white dark:bg-[#0a0a0c] transition-colors"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="faq-heading"
            className="text-3xl md:text-5xl font-bold font-display tracking-tight text-gray-900 dark:text-white"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mt-4" />
          <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400 font-sans max-w-xl mx-auto">
            Direct, verified answers to common inquiries regarding background, core competencies, production projects, and availability.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index
            const questionId = `faq-question-${index}`
            const answerId = `faq-answer-${index}`

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-[#121216] transition-colors"
              >
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(index)}
                  className="cursor-target w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left font-display font-semibold text-base sm:text-lg text-gray-900 dark:text-white hover:text-black dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
                >
                  <span>{item.question}</span>
                  <FaChevronDown
                    className={`text-xs text-gray-500 dark:text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-sans leading-relaxed border-t border-gray-200/60 dark:border-white/5">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
