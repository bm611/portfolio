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
      <div className="ambient-layer" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-blob blob-1" />
        <div className="ambient-blob blob-2" />
        <div className="ambient-blob blob-3" />
        <div className="grain-overlay" />
        <svg className="ambient-wave" viewBox="0 0 1600 240" preserveAspectRatio="none">
          <defs>
            <linearGradient id="earthWaveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8db378" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F5E6CC" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#E27D60" stopOpacity="0.82" />
            </linearGradient>
          </defs>
          <path
            d="M0,136 C150,178 280,32 430,64 C610,102 710,232 890,184 C1090,130 1200,38 1388,86 C1490,112 1560,130 1600,124"
            fill="none"
            stroke="url(#earthWaveGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="relative z-10">
        <Navbar />
        <main className="pt-24">
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
