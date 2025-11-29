import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "../lib/motion";
import { navigation } from "../data/content";

const Navbar = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 p-4">
      <motion.nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "border-white/10 bg-ink/90"
            : "border-transparent bg-ink/50"
        }`}
        initial={prefersReducedMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {/* Logo */}
        <a href="#top" className="font-display text-xl font-bold text-white">
          Rifqi<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-xl bg-accent px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-white sm:block">
            Let's Talk
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
            aria-label="Toggle menu">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-ink/95 p-4 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}>
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-xl bg-accent py-3 text-center text-sm font-semibold text-ink">
                Let's Talk
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
