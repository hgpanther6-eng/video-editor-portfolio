'use client';

const expertise = [
  'Professional Video Editing', 'Motion Graphics', 'Cinematic Video Editing',
  'Product Advertisements', 'Commercial Video Production', 'Corporate & Promotional Videos',
  'Social Media Content', 'Reels & Short-form Content', 'Visual Storytelling',
  'Creative Direction', 'AI-assisted Video Production', 'Sound Design & Audio Sync',
  'Video Post-production',
];

const editingTools = [
  { name: 'Adobe Premiere Pro', note: 'Primary NLE — offline & online editing' },
  { name: 'Adobe After Effects', note: 'Motion graphics, compositing & VFX' },
  { name: 'DaVinci Resolve', note: 'Colour grade & audio post-production' },
];

const aiTools = ['Freepik','Antigravity','ChatGPT','Google Flow','Google Veo','Adobe Firefly','Google Gemini','Claude'];

const approach = [
  'Focus on quality, creativity and attention to detail',
  'Create clean, premium and visually engaging content',
  'Prioritise storytelling over unnecessary effects',
  'Use smooth transitions and purposeful motion',
  'Combine traditional editing with modern AI-powered tools',
  'Deliver professional content that communicates a clear message',
];

export default function AboutSection() {
  return (
    <section id="about" style={{ background: 'var(--c-bg)', paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="gold-line" />
          <span className="label" style={{ marginBottom: '0.6rem', display: 'block' }}>About</span>
          <h2 style={{ fontSize: 'var(--t-4xl)', color: 'var(--c-text)', maxWidth: '18ch' }}>
            Telling stories through the craft of editing.
          </h2>
        </div>

        {/* Top grid — portrait + bio */}
        <div
          className="about-top-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12,1fr)',
            gap: '2.5rem',
            marginBottom: '3.5rem',
            alignItems: 'start',
          }}
        >

          {/* Portrait & Brand Avatar */}
          <div className="about-portrait-col" style={{ gridColumn: 'span 4' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%',
                border: '2px solid rgba(200,169,110,0.5)', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#0a0a09', flexShrink: 0,
              }}>
                <img src="/assets/images/logo.jpg" alt="Ronak Gadhavi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: 'var(--t-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c-text-2)', fontWeight: 600 }}>
                Ronak Gadhavi
              </span>
            </div>

            {/* Portrait Card */}
            <div
              className="about-portrait-inner"
              style={{
                position: 'relative',
                aspectRatio: '4/5',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid rgba(200,169,110,0.3)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
                background: '#0a0a09',
                width: '100%',
              }}
            >
              <img
                src="/assets/images/about-portrait.jpg"
                alt="Ronak Gadhavi — Video Editor & Motion Designer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1.5rem 1.25rem 1rem',
                background: 'linear-gradient(to top, rgba(14,14,12,0.92) 0%, rgba(14,14,12,0.4) 65%, transparent 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: 'var(--t-xs)', color: 'var(--c-gold)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Ronak Gadhavi
                </span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace' }}>
                  Ahmedabad, IN
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="about-bio-col" style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {/* Pull-quote */}
            <div style={{ borderLeft: '2px solid var(--c-gold)', paddingLeft: '1.25rem' }}>
              <p style={{ fontSize: 'var(--t-xl)', color: 'var(--c-text)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.55 }}>
                &ldquo;Creating visually engaging content that combines storytelling, creative editing,
                motion graphics, sound design and modern production techniques.&rdquo;
              </p>
            </div>

            <p style={{ fontSize: 'var(--t-base)', color: 'var(--c-text-2)', lineHeight: 1.75 }}>
              I&apos;m <strong style={{ color: 'var(--c-text)', fontWeight: 600 }}>Ronak Gadhavi</strong>, a professional video editor,
              motion designer and visual storyteller based in <strong style={{ color: 'var(--c-text)' }}>Ahmedabad, Gujarat, India</strong>.
              With 2.5+ years of hands-on post-production experience, I specialise in translating raw footage and ideas
              into compelling visual content that moves people.
            </p>
            <p style={{ fontSize: 'var(--t-base)', color: 'var(--c-text-2)', lineHeight: 1.75 }}>
              My work spans cinematic product advertisements, corporate brand films, motion graphics, social media reels
              and experimental creative pieces. I combine a disciplined editorial eye with industry-standard tools —
              and actively integrate modern AI-powered creative software into my workflow.
            </p>
            <p style={{ fontSize: 'var(--t-base)', color: 'var(--c-text-2)', lineHeight: 1.75 }}>
              During the week, I work full-time as a Video Editor at{' '}
              <strong style={{ color: 'var(--c-text)' }}>OpenEduCat</strong>, helping shape educational video experiences
              that reach thousands of learners. Outside that, I take on select remote freelance projects.
            </p>

            {/* Working approach */}
            <div style={{ background: 'var(--c-bg-2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '1.5rem' }}>
              <p className="label" style={{ marginBottom: '0.9rem' }}>Working Approach</p>
              <div className="about-approach-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem 1.5rem' }}>
                {approach.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ marginTop: '0.4rem', width: 5, height: 5, borderRadius: '50%', background: 'var(--c-gold)', flexShrink: 0 }} />
                    <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-2)', lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Goal */}
            <div style={{ background: 'rgba(200,169,110,0.06)', border: '1px solid rgba(200,169,110,0.15)', borderRadius: 10, padding: '1.25rem 1.5rem' }}>
              <p className="label" style={{ color: 'var(--c-gold)', marginBottom: '0.5rem' }}>Professional Goal</p>
              <p style={{ fontSize: 'var(--t-base)', color: 'var(--c-text-2)', lineHeight: 1.65 }}>
                To collaborate with brands, businesses, agencies and content creators worldwide — delivering
                high-quality video editing, motion graphics and creative visual content that communicates clearly
                and leaves a lasting impression.
              </p>
            </div>

            <p style={{ fontSize: 'var(--t-xs)', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.8rem' }}>
              Freelance services are offered independently and are not affiliated with or endorsed by OpenEduCat.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: '3.5rem' }} />

        {/* Tools */}
        <div className="about-tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2.5rem' }}>
          {/* Editing */}
          <div>
            <p className="label" style={{ marginBottom: '1.25rem' }}>Editing &amp; Post-Production</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {editingTools.map(t => (
                <div key={t.name} style={{ padding: '0.9rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontSize: 'var(--t-sm)', fontWeight: 600, color: 'var(--c-text)', marginBottom: '0.2rem' }}>{t.name}</p>
                  <p style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)' }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI tools */}
          <div>
            <p className="label" style={{ marginBottom: '1.25rem' }}>AI &amp; Creative Tools</p>
            <div className="about-ai-tools-inner" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {aiTools.map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(200,169,110,0.5)', flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-2)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <p className="label" style={{ marginBottom: '1.25rem' }}>Areas of Expertise</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {expertise.map(item => (
                <span key={item} style={{
                  display: 'inline-block', padding: '0.3rem 0.7rem',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 100, fontSize: 'var(--t-xs)', color: 'var(--c-text-2)', whiteSpace: 'nowrap',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
