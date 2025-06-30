import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import cerebro from "../assets/cerebro.jpeg";
import recipe from "../assets/bb.jpeg";
import go from "../assets/go-ph.jpeg";
import chat from "../assets/chat.jpeg";
import ark from "../assets/Ark.jpeg";

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
    title: "Ark - Chat | Search | Learn",
    description:
      "A modern, feature-rich AI chat application built with Python and Reflex that supports multiple AI providers and local models.",
    image: ark,
    tags: ["Python", "Gemini", "TailwindCSS", "Reflex"],
    github_url: "https://github.com/bm611/ark",
    live_url: "https://chatwithark.xyz/",
  },
  {
    title: "Cerebro - AI Quiz Generator",
    description:
      "An AI-powered quiz generator that dynamically creates customized quizzes on any topic or subject area. Built using Google's Gemini API to analyze content and generate relevant questions.",
    image: cerebro,
    tags: ["Python", "Gemini", "TailwindCSS", "Reflex"],
    github_url: "https://github.com/bm611/cerebro",
    live_url: "https://cerebro-aqua-wood.reflex.run/",
  },
  {
    title: "Byte-Bites - AI Recipe Generator",
    description:
      "An AI-powered recipe generator that creates unique recipes based on user preferences and available ingredients. Features intelligent ingredient substitution and dynamic recipe scaling.",
    image: recipe,
    tags: ["Python", "Gemini", "Flux", "TailwindCSS", "Reflex"],
    github_url: "https://github.com/bm611/byte-bites",
    live_url: "https://app-lime-ring.reflex.run/",
  },
  {
    title: "Display ProductHunt trending tools using CLI",
    description:
      "go-ph is a command-line interface (CLI) tool that fetches and displays products launched today on Product Hunt.",
    image: go,
    tags: ["go", "jina", "gemini", "cobra"],
    github_url: "https://github.com/bm611/go-ph",
    live_url: "",
  },
  {
    title: "Chat-UI",
    description:
      "A modern chat interface built with Reflex that allows you to interact with various AI models through different providers or run completely locally using open-source models.",
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
      className="section-padding bg-light-200 dark:bg-dark-800 relative py-24"
    >
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-light-400 dark:via-dark-600 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-blue-600 dark:from-neon dark:to-teal-400">
            My Projects
          </h2>
          <p className="text-light-700 dark:text-light-300 text-lg">
            A showcase of my recent projects to solve practical problems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectData.map((project) => (
            <motion.div
              key={project.title}
              variants={projectVariant}
              className="bg-gradient-to-br from-light-300/80 to-light-400/90 dark:from-dark-700/80 dark:to-dark-800/90 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border-2 border-light-400 dark:border-dark-500 hover:border-primary-light/60 dark:hover:border-neon/60 group w-full max-w-sm mx-auto relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary-light/5 before:to-blue-400/5 dark:before:from-neon/5 dark:before:to-teal-400/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <div className="relative overflow-hidden h-48 sm:h-52 md:h-56 lg:h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-100 via-light-100/50 dark:from-dark-900 dark:via-dark-900/50 to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-light/10 dark:to-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-3 right-3 flex gap-2">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-light dark:bg-neon text-white dark:text-dark-900 p-2 border border-primary-light dark:border-neon hover:bg-transparent hover:text-primary-light dark:hover:text-neon hover:scale-110 transition-all duration-300 hover:rotate-6 shadow-lg hover:shadow-primary-light/50 dark:hover:shadow-neon/50"
                      title="Live Demo"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-light-300/90 dark:bg-dark-800/90 text-light-800 dark:text-light-100 p-2 border border-light-500 dark:border-dark-500 hover:border-light-800 dark:hover:border-light-100 hover:bg-light-100 dark:hover:bg-light-100 hover:text-dark-900 hover:scale-110 transition-all duration-300 hover:rotate-6 shadow-lg"
                    title="View Code"
                    aria-label="View Source Code on GitHub"
                  >
                    <Github size={16} />
                  </a>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-light-300/90 dark:bg-dark-800/90 px-2 py-1 border border-light-500 dark:border-dark-600 text-primary-light dark:text-neon backdrop-blur-sm font-medium hover:border-primary-light/50 dark:hover:border-neon/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6 border-t border-light-400 dark:border-dark-600 bg-gradient-to-b from-light-300/50 to-light-400/80 dark:from-dark-700/50 dark:to-dark-800/80">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-light-800 dark:text-light-100 group-hover:text-primary-light dark:group-hover:text-neon transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                <p className="text-light-700 dark:text-light-300 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4">
                  {project.description}
                </p>
                <div className="mt-4 pt-3 border-t border-light-400/50 dark:border-dark-600/50">
                  <div className="flex items-center justify-end">
                    <div className="w-6 h-px bg-gradient-to-r from-primary-light to-blue-400 dark:from-neon dark:to-teal-400 group-hover:w-12 transition-all duration-500"></div>
                  </div>
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
