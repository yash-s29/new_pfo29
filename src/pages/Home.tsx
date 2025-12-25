import { Github, Linkedin, Mail, ArrowRight, Code, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import avatarImg from '../assets/image.jpeg';

const NAV_HEIGHT = 64;

export default function Home() {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (!section) return;
    const y = section.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-16 bg-canvas overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-28">

        {/* ================= HERO ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                Hi, I’m{' '}
                <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
                  Yash Patil
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-secondary">
                Full Stack Developer · Data Analytics · Power BI
              </p>

              <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
                I craft modern, scalable web applications and transform raw data
                into actionable insights. My work blends engineering precision
                with analytics-driven decision making.
              </p>
            </div>

            {/* ================= CTA ================= */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl
                           bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-semibold
                           hover:brightness-105 hover:shadow-glowCyan
                           transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                href="mailto:ypp1664003@gmail.com?subject=Resume%20Request"
                className="px-6 py-3 rounded-2xl border border-black/20
                           text-secondary hover:border-accent-cyan hover:text-accent-cyan
                           transition-all duration-300
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
              >
                Request CV
              </motion.a>
            </div>

            {/* ================= SOCIALS ================= */}
            <div className="flex gap-3 pt-2">
              <SocialLink href="https://github.com/yash-s29" icon={<Github />} color="cyan" />
              <SocialLink href="https://www.linkedin.com/in/yash-patil-473a13352" icon={<Linkedin />} color="violet" />
              <SocialLink href="mailto:ypp1664003@gmail.com" icon={<Mail />} color="cyan" />
            </div>
          </motion.div>

          {/* ================= AVATAR ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute -inset-20 bg-gradient-to-r from-accent-cyan/30 to-accent-violet/30 blur-3xl rounded-full animate-float-ambient" />

            {/* Frame */}
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: '0 0 60px rgba(59,130,246,0.25)' }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full
                         glass-strong flex items-center justify-center overflow-hidden
                         transition-transform duration-300"
            >
              <img
                src={avatarImg}
                alt="Yash Patil"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Stat icon={<Code />} value="2+" label="Years Experience" color="cyan" />
          <Stat icon={<Award />} value="15+" label="Projects Completed" color="violet" />
          <Stat icon={<Users />} value="80%" label="Client Satisfaction" color="cyan" />
        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE COMPONENTS ================= */
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
  const bgColor = color === 'cyan' ? 'bg-accent-cyan' : 'bg-accent-violet';
  const shadowColor = color === 'cyan' ? 'hover:shadow-glowCyan' : 'hover:shadow-glowViolet';

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`group glass rounded-2xl p-6 transition-all ${shadowColor}`}
    >
      <div className="flex items-center gap-4">
        <div className={`${bgColor} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-primary">{value}</h3>
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
  const hoverBg = color === 'cyan' ? 'hover:bg-accent-cyan/20' : 'hover:bg-accent-violet/20';
  const hoverText = color === 'cyan' ? 'hover:text-accent-cyan' : 'hover:text-accent-violet';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.05 }}
      className={`p-3 rounded-xl glass text-primary
                 ${hoverBg} ${hoverText}
                 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan`}
    >
      {icon}
    </motion.a>
  );
}
