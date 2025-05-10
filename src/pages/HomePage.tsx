
import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;