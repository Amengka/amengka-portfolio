import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { languageOptions, useLanguage } from '../i18n';

const navLinks = [
  { href: '#', labelKey: 'home' },
  { href: '#experience', labelKey: 'experience' },
  { href: '#skills', labelKey: 'skills' },
  { href: '#projects', labelKey: 'projects' },
  { href: '#education', labelKey: 'education' },
  { href: '#beyond-code', labelKey: 'beyondCode' },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-6xl mx-auto glass rounded-full px-6 py-3">
        <div className="flex items-center justify-end gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {t.nav[link.labelKey]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center rounded-full border border-border/60 bg-background/50 p-0.5 text-xs font-medium"
              role="group"
              aria-label={t.controls.languageLabel}
            >
              {languageOptions.map((option) => {
                const active = language === option.code;

                return (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => setLanguage(option.code)}
                    aria-label={t.controls[option.ariaLabelKey]}
                    aria-pressed={active}
                    className={`rounded-full px-2.5 py-1 transition-colors ${
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted hover:text-foreground'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-muted hover:text-foreground transition-colors"
                aria-label={mobileOpen ? t.controls.closeMenu : t.controls.menu}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 space-y-2 overflow-hidden"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-muted hover:text-foreground transition-colors text-center"
                  >
                    {t.nav[link.labelKey]}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
