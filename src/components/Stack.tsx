import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  siNeovim,
  siObsidian,
  siSony,
  siApple,
  siArc,
  siZenbrowser,
} from "simple-icons";
import { Bot, Globe, Headphones, Keyboard, Terminal } from "lucide-react";
import PortfolioCard from "./ui/PortfolioCard";
import {
  cardReveal,
  sectionReveal,
  stagger,
  useMotionConfig,
} from "../lib/motion";

interface StackItem {
  category: string;
  name: string;
  icon?: typeof siNeovim;
  lucideIcon?: React.FC<{ size?: number; color?: string; className?: string }>;
  color: string;
}

const stackItems: StackItem[] = [
  { category: "Browser", name: "Zen", icon: siZenbrowser, color: "#ff7043" },
  { category: "Editor", name: "Neovim", icon: siNeovim, color: "#57A143" },
  {
    category: "Terminal",
    name: "Ghostty",
    lucideIcon: Terminal,
    color: "#2D4F1E",
  },
  { category: "Agent", name: "Droid CLI", lucideIcon: Bot, color: "#C4683F" },
  { category: "Laptop", name: "MacBook Pro", icon: siApple, color: "#3A3B36" },
  { category: "Camera", name: "Sony A7R IV", icon: siSony, color: "#3A3B36" },
  {
    category: "Keyboard",
    name: "Nuphy Halo 75",
    lucideIcon: Keyboard,
    color: "#2D4F1E",
  },
  {
    category: "Headphones",
    name: "Sony XM3",
    lucideIcon: Headphones,
    color: "#C4683F",
  },
  { category: "Browser", name: "Arc", icon: siArc, color: "#C4683F" },
  { category: "Browser", name: "Dia", lucideIcon: Globe, color: "#2D4F1E" },
  { category: "Notes", name: "Obsidian", icon: siObsidian, color: "#6B4FA0" },
];

const Stack: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
  const { hoverIcon } = useMotionConfig();

  return (
    <section id="stack" ref={ref} className="section-shell">
      <div className="section-container container mx-auto px-4 md:px-6">
        <motion.div
          className="section-header"
          variants={sectionReveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="section-kicker">Toolkit</p>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-copy">
            The tools, hardware, and creative utilities powering my day-to-day
            workflow.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4"
        >
          {stackItems.map((item) => (
            <PortfolioCard
              key={`${item.category}-${item.name}`}
              tone="paper"
              variants={cardReveal}
              className="stack-tile p-3.5 md:p-4 min-h-[78px] md:min-h-[92px]"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-2.5 md:gap-3 min-w-0">
                <motion.span
                  whileHover={hoverIcon}
                  className="inline-flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-md border border-hairline bg-[#FBF9F4]"
                >
                  {item.icon ? (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 md:h-[18px] md:w-[18px]"
                      style={{ fill: item.color }}
                    >
                      <path d={item.icon.path} />
                    </svg>
                  ) : item.lucideIcon ? (
                    <item.lucideIcon size={17} color={item.color} />
                  ) : null}
                </motion.span>

                <div className="flex min-w-0 flex-col">
                  <span className="font-mono text-[0.58rem] md:text-[0.62rem] uppercase tracking-[0.12em] text-[#7A776D]">
                    {item.category}
                  </span>
                  <span className="truncate text-[1.02rem] md:text-[1.06rem] font-semibold text-[#23241F] leading-tight">
                    {item.name}
                  </span>
                </div>
              </div>
            </PortfolioCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;
