import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "Go"],
  },
  {
    title: "Data & Analytics",
    skills: ["PySpark", "SparkSQL", "BigQuery", "PowerBI"],
  },
  {
    title: "GenAI & LLM",
    skills: [
      "AI Agents",
      "Context Engineering",
      "Text-to-SQL Agents",
      "Multimodal Data Extraction",
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      "NLP",
      "Time Series Forecasting",
      "Classification",
      "Recommender Systems",
    ],
  },
  {
    title: "Deep Learning",
    skills: ["PyTorch", "Neural Networks", "Transformers"],
  },
  {
    title: "Cloud Platforms",
    skills: ["Google Cloud Platform (GCP)", "AWS (Lambda, S3)", "Databricks"],
  },
  {
    title: "Data Engineering",
    skills: [
      "ETL Pipelines",
      "Apache Airflow",
      "Cloud Composer",
      "Data Modeling",
    ],
  },
  {
    title: "Web Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-light-200 dark:bg-dark-900 relative border-t-2 border-black dark:border-white"
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
              Tech_Stack
            </h2>
          </div>
          <p className="text-light-700 dark:text-light-300 text-lg font-mono border-l-2 border-black/20 dark:border-white/20 pl-4 ml-2">
            {">"} Specialized modules and competencies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-light-100 dark:bg-dark-800 border-2 border-black dark:border-white p-5 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all h-full"
            >
              <div className="mb-4 pb-2 border-b-2 border-black/10 dark:border-white/10 flex justify-between items-center">
                <h3 className="font-mono font-bold uppercase text-sm tracking-wider text-black dark:text-white">
                  {category.title}
                </h3>
                <div className="w-2 h-2 bg-neon"></div>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm font-mono text-light-700 dark:text-light-300"
                  >
                    <span className="text-neon">»</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
