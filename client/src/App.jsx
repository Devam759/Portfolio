import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import CoCurricular from './components/CoCurricular'
import Certifications from './components/Certifications'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TargetCursor from './components/TargetCursor'
import NotFound from './components/NotFound'
import SEO from './components/SEO'

function Home({ targetSection }) {
  const location = useLocation()

  useEffect(() => {
    // If a target section slug was provided, scroll to it smoothly
    const sectionId = targetSection || (location.hash ? location.hash.replace('#', '') : null)
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [targetSection, location])

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0a0a0c] dark:text-white transition-colors selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <TargetCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <CoCurricular />
        <Certifications />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <SEO />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home targetSection="about" />} />
        <Route path="/skills" element={<Home targetSection="skills" />} />
        <Route path="/projects" element={<Home targetSection="projects" />} />
        <Route path="/timeline" element={<Home targetSection="timeline" />} />
        <Route path="/volunteering" element={<Home targetSection="cocurricular" />} />
        <Route path="/cocurricular" element={<Home targetSection="cocurricular" />} />
        <Route path="/certifications" element={<Home targetSection="certifications" />} />
        <Route path="/faq" element={<Home targetSection="faq" />} />
        <Route path="/contact" element={<Home targetSection="contact" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
