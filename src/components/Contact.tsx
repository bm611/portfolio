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
      className="section-padding bg-light-200 dark:bg-dark-900 relative py-20"
    >
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-light-400 dark:via-dark-600 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-blue-600 dark:from-neon dark:to-teal-400">
            Get In Touch
          </h2>
          <p className="text-light-700 dark:text-light-300 text-lg">
            I'm open to discussing new projects, ideas, and opportunities. Feel
            free to reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl"
        >
          {/* Email Contact Card */}
          <motion.div
            variants={fadeIn}
            className="bg-light-200 dark:bg-dark-800 p-6 rounded-xl border border-light-300 dark:border-dark-600 hover:border-primary-light dark:hover:border-neon transition-all duration-300 flex flex-col items-center text-center"
          >
            <a
              href="mailto:bharath.mohan.pro@gmail.com"
              className="hover:scale-110 transition-all duration-300"
              aria-label="Email me"
            >
              <div className="p-4 bg-light-300 dark:bg-dark-700 rounded-full text-primary-light dark:text-neon mb-4 hover:bg-light-400 dark:hover:bg-dark-600 transition-colors">
                <Mail size={24} />
              </div>
            </a>
            <h3 className="font-semibold mb-1 text-light-800 dark:text-light-100">Email</h3>
            <p className="text-light-700 dark:text-light-300 text-sm">Drop me a line anytime</p>
          </motion.div>

          {/* GitHub Contact Card */}
          <motion.div
            variants={fadeIn}
            className="bg-light-200 dark:bg-dark-800 p-6 rounded-xl border border-light-300 dark:border-dark-600 hover:border-primary-light dark:hover:border-neon transition-all duration-300 flex flex-col items-center text-center"
          >
            <a
              href="https://github.com/bm611"
              className="hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <div className="p-4 bg-light-300 dark:bg-dark-700 rounded-full text-primary-light dark:text-neon mb-4 hover:bg-light-400 dark:hover:bg-dark-600 transition-colors">
                <Github size={24} />
              </div>
            </a>
            <h3 className="font-semibold mb-1 text-light-800 dark:text-light-100">GitHub</h3>
            <p className="text-light-700 dark:text-light-300 text-sm">Check out my code</p>
          </motion.div>

          {/* LinkedIn Contact Card */}
          <motion.div
            variants={fadeIn}
            className="bg-light-200 dark:bg-dark-800 p-6 rounded-xl border border-light-300 dark:border-dark-600 hover:border-primary-light dark:hover:border-neon transition-all duration-300 flex flex-col items-center text-center"
          >
            <a
              href="https://www.linkedin.com/in/bharath-mohan/"
              className="hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
            >
              <div className="p-4 bg-light-300 dark:bg-dark-700 rounded-full text-primary-light dark:text-neon mb-4 hover:bg-light-400 dark:hover:bg-dark-600 transition-colors">
                <Linkedin size={24} />
              </div>
            </a>
            <h3 className="font-semibold mb-1 text-light-800 dark:text-light-100">LinkedIn</h3>
            <p className="text-light-700 dark:text-light-300 text-sm">Let's connect</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
