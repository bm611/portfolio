import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    content: "Working with this developer was an absolute pleasure. They took our vague idea and transformed it into a beautiful, functional website that perfectly represents our brand.",
    author: "Alex Morgan",
    position: "CEO",
    company: "TechStart Inc."
  },
  {
    id: 2,
    content: "Exceptional technical skills and a keen eye for design. They delivered our e-commerce platform ahead of schedule and the results exceeded our expectations.",
    author: "Jamie Larson",
    position: "Marketing Director",
    company: "RetailNow"
  },
  {
    id: 3,
    content: "A truly talented developer who combines technical expertise with creative solutions. They've been instrumental in scaling our web application to handle our growing user base.",
    author: "Sam Peterson",
    position: "CTO",
    company: "GrowthWave"
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-dark-800 relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-light-300 text-lg">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -top-10 right-10 text-neon opacity-20">
            <Quote size={64} />
          </div>
          
          <div className="py-8 relative">
            {testimonialData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  position: activeIndex === index ? 'relative' : 'absolute',
                  zIndex: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="card text-center p-8"
              >
                <p className="text-lg text-light-200 italic mb-6">"{testimonial.content}"</p>
                
                <div>
                  <div className="font-semibold text-neon">{testimonial.author}</div>
                  <div className="text-light-300 text-sm">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? 'bg-neon' : 'bg-dark-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-12"
        >
          {['KALO', 'TANO', 'Massui', 'Altall', 'Kinua', 'KRATE'].map((company, index) => (
            <motion.div
              key={company}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              className="text-light-400 text-lg font-medium"
            >
              {company}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;