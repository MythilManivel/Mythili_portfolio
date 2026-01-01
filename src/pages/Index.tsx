import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Activities from '@/components/Activities';
import Publications from '@/components/Publications';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Activities />
        <Publications/>
        <Carousel/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
