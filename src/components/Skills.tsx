import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PortfolioCard, { CardTone } from "./ui/PortfolioCard";
import { cardReveal, sectionReveal, stagger } from "../lib/motion";

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

const tones: CardTone[] = ["beige", "terracotta", "slate", "forest"];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="section-shell">
      <div className="section-container container mx-auto px-4 md:px-6">
        <motion.div
          className="section-header"
          variants={sectionReveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-copy">
            A categorized snapshot of the technologies and methods I use to ship
            production-ready data and AI products.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {skillCategories.map((category, index) => {
            const tone = tones[index % tones.length];
            const darkTone = tone === "slate" || tone === "forest";

            return (
              <PortfolioCard
                key={category.title}
                tone={tone}
                variants={cardReveal}
                className="h-full p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg leading-tight">{category.title}</h3>
                  <span
                    className={`rounded-full border px-2 py-1 text-[0.65rem] font-mono uppercase tracking-[0.1em] ${
                      darkTone
                        ? "border-[#F5E6CC]/28 bg-[#F5E6CC]/12"
                        : "border-[#2f3328]/18 bg-black/10"
                    }`}
                  >
                    {category.skills.length} items
                  </span>
                </div>

                <ul className="mt-4">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      className="skill-row"
                      whileHover={{ x: 3 }}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${darkTone ? "bg-[#F5E6CC]" : "bg-[#22311b]"}`}
                      />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </PortfolioCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
