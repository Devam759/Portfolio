import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat transition-colors"
      style={{ backgroundImage: "url('/images/bg-about2.webp')" }}
    >
      {/* Subtle overlay for consistent text contrast in light & dark modes */}
      <div className="absolute inset-0 bg-white/85 dark:bg-[#0a0a0c]/90 backdrop-blur-[2px] transition-colors" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center space-y-6 text-gray-800 dark:text-gray-200 font-sans leading-relaxed text-base md:text-lg"
        >
          <p>
            I am Devam Gupta, a Full-Stack Developer and Computer Science undergraduate at JK Lakshmipat University, Jaipur, with roots in Bikaner, Rajasthan.
          </p>
          <p>
            I have hands-on experience across React.js, Next.js, Node.js, and Flutter/Firebase. I have a proven track record leading technical and sponsorship operations for university-scale initiatives, engineering production-grade web platforms, and applying Generative AI tools to real-world software workflows.
          </p>
          <p>
            From developing enterprise automotive web modules during my internship at Hayagreeva Consulting to architecting campus systems like VISTA and fest platforms like Sabrang and AARAMBH, I prioritize clean architecture, performant interfaces, and reliable code.
          </p>

          <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap justify-center gap-8 text-sm font-sans">
            <div>
              <span className="text-gray-500 dark:text-gray-400 font-medium mr-2">Location:</span>
              <span className="font-semibold text-gray-900 dark:text-white">Jaipur / Bikaner, Rajasthan, India</span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 font-medium mr-2">Degree:</span>
              <span className="font-semibold text-gray-900 dark:text-white">B.Tech CSE (2024 - 2028)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
