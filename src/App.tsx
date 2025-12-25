import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-primary">

      {/* ================= AURORA CANVAS ================= */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-aurora">
        {/* Ambient light blobs */}
        <div className="absolute top-24 left-1/4 w-[26rem] h-[26rem] rounded-full bg-accent-cyan/20 blur-[140px] animate-float-ambient" />
        <div className="absolute bottom-32 right-1/4 w-[22rem] h-[22rem] rounded-full bg-accent-orange/20 blur-[140px] animate-float-ambient" />
      </div>

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative">

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

      {/* ================= FOOTER / CONTACT ================= */}
      <Footer />
    </div>
  );
}

export default App;
