import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cerebro from "../assets/cerebro.jpeg";
import recipe from "../assets/bb.jpeg";
import go from "../assets/go-ph.jpeg";
import chat from "../assets/chat.jpeg";
import ark from "../assets/Ark.jpeg";
import wander from "../assets/wander.png";

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
      className="py-24 bg-light-200 dark:bg-dark-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-800 dark:text-light-100">
            My Projects
          </h2>
          <p className="text-light-700 dark:text-light-300 text-lg">
            A showcase of my recent projects to solve practical problems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectData.map((project) => (
            <motion.div
              key={project.title}
              variants={projectVariant}
              className="bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-light-800 dark:text-light-100">
                  {project.title}
                </h3>
                <p className="text-light-700 dark:text-light-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                

                <div className="flex gap-3">
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-light-300 dark:bg-dark-600 text-light-800 dark:text-light-100 py-2 px-4 rounded text-center text-sm font-medium hover:bg-light-400 dark:hover:bg-dark-500 transition-colors duration-200"
                  >
                    Code
                  </a>
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-light dark:bg-neon text-white dark:text-dark-900 py-2 px-4 rounded text-center text-sm font-medium hover:bg-primary-light-hover dark:hover:bg-neon/90 transition-colors duration-200"
                    >
                      Link
                    </a>
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
