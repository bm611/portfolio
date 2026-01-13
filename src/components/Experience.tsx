import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Icons removed as they are no longer used in the layout
// import { Calendar, Building2, Briefcase } from "lucide-react";

interface Experience {
  date_range: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    date_range: "2023 - Present",
    title: "Data Science Engineer",
    company: "Motivity Labs (Google)",
    description:
      "Currently working as Data Science Engineer at Motivity Labs on a Google client project, specializing in enterprise GenAI solutions and document processing at scale. Architected multimodal data-extraction workflows using Gemini 2.5 and Cloud Composer (Airflow) that transform unstructured PDFs into production-ready structured data. Built an innovative Text-to-SQL AI Agent powered by Gemini LLM that democratizes data access by enabling non-technical users to query databases and generate reports using natural language, eliminating the need for SQL expertise.",
    skills: ["Python", "GCP", "Gemini", "Document AI", "Cloud Composer", "NLP"],
  },
  {
    date_range: "2018 - 2023",
    title: "Data Scientist",
    company: "Thermo Fisher Scientific",
    description:
      "Progressed from Data Scientist Intern to Senior Data Scientist over nearly 5 years. Built and productionized multiple ML models including propensity-to-buy models, recommender systems, and Subscribe & Save offerings. Developed a parts prediction system using topic modeling and BERT for service ticket classification, and created time series forecasting models for service order volume prediction. Engineered scalable ETL pipelines using PySpark and migrated critical models from SQL to Databricks. ",
    skills: [
      "Python",
      "BERT",
      "PySpark",
      "SQL",
      "Databricks",
      "Time Series",
      "ML",
    ],
  },
  {
    date_range: "2014 - 2016",
    title: "Systems Engineer",
    company: "Tata Consultancy Services",
    description:
      "Managed SCCM deployments and developed custom reporting solutions for asset tracking and compliance monitoring.",
    skills: ["SQL", "SCCM", "Reporting Services"],
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
      {/* Decorative vertical line */}
      <div className="absolute top-0 right-10 md:right-32 w-[1px] h-full bg-black/10 dark:bg-white/10 hidden md:block"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
              Experience_Log
            </h2>
          </div>
          <p className="text-light-700 dark:text-light-300 text-lg font-mono border-l-2 border-black/20 dark:border-white/20 pl-4 ml-2">
            {">"} Professional journey and career milestones.
          </p>
        </motion.div>

        <div className="max-w-4xl relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-4 h-full w-[2px] bg-black dark:bg-white"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-16 md:pl-24 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-black dark:bg-white flex items-center justify-center z-10 border-2 border-black dark:border-white">
                <div className="text-white dark:text-black font-mono font-bold text-xs">
                  {index + 1}
                </div>
              </div>

              <div className="card bg-light-100 dark:bg-dark-800 border-2 border-black dark:border-white p-6 relative hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-neon border-l-2 border-b-2 border-black dark:border-white"></div>

                <div className="flex flex-wrap gap-4 items-start justify-between mb-4 border-b-2 border-black/10 dark:border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white font-mono uppercase">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-neon">►</span>
                      <p className="text-black dark:text-white font-bold text-sm uppercase">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-mono font-bold uppercase">
                    {exp.date_range}
                  </span>
                </div>

                <p className="text-light-700 dark:text-light-400 mb-6 font-mono text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs font-mono font-bold bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/20 dark:border-white/20 uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
