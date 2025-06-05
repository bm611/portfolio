import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import cerebro from "../assets/cerebro.jpeg";
import recipe from "../assets/bb.jpeg";
import go from "../assets/go-ph.jpeg";
import chat from "../assets/chat.jpeg";

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
    image: cerebro,
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
    live_url: "https://recipe.reflex.run",
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
      className="section-padding bg-dark-800 relative py-24"
    >
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon to-teal-400">
            My Projects
          </h2>
          <p className="text-light-300 text-lg">
            A showcase of my recent projects to solve practical problems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariant}
              className="bg-dark-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-dark-600 hover:border-neon/30 group md:max-w-md lg:max-w-sm mx-auto w-full"
            >
              <div className="relative overflow-hidden h-56 md:h-64 lg:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-70"></div>

                <div className="absolute top-4 right-4 flex gap-3">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neon text-dark-900 p-2 rounded-full hover:scale-110 transition-transform hover:rotate-6"
                      title="Live Demo"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-800/90 text-light-100 p-2 rounded-full hover:scale-110 transition-transform hover:rotate-6"
                    title="View Code"
                    aria-label="View Source Code on GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-dark-800/80 px-2 py-1 rounded-md text-neon backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-7 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-light-100 group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-light-300 text-sm md:text-base mb-4 line-clamp-3 md:line-clamp-4 lg:line-clamp-5">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
