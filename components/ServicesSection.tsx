'use client';

const services = [
  {
    num: '01', title: 'Professional Video Editing',
    desc: 'From assembly cut to final master — I transform raw footage into a coherent, emotionally resonant story. Colour grade, audio sync, pacing, graphics and delivery across all formats.',
    tags: ['Premiere Pro', 'DaVinci Resolve', 'Multi-cam', 'Colour Grade', 'Audio Sync'],
  },
  {
    num: '02', title: 'Motion Graphics',
    desc: 'Kinetic titles, animated infographics, logo reveals and brand identity in motion. Motion systems that feel deliberate — not decorative — built in After Effects with AI-assisted generation workflows.',
    tags: ['After Effects', 'Expression Rigs', 'Brand Animation', 'Lower Thirds', 'Google Veo'],
  },
  {
    num: '03', title: 'Product Advertisements & Commercials',
    desc: 'Cinematic product films that highlight form, texture and benefit. Combining pacing, colour grading and sound design to transform product footage into desire.',
    tags: ['Product Films', 'Commercial Production', 'E-commerce', 'Lifestyle Cuts'],
  },
  {
    num: '04', title: 'Corporate & Promotional Videos',
    desc: 'Polished films for investor decks, internal communications, event sizzles and brand stories. Clear, credible and built to represent your organisation at its most professional.',
    tags: ['Brand Films', 'Event Coverage', 'Interview Edit', 'Sizzle Reels', 'Explainers'],
  },
  {
    num: '05', title: 'Social Media Content & Reels',
    desc: 'Short-form content engineered for Instagram Reels, YouTube Shorts and TikTok — built to stop the scroll. Fast cuts, trending audio, hooks and sound design that earn attention.',
    tags: ['Reels', 'Shorts', 'TikTok', 'Repurposing', 'Captions'],
  },
  {
    num: '06', title: 'Creative Production & AI Workflows',
    desc: 'End-to-end creative involvement from concept through delivery. I integrate Adobe Firefly, Google Flow, Google Veo, Freepik and Antigravity with traditional editing craft.',
    tags: ['Concept', 'Visual Direction', 'Adobe Firefly', 'Google Veo', 'Antigravity'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: 'var(--c-bg-2)', paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="gold-line" />
          <div className="section-hdr-row" style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}>
            <div>
              <span className="label" style={{ marginBottom: '0.6rem', display: 'block' }}>What I Do</span>
              <h2 style={{ fontSize: 'var(--t-4xl)', color: 'var(--c-text)' }}>Services</h2>
            </div>
            <p className="section-hdr-desc" style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-3)', maxWidth: '36ch', lineHeight: 1.65 }}>
              Available for remote freelance projects worldwide — single deliverables to ongoing creative partnerships.
            </p>
          </div>
        </div>

        {/* Service rows */}
        <div>
          {services.map((s) => (
            <div
              key={s.num}
              className="service-row-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '3rem 1fr 2fr auto',
                gap: '1.5rem 2rem',
                alignItems: 'start',
                padding: '2rem 0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                transition: 'background 0.2s',
                margin: '0 -1rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                borderRadius: 8,
                cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              {/* Number */}
              <span style={{ fontSize: 'var(--t-xs)', fontFamily: 'monospace', color: 'var(--c-gold)', paddingTop: '0.2rem', flexShrink: 0 }}>
                {s.num}
              </span>
              {/* Title */}
              <h3 style={{ fontSize: 'var(--t-xl)', fontWeight: 600, color: 'var(--c-text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                {s.title}
              </h3>
              {/* Description */}
              <p className="service-desc" style={{
                fontSize: 'var(--t-sm)', color: 'var(--c-text-3)', lineHeight: 1.65,
              }}>
                {s.desc}
              </p>
              {/* Tags */}
              <div className="service-tags" style={{
                display: 'flex', flexWrap: 'wrap', gap: '0.35rem', maxWidth: 220,
              }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    display: 'inline-block', padding: '0.2rem 0.6rem',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 100, fontSize: 'var(--t-xs)', color: 'var(--c-text-3)', whiteSpace: 'nowrap',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
        </div>

        {/* CTA */}
        <div className="services-cta-row" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem',
          marginTop: '2.5rem',
          paddingTop: '1.75rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          <p style={{ fontSize: 'var(--t-base)', color: 'var(--c-text-3)', maxWidth: '40ch' }}>
            Interested in working together on a project?
          </p>
          <a href="/#contact" className="btn-primary services-cta-btn">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
