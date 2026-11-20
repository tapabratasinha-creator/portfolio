import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Clock, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  subtitle: string
  date: string
  readTime: string
  category: string
  tags: string[]
  excerpt: string
  content: {
    sectionTitle: string
    paragraphs: string[]
    highlight?: string
    takeaway?: string
  }[]
}

const firstPost: BlogPost = {
  id: 'product-thinking-in-tech',
  title: 'Product Thinking in Tech: Problems Before Solutions',
  subtitle: 'Why the best code is the code you never had to write — and how focusing on the pain point changes software engineering.',
  date: 'November 2026',
  readTime: '5 min read',
  category: 'Product Engineering',
  tags: ['ProductThinking', 'SystemDesign', 'EngineeringMindset', 'FirstPrinciples'],
  excerpt:
    'Every engineer has been there: you discover a shiny new framework or an AI model, and suddenly everything looks like a problem that desperately needs it. But here is the hard truth — users don’t buy architectures; they buy relief from friction. Here is how shifting from "tool-first" to "problem-first" changed how I build.',
  content: [
    {
      sectionTitle: '01. The "Hammer in Search of a Nail" Trap',
      paragraphs: [
        'Ask an early engineer what they are building, and you will usually get a grocery list of tools: "It’s a distributed microservice using FastAPI, Redis caching, vector databases, and Gemini 1.5 with WebSocket streaming!"',
        'Ask them what human pain that microservice relieves, and the room goes quiet.',
        'We love tech stacks because tech stacks are controllable. Syntax gives immediate feedback: green build, happy compiler. But human problems are messy, emotional, and unpredictable. The instinct is to retreat into code where everything obeys deterministic rules. The danger is building a diamond-encrusted bridge to an island nobody wants to visit.',
      ],
      highlight: '“Code is a liability; solutions are the asset. Every line you commit is a future line you must maintain, debug, and pay server bills for.”',
    },
    {
      sectionTitle: '02. Case Study: Why SocialProtect Wasn’t Just "Another AI Wrapper"',
      paragraphs: [
        'When building SocialProtect during the Into the Scrape-Verse hackathon, the temptation was obvious: just pipe text into an LLM and spit out a response. Cool demo, right?',
        'Wrong. When someone receives a suspicious link from an unknown seller or a bizarre Instagram DM, their primary state is anxiety and confusion. They don’t want a 500-word essay from an AI sounding like a corporate lawyer.',
        'They want three things in under 3 seconds: Is this dangerous? Why? What exact button should I NOT click? Because scam sites frequently block basic scraping bots, an AI alone is useless without resilient data ingestion. That is why engineering Bright Data residential proxies with exponential back-off and structured JSON risk scoring mattered. The architecture served the human anxiety, not the other way around.',
      ],
      takeaway: 'Key Takeaway: The engineering difficulty should always be proportional to the user’s relief, never just your desire to use a complex tool.',
    },
    {
      sectionTitle: '03. Case Study: PujaGo and the Chaos of 11 PM Festival Crowds',
      paragraphs: [
        'During Durga Puja in Kolkata, millions of people fill city streets that transform into open-air festival circuits. Standard navigation apps fail miserably here because traditional traffic algorithms assume cars moving along roads — not 50,000 pedestrians bottlenecking outside a narrow pandal gate.',
        'If I had approached PujaGo tool-first, I would have spent months training an overkill neural network on pedestrian velocity.',
        'Instead, product thinking forced a simpler question: What makes a family turn back in frustration? It’s not knowing whether a pandal queue is 15 minutes or 2 hours. By focusing on POI viewport clustering, lightweight Firestore geohash indexing, and a simple crowd-feedback loop, the app delivered immediate value where Google Maps had blind spots.',
      ],
      highlight: '“If the simplest solution solves 90% of the friction with 10% of the code, shipping that simplest solution is superior engineering.”',
    },
    {
      sectionTitle: '04. The 4-Question Filter Before Opening VS Code',
      paragraphs: [
        'Before creating a repository or writing an endpoint, I now run every idea through four uncompromising filters:',
        '1. Who is suffering, and what is their current imperfect workaround? (If they have zero workaround, the problem might not actually be painful enough).',
        '2. What is the dumbest, lowest-tech mechanism that could solve 80% of this? (Can this be an automated script before it becomes a SaaS?)',
        '3. If the user had to pay $5 or wait 10 seconds for this, would they still use it?',
        '4. Does this feature eliminate friction, or does it merely add cognitive overhead to the user?',
      ],
      takeaway: 'Great engineers don’t just write clean code — they advocate for the user by knowing what NOT to build.',
    },
    {
      sectionTitle: '05. Moving Forward: Engineering With Purpose',
      paragraphs: [
        'Technology is moving faster than ever. Tomorrow there will be a newer LLM, a faster bundler, or a cooler database. But the fundamental law of technology has never changed: technology only matters when it makes a person’s day a tiny bit less frustrating, more productive, or more secure.',
        'That is why I define myself as a product-minded engineer. Code is our craft, but human utility is the destination.',
      ],
    },
  ],
}

const upcomingTopics = [
  { id: '1', title: 'Handling Anti-Bot Blocks: Scraping Fallbacks & Gemini Prompt Patterns in SocialProtect', readTime: '6 min read' },
  { id: '2', title: 'Spatial Clustering & Geohash Indexing for High-Density Crowd Navigation', readTime: '4 min read' },
  { id: '3', title: 'Understanding IoT Architecture from a Software Engineer’s Perspective', readTime: '5 min read' },
  { id: '4', title: 'Structured JSON Extraction with Multimodal LLMs: Lessons in Reliability', readTime: '5 min read' },
]

