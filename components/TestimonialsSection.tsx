// Hidden when empty — add real quotes to show this section
interface Testimonial { quote: string; name: string; role: string; company: string; }

const testimonials: Testimonial[] = [
  // Add real client quotes here — NEVER invent them.
  // Example:
  // { quote: "Ronak delivered an exceptional product film...", name: "Client Name", role: "Founder", company: "Company" },
];

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null; // Hidden until real quotes are added

  return (
    <section id="testimonials" style={{ background: 'var(--c-bg-2)', paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">
        <div style={{ marginBottom: '3rem' }}>
          <div className="gold-line" />
          <span className="label" style={{ marginBottom: '0.5rem', display: 'block' }}>Client Feedback</span>
          <h2 style={{ fontSize: 'var(--t-4xl)', color: 'var(--c-text)' }}>What clients say</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,320px),1fr))', gap: '1.25rem' }}>
          {testimonials.map((t, i) => (
            <blockquote key={i} style={{ background: 'var(--c-bg-3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '2rem' }}>
              <svg viewBox="0 0 32 24" fill="var(--c-gold)" style={{ width: 28, opacity: 0.4, marginBottom: '1.25rem' }}>
                <path d="M0 24V14.4C0 10.1.9 6.5 2.7 3.6 4.5 1.2 7 0 10.4 0v4.8C8.2 4.8 6.6 5.7 5.5 7.6c-.9 1.7-1.3 4-1.3 7H8v9.4H0zm14 0V14.4c0-4.3.9-7.9 2.7-10.8C18.5 1.2 21 0 24.4 0v4.8c-2.2 0-3.8.9-4.9 2.8-.9 1.7-1.3 4-1.3 7H22v9.4H14z"/>
              </svg>
              <p style={{ fontSize: 'var(--t-base)', color: 'var(--c-text-2)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.5rem' }}>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <p style={{ fontSize: 'var(--t-sm)', fontWeight: 600, color: 'var(--c-text)' }}>{t.name}</p>
                <p style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)' }}>{t.role} · {t.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
