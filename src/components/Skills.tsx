import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Database,
  Code2,
  Sparkle,
  Terminal,
  Cloud,
  Bot,
  LineChart,
  Binary,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skillsData: Skill[] = [
  { name: "Python", icon: <Code2 size={24} /> },
  { name: "Go", icon: <Terminal size={24} /> },
  { name: "PySpark", icon: <Sparkle size={24} /> },
  { name: "SQL", icon: <Database size={24} /> },
  { name: "GCP", icon: <Cloud size={24} /> },
  { name: "Machine Learning", icon: <Bot size={24} /> },
  { name: "Data Science", icon: <LineChart size={24} /> },
  { name: "NLP", icon: <Binary size={24} /> },
];

const Skills: React.FC = () => {
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
      id="skills"
      ref={ref}
      className="section-padding bg-dark-900 relative"
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
            Tech Stack
          </h2>
          <p className="text-light-300 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card flex flex-col items-center justify-center p-6 hover:border-neon transition-colors"
            >
              <div className="text-neon mb-4">{skill.icon}</div>
              <span className="text-light-100 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
