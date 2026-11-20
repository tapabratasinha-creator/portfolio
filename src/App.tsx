import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Timeline from './components/Timeline'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import ScrollReveal from './components/ScrollReveal'
import LiveDottedBackground from './components/LiveDottedBackground'

function HomePage({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Skills /></ScrollReveal>
        <ScrollReveal><Timeline /></ScrollReveal>
        <ScrollReveal><Achievements /></ScrollReveal>
        <ScrollReveal><Blog /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Global Live Dotted Background */}
      <LiveDottedBackground />

      <Routes>
        <Route path="/" element={<HomePage theme={theme} setTheme={setTheme} />} />
        <Route path="/project/:id" element={<ProjectDetail theme={theme} setTheme={setTheme} />} />
        {/* Fallback route so any unmatched URL on GitHub Pages renders HomePage */}
        <Route path="*" element={<HomePage theme={theme} setTheme={setTheme} />} />
      </Routes>
    </div>
  )
}
