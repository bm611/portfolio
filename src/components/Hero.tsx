import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import PortfolioCard from "./ui/PortfolioCard";
import {
  cardReveal,
  sectionReveal,
  stagger,
  useMotionConfig,
} from "../lib/motion";

const focusAreas = [
  { label: "Enterprise GenAI" },
  { label: "ML Engineering" },
  { label: "OSS Builder" },
];

const Hero: React.FC = () => {
  const { hoverIcon } = useMotionConfig();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bharath-mohan/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:bharath.mohan.pro@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/bm611", label: "GitHub" },
  ];

  return (
    <section id="home" className="section-shell pt-12 md:pt-20">
      <div className="section-container container mx-auto px-4 md:px-6">
        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 xl:grid-cols-[1.25fr_0.95fr]"
        >
          <motion.div variants={sectionReveal} className="space-y-6">
            <PortfolioCard tone="beige" className="p-8 md:p-12" variants={cardReveal}>
              <div className="section-kicker text-[#7A776D] before:bg-[#7A776D]/40">
                Data Science Engineer
              </div>
              <h1 className="hero-title text-[#23241F]">
                Bharath
                <br />
                Mohan
              </h1>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-[#55544C]">
                Building open-source AI products, production-grade ML systems,
                and practical tools that make complex workflows feel calm and
                fast.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <motion.a
                  href="#projects"
                  className="earth-btn earth-btn-primary"
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                  <ArrowRight size={15} />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="earth-btn earth-btn-secondary"
                  whileTap={{ scale: 0.98 }}
                >
                  Contact
                </motion.a>
              </div>
            </PortfolioCard>

            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-4"
            >
              {socialLinks.map((link) => (
                <PortfolioCard
                  key={link.label}
                  tone="paper"
                  className="p-3"
                  variants={cardReveal}
                  whileHover={{ y: -3 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg p-2"
                    aria-label={link.label}
                  >
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[#7A776D]">
                      {link.label}
                    </span>
                    <motion.span
                      whileHover={hoverIcon}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#FBF9F4]"
                    >
                      <link.icon size={14} />
                    </motion.span>
                  </a>
                </PortfolioCard>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={sectionReveal} className="h-full">
            <PortfolioCard
              tone="paper"
              className="h-full p-7 md:p-9"
              variants={cardReveal}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#EDF2E6] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[#2D4F1E]">
                  <span className="pulse-dot" />
                  Snapshot
                </div>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[#7A776D]">
                  Est. 2018
                </span>
              </div>

              <p className="mt-6 text-[1.05rem] leading-relaxed text-[#55544C] md:text-[1.15rem] md:leading-[1.72]">
                Hi, I&apos;m Bharath, a data science engineer with 8+ years
                across enterprise ML and analytics systems. I currently design
                GenAI pipelines for Google client programs, and build
                open-source AI tools like Arcane, StyleDiff, and Wander Weave.
                I focus on turning complex models into practical products teams
                can actually use.
              </p>

              <div className="mt-7 border-t border-hairline pt-6">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#7A776D]">
                  Currently building
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area.label}
                      className="rounded-full border border-hairline bg-[#FBF9F4] px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[#55544C]"
                    >
                      {area.label}
                    </span>
                  ))}
                </div>
              </div>
            </PortfolioCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
