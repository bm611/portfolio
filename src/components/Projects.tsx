import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
import cerebro from "../assets/cerebro.jpeg";
import recipe from "../assets/bb.jpeg";
import go from "../assets/go-ph.jpeg";
import chat from "../assets/chat.jpeg";
import ark from "../assets/Ark.jpeg";
import wander from "../assets/wander.png";
import style from "../assets/style.png";
import arcane from "../assets/arcane.png";
import { useGitHubStars } from "../hooks/useGitHubStars";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github_url: string;
  live_url: string;
}

const projectData: Project[] = [
  {
    title: "Arcane",
    description:
      "An AI-powered chat application built for the terminal. A beautiful TUI experience for conversing with AI models.",
    image: arcane,
    tags: ["Go", "TUI", "OpenAI", "Terminal"],
    github_url: "https://github.com/bm611/arcane",
    live_url: "",
  },
  {
    title: "StyleDiff",
    description:
      "Reimagine your style with AI. Upload your look, describe changes, and watch your new vision emerge instantly using Flux.2[pro].",
    image: style,
    tags: ["React", "Vite", "Flux.2[pro]"],
    github_url: "https://github.com/bm611/stylediff",
    live_url: "https://stylediff.netlify.app",
  },
  {
    title: "Wander Weave",
    description:
      "Transform your travel photos into captivating stories with AI-powered narrative generation.",
    image: wander,
    tags: ["React", "Vite", "Gemini"],
    github_url: "https://github.com/bm611/wanderweave",
    live_url: "https://wander-weave.netlify.app",
  },
  {
    title: "Ark",
    description:
      "A modern AI chat application that supports multiple AI providers and local models.",
    image: ark,
    tags: ["Python", "Gemini", "TailwindCSS", "Reflex"],
    github_url: "https://github.com/bm611/ark",
    live_url: "https://chatwithark.xyz/",
  },
  {
    title: "Cerebro",
    description:
      "An AI-powered quiz generator that creates customized quizzes on any topic.",
    image: cerebro,
    tags: ["Python", "Gemini", "TailwindCSS", "Reflex"],
    github_url: "https://github.com/bm611/cerebro",
    live_url: "https://cerebro-aqua-wood.reflex.run/",
  },
  {
    title: "Byte-Bites",
    description:
      "An AI recipe generator that creates unique recipes based on user preferences.",
    image: recipe,
    tags: ["Python", "Gemini", "Flux", "TailwindCSS", "Reflex"],
    github_url: "https://github.com/bm611/byte-bites",
    live_url: "https://app-lime-ring.reflex.run/",
  },
  {
    title: "Product Hunt Trending in CLI",
    description:
      "A command-line tool that fetches and displays products launched today on Product Hunt.",
    image: go,
    tags: ["go", "jina", "gemini", "cobra"],
    github_url: "https://github.com/bm611/go-ph",
    live_url: "",
  },
  {
    title: "Chat-UI",
    description:
      "A modern chat interface for interacting with various AI models locally or through providers.",
    image: chat,
    tags: ["Python", "Reflex", "TailwindCSS", "Ollama", "OpenAI"],
    github_url: "https://github.com/bm611/chat-ui",
    live_url: "",
  },
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const starCounts = useGitHubStars(projectData.map((p) => p.github_url));

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 bg-light-200 dark:bg-dark-900 border-t-2 border-black dark:border-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-12 bg-neon"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white uppercase tracking-tighter">
              Projects_Index
            </h2>
          </div>
          <p className="text-light-700 dark:text-light-300 text-lg font-mono border-l-2 border-black/20 dark:border-white/20 pl-4 ml-2">
            {">"} A showcase of technical implementations and solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariant}
              className="group bg-light-100 dark:bg-dark-800 border-2 border-black dark:border-white p-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all hover:-translate-y-1 hover:-translate-x-1"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-2 px-2 py-1 border-b border-black/10 dark:border-white/10">
                <span className="font-mono text-xs font-bold uppercase">
                  PRJ-{index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-neon"></div>
                </div>
              </div>

              <div className="h-48 overflow-hidden border border-black dark:border-white relative grayscale hover:grayscale-0 transition-all duration-500">
                <div className="absolute inset-0 bg-grid opacity-20 z-10 pointer-events-none"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white font-mono uppercase truncate">
                  {project.title}
                </h3>
                <p className="text-light-700 dark:text-light-400 text-sm mb-6 line-clamp-3 font-mono leading-relaxed h-[4.5em]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 h-[4.5em] overflow-hidden content-start">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono font-bold bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/20 dark:border-white/20 px-2 py-1 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <div className="flex items-center gap-2 px-3 py-2 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-mono font-bold text-black dark:text-white">
                      {starCounts[index]}
                    </span>
                  </div>
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-sm py-2 px-4"
                  >
                    Code
                  </a>
                  {project.live_url ? (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-sm py-2 px-4"
                    >
                      <span className="relative z-10">Demo</span>
                    </a>
                  ) : (
                    <span className="flex-1 bg-black/10 dark:bg-white/10 text-black/40 dark:text-white/40 border-2 border-black/10 dark:border-white/10 py-2 px-4 text-center text-sm font-bold font-mono uppercase cursor-not-allowed">
                      Offline
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
