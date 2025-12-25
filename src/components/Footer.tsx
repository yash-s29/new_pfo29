import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const socials = [
    { Icon: Github, href: 'https://github.com/yash-s29', color: 'cyan' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/yash-patil-473a13352/', color: 'violet' },
    { Icon: Mail, href: 'mailto:ypp1664003@gmail.com', color: 'cyan' },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const containerVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.8, ease: 'easeOut' },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariant}
      className="relative mt-32 border-t border-gray-300/20 glass bg-white/5 backdrop-blur-md overflow-hidden"
    >
      {/* Floating Gradient Glow */}
      <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-accent-cyan/30 via-accent-violet/30 to-accent-cyan/30 blur-3xl animate-float-ambient pointer-events-none" />

      <motion.div
        className="relative max-w-7xl mx-auto px-6 py-14 space-y-10"
        variants={containerVariant}
        initial="hidden"
        animate={controls}
      >
        {/* TOP ROW */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10"
          variants={itemVariant}
        >
          {/* BRAND */}
          <motion.div
            className="text-center md:text-left space-y-2"
            variants={itemVariant}
          >
            <h3 className="text-xl font-semibold text-black">Yash Patil</h3>
            <p className="text-sm text-gray-600">
              Building modern, interactive web experiences
            </p>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            className="flex items-center gap-6 relative z-10"
            variants={itemVariant}
          >
            {socials.map(({ Icon, href, color }, index) => {
              const hoverColor =
                color === 'cyan'
                  ? 'hover:text-accent-cyan hover:border-accent-cyan'
                  : 'hover:text-accent-violet hover:border-accent-violet';
              const hoverBg =
                color === 'cyan'
                  ? 'group-hover:bg-accent-cyan/10'
                  : 'group-hover:bg-accent-violet/10';
              return (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 rounded-full border border-gray-300/30 text-black/70
                             transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center ${hoverColor}`}
                  whileHover={{ scale: 1.1 }}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariant}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon size={20} />
                  <span
                    className={`absolute inset-0 rounded-full ${hoverBg} opacity-0 group-hover:opacity-100 transition duration-300`}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          className="my-10 h-px w-full bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent relative z-10"
          variants={itemVariant}
        />

        {/* BOTTOM ROW */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 relative z-10"
          variants={itemVariant}
        >
          <p className="flex items-center gap-2">
            Made with{' '}
            <Heart
              size={14}
              className="text-accent-orange fill-accent-orange animate-pulse"
            />{' '}
            using React & Tailwind
          </p>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
