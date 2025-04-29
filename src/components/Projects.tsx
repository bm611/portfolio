import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

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
    title: "Cerebro - AI Quiz Generator",
    description:
      "An AI-powered quiz generator that dynamically creates customized quizzes on any topic or subject area. Built using Google's Gemini API to analyze content and generate relevant questions.",
    image: "/cerebro.jpg",
    tags: ["Python", "Gemini", "TailwindCSS", "Reflex"],
    github_url: "https://github.com/bm611/cerebro",
    live_url: "https://cerebro.reflex.run",
  },
  {
    title: "Byte-Bites - AI Recipe Generator",
    description:
      "An AI-powered recipe generator that creates unique recipes based on user preferences and available ingredients. Features intelligent ingredient substitution and dynamic recipe scaling.",
    image: "/recipe.jpg",
    tags: ["Python", "Gemini", "Flux", "TailwindCSS", "Reflex"],
    github_url: "https://github.com/bm611/byte-bites",
    live_url: "https://recipe.reflex.run",
  },
  {
    title: "Web Search",
    description:
      "An advanced web search application integrating Brave Search API for real-time data retrieval and Gemini AI for enhanced result analysis and summarization. Features include comprehensive search results, AI-powered content interpretation, and efficient data processing.",
    image: "/search.jpg",
    tags: ["Python", "Gemini", "Brave", "Reflex"],
    github_url: "https://github.com/bm611/aisearch",
    live_url: "https://aisearch.reflex.com",
  },
  {
    title: "Chat-UI",
    description:
      "A modern chat interface built with Reflex that allows you to interact with various AI models through different providers or run completely locally using open-source models.",
    image: "/chat.jpg",
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

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding bg-dark-800 relative"
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
          <h2 className="section-title">My Projects</h2>
          <p className="text-light-300 text-lg">
            A showcase of my recent projects to solve practical problems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6"
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card group overflow-hidden"
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        className="p-3 bg-neon text-dark-900 rounded-full hover:scale-110 transition-transform"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.github_url}
                      className="p-3 bg-dark-700 text-light-100 rounded-full hover:scale-110 transition-transform"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-light-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-dark-700 px-2 py-1 rounded text-neon"
                    >
                      {tag}
                    </span>
                  ))}
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
