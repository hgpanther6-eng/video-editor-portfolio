const steps = [
  {
    num: '01', title: 'Discovery', sub: 'Understanding your vision',
    desc: 'We start with a focused conversation. I learn about your brand, audience, the story you want to tell and the feeling you want to leave behind. No assumptions — just the right questions.',
    expect: 'Creative brief, visual moodboard and an agreed project timeline.',
    deliver: 'Brief · Moodboard · Timeline',
    img: '[DISCOVERY / MOODBOARD IMAGE · 16:9]', path: 'process-01.jpg',
  },
  {
    num: '02', title: 'Concept', sub: 'Defining the creative direction',
    desc: 'I translate the brief into a clear creative direction — visual language, pacing reference, structure and edit approach. AI tools help rapidly visualise options before committing.',
    expect: 'A concept document or storyboard. No surprises — just clarity on where the film is headed.',
    deliver: 'Concept doc · Storyboard · Reference edit',
    img: '[STORYBOARD / CONCEPT FRAME · 16:9]', path: 'process-02.jpg',
  },
  {
    num: '03', title: 'Production', sub: 'Building the edit',
    desc: 'The edit comes to life. Assembly, story structure, pacing, music sync, motion graphics and colour — combining Premiere Pro / After Effects craft with AI-assisted workflows.',
    expect: 'Draft 1 edit — structured, paced and visually coherent — delivered for your review.',
    deliver: 'Draft 1 edit',
    img: '[EDIT TIMELINE SCREENSHOT · PREMIERE PRO · 16:9]', path: 'process-03.jpg',
  },
  {
    num: '04', title: 'Refinement', sub: 'Precision revisions',
    desc: 'Two structured revision rounds. I implement your feedback precisely, then move to colour grade in DaVinci Resolve, audio master and final motion polish. Sound design gets the same attention as visuals.',
    expect: 'Revised edit with colour grade, audio master and motion polish — ready for sign-off.',
    deliver: 'Revised edit · Colour grade · Audio master',
    img: '[DAVINCI RESOLVE COLOUR GRADE · SCOPES · 16:9]', path: 'process-04.jpg',
  },
  {
    num: '05', title: 'Delivery', sub: 'Files ready to publish',
    desc: 'Files delivered in every format needed — broadcast, web, social. Full-resolution masters, compressed exports, subtitled variants and platform-specific versions. Clear handover so you publish immediately.',
    expect: 'Complete delivery package: all required formats, source files (if agreed) and a checklist.',
    deliver: 'All format exports · Source files (opt.) · Delivery checklist',
    img: '[EXPORT / DELIVERY FORMATS SCREENSHOT · 16:9]', path: 'process-05.jpg',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" style={{ background: 'var(--c-bg)', paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">

        <div style={{ marginBottom: '3.5rem' }}>
          <div className="gold-line" />
          <span className="label" style={{ marginBottom: '0.6rem', display: 'block' }}>How I Work</span>
          <h2 style={{ fontSize: 'var(--t-4xl)', color: 'var(--c-text)', maxWidth: '18ch' }}>
            Creative Process
          </h2>
          <p style={{ fontSize: 'var(--t-base)', color: 'var(--c-text-3)', marginTop: '0.75rem', maxWidth: '50ch', lineHeight: 1.65 }}>
            Every project follows a structured five-stage process — giving you clarity, creative confidence and a finished film you&apos;re proud to share.
          </p>
        </div>

        {steps.map((step, i) => (
          <div key={step.num} style={{
            display: 'grid',
            gridTemplateColumns: '3rem 1fr 1fr',
            gap: '1.5rem 3rem',
            alignItems: 'start',
            padding: '3rem 0',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}>
            {/* Number */}
            <div>
              <span style={{ fontSize: 'var(--t-xs)', fontFamily: 'monospace', color: 'var(--c-gold)', fontWeight: 700 }}>{step.num}</span>
            </div>

            {/* Text column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: 'var(--t-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c-text-3)', marginBottom: '0.35rem' }}>{step.sub}</p>
                <h3 style={{ fontSize: 'var(--t-2xl)', fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em' }}>{step.title}</h3>
              </div>
              <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-2)', lineHeight: 1.7 }}>{step.desc}</p>
              <div style={{ background: 'var(--c-bg-2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '1rem 1.1rem' }}>
                <p style={{ fontSize: 'var(--t-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c-text-3)', marginBottom: '0.4rem' }}>What you&apos;ll receive</p>
                <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-2)', lineHeight: 1.5 }}>{step.expect}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'var(--t-xs)', color: 'var(--c-text-3)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6, padding: '0.5rem 0.75rem', width: 'fit-content' }}>
                <span style={{ color: 'var(--c-gold)' }}>↳</span> {step.deliver}
              </div>
            </div>

            {/* Process image */}
            <div style={{ marginTop: i % 2 !== 0 ? '2rem' : 0 }}>
              <div className="media-ph" style={{ aspectRatio: '16/9', borderRadius: 10 }}>
                <div className="media-ph-label" style={{ position: 'relative', zIndex: 1 }}>
                  {step.img}<br /><br />public/assets/images/{step.path}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
      </div>

      <style>{`@media(max-width:900px){#process [style*="grid-template-columns: 3rem 1fr 1fr"]{grid-template-columns:3rem 1fr!important;} #process [style*="grid-template-columns: 3rem 1fr 1fr"] > div:last-child{grid-column:1/-1!important;}}`}</style>
    </section>
  );
}
