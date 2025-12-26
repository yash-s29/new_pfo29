import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from 'lucide-react';

const CARD_WIDTH = 340;

/* ================= TYPES ================= */
type ProjectType = {
  id: number;
  title: string;
  description: string;
  live_url?: string;
  github_url?: string;
  image_url?: string;
  tech_stack: string[];
  case_study: {
    overview: string;
    problem: string;
    goals: string[];
    target_users: string[];
    core_features: string[];
    design_choices: string[];
    tools_used: string[];
    future_improvements: string[];
    wireframes?: string[];
    final_screens?: string[];
  };
};

type Certification = {
  id: number;
  title: string;
  issuer: string;
  image_url?: string;
  description?: string;
  credential_url?: string;
  case_study?: {
    overview: string;
    goals?: string[];
    tools_used?: string[];
  };
};

/* ================= ANIMATION VARIANTS ================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const hoverLift: Variants = {
  hover: { y: -8, scale: 1.04, transition: { type: 'spring', stiffness: 260, damping: 18 } },
};

const buttonPop: Variants = {
  hover: { y: -2, scale: 1.05, boxShadow: '0px 20px 40px rgba(59,130,246,0.35)' },
  tap: { scale: 0.96 },
};

/* ================= MAIN COMPONENT ================= */
export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [certIndex, setCertIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'Cafeteria',
      description: 'Online food ordering and cafeteria management system.',
      live_url: 'https://cafeteria-frontend-dusky.vercel.app/',
      github_url: 'https://github.com/yash-s29/cafeteria-frontend',
      tech_stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      case_study: {
        overview: 'Cafeteria management system for smooth ordering and payments.',
        problem: 'Manual ordering led to long queues and inefficient service.',
        goals: ['Fast ordering', 'Easy payment', 'Inventory management'],
        target_users: ['Students', 'Staff', 'Cafeteria Admin'],
        core_features: ['Menu display', 'Order tracking', 'Admin dashboard', 'Table reservations'],
        design_choices: ['Clean UI', 'Card-based menu', 'Responsive layout'],
        tools_used: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
        future_improvements: ['Mobile app', 'Loyalty program', 'Analytics dashboard', 'Payment gateway'],
        final_screens: ['/images/1c.png', '/images/2c.png', '/images/3c.png', '/images/4c.png', '/images/5c.png', '/images/6c.png'],
      },
    },
    {
      id: 2,
      title: 'Mini E-commerce (WordPress)',
      description: 'Small-scale e-commerce website built on WordPress.',
      live_url: 'http://localhost/mini_ecommerce/',
      github_url: 'https://github.com/yash-s29/Wordpress_smartgadgets',
      tech_stack: ['WordPress', 'WooCommerce', 'PHP', 'HTML/CSS'],
      case_study: {
        overview: 'A mini e-commerce store for online sales of niche products.',
        problem: 'Needed a simple solution to sell products online quickly.',
        goals: ['Fast setup', 'Easy management', 'Mobile-friendly'],
        target_users: ['Small business owners', 'Customers online'],
        core_features: ['Product listing', 'Cart', 'Checkout', 'Payment integration'],
        design_choices: ['Minimalistic', 'Highlight products', 'Color contrast for CTAs'],
        tools_used: ['WordPress', 'WooCommerce', 'Figma', 'PHP', 'HTML/CSS'],
        future_improvements: ['SEO optimization', 'Email marketing', 'Analytics integration'],
        final_screens: ['/images/1w.png', '/images/2w.png', '/images/3w.png', '/images/4w.png', '/images/5w.png', '/images/6w.png'],
      },
    },
    {
      id: 3,
      title: 'Traffic Management System',
      description: 'Smart traffic monitoring and management system.',
      live_url: 'http://localhost/traffic-ticket-system/login.php',
      github_url: 'https://github.com/yash-s29/traffic-ticket-system',
      tech_stack: ['PHP', 'HTML/CSS', 'JavaScript', 'SQL(PHPMyAdmin)'],
      case_study: {
        overview: 'System to monitor and control traffic efficiently in urban areas.',
        problem: 'Manual traffic monitoring led to congestion and accidents.',
        goals: ['Real-time monitoring', 'Incident alerts', 'Analytics for planning'],
        target_users: ['City planners', 'Traffic police', 'Commuters'],
        core_features: ['Vehicle detection', 'Signal control', 'Data analytics dashboard'],
        design_choices: ['Dashboard style UI', 'Graphs and maps', 'Alert notifications'],
        tools_used: ['PHP', 'HTML/CSS', 'JavaScript', 'SQL(PHPMyAdmin)'],
        future_improvements: ['AI prediction', 'Mobile monitoring', 'Integration with public transport data'],
        final_screens: ['/images/1t.png', '/images/2t.png', '/images/3t.png', '/images/4t.png', '/images/5t.png', '/images/6t.png'],
      },
    },
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Internship Certification',
      issuer: 'Prodigy Infotech',
      image_url: '/images/c1.jpeg',
      description: 'Completed internship focusing on web development, database management, and project implementation.',
      credential_url: 'https://prodigyinfotech.dev/verify?cin=PIT/NOV25/10034',
      case_study: {
        overview: 'Worked on real projects involving frontend and backend integration.',
        goals: ['Learn full-stack development', 'Team collaboration', 'Portfolio building'],
        tools_used: ['React', 'Node.js', 'MongoDB'],
      },
    },
    {
      id: 2,
      title: 'Data Visualization Certification',
      issuer: 'Forage',
      image_url: '/images/c4.jpeg',
      description: 'Certification focused on creating impactful business insights through data visualization.',
      credential_url: 'https://www.theforage.com/verify/zprKDF7XhwfQgsjSp',
      case_study: {
        overview: 'Extract insights from datasets and present them using visualization tools.',
        goals: ['Master data visualization techniques', 'Use Tableau & Power BI', 'Communicate insights'],
        tools_used: ['Tableau', 'Power BI', 'Excel'],
      },
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-28 aurora-canvas overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28">
        {/* Featured Projects */}
        <Section title="Featured Projects" description="Selected work focused on system clarity, engineering discipline, and measurable impact.">
          <Carousel index={projectIndex} setIndex={setProjectIndex} max={projects.length}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </Carousel>
        </Section>

        {/* Certifications */}
        <Section title="Certifications" description="Credentials that validate depth, not buzzwords.">
          <Carousel index={certIndex} setIndex={setCertIndex} max={certifications.length}>
            {certifications.map(cert => (
              <CertificationCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} />
            ))}
          </Carousel>
        </Section>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        {selectedCert && <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>
    </motion.section>
  );
}

