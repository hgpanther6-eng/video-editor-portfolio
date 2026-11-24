'use client';

import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MediaPlaceholderProps {
  label: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16';
  dark?: boolean;
  className?: string;
  videoSrc?: string;
  posterSrc?: string;
  showreel?: boolean;
}

function getAspectClass(ratio: string) {
  switch (ratio) {
    case '4:3': return 'aspect-[4/3]';
    case '1:1': return 'aspect-square';
    case '9:16': return 'aspect-[9/16]';
    default: return 'aspect-video'; // 16:9
  }
}

export function MediaPlaceholder({
  label,
  aspectRatio = '16:9',
  dark = false,
  className = '',
}: MediaPlaceholderProps) {
  return (
    <div
      className={`media-placeholder ${dark ? 'media-placeholder-dark' : ''} ${getAspectClass(aspectRatio)} ${className}`}
      aria-label={label}
      role="img"
    >
      <div className="relative z-10 flex flex-col items-center gap-3 max-w-sm text-center">
        <div
          className={`w-12 h-12 rounded-full border-2 ${dark ? 'border-warm-white/20' : 'border-charcoal/20'} flex items-center justify-center`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className={`w-6 h-6 ${dark ? 'text-warm-white/40' : 'text-charcoal/30'}`}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <p
          className={`text-xs font-mono leading-relaxed ${dark ? 'text-warm-white/40' : 'text-charcoal/50'}`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export function VideoPlaceholder({
  label,
  aspectRatio = '16:9',
  dark = false,
  className = '',
  videoSrc,
  posterSrc,
  showreel = false,
}: MediaPlaceholderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  if (!videoSrc) {
    return (
      <div
        className={`video-wrapper relative group media-placeholder ${dark ? 'media-placeholder-dark' : ''} ${getAspectClass(aspectRatio)} ${className}`}
        aria-label={label}
      >
        <div className="relative z-10 flex flex-col items-center gap-3 max-w-sm text-center">
          <div
            className={`w-16 h-16 rounded-full border-2 ${dark ? 'border-warm-white/20' : 'border-charcoal/20'} flex items-center justify-center`}
          >
            <Play
              size={24}
              className={dark ? 'text-warm-white/40 ml-1' : 'text-charcoal/30 ml-1'}
            />
          </div>
          <p className={`text-xs font-mono leading-relaxed ${dark ? 'text-warm-white/40' : 'text-charcoal/50'}`}>
            {label}
          </p>
          {showreel && (
            <p className={`text-xs ${dark ? 'text-warm-white/25' : 'text-charcoal/35'}`}>
              Recommended: 1920×1080px · H.264 MP4 · 15–25 seconds
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`video-wrapper relative group ${getAspectClass(aspectRatio)} ${className} bg-charcoal overflow-hidden`}>
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        muted={muted}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onEnded={() => setPlaying(false)}
        aria-label={label}
      />
      {/* Controls */}
      <div className="video-controls absolute bottom-4 left-4 right-4 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-warm-white/90 text-charcoal flex items-center justify-center hover:bg-warm-white transition-colors shadow-lg"
          aria-label={playing ? 'Pause video' : 'Play video'}
        >
          {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-warm-white/90 text-charcoal flex items-center justify-center hover:bg-warm-white transition-colors shadow-lg"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
}
