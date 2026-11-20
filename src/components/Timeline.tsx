const timelineItems = [
  {
    period: 'September 2025',
    title: 'Started CS & Engineering',
    desc: 'Began Computer Science & Engineering journey. Diving deep into Data Structures & Algorithms, Object-Oriented Programming, and systems fundamentals with an engineering-first, problem-driven mindset.',
    type: 'education',
  },
  {
    period: 'December 2025',
    title: 'GDG Ice Breaker Selection',
    desc: 'Selected after the initial competitive round of Google Developer Group (GDG) Ice Breaker — active engagement with developer communities, peer collaboration, and modern tech stacks.',
    type: 'achievement',
  },
  {
    period: 'August 2026',
    title: 'SocialProtect — Into the Scrape-Verse',
    desc: 'Participated in the Into the Scrape-Verse hackathon. Engineered SocialProtect, an AI-powered scam intelligence platform integrating Bright Data Scraper Studio with Google Gemini API for scam pattern classification and automated fallback scraping.',
    type: 'project',
  },
  {
    period: 'September 2026',
    title: 'Smart India Hackathon Selection',
    desc: 'Project idea selected for the internal next phase of Smart India Hackathon (SIH). Validated real-world problem framing, system architecture, and impactful technical execution.',
    type: 'achievement',
  },
  {
    period: 'October 2026',
    title: 'PujaGo — Durga Puja Crowd Companion',
    desc: 'Developed PujaGo to solve peak festival navigation in West Bengal. Integrated Map APIs, optimized viewport-based POI clustering, and managed crowd density databases for real-time visitor guidance.',
    type: 'project',
  },
  {
    period: 'Present & Ongoing',
    title: 'Open Source, AI/ML & Hardware Development',
    desc: 'Actively contributing to open-source software, advancing machine learning models, and prototyping IoT / connected hardware-software products where physical systems interface with intelligent code.',
    type: 'current',
  },
]

const typeStyle: Record<string, { color: string; label: string }> = {
  education: { color: 'var(--color-blue)', label: 'Education' },
  achievement: { color: '#F59E0B', label: 'Achievement' },
  project: { color: 'var(--color-teal)', label: 'Project' },
  current: { color: '#8B5CF6', label: 'In Progress' },
}

export default function Timeline() {
  return (
    <section id="timeline" className="section-spacing" style={{ background: 'transparent' }}>
      <div className="container-main">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label">05 — Engineering Journey</div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            The <span style={{ color: 'var(--color-teal)' }}>timeline.</span>
          </h2>
          <p className="section-subtitle">
            Projects, milestones, and learning moments — the path and progression so far.
          </p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          {/* Vertical progress line */}
          <div style={{
            position: 'absolute',
            left: '7px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--color-blue), var(--color-teal) 50%, #8B5CF6 85%, transparent)',
            opacity: 0.5,
          }} />

          {timelineItems.map((item, i) => {
            const style = typeStyle[item.type]
            return (
              <div
                key={i}
                style={{
                  position: 'relative',
                  paddingBottom: '2.5rem',
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                }}
              >
                {/* Node indicator */}
                <div style={{
                  position: 'absolute',
                  left: '-2.5rem',
                  top: '5px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: style.color,
                  border: '3px solid var(--color-bg)',
                  boxShadow: `0 0 12px ${style.color}70`,
                  zIndex: 2,
                }} />

                <div
                  className="card-base"
                  style={{
                    padding: '1.4rem 1.75rem',
                    flex: 1,
                    backdropFilter: 'blur(10px)',
                    background: 'var(--color-surface)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-text)' }}>
                      {item.title}
                    </div>
                    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                      <span style={{
                        fontFamily: 'JetBrains Mono',
                        fontSize: '0.68rem',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '6px',
                        background: `${style.color}18`,
                        color: style.color,
                        border: `1px solid ${style.color}35`,
                      }}>{style.label}</span>
                      <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
