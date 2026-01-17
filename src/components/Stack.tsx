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
import {
  Terminal,
  Bot,
  Keyboard,
  Headphones,
  Globe,
} from "lucide-react";

interface StackItem {
  category: string;
  name: string;
  icon?: typeof siNeovim;
  lucideIcon?: React.FC<{ size?: number; color?: string; className?: string }>;
  color: string;
}

const stackItems: StackItem[] = [
  {
    category: "Editor",
    name: "Zen",
    icon: siZenbrowser,
    color: "#ff7043",
  },
  {
    category: "Editor",
    name: "Neovim",
    icon: siNeovim,
    color: "#57A143",
  },
  {
    category: "Terminal",
    name: "Ghostty",
    lucideIcon: Terminal,
    color: "#6366f1",
  },
  {
    category: "Agent",
    name: "Droid CLI",
    lucideIcon: Bot,
    color: "#06b6d4",
  },
  {
    category: "Laptop",
    name: "MacBook Pro",
    icon: siApple,
    color: "#a1a1aa",
  },
  {
    category: "Camera",
    name: "Sony A7R IV",
    icon: siSony,
    color: "#000000",
  },
  {
    category: "Keyboard",
    name: "Nuphy Halo 75",
    lucideIcon: Keyboard,
    color: "#ec4899",
  },
  {
    category: "Headphones",
    name: "Sony XM3",
    lucideIcon: Headphones,
    color: "#8b5cf6",
  },
  {
    category: "Browser",
    name: "Arc",
    icon: siArc,
    color: "#FCBFBD",
  },
  {
    category: "Browser",
    name: "Dia",
    lucideIcon: Globe,
    color: "#3b82f6",
  },
  {
    category: "Notes",
    name: "Obsidian",
    icon: siObsidian,
    color: "#7C3AED",
  },
];

const Stack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <section
      id="stack"
      ref={ref}
      className="section-padding bg-light-200 dark:bg-dark-900 relative border-t-2 border-black dark:border-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-12 bg-neon"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white uppercase tracking-tighter">
              My_Stack
            </h2>
          </div>
          <p className="text-light-700 dark:text-light-300 text-lg font-mono border-l-2 border-black/20 dark:border-white/20 pl-4 ml-2">
            {">"} Tools and gear that power my workflow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="flex items-center gap-3 px-4 py-3 w-48 bg-light-100 dark:bg-dark-800 border-2 border-black dark:border-white hover:shadow-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all cursor-default">
                {item.icon ? (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 flex-shrink-0"
                    style={{ fill: item.color }}
                  >
                    <path d={item.icon.path} />
                  </svg>
                ) : item.lucideIcon ? (
                  <item.lucideIcon
                    size={20}
                    color={item.color}
                    className="flex-shrink-0"
                  />
                ) : null}
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-light-600 dark:text-light-500">
                    {item.category}
                  </span>
                  <span className="text-sm font-semibold text-black dark:text-white whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;
