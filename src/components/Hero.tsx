import React from 'react';
import { ArrowRight, Laptop, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-12 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neon/5 blur-3xl rounded-full -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                className="text-neon mb-2 text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Hello, I'm Bharath Mohan
              </motion.p>
              <motion.h2
                className="text-xl text-light-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Data Science Engineer
              </motion.h2>
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Building
                <span className="relative">
                  <span className="text-neon neon-glow"> Open Source</span>
                </span>
                {" "}Projects.
              </motion.h1>
            </div>

            <motion.p
              className="text-light-300 text-lg max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Currently learning/building<br />
              📟 cli apps with go<br />
              📳 mobile apps with expo<br />
              🌐 web apps with python
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <a href="#projects" className="btn-primary flex items-center gap-2">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2">
                <Calendar size={16} />
                <span>Get in Touch</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon/20 to-transparent rounded-full blur-2xl"></div>

              <motion.div
                className="relative bg-dark-800 border border-dark-600 rounded-xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <div className="bg-dark-900 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-error mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-warning mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <div className="ml-auto text-light-300 text-xs">portfolio.js</div>
                  </div>

                  <div className="font-mono text-sm text-light-300">
                    <div className="text-light-400">// portfolio</div>
                    <div><span className="text-blue-400">const</span> <span className="text-green-400">developer</span> = {'{'}</div>
                    <div className="pl-4"><span className="text-purple-400">name</span>: <span className="text-orange-300">'Bharath'</span>,</div>
                    <div className="pl-4"><span className="text-purple-400">role</span>: <span className="text-orange-300">'Data Science Engineer'</span>,</div>
                    <div className="pl-4"><span className="text-purple-400">loves</span>: <span className="text-orange-300">'Open Source'</span>,</div>
                    <div className="pl-4"><span className="text-purple-400">available</span>: <span className="text-blue-400">true</span></div>
                    <div>{'}'}</div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="bg-dark-700 p-3 rounded-lg">
                    <div className="font-medium mb-1">Tech Stack</div>
                    <div className="flex gap-2">
                      <span className="bg-dark-600 px-2 py-1 rounded text-sm">Python</span>
                      <span className="bg-dark-600 px-2 py-1 rounded text-sm">Go</span>
                      <span className="bg-dark-600 px-2 py-1 rounded text-sm">React</span>
                    </div>
                  </div>

                  <div className="bg-dark-700 p-3 rounded-lg">
                    <div className="text-sm mb-1">Currently Building</div>
                    <div className="flex gap-2">
                      <span className="bg-dark-600 px-2 py-1 rounded text-sm">CLI Apps</span>
                      <span className="bg-dark-600 px-2 py-1 rounded text-sm">Mobile Apps</span>
                      <span className="bg-dark-600 px-2 py-1 rounded text-sm">Web Apps</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
