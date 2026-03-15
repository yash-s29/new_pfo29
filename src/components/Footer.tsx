import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function Footer() {
  const socials = [
    { Icon: Github, href: 'https://github.com/yash-s29', label: 'GitHub Profile', color: 'cyan' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/yash-patil279', label: 'LinkedIn Profile', color: 'violet' },
    { Icon: Mail, href: 'mailto:ypp1664003@gmail.com', label: 'Send Email', color: 'cyan' },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.8, ease: 'easeOut' } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const socialItem: Variants = {
    idle: { y: [0, -4, 0], transition: { repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' } },
    hover: { y: -6, scale: 1.2, transition: { type: 'spring', stiffness: 400, damping: 15 } },
    glow: { scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4], transition: { repeat: Infinity, repeatType: 'reverse', duration: 2, ease: 'easeInOut' } },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="relative mt-32 border-t border-gray-300/20 glass bg-white/5 backdrop-blur-md overflow-hidden"
    >
      {/* Ambient Gradient Glow */}
      <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-accent-cyan/30 via-accent-violet/30 to-accent-cyan/30 blur-3xl animate-float-ambient pointer-events-none" />

      <motion.div className="relative max-w-7xl mx-auto px-6 py-14 space-y-10" variants={containerVariants}>
        {/* Top Row */}
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10" variants={itemVariants}>
          {/* Brand Info */}
          <motion.div className="text-center md:text-left space-y-2" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-black animate-fade">Yash Patil</h3>
            <p className="text-sm text-gray-600 animate-fade">Building modern, interactive web experiences</p>
          </motion.div>

          {/* Social Icons */}
          <motion.div className="flex items-center gap-6 relative z-10" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            {socials.map(({ Icon, href, color, label }, index) => {
              const hoverColor = color === 'cyan'
                ? 'hover:text-accent-cyan hover:border-accent-cyan'
                : 'hover:text-accent-violet hover:border-accent-violet';
              const glowColor = color === 'cyan' ? 'bg-accent-cyan/40' : 'bg-accent-violet/40';

              return (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center"
                  onMouseEnter={() => setShowTooltip(label)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-full border border-gray-300/30 text-black/70
                               transition-all duration-300 transform flex items-center justify-center ${hoverColor}`}
                    variants={socialItem}
                    animate="idle"
                    whileHover="hover"
                  >
                    {/* Pulsing Glow */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${glowColor}`}
                      variants={socialItem}
                      animate="glow"
                    />
                    <Icon size={20} className="relative z-10" />
                  </motion.a>

                  {/* Tooltip */}
                  {showTooltip === label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2
                                 rounded-lg bg-black/85 px-3 py-1.5 text-xs font-medium text-white shadow-lg z-50 pointer-events-none"
                    >
                      {label}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent relative z-10 animate-fade" variants={itemVariants} />

        {/* Bottom Row */}
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 relative z-10" variants={itemVariants}>
          <p className="flex items-center gap-2">
            Made with <Heart size={14} className="text-accent-orange fill-accent-orange animate-pulse" /> using React & Tailwind
          </p>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
