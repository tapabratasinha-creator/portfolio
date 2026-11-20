import { Award, Trophy, Zap } from 'lucide-react'

const achievements = [
  {
    icon: <Zap size={22} />,
    title: 'GDG Ice Breaker',
    desc: 'Selected after the initial round of GDG (Google Developer Group) Ice Breaker — a competitive developer community entry event.',
    type: 'Community',
    color: '#F59E0B',
  },
  {
    icon: <Trophy size={22} />,
    title: 'Smart India Hackathon',
    desc: 'Idea selected for the internal next phase of Smart India Hackathon — recognizing the problem identification and solution concept.',
    type: 'Hackathon',
    color: 'var(--color-teal)',
  },
  {
    icon: <Award size={22} />,
    title: 'Into the Scrape-Verse',
    desc: 'Participated in the Into the Scrape-Verse hackathon with SocialProtect — a Bright Data themed competition focusing on web scraping and AI.',
    type: 'Hackathon',
    color: 'var(--color-blue)',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-spacing" style={{ background: 'var(--color-bg)' }}>
      <div className="container-main">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label">06 — Achievements</div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Recognized <span style={{ color: 'var(--color-teal)' }}>moments.</span>
          </h2>
          <p className="section-subtitle">
            Competitions, selections, and community milestones along the way.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {achievements.map((a, i) => (
            <div key={i} className="card-base" style={{ padding: '2rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: `${a.color}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: a.color,
                marginBottom: '1.25rem',
                border: `1px solid ${a.color}25`,
              }}>
                {a.icon}
              </div>
              <span style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.65rem',
                color: a.color,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>{a.type}</span>
              <h3 style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--color-text)',
                margin: '0.4rem 0 0.75rem',
              }}>{a.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
