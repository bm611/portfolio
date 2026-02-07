import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import PortfolioCard, { CardTone } from './ui/PortfolioCard';
import { cardReveal, sectionReveal, stagger, useMotionConfig } from '../lib/motion';

const contactCards = [
  {
    title: 'Email',
    text: 'Drop me a line for collaborations and product ideas.',
    icon: Mail,
    href: 'mailto:bharath.mohan.pro@gmail.com',
    external: false,
  },
  {
    title: 'GitHub',
    text: 'Browse repositories, experiments, and project source code.',
    icon: Github,
    href: 'https://github.com/bm611',
    external: true,
  },
  {
    title: 'LinkedIn',
    text: 'Connect for professional opportunities and discussions.',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/bharath-mohan/',
    external: true,
  },
];

const tones: CardTone[] = ['beige', 'terracotta', 'slate'];

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { hoverIcon } = useMotionConfig();

  return (
    <section id="contact" ref={ref} className="section-shell pb-24">
      <div className="section-container container mx-auto px-4 md:px-6">
        <motion.div
          className="section-header max-w-3xl text-center mx-auto"
          variants={sectionReveal}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-kicker !justify-center before:!hidden">Lets Collaborate</p>
          <h2 className="section-title">Contact Cards</h2>
          <p className="section-copy mx-auto">
            Open to discussing new product ideas, AI engineering opportunities, and full-stack collaborations.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3"
        >
          {contactCards.map((card, index) => {
            const tone = tones[index % tones.length];
            const darkTone = tone === 'forest' || tone === 'slate';

            return (
              <PortfolioCard key={card.title} tone={tone} variants={cardReveal} className="h-full p-6" whileHover={{ y: -8, scale: 1.015 }}>
                <a
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="flex h-full flex-col"
                  aria-label={card.title}
                >
                  <motion.span className="contact-icon" whileHover={hoverIcon}>
                    <card.icon size={24} />
                  </motion.span>

                  <h3 className="mt-4 text-2xl">{card.title}</h3>
                  <p className={`mt-2 flex-1 text-sm leading-relaxed ${darkTone ? 'text-[#F5E6CC]/84' : 'text-[#2f3429]/82'}`}>
                    {card.text}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em]">
                    Reach Out
                    <ArrowUpRight size={14} />
                  </span>
                </a>
              </PortfolioCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
