import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";

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
      "Engineered prompt chains for complex document reasoning and extraction using vertex AI.",
      "Deployed production-grade ML pipelines with CI/CD integration for seamless model updates."
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
      "Migrated critical models from SQL to Databricks and engineered scalable ETL pipelines using PySpark."
    ],
  },
];

const Experience: React.FC = () => {
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
      id="experience"
      ref={ref}
      className="section-padding bg-light-200 dark:bg-dark-900 relative border-t-2 border-black dark:border-white"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white uppercase tracking-tighter">
              My Experience
            </h2>
          </div>
          <p className="text-light-700 dark:text-light-400 text-sm md:text-base font-mono max-w-md md:text-right">
            A journey through data engineering, cloud architecture, and AI solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-light-100 dark:bg-dark-800 border-2 border-black dark:border-white p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white font-mono uppercase">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-light-600 dark:text-light-400 font-mono mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 text-light-600 dark:text-light-400 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.date_range}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-light-700 dark:text-light-300 mb-8 font-mono text-base leading-relaxed">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {exp.details.map((detail, dIndex) => (
                  <div key={dIndex} className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-6 h-6 bg-neon flex items-center justify-center border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 group-hover/item:shadow-none transition-all mt-0.5">
                      <span className="text-black font-bold text-xs select-none">›</span>
                    </div>
                    <p className="text-light-700 dark:text-light-400 font-mono text-sm leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

