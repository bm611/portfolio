import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-band relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#7A776D]">
              Built by Bharath Mohan
            </p>
            <p className="mt-1 text-sm text-[#55544C]">
              Designing practical, elegant AI-driven experiences.
            </p>
          </div>

          <div className="flex items-center gap-4 self-end md:self-auto">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#7A776D]">
              {new Date().getFullYear()} Portfolio
            </p>
            <motion.button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-white"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
