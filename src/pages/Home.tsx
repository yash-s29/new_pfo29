import { Github, Linkedin, Mail, ArrowRight, Code, Award, Users } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import avatarImg from '../assets/image.jpeg';

const NAV_HEIGHT = 64;

/* ================= MOTION SYSTEM ================= */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatVariant: Variants = {
  float: {
    y: [0, -6, 0],
    transition: { repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' },
  },
};

export default function Home() {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (!section) return;
    const y = section.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-16 bg-canvas overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent-cyan/20 rounded-full blur-3xl animate-float-ambient" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-accent-violet/20 rounded-full blur-3xl animate-float-ambient" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-36"
      >
        {/* ================= HERO ================= */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* TEXT */}
          <motion.div variants={itemVariants} className="space-y-14">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                Hi, I’m{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
                    Yash Patil
                  </span>
                  <span className="absolute inset-x-0 -bottom-2 h-[6px] bg-gradient-to-r from-accent-cyan to-accent-violet opacity-40 blur-lg" />
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-secondary">
                Full Stack Developer · Data Analytics · Power BI
              </p>

              <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
                I design and engineer high-performance web systems and translate complex data into decisive business insights.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-5">
              <motion.button
                onClick={scrollToProjects}
                variants={floatVariant}
                animate="float"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                           bg-gradient-to-r from-accent-cyan to-accent-violet
                           text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
              >
                View Projects
                <ArrowRight size={18} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.08, y: -2 }}
                href="mailto:ypp1664003@gmail.com?subject=Resume%20Request"
                className="px-8 py-4 rounded-2xl border border-white/20 glass text-secondary hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all"
              >
                Request CV
              </motion.a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 pt-4">
              <SocialLink href="https://github.com/yash-s29" icon={<Github size={20} />} color="cyan" />
              <SocialLink href="https://www.linkedin.com/in/yash-patil-473a13352" icon={<Linkedin size={20} />} color="violet" />
              <SocialLink href="mailto:ypp1664003@gmail.com" icon={<Mail size={20} />} color="cyan" />
            </div>
          </motion.div>

          {/* AVATAR */}
          <motion.div variants={itemVariants} className="relative flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-28 bg-gradient-to-r from-accent-cyan/30 to-accent-violet/30 blur-3xl rounded-full"
            />

            <motion.div
              whileHover={{ scale: 1.08, rotate: 1.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full
                         glass-strong overflow-hidden border border-white/20 shadow-xl"
            >
              <img src={avatarImg} alt="Yash Patil" className="w-full h-full object-cover rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}
        <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Stat icon={<Code size={22} />} value="2+" label="Years Experience" color="cyan" />
          <Stat icon={<Award size={22} />} value="15+" label="Projects Completed" color="violet" />
          <Stat icon={<Users size={22} />} value="80%" label="Client Satisfaction" color="cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Stat({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: 'cyan' | 'violet';
}) {
  const gradient =
    color === 'cyan'
      ? 'bg-gradient-to-br from-accent-cyan to-sky-500'
      : 'bg-gradient-to-br from-accent-violet to-purple-500';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.04 }}
      className="glass rounded-2xl p-7 shadow-lg transition-all"
    >
      <div className="flex items-center gap-5">
        <div className={`relative p-4 rounded-xl text-white ${gradient}`}>
          <span className="absolute inset-0 blur-xl opacity-50 bg-white/30 rounded-xl" />
          <span className="relative z-10">{icon}</span>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-primary">{value}</h3>
          <p className="text-secondary">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

function SocialLink({
  href,
  icon,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  color: 'cyan' | 'violet';
}) {
  const hoverBg = color === 'cyan' ? 'bg-accent-cyan/20' : 'bg-accent-violet/20';
  const hoverText = color === 'cyan' ? 'text-accent-cyan' : 'text-accent-violet';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={floatVariant}
      animate="float"
      whileHover={{ scale: 1.2, y: -4 }}
      className={`relative p-4 rounded-xl glass text-primary hover:${hoverText} hover:${hoverBg} transition-all shadow-md`}
    >
      {/* Pulsing Glow */}
      <motion.div
        className={`absolute inset-0 rounded-xl ${hoverBg}`}
        variants={{
          glow: { scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3], transition: { repeat: Infinity, repeatType: 'reverse', duration: 2 } },
        }}
        animate="glow"
      />
      {icon}
    </motion.a>
  );
}
