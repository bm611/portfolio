import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { menuPanel, stagger } from "../lib/motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "#home", id: "home" },
      { name: "Projects", href: "#projects", id: "projects" },
      { name: "Experience", href: "#experience", id: "experience" },
      { name: "Skills", href: "#skills", id: "skills" },
      { name: "Stack", href: "#stack", id: "stack" },
      { name: "Contact", href: "#contact", id: "contact" },
    ],
    []
  );

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [navLinks]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl pointer-events-auto mt-3"
      >
        <div className="e-card nav-shell px-4 md:px-5 py-2.5">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-semibold tracking-wide text-[0.95rem]"
            >
              <span className="font-mono text-lg text-[#23241F]">BM</span>
              <span className="hidden sm:inline font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#7A776D]">
                Bharath Mohan
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? "is-active" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <motion.a
                href="https://github.com/bm611"
                target="_blank"
                rel="noopener noreferrer"
                className="earth-btn earth-btn-chip !px-4 !py-2 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                GitHub
              </motion.a>
            </div>

            <motion.button
              type="button"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-[#FBF9F4]"
              onClick={() => setIsOpen((prev) => !prev)}
              whileTap={{ scale: 0.94 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={17} /> : <Menu size={17} />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 bg-black/20 backdrop-blur-[1px] md:hidden pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-label="Close mobile menu"
            />

            <motion.div
              className="mx-auto mt-2 max-w-6xl px-4 md:hidden pointer-events-auto"
              variants={menuPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.nav
                variants={stagger(0.06)}
                initial="hidden"
                animate="visible"
                className="e-card nav-shell p-4"
              >
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: index * 0.03 },
                        },
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                          activeSection === link.id
                            ? "bg-[#EDF2E6] text-[#2D4F1E]"
                            : "text-[#55544C] hover:bg-[#F7F4EE]"
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="https://github.com/bm611"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="earth-btn earth-btn-chip mt-4 w-full"
                  whileTap={{ scale: 0.98 }}
                >
                  GitHub
                </motion.a>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
