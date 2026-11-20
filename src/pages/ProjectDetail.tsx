import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ChevronRight } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProjectDetail({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Space Grotesk', color: 'var(--color-text)' }}>Project not found</h1>
          <Link to="/" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
            <ArrowLeft size={16} /> Back Home
          </Link>
        </div>
      </div>
    )
  }

  const sections = [
    { label: 'The Problem', content: project.problem },
    { label: 'Concept & Solution', content: project.solution },
    { label: 'My Contribution', content: project.contribution },
    { label: 'Challenges', content: project.challenges },
    { label: 'Implementation', content: project.implementation },
  ]

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: '7rem' }}>
        <div className="container-main" style={{ paddingBottom: '6rem' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
            <Link to="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '0.75rem' }}>
              Home
            </Link>
            <ChevronRight size={12} style={{ color: 'var(--color-text-muted)' }} />
            <Link to="/#projects" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '0.75rem' }}>
              Projects
            </Link>
            <ChevronRight size={12} style={{ color: 'var(--color-text-muted)' }} />
            <span style={{ color: 'var(--color-teal)', fontFamily: 'JetBrains Mono', fontSize: '0.75rem' }}>{project.title}</span>
          </div>

          {/* Header */}
          <div style={{
            padding: '3rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '20px',
            marginBottom: '2rem',
          }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--color-teal)', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              {project.category}
            </div>
            <h1 style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: 'var(--color-text)',
              marginBottom: '0.75rem',
            }}>
              {project.title}
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2rem' }}>
              {project.tagline}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {project.tech.map(t => <span key={t} className="skill-tag">{t}</span>)}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <GithubIcon size={15} /> GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <ArrowUpRight size={15} /> Live Demo
                </a>
              )}
              <Link to="/" className="btn-secondary" style={{ marginLeft: 'auto' }}>
                <ArrowLeft size={15} /> Back
              </Link>
            </div>
          </div>

          {/* Case study sections */}
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {sections.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                }}
              >
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--color-teal)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {String(i + 1).padStart(2, '0')} — {s.label}
                </div>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '1rem', maxWidth: '720px' }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>

          {/* Other projects */}
          <div style={{ marginTop: '4rem' }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              OTHER PROJECTS
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {projects.filter(p => p.id !== project.id).map(p => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 1.5rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.borderColor = 'rgba(67,217,208,0.3)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: 'var(--color-text)', fontSize: '0.95rem' }}>{p.title}</div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>{p.category}</div>
                  </div>
                  <ChevronRight size={16} style={{ color: 'var(--color-teal)' }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
