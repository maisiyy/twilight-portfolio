'use client';

import { useState } from 'react';
import { Menu, X, Moon } from 'lucide-react';

export type Theme = 'twilight' | 'new-moon' | 'eclipse' | 'breaking-dawn';

const THEMES: { label: string; value: Theme }[] = [
  { label: 'Twilight', value: 'twilight' },
  { label: 'New Moon', value: 'new-moon' },
  { label: 'Eclipse', value: 'eclipse' },
  { label: 'Breaking Dawn', value: 'breaking-dawn' },
];

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[var(--surface-glass)] border-b border-[var(--border-glass)]">
      <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-[Cinzel] text-sm tracking-widest text-[var(--text-primary)] uppercase">
          SNM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setThemeMenuOpen((v) => !v)}
              aria-label="Switch theme"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              <Moon size={14} />
            </button>

            {themeMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg border border-[var(--border-glass)] bg-[var(--surface-glass-strong)] backdrop-blur-xl overflow-hidden">
                {THEMES.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => {
                      onThemeChange(t.value);
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                      theme === t.value
                        ? 'text-[var(--accent)] bg-[var(--surface-glass)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--surface-glass)]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-[var(--text-primary)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border-glass)] bg-[var(--surface-glass-strong)] backdrop-blur-xl px-8 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2 flex-wrap">
            {THEMES.map((t) => (
              <button
                key={t.value}
                onClick={() => onThemeChange(t.value)}
                className={`font-mono text-[10px] uppercase px-2.5 py-1.5 rounded-md border ${
                  theme === t.value
                    ? 'border-[var(--accent)] text-[var(--accent)]'
                    : 'border-[var(--border-glass)] text-[var(--text-muted)]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
