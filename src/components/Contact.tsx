import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-light-200 dark:bg-dark-900 relative border-t-2 border-black dark:border-white py-20"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 w-full"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-12 bg-neon hidden md:block"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white uppercase tracking-tighter">
              Init_Contact
            </h2>
            <div className="h-1 w-12 bg-neon hidden md:block"></div>
          </div>
          <p className="text-light-700 dark:text-light-300 text-lg font-mono">
            {'>'} Open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
        >
          {/* Email Contact Card */}
          <motion.div
            variants={fadeIn}
            className="group bg-light-100 dark:bg-dark-800 p-8 border-2 border-black dark:border-white flex flex-col items-center text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all"
          >
            <a
              href="mailto:bharath.mohan.pro@gmail.com"
              className="w-full flex flex-col items-center"
              aria-label="Email me"
            >
              <div className="p-4 bg-black dark:bg-white text-white dark:text-black mb-6 group-hover:bg-neon group-hover:text-black transition-colors border-2 border-black dark:border-transparent">
                <Mail size={32} />
              </div>
              <h3 className="font-bold mb-2 text-black dark:text-white font-mono uppercase text-xl">Email</h3>
              <p className="text-light-700 dark:text-light-400 text-sm font-mono">Drop me a line anytime</p>
            </a>
          </motion.div>

          {/* GitHub Contact Card */}
          <motion.div
            variants={fadeIn}
            className="group bg-light-100 dark:bg-dark-800 p-8 border-2 border-black dark:border-white flex flex-col items-center text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all"
          >
            <a
              href="https://github.com/bm611"
              className="w-full flex flex-col items-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <div className="p-4 bg-black dark:bg-white text-white dark:text-black mb-6 group-hover:bg-neon group-hover:text-black transition-colors border-2 border-black dark:border-transparent">
                <Github size={32} />
              </div>
              <h3 className="font-bold mb-2 text-black dark:text-white font-mono uppercase text-xl">GitHub</h3>
              <p className="text-light-700 dark:text-light-400 text-sm font-mono">Check out my code</p>
            </a>
          </motion.div>

          {/* LinkedIn Contact Card */}
          <motion.div
            variants={fadeIn}
            className="group bg-light-100 dark:bg-dark-800 p-8 border-2 border-black dark:border-white flex flex-col items-center text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all"
          >
            <a
              href="https://www.linkedin.com/in/bharath-mohan/"
              className="w-full flex flex-col items-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
            >
              <div className="p-4 bg-black dark:bg-white text-white dark:text-black mb-6 group-hover:bg-neon group-hover:text-black transition-colors border-2 border-black dark:border-transparent">
                <Linkedin size={32} />
              </div>
              <h3 className="font-bold mb-2 text-black dark:text-white font-mono uppercase text-xl">LinkedIn</h3>
              <p className="text-light-700 dark:text-light-400 text-sm font-mono">Let's connect</p>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
