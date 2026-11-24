'use client';

import { useState, useRef } from 'react';
import featuredVideos, { FeaturedVideo } from '@/data/videos';
import { Play, Smartphone, Monitor, Film, Layers } from 'lucide-react';

function VideoCard({ video }: { video: FeaturedVideo }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const isVertical = video.format === '9:16';
  const isPortrait = video.format === '4:5';

  return (
    <div
      style={{
        background: 'var(--c-bg-2)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: isVertical ? 18 : 12,
        overflow: 'hidden',
        transition: 'border-color 0.25s, transform 0.3s, box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isVertical ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,169,110,0.4)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.6)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = isVertical ? '0 10px 30px rgba(0,0,0,0.5)' : 'none';
      }}
    >
      <div
        onClick={togglePlay}
        style={{
          position: 'relative',
          aspectRatio: video.aspectRatio,
          background: '#0a0a09',
          flexShrink: 0,
          cursor: 'pointer',
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          src={video.videoSrc}
          playsInline
          preload="metadata"
          controls={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        {!isPlaying && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(14,14,12,0.9) 0%, rgba(14,14,12,0.3) 50%, rgba(14,14,12,0.4) 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity 0.2s',
              padding: '1.25rem',
            }}
          >
            <div
              style={{
                width: isVertical ? 56 : 60,
                height: isVertical ? 56 : 60,
                borderRadius: '50%',
                background: 'var(--c-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(200,169,110,0.45)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              <Play size={isVertical ? 22 : 26} style={{ color: '#0e0e0c', marginLeft: 3, fill: '#0e0e0c' }} />
            </div>

            <span
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                background: 'rgba(14,14,12,0.85)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 100,
                padding: '0.25rem 0.65rem',
                fontSize: '0.68rem',
                color: 'var(--c-gold)',
                letterSpacing: '0.04em',
                backdropFilter: 'blur(8px)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              {isVertical && <Smartphone size={11} />}
              {!isVertical && !isPortrait && <Monitor size={11} />}
              {isPortrait && <Layers size={11} />}
              {video.badge}
            </span>

            <span
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'rgba(14,14,12,0.85)',
                borderRadius: 4,
                padding: '0.2rem 0.5rem',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'monospace',
                letterSpacing: '0.04em',
              }}
            >
              {video.width}×{video.height}
            </span>

            <span
              style={{
                position: 'absolute',
                bottom: 14,
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.8)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
              }}
            >
              ▶ Tap to Play
            </span>
          </div>
        )}
      </div>

      <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 'var(--t-xs)', color: 'var(--c-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            {video.category}
          </span>
          <span style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)', fontFamily: 'monospace' }}>{video.year}</span>
        </div>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--c-text)', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
          {video.title}
        </h3>
        <p style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-3)', lineHeight: 1.5 }}>
          {video.description}
        </p>
        {video.client && (
          <p style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)', marginTop: 'auto', paddingTop: '0.4rem' }}>
            Client: <span style={{ color: 'var(--c-text-2)', fontWeight: 500 }}>{video.client}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default function VideosSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | '9:16' | '16:9' | '4:5'>('all');

  const filtered = activeFilter === 'all' ? featuredVideos : featuredVideos.filter(v => v.format === activeFilter);
  const verticalReels = featuredVideos.filter(v => v.format === '9:16' || v.format === '4:5');
  const landscapeFilms = featuredVideos.filter(v => v.format === '16:9');

  return (
    <section id="work" style={{ background: 'var(--c-bg-2)', paddingBlock: 'var(--section-y)' }}>
      <div id="videos" style={{ position: 'relative', top: '-100px' }} />
      <div className="wrap">

        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="gold-line" />
          <div className="section-hdr-row" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <span className="label" style={{ marginBottom: '0.5rem', display: 'block' }}>Native Video Formats</span>
              <h2 style={{ fontSize: 'var(--t-4xl)', color: 'var(--c-text)' }}>Watch My Work</h2>
            </div>
            <p className="section-hdr-desc" style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-3)', maxWidth: '42ch', lineHeight: 1.6 }}>
              Art-directed containers matching each video&apos;s true aspect ratio — from 9:16 vertical Reels to 16:9 cinematic commercial films.
            </p>
          </div>
        </div>

        {/* Format Filter Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {[
            { id: 'all', label: 'All Formats', count: featuredVideos.length },
            { id: '9:16', label: '9:16 Vertical Reels', count: featuredVideos.filter(v => v.format === '9:16').length },
            { id: '16:9', label: '16:9 Commercial Films', count: featuredVideos.filter(v => v.format === '16:9').length },
            { id: '4:5', label: '4:5 Motion Graphics', count: featuredVideos.filter(v => v.format === '4:5').length },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem 1rem',
                borderRadius: 100,
                fontSize: 'var(--t-xs)',
                fontWeight: 600,
                border: activeFilter === f.id ? '1px solid var(--c-gold)' : '1px solid rgba(255,255,255,0.08)',
                background: activeFilter === f.id ? 'rgba(200,169,110,0.12)' : 'rgba(255,255,255,0.03)',
                color: activeFilter === f.id ? 'var(--c-gold)' : 'var(--c-text-3)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {f.label}
              <span
                style={{
                  background: activeFilter === f.id ? 'var(--c-gold)' : 'rgba(255,255,255,0.08)',
                  color: activeFilter === f.id ? '#0e0e0c' : 'rgba(255,255,255,0.5)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: 10,
                  fontSize: '0.65rem',
                }}
              >
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* ALL mode — two curated rows */}
        {activeFilter === 'all' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

            {/* Row 1: Vertical Reels */}
            <div>
              <div className="videos-row-meta" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Smartphone size={16} style={{ color: 'var(--c-gold)', flexShrink: 0 }} />
                <h3 style={{ fontSize: 'var(--t-xl)', color: 'var(--c-text)', fontWeight: 600 }}>
                  Vertical Reels, Shorts &amp; Motion Design
                </h3>
                <span className="videos-row-dims" style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)', fontFamily: 'monospace' }}>
                  (1080×1920 · 9:16 &amp; 720×900 · 4:5)
                </span>
              </div>
              <div
                className="videos-vertical-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  alignItems: 'start',
                }}
              >
                {verticalReels.map(v => (
                  <VideoCard key={v.id} video={v} />
                ))}
              </div>
            </div>

            {/* Row 2: Widescreen */}
            <div>
              <div className="videos-row-meta" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Film size={16} style={{ color: 'var(--c-gold)', flexShrink: 0 }} />
                <h3 style={{ fontSize: 'var(--t-xl)', color: 'var(--c-text)', fontWeight: 600 }}>
                  Widescreen Commercials &amp; Corporate Films
                </h3>
                <span className="videos-row-dims" style={{ fontSize: 'var(--t-xs)', color: 'var(--c-text-3)', fontFamily: 'monospace' }}>
                  (1920×1080 · 16:9 Widescreen)
                </span>
              </div>
              <div
                className="videos-landscape-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                  gap: '1.5rem',
                  alignItems: 'start',
                }}
              >
                {landscapeFilms.map(v => (
                  <VideoCard key={v.id} video={v} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Filtered mode */}
        {activeFilter !== 'all' && (
          <div
            className="videos-filtered-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: activeFilter === '9:16'
                ? 'repeat(auto-fit, minmax(280px, 340px))'
                : 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '1.5rem',
              justifyContent: activeFilter === '9:16' ? 'center' : 'start',
            }}
          >
            {filtered.map(v => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
