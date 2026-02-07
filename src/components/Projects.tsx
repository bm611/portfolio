import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Star } from 'lucide-react';
import { useGitHubStars } from '../hooks/useGitHubStars';
import PortfolioCard, { CardTone } from './ui/PortfolioCard';
import { cardReveal, sectionReveal, stagger, useMotionConfig } from '../lib/motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github_url: string;
  live_url: string;
}

const projectData: Project[] = [
  {
    title: 'Arcane',
    description:
      'An AI-powered chat application built for the terminal. A beautiful TUI experience for conversing with AI models.',
    tags: ['Go', 'TUI', 'OpenAI', 'Terminal'],
    github_url: 'https://github.com/bm611/arcane',
    live_url: '',
  },
  {
    title: 'StyleDiff',
    description:
      'Reimagine your style with AI. Upload your look, describe changes, and watch your new vision emerge instantly using Flux.2[pro].',
    tags: ['React', 'Vite', 'Flux.2[pro]'],
    github_url: 'https://github.com/bm611/stylediff',
    live_url: 'https://stylediff.netlify.app',
  },
  {
    title: 'Wander Weave',
    description: 'Transform your travel photos into captivating stories with AI-powered narrative generation.',
    tags: ['React', 'Vite', 'Gemini'],
    github_url: 'https://github.com/bm611/wanderweave',
    live_url: 'https://wander-weave.netlify.app',
  },
  {
    title: 'Ark',
    description: 'A modern AI chat application that supports multiple AI providers and local models.',
    tags: ['Python', 'Gemini', 'TailwindCSS', 'Reflex'],
    github_url: 'https://github.com/bm611/ark',
    live_url: 'https://chatwithark.xyz/',
  },
  {
    title: 'Cerebro',
    description: 'An AI-powered quiz generator that creates customized quizzes on any topic.',
    tags: ['Python', 'Gemini', 'TailwindCSS', 'Reflex'],
    github_url: 'https://github.com/bm611/cerebro',
    live_url: 'https://cerebro-aqua-wood.reflex.run/',
  },
  {
    title: 'Byte-Bites',
    description: 'An AI recipe generator that creates unique recipes based on user preferences.',
    tags: ['Python', 'Gemini', 'Flux', 'TailwindCSS', 'Reflex'],
    github_url: 'https://github.com/bm611/byte-bites',
    live_url: 'https://app-lime-ring.reflex.run/',
  },
  {
    title: 'Product Hunt Trending in CLI',
    description: 'A command-line tool that fetches and displays products launched today on Product Hunt.',
    tags: ['go', 'jina', 'gemini', 'cobra'],
    github_url: 'https://github.com/bm611/go-ph',
    live_url: '',
  },
  {
    title: 'Chat-UI',
    description: 'A modern chat interface for interacting with various AI models locally or through providers.',
    tags: ['Python', 'Reflex', 'TailwindCSS', 'Ollama', 'OpenAI'],
    github_url: 'https://github.com/bm611/chat-ui',
    live_url: '',
  },
];

const tones: CardTone[] = ['beige', 'terracotta', 'slate', 'forest'];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const starCounts = useGitHubStars(projectData.map((project) => project.github_url));
  const { hoverIcon, tapCard } = useMotionConfig();

  return (
    <section id="projects" ref={ref} className="section-shell">
      <div className="section-container container mx-auto px-4 md:px-6">
        <motion.div
          className="section-header"
          variants={sectionReveal}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">Card-Based Project Gallery</h2>
          <p className="section-copy">
            A portfolio of AI products, terminal tools, and full-stack experiments presented as tactile cards with
            layered interactions.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projectData.map((project, index) => {
            const tone = tones[index % tones.length];
            const darkTone = tone === 'slate' || tone === 'forest';

            return (
              <PortfolioCard key={project.title} tone={tone} className="h-full p-5 flex flex-col" variants={cardReveal} whileTap={tapCard}>
                <div className="flex items-center justify-between pb-2">
                  <span className="font-mono text-[0.68rem] tracking-[0.12em] uppercase opacity-80">PRJ-{String(index + 1).padStart(2, '0')}</span>
                  <span className="rounded-full px-2 py-0.5 text-[0.64rem] font-mono uppercase tracking-[0.09em] bg-black/10">Featured</span>
                </div>

                <div className={`flex flex-1 flex-col border-t pt-4 ${darkTone ? 'border-[#F5E6CC]/24' : 'border-black/15'}`}>
                  <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${darkTone ? 'text-[#F5E6CC]/84' : 'text-[#2f3328]/84'} flex-1`}>
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span key={tag} className="project-tag" whileHover={{ y: -1.5 }}>
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <div
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-mono ${
                        darkTone ? 'border-[#F5E6CC]/30 bg-[#F5E6CC]/10' : 'border-[#2f3328]/20 bg-black/10'
                      }`}
                    >
                      <Star className="h-3.5 w-3.5 fill-yellow-300 text-yellow-300" />
                      <span>{starCounts[index]}</span>
                    </div>

                    <motion.a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`earth-btn ${darkTone ? 'earth-btn-secondary' : 'earth-btn-primary'} !px-3 !py-2 text-xs`}
                      whileHover={hoverIcon}
                      whileTap={{ scale: 0.97 }}
                    >
                      Code
                    </motion.a>

                    {project.live_url ? (
                      <motion.a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`earth-btn ${darkTone ? 'earth-btn-chip' : 'earth-btn-secondary'} !px-3 !py-2 text-xs`}
                        whileHover={hoverIcon}
                        whileTap={{ scale: 0.97 }}
                      >
                        Demo
                        <ArrowUpRight size={14} />
                      </motion.a>
                    ) : (
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-2 text-xs font-mono uppercase tracking-[0.08em] ${
                          darkTone ? 'border-[#F5E6CC]/25 text-[#F5E6CC]/64' : 'border-[#2f3328]/20 text-[#2f3328]/55'
                        }`}
                      >
                        Offline
                      </span>
                    )}
                  </div>
                </div>
              </PortfolioCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
