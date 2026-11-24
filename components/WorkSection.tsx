'use client';

import { useState } from 'react';
import Link from 'next/link';
import projects, { ProjectCategory } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

const categories: Array<'All' | ProjectCategory> = [
  'All','Product Films','Motion Graphics','Corporate Videos','Real Estate','Social Media','Experimental Work',
];

function getSpan(i: number): string {
  const spans = ['7','5','4','8','6','6'];
  return spans[i % spans.length];
}

export default function WorkSection() {
  const [active, setActive] = useState<'All' | ProjectCategory>('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="work" style={{ background: 'var(--c-bg)', paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="gold-line" />
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
            <div>
              <span className="label" style={{ marginBottom: '0.5rem', display: 'block' }}>Selected Work</span>
              <h2 style={{ fontSize: 'var(--t-4xl)', color: 'var(--c-text)' }}>Projects</h2>
            </div>
            {/* Filters */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }} role="group" aria-label="Filter projects">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`filter-btn${active === cat ? ' active' : ''}`}
                  aria-pressed={active === cat}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: '1.25rem' }} aria-live="polite">
          {filtered.map((project, i) => (
            <div key={project.id} style={{ gridColumn: `span ${getSpan(i)}` }}>
              <Link href={`/work/${project.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div
                  style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.25s, transform 0.3s', background: 'var(--c-bg-2)' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,169,110,0.35)'; el.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.transform = 'translateY(0)'; }}
                >
                  {/* Thumbnail */}
                  <div style={{ position: 'relative', aspectRatio: project.thumbnailAspect === '4:3' ? '4/3' : project.thumbnailAspect === '1:1' ? '1/1' : project.thumbnailAspect === '9:16' ? '9/16' : '16/9', background: 'var(--c-bg-3)', overflow: 'hidden' }}>
                    <div className="media-ph" style={{ aspectRatio: 'unset', position: 'absolute', inset: 0, borderRadius: 0, border: 'none' }}>
                      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2, background: 'rgba(14,14,12,0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '0.2rem 0.6rem', backdropFilter: 'blur(8px)' }}>
                        <span style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-2)' }}>{project.category}</span>
                      </div>
                      <div className="media-ph-label" style={{ position: 'relative', zIndex: 1 }}>{project.thumbnailPlaceholderLabel}</div>
                      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0, opacity: 0, transition: 'opacity 0.3s', background: 'rgba(0,0,0,0.3)' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0'; }}>
                        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--c-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ArrowUpRight size={18} color="#0e0e0c" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Meta */}
                  <div style={{ padding: '1.1rem 1.2rem 1.3rem' }}>
                    <span style={{ fontSize: 'var(--t-xs)', color: 'var(--c-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                      {project.category} · {project.year}
                    </span>
                    <h3 style={{ fontSize: 'var(--t-base)', fontWeight: 600, color: 'var(--c-text)', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-3)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      {project.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.tools.slice(0, 3).map(t => (
                        <span key={t} style={{ display: 'inline-block', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, fontSize: 'var(--t-xs)', color: 'var(--c-text-3)' }}>{t}</span>
                      ))}
                      {project.tools.length > 3 && <span style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)' }}>+{project.tools.length - 3}</span>}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <p style={{ color: 'var(--c-text-3)' }}>No projects in this category yet.</p>
            <button onClick={() => setActive('All')} style={{ marginTop: '1rem', background: 'none', border: 'none', color: 'var(--c-gold)', cursor: 'pointer', fontSize: 'var(--t-sm)' }}>
              Show all
            </button>
          </div>
        )}

        {/* CTA row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-3)' }}>Interested in a collaboration?</p>
          <Link href="/#contact" className="btn-ghost" style={{ fontSize: 'var(--t-sm)' }}>
            Start a Project <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Mobile grid fix */}
      <style>{`@media(max-width:768px){[style*="grid-column"]{grid-column:span 12!important;}}`}</style>
    </section>
  );
}
