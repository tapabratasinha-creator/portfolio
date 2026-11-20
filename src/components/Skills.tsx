const skillGroups = [
  {
    label: 'Languages',
    icon: '{ }',
    items: ['C', 'C++', 'Java', 'Python'],
    accent: 'teal',
  },
  {
    label: 'CS Foundations',
    icon: '∑',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems', 'Computer Networks'],
    accent: 'blue',
  },
  {
    label: 'Development',
    icon: '⚙',
    items: ['API Integration', 'REST APIs', 'Debugging', 'Database Management', 'FastAPI', 'React'],
    accent: 'teal',
  },
  {
    label: 'AI & Tools',
    icon: '◈',
    items: ['Gemini API', 'Prompt Engineering', 'Web Scraping', 'Git & GitHub'],
    accent: 'blue',
  },
  {
    label: 'Interests',
    icon: '◉',
    items: ['AI / ML', 'IoT', 'Product Engineering', 'Hardware-Software Integration', 'Open Source'],
    accent: 'teal',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-spacing" style={{ background: 'var(--color-bg)' }}>
      <div className="container-main">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label">04 — Technical Skills</div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Tools & <span style={{ color: 'var(--color-teal)' }}>capabilities.</span>
          </h2>
          <p className="section-subtitle">
            Organized by domain — no fake proficiency bars, just honest capability groups.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="card-base"
              style={{ padding: '1.75rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '1rem',
                  color: group.accent === 'teal' ? 'var(--color-teal)' : 'var(--color-blue)',
                  width: '32px',
                  textAlign: 'center',
                }}>
                  {group.icon}
                </span>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text)' }}>
                  {group.label}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map(item => (
                  <span
                    key={item}
                    className="skill-tag"
                    style={{
                      borderColor: group.accent === 'teal'
                        ? 'rgba(67,217,208,0.2)'
                        : 'rgba(108,140,255,0.2)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning emphasis */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1.5rem 2rem',
          background: 'linear-gradient(135deg, rgba(67,217,208,0.06) 0%, rgba(108,140,255,0.06) 100%)',
          border: '1px solid rgba(67,217,208,0.15)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--color-teal)', letterSpacing: '0.1em' }}>
            LEARNING PHILOSOPHY
          </span>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            I learn by building. Every skill listed here was reinforced through a project, a bug, or a problem I had to solve — not just coursework.
          </p>
        </div>
      </div>
    </section>
  )
}
