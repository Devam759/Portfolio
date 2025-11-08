import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import TargetCursor from './components/TargetCursor'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <TargetCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}

export default App

