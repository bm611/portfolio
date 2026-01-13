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
    <footer className="bg-light-200 dark:bg-dark-900 border-t-2 border-black dark:border-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10 dark:bg-white/10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-black dark:text-white font-bold text-xl mb-4 md:mb-0 font-mono uppercase tracking-widest border-2 border-transparent hover:border-neon px-2 transition-all"
          >
            <Terminal size={24} className="text-black dark:text-neon" />
            <span>BM_DEV</span>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-light-700 dark:text-light-300 text-sm font-mono">
              © {new Date().getFullYear()} SYSTEM_STATUS: ONLINE
            </p>
            <p className="text-light-600 dark:text-light-400 text-xs mt-1 font-mono uppercase">
              Designed & Built by Bharath Mohan
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-12">
          <motion.button
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-4 bg-light-100 dark:bg-dark-800 text-black dark:text-white border-2 border-black dark:border-white hover:bg-neon hover:text-black transition-colors hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
