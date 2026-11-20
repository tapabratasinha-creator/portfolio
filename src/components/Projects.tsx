import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, ChevronRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  const [selected, setSelected] = useState<string | null>(null)
  const project = projects.find(p => p.id === selected)

  return (
    <section id="projects" className="section-spacing" style={{ background: 'var(--color-surface)' }}>
      <div className="container-main">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label">03 — Featured Projects</div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            What I've <span style={{ color: 'var(--color-teal)' }}>built.</span>
          </h2>
          <p className="section-subtitle">
            Each project represents a problem I found worth solving — and a process of learning, debugging, and shipping.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-base"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', cursor: 'pointer' }}
              onClick={() => setSelected(p.id)}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.68rem',
                    color: 'var(--color-teal)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>{p.category}</span>
                  <h3 style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    color: 'var(--color-text)',
                    marginTop: '0.3rem',
                  }}>{p.title}</h3>
                </div>
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(67,217,208,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-teal)',
                  flexShrink: 0,
                }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                {p.tagline}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {p.tech.map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'auto',
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'Inter',
                  fontSize: '0.82rem',
                  color: 'var(--color-teal)',
                  fontWeight: 500,
                }}>
                  View case study <ChevronRight size={14} />
                </span>
                {p.highlight && (
                  <span style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.65rem',
                    color: 'var(--color-blue)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '5px',
                    background: 'rgba(108,140,255,0.1)',
                    border: '1px solid rgba(108,140,255,0.2)',
                  }}>
                    {p.highlight}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case-study modal overlay */}
      <AnimatePresence>
        {selected && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(8,14,25,0.85)',
              backdropFilter: 'blur(12px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '20px',
                maxWidth: '760px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '2.5rem',
                position: 'relative',
              }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'var(--color-surface-2)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.4rem',
                  cursor: 'pointer',
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                }}
              >
                <X size={18} />
              </button>

              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--color-teal)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                {project.category}
              </div>
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '2rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                {project.title}
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>{project.tagline}</p>

              {[
                { label: 'Problem', content: project.problem },
                { label: 'Concept & Solution', content: project.solution },
                { label: 'My Contribution', content: project.contribution },
                { label: 'Challenges', content: project.challenges },
                { label: 'Implementation', content: project.implementation },
              ].map(section => (
                <div key={section.label} style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--color-teal)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {section.label}
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    {section.content}
                  </p>
                </div>
              ))}

              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--color-teal)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Technology Used
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.85rem' }}>
                    <GithubIcon size={15} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.85rem' }}>
                    <ArrowUpRight size={15} /> Live Demo
                  </a>
                )}
                <Link to={`/project/${project.id}`} className="btn-secondary" style={{ fontSize: '0.85rem', marginLeft: 'auto' }}>
                  Full Case Study <ChevronRight size={15} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
