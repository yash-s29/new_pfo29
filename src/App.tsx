import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-primary bg-soft-gradient">

      {/* ================= AMBIENT AURORA ================= */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none will-change-transform"
      >
        {/* Cyan glow */}
        <div className="absolute top-24 left-1/4 w-[26rem] h-[26rem]
                        rounded-full bg-accent-cyan/20 blur-[140px]
                        animate-float-ambient" />

        {/* Violet glow */}
        <div className="absolute bottom-32 right-1/4 w-[22rem] h-[22rem]
                        rounded-full bg-accent-violet/20 blur-[140px]
                        animate-float-ambient" />
      </div>

      {/* ================= NAVIGATION ================= */}
      <header className="relative z-50">
        <Navbar />
      </header>

      {/* ================= MAIN ================= */}
      <main
        role="main"
        className="relative flex flex-col gap-section-lg sm:gap-section-xl"
      >
        {/* Home */}
        <section
          id="home"
          className="scroll-mt-24"
        >
          <Home />
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24"
        >
          <About />
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24"
        >
          <Projects />
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative">
        <Footer />
      </footer>
    </div>
  );
}
