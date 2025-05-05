import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Building2, Briefcase } from "lucide-react";

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
      "Led development of PDF processing pipelines and PII redaction workflows. Built a Gemini-powered self-service chatbot for automated insights delivery.",
    skills: ["Python", "GCP", "Gemini", "Document AI", "Cloud Composer", "NLP"],
  },
  {
    date_range: "2018 - 2023",
    title: "Data Scientist",
    company: "Thermo Fisher Scientific",
    description:
      "Developed BERT-based prediction models and recommendation systems. Built ETL pipelines using PySpark for large-scale data processing.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon to-teal-400">
            Work Experience
          </h2>
          <p className="text-light-300 text-lg">
            My professional journey in data science and engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 h-full w-[2px] bg-gradient-to-b from-neon/50 via-neon/20 to-transparent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-16 md:pl-24 pb-12 last:pb-0"
            >
              {/* Timeline dot and icon */}
              <div className="absolute left-0 w-10 md:w-16 h-10 md:h-16 rounded-2xl bg-dark-700 border-2 border-neon/30 flex items-center justify-center transform -translate-y-1/2">
                {index === 0 ? (
                  <Briefcase size={20} className="text-neon md:hidden" />
                ) : index === 1 ? (
                  <Building2 size={20} className="text-neon md:hidden" />
                ) : (
                  <Calendar size={20} className="text-neon md:hidden" />
                )}
                {index === 0 ? (
                  <Briefcase size={24} className="text-neon hidden md:block" />
                ) : index === 1 ? (
                  <Building2 size={24} className="text-neon hidden md:block" />
                ) : (
                  <Calendar size={24} className="text-neon hidden md:block" />
                )}
              </div>

              <div className="card hover:bg-dark-700/50 transition-colors duration-300">
                <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-light-100">
                      {exp.title}
                    </h3>
                    <p className="text-neon">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-dark-700 text-sm font-medium text-light-300">
                    {exp.date_range}
                  </span>
                </div>

                <p className="text-light-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-dark-900/50 text-neon border border-neon/20 hover:border-neon/50 transition-colors"
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
