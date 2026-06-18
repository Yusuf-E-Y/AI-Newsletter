import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2.5">
            <AppLogo size={32} />
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              AINewsHub
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/articles' },
              { label: 'LLMs', href: '/articles' },
              { label: 'Robotics', href: '/articles' },
              { label: 'Privacy', href: '/articles' },
              { label: 'Terms', href: '/articles' },
            ]?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Social + Copyright */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-foreground transition-colors p-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground transition-colors p-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <span className="text-xs text-muted-foreground ml-2">© 2026 AINewsHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
