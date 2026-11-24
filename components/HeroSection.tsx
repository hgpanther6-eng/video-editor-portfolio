'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Play, Pause, Volume2, VolumeX, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section id="top" style={{
      background: 'var(--c-bg)',
      minHeight: '100vh',
      paddingTop: 'clamp(5rem, 7.5vh, 7rem)',
      paddingBottom: '4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(200,169,110,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="wrap hero-wrap" style={{ position: 'relative' }}>

        {/* Available pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          {/* Short version shown on mobile via CSS */}
          <span className="hero-pill-short" style={{
            display: 'none', alignItems: 'center', gap: '0.45rem',
            padding: '0.35rem 0.85rem', borderRadius: 100,
            background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.25)',
            fontSize: 'var(--t-xs)', color: 'var(--c-gold)', letterSpacing: '0.04em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            Open for Freelance
          </span>
          {/* Long version for desktop, hidden on mobile */}
          <span className="hero-pill-long" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.35rem 0.85rem', borderRadius: 100,
            background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.25)',
            fontSize: 'var(--t-xs)', color: 'var(--c-gold)', letterSpacing: '0.04em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            Open for Freelance &amp; Creative Collaborations
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-h1" style={{
          fontSize: 'var(--t-hero)', fontWeight: 700, lineHeight: 1.05,
          letterSpacing: '-0.035em', color: 'var(--c-text)',
          maxWidth: '17ch', marginBottom: '1.25rem',
        }}>
          I turn ideas into visuals that make people{' '}
          <span style={{ color: 'var(--c-gold)', fontStyle: 'italic', fontWeight: 400 }}>
            stop and watch.
          </span>
        </h1>

        {/* Supporting text */}
        <p className="hero-sub" style={{
          fontSize: 'var(--t-lg)', color: 'var(--c-text-2)', lineHeight: 1.6,
          maxWidth: '52ch', marginBottom: '1.75rem', fontWeight: 400,
        }}>
          I&apos;m Ronak Gadhavi — a video editor and motion designer creating engaging visual
          experiences for brands, businesses and creators worldwide.
        </p>

        {/* CTAs */}
        <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <Link href="/#work" className="btn-primary">
            Explore My Work <ArrowRight size={16} />
          </Link>
          <Link href="/#contact" className="btn-ghost">
            Let&apos;s Work Together
          </Link>
        </div>

        {/* Showreel header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', marginBottom: '1rem',
        }}>
          <div>
            <span style={{ fontSize: 'var(--t-xs)', color: 'var(--c-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              Featured Creative Reel
            </span>
            <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-3)', margin: '0.2rem 0 0' }}>
              Vibe Creative — Hocco Brand Reel · 9:16 Vertical
            </p>
          </div>
        </div>

        {/* Video container */}
        <div className="hero-video-outer" style={{ position: 'relative', width: '100%', maxWidth: '360px', margin: '0 auto' }}>
          <div style={{
            position: 'absolute', top: -1, left: -1, right: -1, bottom: -1, borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(200,169,110,0.35), rgba(200,169,110,0.05), transparent)',
            pointerEvents: 'none', zIndex: 0,
          }} />
          <div className="video-wrap" style={{
            position: 'relative', zIndex: 1, width: '100%', aspectRatio: '9/16', borderRadius: 18,
            border: '1px solid rgba(200,169,110,0.35)', overflow: 'hidden',
            background: '#0a0a09', boxShadow: '0 16px 48px rgba(0,0,0,0.7)',
          }}>
            <video ref={videoRef} src="/assets/video/hocco-reel.mp4"
              poster="/assets/images/showreel-poster.svg"
              muted={muted} playsInline preload="metadata"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              onEnded={() => setPlaying(false)} aria-label="Ronak Gadhavi showreel" />

            {!playing && (
              <div onClick={togglePlay} style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '1.25rem',
                background: 'linear-gradient(135deg, rgba(22,22,20,0.85) 0%, rgba(30,30,27,0.75) 100%)',
                cursor: 'pointer', zIndex: 2, padding: '1.5rem',
              }}>
                <div style={{
                  width: 68, height: 68, borderRadius: '50%',
                  border: '2px solid rgba(200,169,110,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--c-gold)', boxShadow: '0 8px 32px rgba(200,169,110,0.5)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}>
                  <Play size={28} style={{ color: '#0e0e0c', marginLeft: 4, fill: '#0e0e0c' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: 'var(--c-text)', fontSize: 'var(--t-base)', fontWeight: 600, marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>
                    Watch Creative Reel
                  </p>
                  <p style={{ fontSize: 'var(--t-xs)', color: 'var(--c-gold)', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    1080×1920 · 9:16 Vertical Reel
                  </p>
                </div>
              </div>
            )}

            <div className="video-controls-bar" style={{ zIndex: 3 }}>
              <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}
                style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0e0e0c' }}>
                {playing ? <Pause size={15} /> : <Play size={15} style={{ marginLeft: 2 }} />}
              </button>
              <button onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}
                style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0e0e0c' }}>
                {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
              <span style={{ marginLeft: 'auto', fontSize: 'var(--t-xs)', color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace' }}>
                9:16 Reel
              </span>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: '1.5rem', marginTop: '2.5rem',
          paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {[
            { n: '2.5+', l: 'Years Experience' },
            { n: 'OpenEduCat', l: 'Full-time Role' },
            { n: '6', l: 'Featured Projects' },
            { n: 'Worldwide', l: 'Remote Available' },
          ].map(s => (
            <div key={s.l} className="hero-stat">
              <div style={{ fontSize: 'var(--t-2xl)', fontWeight: 700, color: 'var(--c-gold)', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
