'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Topics', href: '/articles' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-secondary/95 backdrop-blur-md border-b border-white/10 py-4' :'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo size={36} />
            <span className="font-display text-xl font-bold tracking-tight text-white">
              AINewsHub
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#subscribe"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Subscribe Free
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-secondary/98 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks?.map((link, i) => (
          <Link
            key={link?.label}
            href={link?.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-bold text-white hover:text-accent transition-colors"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {link?.label}
          </Link>
        ))}
        <Link
          href="/#subscribe"
          onClick={() => setMenuOpen(false)}
          className="mt-4 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest"
        >
          Subscribe Free
        </Link>
      </div>
    </>
  );
}
