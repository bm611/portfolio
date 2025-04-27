import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form data:', formData);
    setFormStatus('success');

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Reset status after 3 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-dark-900 relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-light-300">
              Contact me via this form or email. I'm open to discussing new projects,
              ideas, and opportunities.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-dark-800 rounded-full text-neon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-light-300">Email</div>
                  <a href="mailto:bharath.mohan.pro@gmail.com" className="hover:text-neon transition-colors">
                    bharath.mohan.pro@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-dark-800 rounded-full text-neon">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div className="text-sm text-light-300">Social Media</div>
                  <div className="flex gap-4 mt-2">
                    <a href="https://github.com/bm611" className="text-light-300 hover:text-neon transition-colors" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/bharath-mohan/" className="text-light-300 hover:text-neon transition-colors" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-light-300 hover:text-neon transition-colors" aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-light-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-dark-800 border border-dark-600 rounded-lg focus:border-neon focus:outline-none text-light-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-light-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-dark-800 border border-dark-600 rounded-lg focus:border-neon focus:outline-none text-light-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-light-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-dark-800 border border-dark-600 rounded-lg focus:border-neon focus:outline-none text-light-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-light-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-dark-800 border border-dark-600 rounded-lg focus:border-neon focus:outline-none text-light-100 resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-primary w-full flex justify-center items-center gap-2"
                >
                  Send Message
                </button>

                {formStatus === 'success' && (
                  <p className="mt-2 text-sm text-success">Your message has been sent successfully!</p>
                )}

                {formStatus === 'error' && (
                  <p className="mt-2 text-sm text-error">There was an error sending your message. Please try again.</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
