import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-shell">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <Navbar />
        <main className="pt-20">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
