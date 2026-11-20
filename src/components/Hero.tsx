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
        <div className="hero-grid">
          {/* ── Area 1: Section Label ── */}
          <div className="hero-label-area">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label"
              style={{ marginBottom: '0.75rem' }}
            >
              Computer Science & Engineering · Software Development · AI · Product Innovation
            </motion.div>
          </div>

          {/* ── Area 2: Name & Subtitle ── */}
          <div className="hero-name-area">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: 'clamp(2.6rem, 6.2vw, 5.2rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--color-text)',
                marginBottom: '0.75rem',
              }}>
                TAPABRATA<br />
                <span style={{ color: 'var(--color-text)' }}>SINHA</span>
              </h1>

              <p style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 400,
                fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                color: 'var(--color-text-muted)',
                marginBottom: '1.25rem',
                maxWidth: '520px',
              }}>
                Building technology with purpose.
              </p>
            </motion.div>
          </div>

          {/* ── Area 3: Photo (Beside the name on mobile, right column on desktop) ── */}
          <div className="hero-photo-area">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hero-photo-outer"
            >
             

              {/* Clean photo card — no tech lines, no text overlay, fading edges */}
              <div className="hero-photo-card" style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
               
                background: 'var(--color-surface)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
              }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/tapabrata.jpg`}
                  alt="Tapabrata Sinha"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    display: 'block',
                  }}
                />

                {/* Left side fade into background */}
                <div style={{
                  position: 'absolute',
                  inset: '0 auto 0 0',
                  width: '26%',
                  background: 'linear-gradient(to right, var(--color-bg) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Right side fade into background */}
                <div style={{
                  position: 'absolute',
                  inset: '0 0 0 auto',
                  width: '26%',
                  background: 'linear-gradient(to left, var(--color-bg) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Bottom fade into background */}
                <div style={{
                  position: 'absolute',
                  inset: 'auto 0 0 0',
                  height: '35%',
                  background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
              </div>
            </motion.div>
          </div>

          {/* ── Area 4: Taglines ── */}
          <div className="hero-taglines-area">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {taglines.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
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
          </div>

          {/* ── Area 5: Action Buttons ── */}
          <div className="hero-buttons-area">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
          </div>

          {/* ── Area 6: Social Links ── */}
          <div className="hero-socials-area">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', flexWrap: 'wrap' }}
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
          </div>
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
        /* Desktop layout (Reverted to side-by-side as it was earlier, clean, no text on image) */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          grid-template-areas:
            "label photo"
            "name photo"
            "taglines photo"
            "buttons photo"
            "socials photo";
          gap: 1.25rem 4rem;
          align-items: center;
        }
        .hero-label-area { grid-area: label; }
        .hero-name-area { grid-area: name; }
        .hero-taglines-area { grid-area: taglines; margin-bottom: 0.5rem; }
        .hero-buttons-area { grid-area: buttons; margin-bottom: 1rem; }
        .hero-socials-area { grid-area: socials; }
        .hero-photo-area {
          grid-area: photo;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-photo-outer {
          position: relative;
          width: 300px;
        }
        .hero-photo-card {
          width: 300px;
          height: 380px;
        }

        /* Mobile layout: Photo beside the name, fitting full face, no top placement */
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr auto !important;
            grid-template-areas:
              "label label"
              "name photo"
              "taglines taglines"
              "buttons buttons"
              "socials socials" !important;
            gap: 1.25rem 1rem !important;
            align-items: center !important;
          }
          .hero-name-area h1 {
            font-size: clamp(1.85rem, 6vw, 2.7rem) !important;
            line-height: 1.08 !important;
          }
          .hero-name-area p {
            font-size: 0.95rem !important;
            margin-bottom: 0 !important;
          }
          .hero-photo-outer {
            width: 140px !important;
          }
          .hero-photo-card {
            width: 140px !important;
            height: 180px !important;
            border-radius: 18px !important;
            border: none !important;
            box-shadow: none !important;
          }
          .hero-photo-card img {
            object-position: center 25% !important;
          }
          .hero-taglines-area {
            margin-top: 0.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-grid {
            gap: 1rem 0.65rem !important;
          }
          .hero-name-area h1 {
            font-size: 1.7rem !important;
          }
          .hero-photo-outer {
            width: 120px !important;
          }
          .hero-photo-card {
            width: 120px !important;
            height: 155px !important;
            border-radius: 16px !important;
            border: none !important;
            box-shadow: none !important;
          }
          .hero-photo-card img {
            object-position: center 25% !important;
          }
        }
      `}</style>
    </section>
  )
}
