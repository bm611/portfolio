import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-light-200 dark:bg-dark-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-light/5 dark:bg-neon/5 blur-3xl rounded-full -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                className="text-4xl md:text-7xl font-bold leading-tight text-neon mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-light-700 dark:text-light-300">I'm </span>
                <span className="text-primary-light dark:text-neon neon-glow">Bharath Mohan</span>
              </motion.h1>
              <motion.h2
                className="text-xl md:text-3xl text-light-700 dark:text-light-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Data Science Engineer
              </motion.h2>
              <motion.p
                className="text-2xl mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Building
                <span className="relative">
                  <span className="text-primary-light dark:text-neon"> Open Source</span>
                </span>{" "}
                Projects.
              </motion.p>
            </div>

            <motion.p
              className="text-light-700 dark:text-light-300 text-lg max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Currently learning/building
              <br />
              📟 cli apps with go
              <br />
              🌐 web apps with python
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <a
                href="#projects"
                className="btn-primary flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>Get in Touch</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 dark:from-neon/20 to-transparent rounded-2xl blur-3xl"></div>

              <motion.div
                className="relative bg-gradient-to-br from-light-200 to-light-300 dark:from-dark-800 dark:to-dark-900 border border-primary-light/20 dark:border-neon/20 rounded-2xl p-6 shadow-2xl backdrop-blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 rounded-full bg-primary-light dark:bg-gradient-to-r dark:from-neon dark:to-green-400 animate-pulse"></div>
                    <h3 className="text-xl font-bold text-primary-light dark:text-neon">
                      Currently Building
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-light-300/50 dark:bg-dark-800/50 rounded-xl border border-primary-light/10 dark:border-neon/10">
                      <h4 className="text-lg font-semibold text-light-800 dark:text-light-100 mb-2">
                        Ark
                      </h4>
                      <p className="text-light-700 dark:text-light-300 text-sm leading-relaxed">
                        A modern, feature-rich AI chat application built with
                        Python and Reflex that provides seamless access to
                        cutting-edge AI models through OpenRouter.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-light-300/50 dark:bg-dark-700/50 p-4 rounded-xl border border-light-400/50 dark:border-dark-600/50">
                    <div className="font-medium mb-3 text-light-800 dark:text-light-100">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary-light/10 dark:bg-gradient-to-r dark:from-neon/20 dark:to-green-400/20 border border-primary-light/30 dark:border-neon/30 px-3 py-1 rounded-full text-sm text-primary-light dark:text-neon font-medium">
                        Python
                      </span>
                      <span className="bg-primary-light/10 dark:bg-gradient-to-r dark:from-neon/20 dark:to-green-400/20 border border-primary-light/30 dark:border-neon/30 px-3 py-1 rounded-full text-sm text-primary-light dark:text-neon font-medium">
                        Reflex
                      </span>

                      <span className="bg-primary-light/10 dark:bg-gradient-to-r dark:from-neon/20 dark:to-green-400/20 border border-primary-light/30 dark:border-neon/30 px-3 py-1 rounded-full text-sm text-primary-light dark:text-neon font-medium">
                        Cloudflare
                      </span>
                      <span className="bg-primary-light/10 dark:bg-gradient-to-r dark:from-neon/20 dark:to-green-400/20 border border-primary-light/30 dark:border-neon/30 px-3 py-1 rounded-full text-sm text-primary-light dark:text-neon font-medium">
                        Railway
                      </span>
                      <span className="bg-primary-light/10 dark:bg-gradient-to-r dark:from-neon/20 dark:to-green-400/20 border border-primary-light/30 dark:border-neon/30 px-3 py-1 rounded-full text-sm text-primary-light dark:text-neon font-medium">
                        Clerk
                      </span>
                      <span className="bg-primary-light/10 dark:bg-gradient-to-r dark:from-neon/20 dark:to-green-400/20 border border-primary-light/30 dark:border-neon/30 px-3 py-1 rounded-full text-sm text-primary-light dark:text-neon font-medium">
                        Neon
                      </span>
                      <span className="bg-primary-light/10 dark:bg-gradient-to-r dark:from-neon/20 dark:to-green-400/20 border border-primary-light/30 dark:border-neon/30 px-3 py-1 rounded-full text-sm text-primary-light dark:text-neon font-medium">
                        Umami
                      </span>
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
