import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, CodeforcesIcon } from './Icons'

const taglines = ['Product-minded engineer', 'Project-driven learner', 'Technology enthusiast']

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      {/* Soft radial glow */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '55%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(67,217,208,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 2, paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '4.5rem',
          alignItems: 'center',
        }}>
          {/* ── Left content ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="section-label" style={{ marginBottom: '1.25rem' }}>
                Computer Science & Engineering · Software Development · AI · Product Innovation
              </div>

              <h1 style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--color-text)',
                marginBottom: '1rem',
              }}>
                TAPABRATA<br />
                <span style={{ color: 'var(--color-text)' }}>SINHA</span>
              </h1>

              <p style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 400,
                fontSize: 'clamp(1.1rem, 2.4vw, 1.35rem)',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem',
                maxWidth: '520px',
              }}>
                Building technology with purpose.
              </p>

              {/* Taglines chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
                {taglines.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                    style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: '0.78rem',
                      padding: '0.35rem 0.9rem',
                      borderRadius: '7px',
                      background: i === 0 ? 'rgba(67,217,208,0.1)' : 'var(--color-surface)',
                      color: i === 0 ? 'var(--color-teal)' : 'var(--color-text-muted)',
                      border: `1px solid ${i === 0 ? 'rgba(67,217,208,0.3)' : 'var(--color-border)'}`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Call to Actions */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
              >
                <a href="#projects" className="btn-primary">
                  Explore Projects
                  <ArrowDown size={16} />
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Me
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                style={{ display: 'flex', gap: '0.85rem', marginTop: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}
              >
                {[
                  { icon: <GithubIcon size={18} />, href: 'https://github.com/tapabratasinha-creator', label: 'GitHub' },
                  { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com/in/tapabrata-sinha', label: 'LinkedIn' },
                  { icon: <CodeforcesIcon size={18} />, href: 'https://codeforces.com/profile/tapabratasinha20', label: 'Codeforces' },
                  { icon: <Mail size={18} />, href: 'mailto:tapabratasinha20@gmail.com', label: 'Email' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s, border-color 0.2s, transform 0.2s',
                      position: 'relative',
                      zIndex: 3,
                      backdropFilter: 'blur(8px)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--color-teal)'
                      e.currentTarget.style.borderColor = 'rgba(67,217,208,0.45)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--color-text-muted)'
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Right: Profile photo — rectangular, face-focused, fading sides ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hero-photo-wrapper"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: '310px' }}>
              {/* Backlight glow */}
              <div style={{
                position: 'absolute',
                inset: '-18px',
                borderRadius: '32px',
                background: 'radial-gradient(circle, rgba(67,217,208,0.18) 0%, rgba(108,140,255,0.08) 50%, transparent 75%)',
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }} />

             
            

              {/* Main Photo Frame — Rectangular with fading sides */}
              <div style={{
                width: '250px',
                height: '390px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid rgba(67,217,208,0.22)',
                background: 'var(--color-surface)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(67,217,208,0.1)',
              }}>
                <img
                  src="/assets/tapabrata.jpg"
                  alt="Tapabrata Sinha"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 10%',
                    display: 'block',
                  }}
                />

                {/* Left side fade into background */}
                <div style={{
                  position: 'absolute',
                  inset: '0 auto 0 0',
                  width: '20%',
                  background: 'linear-gradient(to right, var(--color-bg) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Right side fade into background */}
                <div style={{
                  position: 'absolute',
                  inset: '0 0 0 auto',
                  width: '24%',
                  background: 'linear-gradient(to left, var(--color-bg) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Bottom fade into background */}
                <div style={{
                  position: 'absolute',
                  inset: 'auto 0 0 0',
                  height: '34%',
                  background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Subtle vignette border */}
                <div style={{
                  position: 'relative',
                  inset: 0,
                  boxShadow: 'inset 0 0 32px rgba(8,14,25,0.7)',
                  pointerEvents: 'none',
                }} />

                {/* Minimal engineer tag at the bottom */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.2rem',
                  zIndex: 5,
                }}>
                  
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            pointerEvents: 'none',
          }}
        >
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.12em' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} style={{ color: 'var(--color-teal)' }} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-photo-wrapper { display: none !important; }
          section#hero .container-main > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
