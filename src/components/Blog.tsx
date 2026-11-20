import { BookOpen, Clock } from 'lucide-react'

const plannedTopics = [
  'How I built SocialProtect — scraping fallbacks and Gemini prompt engineering',
  'Map API performance optimization for dense POI layers',
  'Understanding IoT architecture from a software engineer\'s perspective',
  'Product thinking for engineers — problems before solutions',
  'AI integration patterns in real web applications',
]

export default function Blog() {
  return (
    <section id="blog" className="section-spacing" style={{ background: 'var(--color-surface)' }}>
      <div className="container-main">
        <div style={{ marginBottom: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-label">07 — Learning Journal</div>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Writing & <span style={{ color: 'var(--color-teal)' }}>reflections.</span>
            </h2>
            <p className="section-subtitle">
              A space to share project breakdowns, engineering learnings, and technical observations.
            </p>
          </div>
        </div>

        {/* Coming soon state */}
        <div style={{
          border: '1px dashed rgba(67,217,208,0.25)',
          borderRadius: '20px',
          padding: '3.5rem 2rem',
          textAlign: 'center',
          background: 'rgba(67,217,208,0.03)',
          marginBottom: '2.5rem',
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'rgba(67,217,208,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-teal)',
            margin: '0 auto 1.5rem',
          }}>
            <BookOpen size={24} />
          </div>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1.3rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>
            Building in Progress
          </h3>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '440px', margin: '0 auto 1.5rem', lineHeight: 1.75, fontSize: '0.9rem' }}>
            This section is under active development. First articles are in draft — focused on project breakdowns and engineering lessons learned while building.
          </p>
          <span style={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.72rem',
            color: 'var(--color-teal)',
            padding: '0.35rem 1rem',
            borderRadius: '20px',
            background: 'rgba(67,217,208,0.1)',
            border: '1px solid rgba(67,217,208,0.2)',
            letterSpacing: '0.08em',
          }}>
            COMING SOON
          </span>
        </div>

        {/* Planned topics */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--color-border)' }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>
              PLANNED ARTICLES
            </span>
          </div>
          {plannedTopics.map((topic, i) => (
            <div
              key={i}
              style={{
                padding: '1rem 1.75rem',
                borderBottom: i < plannedTopics.length - 1 ? '1px solid var(--color-border)' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--color-text-muted)', minWidth: '20px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.5 }}>{topic}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', flexShrink: 0 }}>
                <Clock size={12} />
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem' }}>draft</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
