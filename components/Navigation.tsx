'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work',     href: '/#work' },
  { label: 'About',   href: '/#about' },
  { label: 'Services',href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef   = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node) && !toggleRef.current?.contains(e.target as Node))
        setMenuOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMenuOpen(false); toggleRef.current?.focus(); } };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'padding 0.3s, background 0.3s',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: scrolled ? 'rgba(14,14,12,0.95)' : 'rgba(14,14,12,0.75)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Wordmark + Logo */}
        <Link href="/" aria-label="Ronak Gadhavi — Home"
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            border: '2px solid rgba(200,169,110,0.5)',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#0a0a09',
            flexShrink: 0,
          }}>
            <img src="/assets/images/logo.jpg" alt="Ronak Gadhavi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--c-text)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            Ronak Gadhavi
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop" aria-label="Primary navigation">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              style={{ fontSize: 'var(--t-sm)', color: 'var(--c-text-2)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-text-2)')}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary" style={{ padding: '0.55rem 1.3rem' }}>
            Let&apos;s Talk
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          ref={toggleRef}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="nav-mobile-toggle"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            color: 'var(--c-text)',
            cursor: 'pointer',
            padding: '0.5rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div id="mobile-menu" ref={menuRef} aria-hidden={!menuOpen}
        style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(14,14,12,0.98)',
          borderBottom: '1px solid rgba(200,169,110,0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          overflow: 'hidden',
          maxHeight: menuOpen ? '400px' : '0',
          opacity: menuOpen ? 1 : 0,
          transition: 'max-height 0.35s ease, opacity 0.25s ease',
        }}
      >
        <nav style={{ padding: '1.5rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--c-text)', padding: '0.35rem 0' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary"
            style={{ marginTop: '0.5rem', textAlign: 'center', justifyContent: 'center', width: '100%' }}
            onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
