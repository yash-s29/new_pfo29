import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const NAV_HEIGHT = 64;
const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const offsetTop = section.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollPos = window.scrollY + NAV_HEIGHT + 40;
        for (const section of sections) {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItemVariant: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const mobileMenuVariant: Variants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.35, ease: 'easeInOut' } },
    exit: { y: '-100%', opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      {/* Gradient background like footer */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 rounded-b-xl
          bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-purple-400/50
          blur-3xl animate-float-ambient pointer-events-none" />
      </div>

      <motion.div
        className={`h-16 transition-all duration-300
          ${scrolled ? 'glass-strong/50 shadow-xl' : 'glass/50'}
          border-b border-black/10 relative z-10`}
        initial={{ y: -NAV_HEIGHT }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between relative z-10">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold tracking-tight text-primary
                       hover:text-accent-cyan transition-colors rounded-md"
          >
            Yash<span className="text-accent-violet">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-medium text-secondary hover:text-primary transition-colors rounded-md"
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariant}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-[3px]
                      bg-gradient-to-r from-accent-cyan to-accent-violet
                      transition-transform duration-300 origin-left
                      ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                  <span
                    className={`absolute -inset-1 rounded-md opacity-0 transition-opacity duration-500
                      bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30
                      ${isActive ? 'opacity-50 animate-pulse-slow' : 'group-hover:opacity-20'}`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setIsOpen(prev => !prev)}
            className="md:hidden p-2 rounded-lg text-secondary hover:bg-white/30 transition"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-x-0 top-16 z-40 overflow-hidden"
          >
            <div className="absolute -inset-6 rounded-3xl
              bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-purple-400/50
              blur-3xl animate-float-ambient pointer-events-none" />

            <motion.div
              className="glass-strong/50 border-t border-black/10 px-4 py-6 space-y-2 relative z-10"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navItemVariant}
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition
                      ${isActive
                        ? 'bg-white/30 text-primary'
                        : 'text-secondary hover:bg-white/20 hover:scale-105 transform transition-transform'}`}
                    initial="hidden"
                    animate="visible"
                    variants={navItemVariant}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