export default function Blog() {
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null)

  return (
    <section id="blog" className="section-spacing" style={{ background: 'transparent' }}>
      <div className="container-main">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label">07 — Learning Journal</div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Writing & <span style={{ color: 'var(--color-teal)' }}>reflections.</span>
          </h2>
          <p className="section-subtitle">
            Deep dives into real engineering problems, lessons learned while building, and product thinking in software.
          </p>
        </div>

        {/* Featured Published Post Card */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-teal)',
              boxShadow: '0 0 10px var(--color-teal)',
              display: 'inline-block',
            }} />
            <span style={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.75rem',
              color: 'var(--color-teal)',
              letterSpacing: '0.12em',
              fontWeight: 600,
            }}>
              LATEST ARTICLE · PUBLISHED
            </span>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            onClick={() => setReadingPost(firstPost)}
            className="card-base"
            style={{
              padding: '2.5rem',
              cursor: 'pointer',
              background: 'var(--color-surface)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top accent gradient line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(to right, var(--color-teal), var(--color-blue))',
            }} />

            {/* Meta info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.7rem',
                color: 'var(--color-teal)',
                background: 'rgba(67,217,208,0.1)',
                border: '1px solid rgba(67,217,208,0.25)',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
              }}>
                {firstPost.category}
              </span>
              <span style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                {firstPost.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                <Clock size={13} /> {firstPost.readTime}
              </span>
            </div>

            {/* Title & subtitle */}
            <h3 style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 3.2vw, 2rem)',
              color: 'var(--color-text)',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
            }}>
              {firstPost.title}
            </h3>

            <p style={{
              fontFamily: 'Inter',
              color: 'var(--color-text-muted)',
              fontSize: '0.98rem',
              lineHeight: 1.75,
              marginBottom: '1.75rem',
              maxWidth: '850px',
            }}>
              {firstPost.excerpt}
            </p>

            {/* Tags & Action */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)',
            }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {firstPost.tags.map(t => (
                  <span key={t} className="skill-tag">#{t}</span>
                ))}
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                fontSize: '0.9rem',
                color: 'var(--color-teal)',
              }}>
                Read Full Article <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Upcoming Articles in the Pipeline */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.25rem',
          }}>
            <BookOpen size={16} style={{ color: 'var(--color-text-muted)' }} />
            <span style={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.1em',
              fontWeight: 600,
            }}>
              UPCOMING IN THE PIPELINE
            </span>
          </div>

          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}>
            {upcomingTopics.map((item, i) => (
              <div
                key={item.id}
                style={{
                  padding: '1.15rem 1.75rem',
                  borderBottom: i < upcomingTopics.length - 1 ? '1px solid var(--color-border)' : 'none',
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
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--color-teal)', minWidth: '24px' }}>
                    0{i + 2}
                  </span>
                  <span style={{ fontSize: '0.92rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                    {item.title}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', flexShrink: 0 }}>
                  <Clock size={12} />
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem' }}>{item.readTime} · in draft</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Article Reading Overlay Modal */}
      <AnimatePresence>
        {readingPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(8,14,25,0.88)',
              backdropFilter: 'blur(16px)',
              zIndex: 250,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setReadingPost(null)}
          >
            <motion.article
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '24px',
                maxWidth: '820px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                position: 'relative',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setReadingPost(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '10px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  color: 'var(--color-text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.2s',
                }}
              >
                <X size={18} />
              </button>

              {/* Header inside modal */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.7rem',
                    color: 'var(--color-teal)',
                    background: 'rgba(67,217,208,0.1)',
                    border: '1px solid rgba(67,217,208,0.25)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                  }}>
                    {readingPost.category}
                  </span>
                  <span style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    {readingPost.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    <Clock size={13} /> {readingPost.readTime}
                  </span>
                </div>

                <h1 style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
                  color: 'var(--color-text)',
                  lineHeight: 1.18,
                  marginBottom: '1rem',
                }}>
                  {readingPost.title}
                </h1>

                <p style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.1rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                }}>
                  {readingPost.subtitle}
                </p>
              </div>

              {/* Body Sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {readingPost.content.map((sec, idx) => (
                  <div key={idx}>
                    <h3 style={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: 'var(--color-teal)',
                      marginBottom: '1rem',
                    }}>
                      {sec.sectionTitle}
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {sec.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} style={{
                          color: 'var(--color-text)',
                          fontSize: '1rem',
                          lineHeight: 1.85,
                          opacity: 0.9,
                        }}>
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Highlight Box if present */}
                    {sec.highlight && (
                      <div style={{
                        marginTop: '1.25rem',
                        padding: '1.25rem 1.5rem',
                        background: 'rgba(67,217,208,0.06)',
                        borderLeft: '3px solid var(--color-teal)',
                        borderRadius: '0 12px 12px 0',
                        fontStyle: 'italic',
                        color: 'var(--color-text)',
                        fontSize: '0.98rem',
                        lineHeight: 1.7,
                      }}>
                        {sec.highlight}
                      </div>
                    )}

                    {/* Takeaway Box if present */}
                    {sec.takeaway && (
                      <div style={{
                        marginTop: '1.25rem',
                        padding: '1rem 1.25rem',
                        background: 'var(--color-surface-2)',
                        border: '1px solid rgba(108,140,255,0.25)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                      }}>
                        <CheckCircle2 size={18} style={{ color: 'var(--color-blue)', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.88rem', color: 'var(--color-text)', fontWeight: 500 }}>
                          {sec.takeaway}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div style={{
                marginTop: '3.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Sparkles size={16} style={{ color: 'var(--color-teal)' }} />
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    Author: Tapabrata Sinha
                  </span>
                </div>

                <button
                  onClick={() => setReadingPost(null)}
                  className="btn-primary"
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
                >
                  Close Article
                </button>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