/* ================= SECTION WRAPPER ================= */
function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div>
      <header className="mb-12 text-center md:text-left">
        <h2 className="text-5xl font-extrabold text-black mb-4">{title}</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">{description}</p>
      </header>
      {children}
    </div>
  );
}

/* ================= CAROUSEL ================= */
function Carousel({ children, index, setIndex, max }: { children: React.ReactNode; index: number; setIndex: (n: number) => void; max: number }) {
  const next = () => setIndex(index >= max - 1 ? 0 : index + 1);
  const prev = () => setIndex(index <= 0 ? max - 1 : index - 1);

  return (
    <div className="relative">
      <motion.div
        className="flex gap-6"
        animate={{ x: -index * (CARD_WIDTH + 24) }}
        transition={{ type: 'spring', stiffness: 120, damping: 22 }}
      >
        {children}
      </motion.div>
      {max > 1 && <>
        <NavButton left onClick={prev} />
        <NavButton onClick={next} />
      </>}
    </div>
  );
}

function NavButton({ left, onClick }: { left?: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      className={`absolute ${left ? '-left-6' : '-right-6'} top-1/2 -translate-y-1/2 p-3 rounded-full glass border border-gray-300 hover:bg-accent-cyan/20 hover:text-white transition`}
    >
      {left ? <ChevronLeft className="text-black" /> : <ChevronRight className="text-black" />}
    </motion.button>
  );
}

