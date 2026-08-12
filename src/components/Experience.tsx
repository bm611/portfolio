import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PortfolioCard, { CardTone } from "./ui/PortfolioCard";
import { cardReveal, sectionReveal, stagger } from "../lib/motion";

interface Experience {
  date_range: string;
  location: string;
  title: string;
  company: string;
  description: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    date_range: "2023 - Present",
    location: "USA (Remote)",
    title: "Data Science Engineer",
    company: "Motivity Labs (Google)",
    description:
      "Currently working as Data Science Engineer at Motivity Labs on a Google client project, specializing in enterprise GenAI solutions and document processing at scale.",
    details: [
      "Architected multimodal data-extraction workflows using Gemini 2.5 and Cloud Composer (Airflow) that transform unstructured PDFs into production-ready structured data.",
      "Built an innovative Text-to-SQL AI Agent powered by Gemini LLM that democratizes data access by enabling non-technical users to query databases and generate reports using natural language.",
      "Engineered prompt chains for complex document reasoning and extraction using Vertex AI.",
      "Deployed production-grade ML pipelines with CI/CD integration for seamless model updates.",
    ],
  },
  {
    date_range: "2018 - 2023",
    location: "USA",
    title: "Senior Data Scientist",
    company: "Thermo Fisher Scientific",
    description:
      "Progressed from Data Scientist Intern to Senior Data Scientist over nearly 5 years, building and productionizing multiple ML models and scalable ETL pipelines.",
    details: [
      "Built and productionized multiple ML models including propensity-to-buy models and recommender systems.",
      "Developed a parts prediction system using topic modeling and BERT for service ticket classification.",
      "Created time series forecasting models for service order volume prediction.",
      "Migrated critical models from SQL to Databricks and engineered scalable ETL pipelines using PySpark.",
    ],
  },
];

const tones: CardTone[] = ["paper", "beige"];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="section-shell">
      <div className="section-container container mx-auto px-4 md:px-6">
        <motion.div
          className="section-header"
          variants={sectionReveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="section-kicker">Career Timeline</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-copy">
            A timeline of enterprise AI, data engineering, and production ML
            systems delivered across business-critical environments.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="timeline-wrap space-y-6 pl-0 md:pl-8"
        >
          {experiences.map((experience, index) => {
            const tone = tones[index % tones.length];

            return (
              <motion.div
                key={experience.company}
                variants={cardReveal}
                className="relative"
              >
                <span className="timeline-node" aria-hidden="true" />
                <PortfolioCard tone={tone} className="p-6 md:p-8" interactive>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#7A776D]">
                        {experience.company}
                      </p>
                      <h3 className="mt-1.5 text-2xl leading-tight">
                        {experience.title}
                      </h3>
                    </div>

                    <div className="font-mono text-xs uppercase tracking-[0.1em] text-[#7A776D]">
                      <span>{experience.date_range}</span>
                      <span className="mx-2 text-[#DCD6C9]">/</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#55544C]">
                    {experience.description}
                  </p>

                  <div className="mt-6 grid gap-x-6 gap-y-2.5 md:grid-cols-2">
                    {experience.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex gap-3 rounded-md px-1 py-1"
                        whileHover={{ x: 2 }}
                      >
                        <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[#C4683F]" />
                        <p className="text-[0.88rem] leading-relaxed text-[#55544C]">
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </PortfolioCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
