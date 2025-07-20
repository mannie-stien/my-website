import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnimatedBackground from './components/AnimatedBackground';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import EducationAndCerts from './components/EducationAndCerts';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Summary />
          <Skills />
          <Experience />
          <Projects />
          <Testimonials />
          {/* <Achievements /> */}
          <EducationAndCerts />
          <Hobbies />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;