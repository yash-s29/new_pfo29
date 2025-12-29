import { useEffect, useState, type ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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

/* ================= TYPES ================= */

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

interface DriveItem {
  icon: ReactNode;
  title: string;
  desc: string;
  color: 'cyan' | 'violet';
}

/* ================= DATA ================= */

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

const driveItems: DriveItem[] = [
  {
    icon: <Layout />,
    title: 'UI Development',
    desc: 'Motion-aware layouts and scalable component systems.',
    color: 'cyan',
  },
  {
    icon: <PieChart />,
    title: 'Data Visualization',
    desc: 'Turning complexity into clarity.',
    color: 'violet',
  },
  {
    icon: <BarChart3 />,
    title: 'Data Analysis',
    desc: 'Finding insight beyond surface metrics.',
    color: 'cyan',
  },
  {
    icon: <Globe />,
    title: 'Web Systems',
    desc: 'Designing resilient end-to-end architectures.',
    color: 'violet',
  },
];

/* ================= MOTION ================= */

const slideVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 90 : -90,
    scale: 0.96,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 140, damping: 22 },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir < 0 ? 90 : -90,
    scale: 0.96,
  }),
};

const floatVariants: Variants = {
  float: {
    y: [0, -6, 0],
    transition: { repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' },
  },
};

/* ================= COMPONENT ================= */

export default function About() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % skillCategories.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="min-h-screen pt-20 bg-canvas overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-28">

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-primary mb-5">
            About{' '}
            <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-lg text-secondary">
            I build systems that balance visual clarity, technical depth,
            and real-world reliability.
          </p>
        </motion.header>

        {/* SKILLS SLIDER */}
        <motion.section
          className="relative flex justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          variants={floatVariants}
          animate="float"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-md glass-strong rounded-3xl p-7 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet text-white">
                  {skillCategories[index].icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {skillCategories[index].title}
                </h3>
              </div>

              <div className="space-y-4">
                {skillCategories[index].skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-secondary">{skill.name}</span>
                      <span className="text-muted">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-accent-cyan to-accent-violet"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* WHAT DRIVES ME */}
        <motion.section variants={floatVariants} animate="float">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            What Drives Me
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {driveItems.map((item, i) => (
              <DriveCard key={i} {...item} />
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}

/* ================= DRIVE CARD ================= */

function DriveCard({ icon, title, desc, color }: DriveItem) {
  const gradient =
    color === 'cyan'
      ? 'from-accent-cyan to-sky-500'
      : 'from-accent-violet to-purple-500';

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      variants={{ float: { y: [0, -4, 0], transition: { repeat: Infinity, repeatType: 'reverse', duration: 5 } } }}
      animate="float"
      className="glass rounded-2xl p-6 shadow-lg transition-all"
    >
      <div className={`inline-flex p-3 mb-4 rounded-xl bg-gradient-to-br ${gradient} text-white`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-secondary">{desc}</p>
    </motion.div>
  );
}
