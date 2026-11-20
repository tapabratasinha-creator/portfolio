import { useState } from 'react'
import { Mail, Copy, Check, Send, ExternalLink } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './Icons'

const socials = [
  { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/in/tapabrata-sinha', handle: 'linkedin.com/in/tapabrata-sinha' },
  { icon: <GithubIcon size={18} />, label: 'GitHub', href: 'https://github.com/tapabratasinha-creator', handle: 'github.com/tapabratasinha-creator' },
  { icon: <ExternalLink size={18} />, label: 'Codeforces', href: 'https://codeforces.com/profile/tapabratasinha20', handle: 'codeforces.com/profile/tapabratasinha20' },
]

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const copyEmail = () => {
    navigator.clipboard.writeText('tapabratasinha20@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Simulate send (replace with real email service like EmailJS or Formspree)
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="section-spacing" style={{ background: 'var(--color-bg)' }}>
      <div className="container-main">
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label">08 — Contact</div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Let's <span style={{ color: 'var(--color-teal)' }}>connect.</span>
          </h2>
          <p className="section-subtitle">
            If you're building something interesting, want to collaborate, or just want to talk engineering — reach out.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left: Info */}
          <div>
            {/* Email shortcut */}
            <div
              onClick={copyEmail}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '14px',
                cursor: 'pointer',
                marginBottom: '1.5rem',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(67,217,208,0.4)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(67,217,208,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-teal)',
                }}>
                  <Mail size={16} />
                </div>
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>EMAIL</div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.88rem', color: 'var(--color-text)' }}>tapabratasinha20@gmail.com</div>
                </div>
              </div>
              <div style={{ color: copied ? 'var(--color-teal)' : 'var(--color-text-muted)', transition: 'color 0.2s' }}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(67,217,208,0.3)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ color: 'var(--color-teal)' }}>{s.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.88rem', color: 'var(--color-text)' }}>{s.label}</div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--color-text-muted)' }}>{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="card-base" style={{ padding: '2rem' }}>
            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
              Send a message
            </h3>

            {status === 'success' ? (
              <div style={{
                padding: '2rem',
                textAlign: 'center',
                borderRadius: '12px',
                background: 'rgba(67,217,208,0.06)',
                border: '1px solid rgba(67,217,208,0.2)',
              }}>
                <Check size={32} style={{ color: 'var(--color-teal)', margin: '0 auto 1rem' }} />
                <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Message sent!</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>Thanks for reaching out. I'll reply as soon as I can.</p>
                <button onClick={() => setStatus('idle')} className="btn-secondary" style={{ marginTop: '1.25rem', fontSize: '0.85rem' }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {(['name', 'email'] as const).map(field => (
                  <div key={field}>
                    <label style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                      {field.toUpperCase()}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={form[field]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      required
                      placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'var(--color-surface-2)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '10px',
                        color: 'var(--color-text)',
                        fontFamily: 'Inter',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(67,217,208,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                    MESSAGE
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      color: 'var(--color-text)',
                      fontFamily: 'Inter',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(67,217,208,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'sending'}
                  style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? 'Sending...' : (<><Send size={15} /> Send Message</>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container-main > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
