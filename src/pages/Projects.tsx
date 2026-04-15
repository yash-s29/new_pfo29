import { useState, type ReactNode } from 'react';
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

const floatVariants: Variants = {
  float: {
    y: [0, -6, 0],
    transition: { repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' },
  },
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
      title: 'EV-Bus-Intelligent-Fleet-Analytics',
      description: 'Comprehensive fleet management system for electric bus fleets.',
      live_url: 'https://ev-bus-fleet-battery-ai.streamlit.app/',
      github_url: 'https://github.com/yash-s29/EV-Bus-Intelligent-Fleet-Analytics',
      tech_stack: ['Html', 'CSS', 'Javascript', 'Python', 'Flask', 'MongoDB', 'ML Models(Linear Regression, Random Forest regressor)'],
      case_study: {
        overview: 'EV-Bus-Intelligent-Fleet-Analytics is a comprehensive fleet management system designed to optimize the operation of electric bus fleets. It provides real-time monitoring, route optimization, and predictive maintenance features to enhance efficiency and reduce downtime.',
        problem: 'On Road fleet management of electric buses is complex due to factors like battery health, route optimization, and real-time monitoring.',
        goals: ['Fast fleet management', 'Real-time monitoring', 'Predictive maintenance'],
        target_users: ['Bus Operators', 'System Admins', 'Fleet Managers'],
        core_features: ['Real-time fleet tracking', 'Route optimization', 'Vehicle Battery diagnostics', 'SOC & SOH monitoring'],
        design_choices: ['Clean UI', 'Card-based menu', 'Responsive layout'],
        tools_used: ['Html', 'CSS', 'Javascript', 'Python', 'Flask', 'MongoDB'],
        future_improvements: ['Mobile app', 'Notifications Alerts', 'Monitor Route Efficiency', 'Predictive Maintenance'],
        final_screens: ['/images/E1.png', '/images/E2.png', '/images/E3.png', '/images/E4.png', '/images/E5.png', '/images/E6.png'],
      },
    },
    {
      id: 2,
      title: 'Food Spoilage Predictor',
      description: 'Machine learning model to predict food spoilage based on environmental factors.',
      live_url: 'https://food-spoilage-predictor.onrender.com/',
      github_url: 'https://github.com/yash-s29/MS_Elevate-Projects/tree/main/azure/food_spoilage_app',
      tech_stack: ['Html', 'CSS', 'Javascript', 'Python', 'Flask', 'ML Models(Logistic Regression, Random Forest classification)', 'GCP SDK'],
      case_study: {
        overview: 'Food Spoilage Predictor is a machine learning application designed to predict the spoilage of food items based on various environmental factors such as temperature, humidity, and storage conditions. The system uses historical data to train models that can accurately forecast when food items are likely to spoil, helping reduce waste and improve inventory management.',
        problem: 'Food spoilage leads to significant waste and financial loss in the food industry, and there is a need for predictive tools to manage inventory effectively.',
        goals: ['Accurate spoilage prediction', 'User-friendly interface', 'Integration with inventory systems'],
        target_users: ['Food Retailers', 'Warehouse Managers', 'Consumers'],
        core_features: ['Data input for environmental factors', 'Spoilage prediction model', 'User dashboard', 'Integration with inventory management systems'],
        design_choices: ['Clean and intuitive UI', 'Data visualization for predictions', 'Responsive design for various devices'],
        tools_used: ['Html', 'CSS', 'Javascript', 'Python', 'Flask', 'ML Models(Logistic Regression, Random Forest classification)', 'GCP SDK'],
        future_improvements: ['Mobile app', 'Integration with IoT sensors', 'Enhanced prediction models', 'User notifications for spoilage alerts'],
        final_screens: ['/images/f1.png', '/images/f2.png', '/images/f3.png', '/images/f4.png', '/images/f5.png', '/images/f6.png'],
      },
    },
       {
      id: 3,
      title: 'Cafeteria',
      description: 'Online food ordering and cafeteria management system.',
      live_url: 'https://cafeteria-kiosk29.vercel.app/',
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
      id: 4,
      title: 'Power-Bi Dashboard Report',
      description: 'Power BI dashboard for visualizing and analyzing business data.',
      live_url: '#',
      github_url: 'https://github.com/yash-s29/MS_Elevate-Projects/tree/main/Power%20Bi_Project',
      tech_stack: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence', 'EDA', 'Data Cleaning', 'Power Query'],
      case_study: {
        overview: 'Power BI dashboard for visualizing and analyzing business data.',
        problem: 'Manual data analysis was time-consuming and error-prone.',
        goals: ['Interactive visualizations', 'Data-driven insights', 'Automated reporting'],
        target_users: ['Business Analysts', 'Data Scientists', 'Executives'],
        core_features: ['Data import and transformation', 'Custom DAX measures', 'Interactive dashboards', 'KPI Cards'],
        design_choices: ['Clean and modern design', 'Consistent color scheme', 'Intuitive navigation'],
        tools_used: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence', 'EDA', 'Data Cleaning', 'Power Query'],
        future_improvements: ['Mobile-optimized dashboards', 'Integration with real-time data sources', 'Advanced analytics features', 'User training and documentation'],
        final_screens: ['/images/image 1.png', '/images/image 2.png'],
      },
    },
    {
      id: 5,
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
      id: 6,
      title: 'Traffic Management System',
      description: 'Smart traffic monitoring and management system.',
      live_url: 'http://localhost/traffic-ticket-system/login.php',
      github_url: 'https://github.com/yash-s29/traffic-ticket-system',
      tech_stack: ['PHP', 'HTML/CSS', 'JavaScript', 'SQL(PHPMyAdmin)', 'XAMPP Control Panel'],
      case_study: {
        overview: 'System to monitor and control traffic efficiently in urban areas.',
        problem: 'Manual traffic monitoring led to congestion and accidents.',
        goals: ['Real-time monitoring', 'Incident alerts', 'Analytics for planning'],
        target_users: ['City planners', 'Traffic police', 'Commuters'],
        core_features: ['Vehicle detection', 'Signal control', 'Data analytics dashboard'],
        design_choices: ['Dashboard style UI', 'Graphs and maps', 'Alert notifications'],
        tools_used: ['PHP', 'HTML/CSS', 'JavaScript', 'SQL(PHPMyAdmin)','XAMPP Control Panel'],
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
    {
    id: 3,
      title: 'Edunet Advanced AI Internship Course Certification',
      issuer: 'Edunet Foundation In Association with Shell & AICTE',
      image_url: '/images/c7.png',
      description: 'Completed an advanced AI internship course covering machine learning, deep learning, Computer Vision and real-world AI applications.',
      credential_url: '',
      case_study: {
        overview: 'Gained hands-on experience with AI technologies and their applications in various industries.',
        goals: ['Master AI fundamentals', 'Apply AI in real-world scenarios', 'Build AI-powered solutions'],
        tools_used: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook', 'Matplotlib', 'TensorFlow', 'Keras', 'OpenCV'],
      },
    },
    {
      id: 4,
      title: 'Microsoft Elevate Azure Internship_Certification',
      issuer: 'Microsoft',
      image_url: '/images/Ms-a.png',
      description: 'Certification validating expertise in cloud-based data analytics using Azure services.',
      credential_url: '',
      case_study: {
        overview: 'Demonstrated ability to design and implement data analytics solutions on the Azure platform.',
        goals: ['Understand Azure data services', 'Implement cloud-based analytics', 'Optimize data solutions on Azure', 'Cloud administration and security'],
        tools_used: ['Azure Data Factory', 'Azure Synapse Analytics', 'Azure Databricks', 'Azure SQL Database', 'Azure Storage', 'Azure Machine Learning','Azure cosmos DB', 'Azure app services'],
      },
    },
    {
      id: 5,
      title: 'Microsoft Elevate Power BI Internship_Certification',
      issuer: 'Microsoft',
      image_url: '/images/Ms-p.png',
      description: 'Certification validating expertise in creating impactful business insights through data visualization using Power BI.',
      credential_url: '',
      case_study: {
        overview: 'Demonstrated ability to design and implement data visualization solutions using Power BI to drive business insights.',
        goals: ['Understand Power BI features', 'Create interactive dashboards', 'Perform data analysis', 'Communicate insights'],
        tools_used: ['Power BI Desktop', 'Power BI Service', 'Excel', 'DAX', 'Power Query'],
      },
    },
    {
      id: 6,
      title: 'Eduskills AWS Gen AI Internship_Certification',
      issuer: 'Eduskills Foundation In Association with AWS',
      image_url: '/images/Edu-aws.png',
      description: 'Completed an internship course covering generative AI technologies and their applications.',
      credential_url: 'https://www.credly.com/badges/ffaf06f6-d245-4afc-86ea-2616eedbe822/public_url',
      case_study: {
        overview: 'Gained hands-on experience with generative AI models and their applications in various industries.',
        goals: ['Understand generative AI concepts', 'Learn How to Build AI-powered applications', 'Understand how to apply AI in real-world scenarios'],
        tools_used: ['Python', 'Amazon Polly', 'Amazon Bedrock', 'Amazon SageMaker', 'CloudFormation', 'Lambda', 'API Gateway', 'DynamoDB'],
      },
    }
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
function Section({ title, description, children }: { title: string; description: string; children: ReactNode }) {
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
function Carousel({ children, index, setIndex, max }: { children: ReactNode; index: number; setIndex: (n: number) => void; max: number }) {
  const next = () => setIndex(index >= max - 1 ? 0 : index + 1);
  const prev = () => setIndex(index <= 0 ? max - 1 : index - 1);

  return (
    <motion.div className="relative" variants={floatVariants} animate="float">
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
    </motion.div>
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
