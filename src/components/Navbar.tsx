import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const NAV_HEIGHT = 64;

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
];

/* ---------------- MOTION VARIANTS ---------------- */

const navbarVariants: Variants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const mobileMenuVariants: Variants = {
  hidden: { y: -24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: -24,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.6, 1] },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

    window.scrollTo({ top, behavior: 'smooth' });
    setIsOpen(false);
  };

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section detection */
  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const pos = window.scrollY + NAV_HEIGHT + 48;
      for (const section of sections) {
        if (
          pos >= section.offsetTop &&
          pos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      {/* Ambient glow layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-x-0 -top-24 h-40 bg-violet-cyan blur-3xl opacity-30 animate-float-ambient" />
      </div>

      {/* Navbar */}
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`h-16 transition-all duration-300
          ${scrolled ? 'glass-strong shadow-lift' : 'glass'}
          border-b border-black/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-heading font-bold tracking-tight text-primary hover:text-accent-cyan transition-colors"
          >
            Yash<span className="text-accent-violet">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => {
              const active = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-medium text-secondary hover:text-primary transition-colors"
                >
                  {item.name}

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full
                      bg-gradient-to-r from-accent-cyan to-accent-violet
                      origin-left transition-transform duration-300
                      ${active ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(v => !v)}
            className="md:hidden p-2 rounded-lg text-secondary hover:bg-white/30 transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-x-0 top-16 z-40"
          >
            <div className="glass-strong border-t border-black/10 px-4 py-6 space-y-2">
              {navItems.map((item, i) => {
                const active = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition
                      ${active
                        ? 'bg-white/40 text-primary'
                        : 'text-secondary hover:bg-white/20'}`}
                  >
                    {item.name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
