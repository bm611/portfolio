import React, { useRef } from "react";
import {
  ArrowRight,
  Bot,
  Calendar,
  Database,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
  Zap,
  Code2,
  Cpu,
} from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import PortfolioCard from "./ui/PortfolioCard";
import {
  cardReveal,
  sectionReveal,
  stagger,
  useMotionConfig,
} from "../lib/motion";

const focusAreas = [
  { label: "Enterprise GenAI", icon: Zap, accent: "#f39d84" },
  { label: "ML Engineering", icon: Code2, accent: "#8db378" },
  { label: "OSS Builder", icon: Cpu, accent: "#F5E6CC" },
];

const Hero: React.FC = () => {
  const { hoverIcon } = useMotionConfig();
  const snapshotRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), {
    stiffness: 200,
    damping: 30,
  });
  const glowX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), {
    stiffness: 150,
    damping: 25,
  });
  const glowY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), {
    stiffness: 150,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = snapshotRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bharath-mohan/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:bharath.mohan.pro@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/bm611", label: "GitHub" },
    {
      icon: Twitter,
      href: "https://twitter.com/bharathmohan",
      label: "Twitter",
    },
  ];

  const inlinePill = (Icon: React.ElementType, text: string) => (
    <motion.span
      whileHover={{
        y: -3,
        scale: 1.06,
        boxShadow: "0 6px 20px rgba(243, 157, 132, 0.25)",
      }}
      whileTap={{ scale: 0.96 }}
      className="snapshot-pill mx-1 inline-flex items-center gap-1.5 rounded-full border border-[#F5E6CC]/26 bg-[#F5E6CC]/12 px-2.5 py-1 align-middle font-mono text-[0.68rem] uppercase tracking-[0.09em] text-[#F5E6CC]"
    >
      <Icon size={13} />
      {text}
    </motion.span>
  );

  return (
    <section id="home" className="section-shell pt-10 md:pt-16">
      <div className="section-container container mx-auto px-4 md:px-6">
        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-7 xl:grid-cols-[1.25fr_0.95fr]"
        >
          <motion.div variants={sectionReveal} className="space-y-5">
            <PortfolioCard
              tone="beige"
              className="p-7 md:p-10"
              variants={cardReveal}
            >
              <div className="section-kicker text-[rgba(31,35,27,0.72)] before:bg-[rgba(31,35,27,0.45)]">
                Now Building
              </div>
              <h1 className="hero-title text-[#212718]">
                Bharath
                <br />
                Mohan
              </h1>
              <p className="hero-subtitle text-[#273220]">
                Data Science Engineer
              </p>
              <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-[#283223]">
                Building open-source AI products, production-grade ML systems,
                and practical tools that make complex workflows feel calm and
                fast.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href="#projects"
                  className="earth-btn earth-btn-primary"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                  <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="earth-btn earth-btn-secondary !text-[#1f241b] !border-[#26351f]/25 !bg-[#f7ebd4]"
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar size={16} />
                  Book A Call
                </motion.a>
              </div>
            </PortfolioCard>

            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {socialLinks.map((link) => (
                <PortfolioCard
                  key={link.label}
                  tone="forest"
                  className="p-3"
                  variants={cardReveal}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg p-2"
                    aria-label={link.label}
                  >
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#f5e6cc]/90">
                      {link.label}
                    </span>
                    <motion.span
                      whileHover={hoverIcon}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F5E6CC]/14"
                    >
                      <link.icon size={16} />
                    </motion.span>
                  </a>
                </PortfolioCard>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger(0.1, 0.2)}
            initial="hidden"
            animate="visible"
            className="h-full"
            style={{ perspective: 900 }}
          >
            <motion.div
              ref={snapshotRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="h-full"
            >
              <PortfolioCard
                tone="slate"
                className="snapshot-card h-full p-7 md:p-8"
                variants={cardReveal}
                interactive={false}
              >
                <motion.div
                  className="snapshot-glow"
                  style={{
                    background: useTransform(
                      [glowX, glowY],
                      ([x, y]) =>
                        `radial-gradient(circle at ${x}% ${y}%, rgba(243,157,132,0.18), transparent 55%)`
                    ),
                  }}
                />

                <div className="snapshot-scan-line" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className="inline-flex items-center gap-2 rounded-full bg-[#fff5e4]/12 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.1em]"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <span className="pulse-dot" />
                      Snapshot
                    </motion.div>

                    <motion.div
                      className="snapshot-status-bar"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="snapshot-status-fill" />
                      <span className="font-mono text-[0.6rem] tracking-wider text-[#8de378]/80">
                        active
                      </span>
                    </motion.div>
                  </div>

                  <motion.p
                    className="mt-5 text-[1.06rem] md:text-[1.22rem] leading-[1.72] text-[#F5E6CC]/90"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    Hi, I&apos;m Bharath, a data science engineer with
                    {inlinePill(Database, "8+ years")}
                    across enterprise ML and analytics systems. I currently
                    design
                    {inlinePill(Sparkles, "GenAI pipelines")}
                    for Google client programs, and I build
                    {inlinePill(Bot, "open-source AI tools")}
                    like Arcane, StyleDiff, and Wander Weave. I focus on turning
                    complex models into
                    {inlinePill(GitBranch, "practical products")}
                    teams can actually use.
                  </motion.p>

                  <motion.div
                    className="snapshot-divider mt-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 0.9,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <motion.div
                    className="mt-5 flex flex-wrap gap-2.5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    {focusAreas.map((area, i) => (
                      <motion.span
                        key={area.label}
                        className="snapshot-focus-tag"
                        style={
                          { "--tag-accent": area.accent } as React.CSSProperties
                        }
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 1.1 + i * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.06,
                          boxShadow: `0 8px 24px ${area.accent}22`,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 18,
                          },
                        }}
                      >
                        <span
                          className="snapshot-focus-icon"
                          style={{ backgroundColor: `${area.accent}18` }}
                        >
                          <area.icon size={12} style={{ color: area.accent }} />
                        </span>
                        {area.label}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </PortfolioCard>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
