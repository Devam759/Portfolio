import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LogoLoop from './LogoLoop'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiNetlify,
  SiLinux,
  SiMysql,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: 'React.js', href: 'https://react.dev' },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiNodedotjs className="text-[#339933]" />, title: 'Node.js', href: 'https://nodejs.org' },
  { node: <SiExpress className="text-black dark:text-white" />, title: 'Express.js', href: 'https://expressjs.com' },
  { node: <SiMongodb className="text-[#47A248]" />, title: 'MongoDB', href: 'https://www.mongodb.com' },
  { node: <SiFlutter className="text-[#02569B]" />, title: 'Flutter', href: 'https://flutter.dev' },
  { node: <SiFirebase className="text-[#FFCA28]" />, title: 'Firebase', href: 'https://firebase.google.com' },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: 'JavaScript', href: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { node: <SiPython className="text-[#3776AB]" />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiDart className="text-[#0175C2]" />, title: 'Dart', href: 'https://dart.dev' },
  { node: <SiDocker className="text-[#2496ED]" />, title: 'Docker', href: 'https://www.docker.com' },
  { node: <SiGit className="text-[#F05032]" />, title: 'Git', href: 'https://git-scm.com' },
  { node: <SiNetlify className="text-[#00C7B7]" />, title: 'Netlify', href: 'https://www.netlify.com' },
  { node: <SiLinux className="text-[#FCC624]" />, title: 'Linux', href: 'https://www.kernel.org' },
]

const skillCategories = [
  {
    category: 'Languages & Core',
    skills: [
      { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
      { name: 'Dart', icon: <SiDart className="text-[#0175C2]" /> },
      { name: 'HTML5 & CSS3', icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: 'SQL', icon: <SiMysql className="text-[#4479A1]" /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'Node.js & Express', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-[#0055FF]" /> },
    ],
  },
  {
    category: 'Platforms & Tools',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: 'Git & GitHub', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
      { name: 'Netlify & Vercel', icon: <SiNetlify className="text-[#00C7B7]" /> },
      { name: 'Linux & VS Code', icon: <SiLinux className="text-[#FCC624]" /> },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...skillCategories.map((c) => c.category)]

  const displayedGroups =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory)

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#0f0f13] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mt-4"></div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-sans max-w-2xl mx-auto mt-4">
            Core programming languages, frameworks, databases, and developer tools used across my projects.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-target px-4 py-2 rounded-none text-xs font-semibold tracking-wide transition-colors font-sans border ${
                activeCategory === cat
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
                  : 'bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid with Clean Tech Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayedGroups.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#121216] p-6 sm:p-7 rounded-none border border-gray-200 dark:border-white/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white tracking-tight mb-5">
                  {group.category}
                </h3>

                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="cursor-target flex items-center gap-3.5 px-3.5 py-3 rounded-none bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 hover:border-black dark:hover:border-white transition-all group"
                    >
                      <div className="text-xl shrink-0 transition-transform duration-200 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white font-sans">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Logo Marquee */}
        <div className="pt-8 border-t border-black/5 dark:border-white/10">
          <LogoLoop logos={techLogos} />
        </div>
      </div>
    </section>
  )
}
