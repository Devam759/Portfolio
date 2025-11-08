import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import LogoLoop from './LogoLoop'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiC,
  SiVite,
  SiReact,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const techLogos = [
  { node: <SiHtml5 />, title: 'HTML5', href: 'https://developer.mozilla.org/docs/Web/HTML' },
  { node: <SiCss3 />, title: 'CSS3', href: 'https://developer.mozilla.org/docs/Web/CSS' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiC />, title: 'C', href: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  { node: <SiVite />, title: 'Vite', href: 'https://vitejs.dev' },
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com' },
  { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org' },
  { node: <SiExpress />, title: 'Express', href: 'https://expressjs.com' },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tech-stack" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">Tech Stack</h2>
          <div className="w-16 h-0.5 bg-black mx-auto"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <LogoLoop
            className="py-4"
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  )
}

