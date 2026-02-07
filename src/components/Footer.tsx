import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-band relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="e-card tone-forest p-5 md:p-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#F5E6CC]/30 bg-[#F5E6CC]/10">
                <Leaf size={16} />
              </span>
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.11em] text-[#F5E6CC]/72">Built by Bharath Mohan</p>
                <p className="text-sm text-[#F5E6CC]/88">Designing practical, elegant AI-driven experiences.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end md:self-auto">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#F5E6CC]/78">{new Date().getFullYear()} Portfolio</p>
              <motion.button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F5E6CC]/36 bg-[#F5E6CC]/10"
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                aria-label="Scroll to top"
              >
                <ChevronUp size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
