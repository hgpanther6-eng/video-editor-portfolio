import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Lock } from 'lucide-react';
import projects from '@/data/projects';
import { MediaPlaceholder, VideoPlaceholder } from '@/components/MediaPlaceholder';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const prev = projects[index - 1] ?? null;
  const next = projects[index + 1] ?? null;

  const divider = { borderTop: '1px solid rgba(255,255,255,0.08)', margin: '3.5rem 0' };
  const metaLabel: React.CSSProperties = {
    fontSize: '0.65rem', textTransform: 'uppercase' as const,
    letterSpacing: '0.12em', color: 'var(--c-text-3)',
    marginBottom: '0.35rem', display: 'block',
  };
  const metaValue: React.CSSProperties = {
    fontSize: '0.9rem', fontWeight: 600, color: 'var(--c-text)', lineHeight: 1.3,
  };
  const sectionLabel: React.CSSProperties = {
    fontSize: '0.65rem', textTransform: 'uppercase' as const,
    letterSpacing: '0.12em', color: 'var(--c-gold)',
    marginBottom: '1rem', display: 'block',
  };
  const bodyText: React.CSSProperties = {
    fontSize: 'var(--t-base)', color: 'var(--c-text-3)',
    lineHeight: 1.75, maxWidth: '72ch',
  };

  return (
    <article style={{ background: 'var(--c-bg)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }}>

      {/* Wrap */}
      <div className="wrap">

        {/* Back link */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Link href="/#work" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontSize: 'var(--t-sm)', color: 'var(--c-text-3)',
            textDecoration: 'none',
          }}
          >
            <ArrowLeft size={14} />
            Back to Work
          </Link>
        </div>

        {/* Hero video */}
        <div style={{ marginBottom: '1rem' }}>
          <VideoPlaceholder
            label={project.heroPlaceholderLabel}
            aspectRatio="16:9"
            dark
          />
          <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', marginTop: '0.5rem', fontFamily: 'monospace' }}>
            Replace with: /public/assets/video/{project.slug}-hero.mp4
          </p>
        </div>

        {/* Gold line */}
        <div className="gold-line" style={{ marginTop: '2.5rem' }} />

        {/* Header grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,420px)',
          gap: '3rem 4rem',
          alignItems: 'start',
          marginTop: '2rem',
          marginBottom: '1rem',
        }}>
          {/* Title + description */}
          <div>
            <span style={{ ...metaLabel, color: 'var(--c-gold)', marginBottom: '0.75rem' }}>
              {project.category}
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700,
              letterSpacing: '-0.03em', lineHeight: 1.1,
              color: 'var(--c-text)', marginBottom: '1.25rem',
            }}>
              {project.title}
            </h1>
            <p style={{ ...bodyText, fontSize: 'var(--t-lg)' }}>
              {project.description}
            </p>
          </div>

          {/* Meta sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { label: 'Category', value: project.category },
              { label: 'Year', value: project.year },
              ...(project.client ? [{ label: 'Client', value: project.client }] : []),
              { label: 'My Role', value: project.myRole },
            ].map(({ label, value }) => (
              <div key={label} style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                padding: '1rem 0',
              }}>
                <span style={metaLabel}>{label}</span>
                <span style={metaValue}>{value}</span>
              </div>
            ))}

            {/* Tools */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1rem' }}>
              <span style={metaLabel}>Tools Used</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                {project.tools.map((tool) => (
                  <span key={tool} style={{
                    display: 'inline-block', padding: '0.25rem 0.65rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 100, fontSize: 'var(--t-xs)',
                    color: 'var(--c-text-3)', whiteSpace: 'nowrap',
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={divider} />

        {/* Case study body */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) 300px',
          gap: '3rem 5rem',
          alignItems: 'start',
        }}>
          {/* Main column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Objective */}
            <section>
              <span style={sectionLabel}>Project Objective</span>
              <p style={bodyText}>{project.objective}</p>
            </section>

            {/* Creative Approach */}
            <section>
              <span style={sectionLabel}>Creative Approach</span>
              <p style={bodyText}>{project.approach}</p>
            </section>

            {/* Process */}
            <section>
              <span style={sectionLabel}>Production Process</span>
              <p style={bodyText}>{project.process}</p>
            </section>

            {/* Supporting images */}
            {project.supportingImageLabels.length > 0 && (
              <section>
                <span style={sectionLabel}>Process & Supporting Imagery</span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  {project.supportingImageLabels.map((label, i) => (
                    <div key={i}>
                      <MediaPlaceholder
                        label={label}
                        aspectRatio="16:9"
                      />
                      <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', marginTop: '0.4rem', fontFamily: 'monospace' }}>
                        /public/assets/images/{project.slug}-process-{i + 1}.jpg
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Final video */}
            <section>
              <span style={sectionLabel}>Final Film</span>
              <VideoPlaceholder
                label={project.finalVideoPlaceholderLabel}
                aspectRatio="16:9"
                dark
              />
              <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', marginTop: '0.4rem', fontFamily: 'monospace' }}>
                /public/assets/video/{project.slug}-final.mp4
              </p>
            </section>

            {/* Confidentiality note */}
            {project.isConfidential && (
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(200,169,110,0.2)',
                background: 'rgba(200,169,110,0.05)',
                borderRadius: 6,
              }}>
                <Lock size={16} style={{ color: 'var(--c-gold)', flexShrink: 0, marginTop: '0.15rem' }} />
                <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-3)', lineHeight: 1.65 }}>
                  This project was completed under a non-disclosure agreement. Full creative assets
                  and project details are available on request following an introductory call.
                </p>
              </div>
            )}
          </div>

          {/* Right sidebar — sticky note area */}
          <div style={{
            position: 'sticky', top: '6rem',
            padding: '1.5rem',
            background: 'var(--c-bg-2)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 8,
            fontSize: 'var(--t-sm)', color: 'var(--c-text-3)', lineHeight: 1.65,
          }}>
            <span style={{ ...sectionLabel, marginBottom: '0.5rem' }}>About This Project</span>
            <p style={{ marginBottom: '1rem' }}>
              This case study showcases the full creative process — from initial brief through to delivery.
              Real project media will replace these placeholders once assets are uploaded.
            </p>
            <Link href="/#contact" style={{
              display: 'inline-block', padding: '0.6rem 1.25rem',
              background: 'var(--c-gold)', color: '#0e0e0c',
              borderRadius: 4, fontWeight: 600, fontSize: 'var(--t-sm)',
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}>
              Start a Project →
            </Link>
          </div>
        </div>

        <div style={divider} />

        {/* Prev / Next navigation */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1.5rem',
        }}>
          {prev ? (
            <Link href={`/work/${prev.slug}`} style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              textDecoration: 'none', color: 'inherit',
              transition: 'opacity 0.2s',
            }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 6,
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ArrowLeft size={15} style={{ color: 'var(--c-text)' }} />
              </div>
              <div>
                <p style={{ ...metaLabel, marginBottom: '0.2rem' }}>Previous</p>
                <p style={{ fontSize: 'var(--t-sm)', fontWeight: 600, color: 'var(--c-text)' }}>{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/work/${next.slug}`} style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              textDecoration: 'none', color: 'inherit',
              transition: 'opacity 0.2s', textAlign: 'right',
            }}
            >
              <div style={{ textAlign: 'right' }}>
                <p style={{ ...metaLabel, marginBottom: '0.2rem' }}>Next</p>
                <p style={{ fontSize: 'var(--t-sm)', fontWeight: 600, color: 'var(--c-text)' }}>{next.title}</p>
              </div>
              <div style={{
                width: 38, height: 38, borderRadius: 6,
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ArrowRight size={15} style={{ color: 'var(--c-text)' }} />
              </div>
            </Link>
          ) : <div />}
        </div>

      </div>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 860px) {
          article .wrap > div[style*="grid-template-columns: minmax(0,1fr) minmax(0,420px)"],
          article .wrap > div[style*="grid-template-columns: minmax(0,1fr) 300px"] {
            grid-template-columns: 1fr !important;
          }
        }
        article a:hover { opacity: 1 !important; }
      `}</style>
    </article>
  );
}
