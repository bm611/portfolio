import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: '15+', label: 'Happy Clients' },
  ];

  const services = [
    { 
      icon: <Code className="h-8 w-8 text-neon" />,
      title: 'Web Development',
      description: 'Creating responsive, performant websites and web applications using modern frameworks and technologies.'
    },
    { 
      icon: <Globe className="h-8 w-8 text-neon" />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from database design to frontend implementation for complete digital experiences.'
    },
    { 
      icon: <Lightbulb className="h-8 w-8 text-neon" />,
      title: 'Technical Consultation',
      description: 'Providing expert advice on technology stack selection, architecture decisions, and best practices.'
    },
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-dark-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-light-300 text-lg">
            I'm a passionate developer with a focus on creating clean, efficient, and user-friendly 
            digital experiences. With a strong foundation in both frontend and backend technologies, 
            I bring a holistic approach to every project.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-light-300">
              I began my journey in software development 5 years ago, driven by a curiosity for 
              how things work and a desire to build useful tools. Since then, I've worked with 
              startups, agencies, and established companies, helping them bring their ideas to life.
            </p>
            <p className="text-light-300">
              My approach combines technical expertise with creative problem-solving. I believe 
              that great development isn't just about writing code—it's about understanding user 
              needs and business goals to deliver meaningful solutions.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-neon">{stat.value}</div>
                  <div className="text-light-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">What I Offer</h3>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="card flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">{service.icon}</div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">{service.title}</h4>
                    <p className="text-light-300 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;