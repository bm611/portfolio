import React from "react";
import { ArrowRight, Calendar, Github, Linkedin, Mail, Twitter, Terminal as TerminalIcon } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/bharath-mohan/", label: "LinkedIn" },
    { icon: <Mail size={24} />, href: "mailto:bharath.mohan.pro@gmail.com", label: "Email" },
    { icon: <Github size={24} />, href: "https://github.com/bm611", label: "GitHub" },
    { icon: <Twitter size={24} />, href: "https://twitter.com/bharathmohan", label: "Twitter" },
  ];

  return (
    <section
      id="home"
      className="md:min-h-screen flex items-center py-44 md:pt-32 bg-light-200 dark:bg-dark-900 overflow-hidden relative"
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-grid z-0 opacity-40"></div>

      {/* Decorative Technical Lines */}
      <div className="absolute top-0 left-10 h-full w-[1px] bg-black/10 dark:bg-white/10 hidden md:block"></div>
      <div className="absolute top-0 right-10 h-full w-[1px] bg-black/10 dark:bg-white/10 hidden md:block"></div>
      <div className="absolute top-32 left-0 w-full h-[1px] bg-black/10 dark:bg-white/10 hidden md:block"></div>
      <div className="absolute bottom-32 left-0 w-full h-[1px] bg-black/10 dark:bg-white/10 hidden md:block"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="relative">
              {/* Corner marks */}
              <div className="absolute -top-6 -left-6 w-4 h-4 border-t-2 border-l-2 border-black dark:border-white"></div>
              <div className="absolute -bottom-6 -right-6 w-4 h-4 border-b-2 border-r-2 border-black dark:border-white"></div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block bg-black dark:bg-white text-white dark:text-black px-2 py-1 mb-4 font-mono text-sm font-bold uppercase"
              >
                System Online
              </motion.div>

              <motion.h1
                className="text-5xl md:text-8xl font-bold leading-none tracking-tighter text-black dark:text-white mb-2 font-space"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                BHARATH
                <br />
                <span
                  className="text-stroke text-transparent bg-clip-text bg-gradient-to-r from-black to-black dark:from-white dark:to-white"
                  style={{ WebkitTextStroke: "2px currentColor" }}
                >
                  MOHAN
                </span>
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl font-mono text-light-700 dark:text-light-400 mb-4 border-l-4 border-neon pl-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                DATA_SCIENCE_ENGINEER
              </motion.h2>

              <motion.p
                className="text-lg mt-8 max-w-lg font-mono leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Building{" "}
                <span className="bg-neon text-black px-1 font-bold">
                  OPEN_SOURCE
                </span>{" "}
                projects.
                <br />
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center bg-light-100 dark:bg-dark-800 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

            <motion.div
              className="border-t border-b border-dashed border-black/30 dark:border-white/30 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="font-mono text-sm uppercase tracking-wider mb-2 text-light-600 dark:text-light-500">
                Active Protocols:
              </p>
              <ul className="space-y-1 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-neon">►</span> CLI APPS [GO]
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">►</span> WEB APPS [REACT]
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">►</span> ML APPS [PYTHON]
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="#projects"
                className="btn-simple flex items-center gap-2 group"
              >
                <span>VIEW_PROJECTS</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>INIT_CONTACT</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Technical Box Container */}
            <div className="relative w-full max-w-lg mx-auto bg-light-100 dark:bg-dark-800 border-2 border-black dark:border-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              {/* Header Bar */}
              <div className="bg-black dark:bg-white text-white dark:text-black p-2 flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <TerminalIcon size={16} />
                  <span className="font-mono text-xs font-bold uppercase">
                    CURRENT_STATUS.LOG
                  </span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-neon border border-black"></div>
                  <div className="w-3 h-3 bg-transparent border border-white dark:border-black"></div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 bg-light-200 dark:bg-dark-900 border border-black/10 dark:border-white/10 min-h-[300px] relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-neon animate-pulse shadow-[0_0_10px_rgba(204,255,0,0.8)]"></div>
                    <h3 className="text-xl font-bold font-mono uppercase tracking-wider">
                      BUILDING...
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-light-100 dark:bg-dark-800 border-2 border-black dark:border-white p-4 relative">
                      <div className="absolute -top-3 -right-3 bg-neon text-black text-xs font-bold px-2 py-1 border-2 border-black">
                        LATEST
                      </div>
                      <h4 className="text-lg font-bold mb-2 font-mono">
                        ARCANE
                      </h4>
                      <p className="text-sm font-mono leading-relaxed mb-4">
                        {">"} An AI-powered chat application built for the
                        terminal.
                        <br />
                        {">"} TUI experience for conversing with AI models.
                      </p>

                      <div className="border-t-2 border-black/10 dark:border-white/10 pt-3">
                        <div className="font-bold text-xs uppercase mb-2">
                          STACK:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["GO", "OPENAI", "TUI"].map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono bg-black dark:bg-white text-white dark:text-black px-2 py-0.5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative footer lines */}
              <div className="mt-2 flex justify-between text-[10px] font-mono opacity-50 uppercase">
                <span>ID: 8X-99</span>
                <span>SEC: A-1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
