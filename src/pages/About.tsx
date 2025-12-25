import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Database,
  TrendingUp,
  Wrench,
  Server,
  Layout,
  BarChart3,
  PieChart,
  Globe,
} from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    icon: <Code2 size={22} />,
    skills: [
      { name: 'React', proficiency: 95 },
      { name: 'TypeScript', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 92 },
      { name: 'Next.js', proficiency: 85 },
    ],
  },
  {
    title: 'Backend Systems',
    icon: <Server size={22} />,
    skills: [
      { name: 'Node.js', proficiency: 88 },
      { name: 'Express.js', proficiency: 85 },
      { name: 'Python', proficiency: 80 },
      { name: 'PHP', proficiency: 70 },
    ],
  },
  {
    title: 'Databases',
    icon: <Database size={22} />,
    skills: [
      { name: 'SQL', proficiency: 82 },
      { name: 'MariaDB', proficiency: 82 },
      { name: 'MongoDB', proficiency: 90 },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: <TrendingUp size={22} />,
    skills: [
      { name: 'Pandas', proficiency: 90 },
      { name: 'SQL Analytics', proficiency: 88 },
      { name: 'Data Visualization', proficiency: 85 },
      { name: 'Machine Learning', proficiency: 75 },
    ],
  },
  {
    title: 'Tools & Infrastructure',
    icon: <Wrench size={22} />,
    skills: [
      { name: 'Git', proficiency: 92 },
      { name: 'Docker', proficiency: 78 },
      { name: 'AWS', proficiency: 75 },
      { name: 'CI/CD', proficiency: 80 },
    ],
  },
];

export default function About() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  /* ---------- Auto-slide ---------- */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skillCategories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="min-h-screen pt-20 bg-canvas">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-primary mb-5">
            About <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-lg text-secondary">
            I focus on building systems that are visually clear, logically sound,
            and reliable under real-world use.
          </p>
        </motion.header>

        {/* ================= SKILLS SLIDER ================= */}
        <section
          className="relative flex justify-center items-center overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="w-full max-w-md glass-strong rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent-cyan/15 text-accent-cyan">
                  {skillCategories[index].icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">{skillCategories[index].title}</h3>
              </div>

              <div className="space-y-4">
                {skillCategories[index].skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-secondary">{skill.name}</span>
                      <span className="text-muted">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-accent-cyan/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ================= WHAT DRIVES ME ================= */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-primary mb-10 text-center"
          >
            What Drives Me
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Layout />, title: 'UI Development', desc: 'Clean layouts, motion discipline, and component systems that scale.', color: 'cyan' },
              { icon: <PieChart />, title: 'Data Visualization', desc: 'Making complex data intuitive, readable, and decision-ready.', color: 'violet' },
              { icon: <BarChart3 />, title: 'Data Analysis', desc: 'Finding patterns, asking better questions, avoiding vanity metrics.', color: 'cyan' },
              { icon: <Globe />, title: 'Web Systems', desc: 'Architecting reliable full-stack applications end to end.', color: 'violet' },
            ].map((item, i) => (
              <DriveCard
                key={i}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                color={item.color as 'cyan' | 'violet'}
              />
            ))}
          </div>
        </section>

        {/* ================= QUICK FACTS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">Quick Facts</h2>

          <div className="space-y-4">
            {[
              { label: 'Location', value: 'Open to remote & global opportunities' },
              { label: 'Education', value: 'B.E. in Information Technology' },
              { label: 'Languages', value: 'English, Hindi, Marathi, Japanese' },
              { label: 'Interests', value: 'Technology, data, visualization, system design, exploration' },
            ].map((fact, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="mt-2 w-2 h-2 rounded-full bg-accent-violet" />
                <p className="text-secondary">
                  <span className="font-semibold text-primary">{fact.label}:</span> {fact.value}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}

/* ================= REUSABLE COMPONENTS ================= */
function DriveCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: 'cyan' | 'violet';
}) {
  const shadowClass = color === 'cyan' ? 'hover:shadow-glowCyan' : 'hover:shadow-glowViolet';
  const iconBg = color === 'cyan'
    ? 'bg-gradient-to-br from-accent-cyan to-accent-cyan/60 group-hover:from-accent-cyan/70 group-hover:to-accent-cyan/40'
    : 'bg-gradient-to-br from-accent-violet to-accent-violet/60 group-hover:from-accent-violet/70 group-hover:to-accent-violet/40';

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`group glass rounded-2xl p-6 transition-all ${shadowClass}`}
    >
      <div className={`inline-flex p-3 mb-4 rounded-xl text-white ${iconBg} transition-all`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-secondary">{desc}</p>
    </motion.div>
  );
}