/* ================= CARDS ================= */
function ProjectCard({ project, onClick }: { project: ProjectType; onClick: () => void }) {
  return (
    <motion.div
      whileHover="hover"
      variants={hoverLift}
      className="min-w-[340px] max-w-[340px] rounded-2xl overflow-hidden glass cursor-pointer flex flex-col shadow-sm hover:shadow-xl transition-shadow"
    >
      {project.image_url && <img src={project.image_url} alt={project.title} className="h-40 w-full object-cover" />}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h4 onClick={onClick} className="text-2xl font-bold text-accent-orange hover:text-accent-cyan hover:underline cursor-pointer">{project.title}</h4>
        <p className="text-black text-lg">{project.description}</p>
        <div className="flex gap-3 flex-wrap mt-2">
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full bg-accent-orange/20 hover:bg-accent-orange hover:text-white font-medium flex items-center gap-2 transition">
              Live <ExternalLink size={14} />
            </a>
          )}
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full bg-accent-cyan/20 hover:bg-accent-cyan hover:text-white font-medium flex items-center gap-2 transition">
              Code <Github size={14} />
            </a>
          )}
        </div>
        <div className="flex gap-2 flex-wrap mt-auto">
          {project.tech_stack.map((tech, idx) => (
            <span key={idx} className="text-xs px-3 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan font-semibold">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CertificationCard({ cert, onClick }: { cert: Certification; onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover="hover"
      variants={hoverLift}
      className="min-w-[340px] max-w-[340px] rounded-2xl p-6 glass cursor-pointer flex flex-col shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        {cert.image_url && <img src={cert.image_url} alt={cert.title} className="w-14 h-14 object-cover rounded-lg" />}
        <div>
          <h4 className="text-lg font-bold text-black hover:text-accent-cyan hover:underline">{cert.title}</h4>
          <p className="text-black text-sm">{cert.issuer}</p>
        </div>
      </div>
      {cert.credential_url && (
        <a href={cert.credential_url} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full bg-accent-cyan/20 hover:bg-accent-cyan hover:text-white font-medium flex items-center gap-2 transition">
          View Credential <ExternalLink size={14} />
        </a>
      )}
    </motion.div>
  );
}

/* ================= MODALS ================= */
function ProjectModal({ project, onClose }: { project: ProjectType; onClose: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div className="bg-white rounded-3xl max-w-4xl w-full overflow-y-auto max-h-[90vh] p-8 relative space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded"
        initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-accent-cyan/20 hover:text-white transition"><X className="text-black" /></button>
        <h2 className="text-3xl font-bold text-black">{project.title}</h2>
        {renderSection('Overview', project.case_study.overview)}
        {renderSection('Problem Statement', project.case_study.problem)}
        {renderListSection('Goals', project.case_study.goals)}
        {renderListSection('Core Features', project.case_study.core_features)}
        {renderListSection('Tools Used', project.case_study.tools_used)}
        {renderListSection('Future Improvements', project.case_study.future_improvements)}
        {project.case_study.final_screens && renderImages('Final Screens', project.case_study.final_screens)}
      </motion.div>
    </motion.div>
  );
}

function CertificationModal({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div className="bg-white rounded-3xl max-w-4xl w-full overflow-y-auto max-h-[90vh] p-8 relative space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded"
        initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-accent-cyan/20 hover:text-white transition"><X className="text-black" /></button>
        {cert.image_url && <img src={cert.image_url} alt={cert.title} className="w-32 h-32 object-cover rounded-lg mx-auto" />}
        <h2 className="text-3xl font-bold text-black text-center">{cert.title}</h2>
        <p className="text-black text-center">{cert.issuer}</p>
        {cert.description && renderSection('Description', cert.description)}
        {cert.case_study?.overview && renderSection('Overview', cert.case_study.overview)}
        {cert.case_study?.goals && renderListSection('Goals', cert.case_study.goals)}
        {cert.case_study?.tools_used && renderListSection('Tools Used', cert.case_study.tools_used)}
      </motion.div>
    </motion.div>
  );
}

/* ================= HELPERS ================= */
function renderSection(title: string, content: string) {
  return (
    <div>
      <h3 className="font-semibold text-accent-cyan mb-2 text-lg">{title}</h3>
      <p className="text-black text-base">{content}</p>
    </div>
  );
}

function renderListSection(title: string, items: string[]) {
  return (
    <div>
      <h3 className="font-semibold text-accent-cyan mb-2 text-lg">{title}</h3>
      <ul className="list-disc list-inside text-black space-y-1 text-base">{items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
    </div>
  );
}

function renderImages(title: string, images: string[]) {
  return (
    <div>
      <h3 className="font-semibold text-accent-cyan mb-2 text-lg">{title}</h3>
      <div className="grid grid-cols-2 gap-4">{images.map((img, idx) => <img key={idx} src={img} alt={`${title} ${idx + 1}`} className="rounded-lg w-full" />)}</div>
    </div>
  );
}
