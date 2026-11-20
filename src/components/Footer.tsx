import { Mail, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: '3rem 0',
    }}>
      <div className="container-main">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.3rem' }}>
              TAPABRATA SINHA
            </div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em' }}>
              Building technology with purpose.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              { icon: <GithubIcon size={18} />, href: 'https://github.com/tapabratasinha-creator', label: 'GitHub' },
              { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com/in/tapabrata-sinha', label: 'LinkedIn' },
              { icon: <ExternalLink size={18} />, href: 'https://codeforces.com/profile/tapabratasinha20', label: 'Codeforces' },
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
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--color-teal)'
                  e.currentTarget.style.borderColor = 'rgba(67,217,208,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--color-text-muted)'
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--color-text-muted)' }}>
            © 2025 Tapabrata Sinha. Designed & built with intention.
          </span>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--color-text-muted)' }}>
            React · TypeScript · Tailwind · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  )
}
