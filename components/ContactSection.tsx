'use client';

import { useState, useRef } from 'react';

const PROJECT_TYPES = [
  'Professional Video Editing', 'Motion Graphics',
  'Product Advertisement / Commercial', 'Corporate / Promotional Video',
  'Social Media Content & Reels', 'Creative Production (Full Project)',
  'AI-assisted Video Production', 'Other',
];
const BUDGET_RANGES = ['Under ₹10,000','₹10,000 – ₹25,000','₹25,000 – ₹50,000','₹50,000 – ₹1,00,000','Above ₹1,00,000','Prefer to discuss'];

function SocialRow({ icon, label, href, display }: { icon: React.ReactNode; label: string; href: string; display: string }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', padding: '0.85rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', transition: 'opacity 0.2s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
    >
      <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-gold)', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: 'var(--t-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c-text-3)', marginBottom: '0.1rem' }}>{label}</p>
        <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text)' }}>{display}</p>
      </div>
    </a>
  );
}

export default function ContactSection() {
  const [error, setError] = useState('');
  const [sentMethod, setSentMethod] = useState<'whatsapp' | 'email' | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function getFormData() {
    if (!formRef.current) return null;
    const data = new FormData(formRef.current);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const company = String(data.get('company') || '').trim();
    const projectType = String(data.get('projectType') || '').trim();
    const budget = String(data.get('budget') || '').trim();
    const deadline = String(data.get('deadline') || '').trim();
    const description = String(data.get('description') || '').trim();

    if (!name) { setError('Please enter your name.'); return null; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return null; }
    if (!projectType) { setError('Please select a project type.'); return null; }
    if (!description || description.length < 10) { setError('Please write a brief description of your project.'); return null; }

    setError('');
    return { name, email, company, projectType, budget, deadline, description };
  }

  function handleSendWhatsApp(e: React.MouseEvent) {
    e.preventDefault();
    const d = getFormData();
    if (!d) return;

    const message = `*New Project Inquiry — Portfolio*
-----------------------------
• *Name:* ${d.name}
• *Email:* ${d.email}
• *Company:* ${d.company || 'Not specified'}
• *Project Type:* ${d.projectType}
• *Estimated Budget:* ${d.budget || 'Not specified'}
• *Timeline / Deadline:* ${d.deadline || 'Flexible'}

*Project Details:*
${d.description}`;

    const waUrl = `https://wa.me/919316741795?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSentMethod('whatsapp');
  }

  function handleSendEmail(e: React.MouseEvent) {
    e.preventDefault();
    const d = getFormData();
    if (!d) return;

    const subject = `Project Inquiry: ${d.projectType} — ${d.name}`;
    const body = `Hi Ronak,

I would like to discuss a project with you:

Name: ${d.name}
Email: ${d.email}
Company: ${d.company || 'N/A'}
Project Type: ${d.projectType}
Estimated Budget: ${d.budget || 'N/A'}
Timeline / Deadline: ${d.deadline || 'N/A'}

Project Details:
${d.description}
`;

    const mailUrl = `mailto:ronakgadhavi858@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailUrl;
    setSentMethod('email');
  }

  return (
    <section id="contact" style={{ background: 'var(--c-bg-2)', paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div className="gold-line" style={{ margin: '0 auto 0' }} />
          <span className="label" style={{ marginBottom: '0.75rem', display: 'block', textAlign: 'center' }}>Get In Touch</span>
          <h2 style={{ fontSize: 'var(--t-5xl)', color: 'var(--c-text)', marginBottom: '0.85rem' }}>
            Let&apos;s make something<br />worth watching.
          </h2>
          <p style={{ fontSize: 'var(--t-base)', color: 'var(--c-text-3)', maxWidth: '44ch', margin: '0 auto', lineHeight: 1.65 }}>
            Tell me about your project — submit via WhatsApp for instant reply or email me directly.
          </p>
        </div>

        {/* Body: contact info + form */}
        <div
          className="contact-body-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >

          {/* Left — contact info */}
          <div>
            <p className="label" style={{ marginBottom: '1.25rem' }}>Direct Reach</p>
            <SocialRow href="https://wa.me/919316741795" label="WhatsApp & Phone" display="+91 93167 41795"
              icon={<svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>} />
            <SocialRow href="mailto:ronakgadhavi858@gmail.com" label="Email" display="ronakgadhavi858@gmail.com"
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width: 16, height: 16 }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>} />
            <SocialRow href="https://www.instagram.com/relentless.ronak" label="Instagram" display="@relentless.ronak"
              icon={<svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>} />
            <SocialRow href="https://www.linkedin.com/in/ADD_PROFILE" label="LinkedIn" display="Ronak Gadhavi"
              icon={<svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>} />

            <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="label" style={{ marginBottom: '0.4rem' }}>Based In</p>
              <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text)' }}>Ahmedabad, Gujarat, India</p>
              <p style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)', marginTop: '0.2rem' }}>Available for remote projects worldwide</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sentMethod ? (
              <div style={{ textAlign: 'center', padding: '3.5rem 1.5rem', background: 'var(--c-bg-3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--c-gold)" strokeWidth={2} style={{ width: 28, height: 28 }}><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 style={{ fontSize: 'var(--t-2xl)', color: 'var(--c-text)', marginBottom: '0.5rem' }}>
                  {sentMethod === 'whatsapp' ? 'Opening WhatsApp…' : 'Opening your Email client…'}
                </h3>
                <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-3)', maxWidth: '40ch', margin: '0 auto 1.5rem' }}>
                  Your brief has been formatted. If it didn&apos;t open automatically, use the buttons below:
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={handleSendWhatsApp} className="btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                    Open WhatsApp
                  </button>
                  <button onClick={handleSendEmail} className="btn-ghost" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                    Open Email
                  </button>
                  <button onClick={() => setSentMethod(null)} style={{ background: 'none', border: 'none', color: 'var(--c-text-3)', cursor: 'pointer', fontSize: 'var(--t-xs)', textDecoration: 'underline', width: '100%', marginTop: '0.5rem' }}>
                    Edit Brief / Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                {/* Name + Email */}
                <div className="contact-form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="name" className="label" style={{ marginBottom: '0.4rem', display: 'block' }}>Name *</label>
                    <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className="input" />
                  </div>
                  <div>
                    <label htmlFor="email" className="label" style={{ marginBottom: '0.4rem', display: 'block' }}>Email *</label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="your@email.com" className="input" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="label" style={{ marginBottom: '0.4rem', display: 'block' }}>Company / Brand</label>
                  <input id="company" name="company" type="text" placeholder="Your company or brand (optional)" className="input" />
                </div>

                {/* Project type + Budget */}
                <div className="contact-form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="projectType" className="label" style={{ marginBottom: '0.4rem', display: 'block' }}>Project Type *</label>
                    <select id="projectType" name="projectType" required className="input">
                      <option value="">Select…</option>
                      {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="label" style={{ marginBottom: '0.4rem', display: 'block' }}>Estimated Budget</label>
                    <select id="budget" name="budget" className="input">
                      <option value="">Select…</option>
                      {BUDGET_RANGES.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="deadline" className="label" style={{ marginBottom: '0.4rem', display: 'block' }}>Deadline / Timeline</label>
                  <input id="deadline" name="deadline" type="text" placeholder="e.g. End of December, No fixed deadline, ASAP" className="input" />
                </div>

                <div>
                  <label htmlFor="description" className="label" style={{ marginBottom: '0.4rem', display: 'block' }}>Project Description *</label>
                  <textarea id="description" name="description" required placeholder="Tell me about your project — what are you making, who is it for, and what style or references do you have?" className="input" />
                </div>

                {error && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 6, fontSize: 'var(--t-sm)', color: '#fca5a5' }} role="alert">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width: 16, height: 16, flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><path d="m12 8 0 4"/><path d="m12 16 .01 0"/></svg>
                    {error}
                  </div>
                )}

                {/* Submit buttons: WhatsApp (primary) + Gmail/Email (secondary) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="btn-primary contact-submit-btn"
                    style={{
                      background: '#25D366',
                      color: '#0e0e0c',
                      fontWeight: 700,
                      gap: '0.6rem',
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18, flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send to WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="btn-ghost"
                    style={{
                      gap: '0.6rem',
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width: 17, height: 17, flexShrink: 0 }}>
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    Send to Gmail
                  </button>
                </div>
                <p style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)', marginTop: '0.2rem' }}>
                  Your brief opens directly in WhatsApp or Gmail — no spam, 100% private.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
