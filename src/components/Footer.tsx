import React from "react";
import { motion } from "framer-motion";
import { Terminal, ChevronUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <footer className="bg-light-200 dark:bg-dark-900 border-t border-light-300 dark:border-dark-700">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary-light dark:text-neon font-bold text-xl mb-4 md:mb-0"
          >
            <Terminal size={24} className="text-primary-light dark:text-neon" />
            <span>BM</span>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-light-700 dark:text-light-300 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-light-600 dark:text-light-400 text-xs mt-1">
              Designed and built with passion
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <motion.button
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-3 bg-light-200 dark:bg-dark-800 rounded-full text-light-700 dark:text-light-300 hover:text-neon hover:border-neon transition-colors border border-light-300 dark:border-dark-700"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
