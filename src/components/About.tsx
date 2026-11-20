import { Code2, Cpu, Lightbulb, Layers } from 'lucide-react'

const interests = [
  { icon: <Code2 size={20} />, title: 'Software Development', desc: 'Building clean, functional software that solves real problems.' },
  { icon: <Cpu size={20} />, title: 'AI & Machine Learning', desc: 'Integrating intelligent models into practical, user-facing products.' },
  { icon: <Layers size={20} />, title: 'IoT & Hardware-Software', desc: 'Interested in connected products where code meets physical world.' },
  { icon: <Lightbulb size={20} />, title: 'Product Engineering', desc: 'Thinking through problems from both a user and engineering perspective.' },
]

export default function About() {
  return (
    <section id="about" className="section-spacing" style={{ background: 'var(--color-bg)' }}>
      <div className="container-main">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <div className="section-label">02 — About Me</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Engineering with<br />
              <span style={{ color: 'var(--color-teal)' }}>intention.</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' }}>
              I'm an aspiring Computer Science & Engineering student with a focus on building
              useful, well-engineered software. My interest lies at the intersection of practical
              problem-solving, AI integration, and product thinking.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' }}>
              I approach every project with a product mindset — not just asking <em style={{ color: 'var(--color-text)' }}>"does this work?"</em> but
              <em style={{ color: 'var(--color-text)' }}>"does this matter to someone?"</em> I enjoy understanding the full lifecycle from idea
              to implementation, and I'm particularly drawn to projects where software intersects
              with the physical or social world.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '1rem' }}>
              Currently strengthening my CS foundations, deepening my knowledge of AI/ML systems,
              and building projects that reflect both curiosity and care for the user experience.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border)',
            }}>
              {[
                { value: '9.12', label: 'CGPA' },
                { value: '2+', label: 'Projects Built' },
                { value: '3+', label: 'Achievements' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.75rem', color: 'var(--color-teal)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interest cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {interests.map((item, i) => (
              <div
                key={i}
                className="card-base"
                style={{ padding: '1.5rem', cursor: 'default' }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(67,217,208,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-teal)',
                  marginBottom: '1rem',
                }}>
                  {item.icon}
                </div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Now exploring */}
        <div style={{
          marginTop: '4rem',
          padding: '1.75rem 2rem',
          background: 'var(--color-surface)',
          borderRadius: '16px',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            flexShrink: 0,
          }}>
            <span style={{
              width: '8px', height: '8px',
              borderRadius: '50%',
              background: 'var(--color-teal)',
              display: 'inline-block',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--color-teal)', letterSpacing: '0.1em' }}>NOW EXPLORING</span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['ML fundamentals & model fine-tuning', 'IoT + edge computing concepts', 'Product engineering principles', 'Open source contribution'].map(t => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 768px) {
          #about .container-main > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
