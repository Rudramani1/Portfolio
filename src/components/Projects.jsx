import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'YouTube Video Summarizer',
    description: 'A web application that extracts and summarizes YouTube video transcripts using NLP and LLMs.',
    impact: 'Streamlined content consumption by integrating Together AI API for efficient summarization.',
    tech: ['Flask', 'NLP', 'Together AI API', 'Python', 'JavaScript'],
    github: 'https://github.com/Rudramani1/Youtube-Summarizer',
  },
  {
    title: 'Pneumonia Detection Platform',
    description: 'An interactive web app for pneumonia awareness and X-ray analysis using browser-based AI.',
    impact: 'Enabled accessible, immediate preliminary image classification through TensorFlow.js directly in the browser.',
    tech: ['TensorFlow.js', 'Bootstrap', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/Rudramani1/Pneumonia-Analysis',
  },
  {
    title: 'eSim ChatBot',
    description: 'An AI-powered chatbot developed during the FOSSEE Summer Fellowship to provide circuit simulation support.',
    impact: 'Improved contextual response accuracy by 25% by integrating Large Language Models with domain-specific data.',
    tech: ['Python', 'Flask', 'LLMs'],
    github: '#', // Replace if there's a link
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex items-center gap-4"
      >
        <div className="w-4 h-4 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          SYS.PROJECTS
        </h2>
        <div className="h-px bg-white/10 flex-1 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-[#0f172a]/40 backdrop-blur-md border border-white/10 p-8 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300"
          >
            {/* Decorative Technical Borders */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300" />

            <div className="flex justify-between items-start mb-6">
              <div className="bg-white/5 text-cyan-400 p-3 border border-white/10 group-hover:bg-cyan-500 group-hover:text-slate-900 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300">
                <CodeBracketIcon className="w-6 h-6" />
              </div>
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-transparent hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
                  aria-label="View Source Code"
                >
                  <ArrowUpRightIcon className="w-6 h-6" />
                </a>
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-tight group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all">{project.title}</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-cyan-500/50 transition-colors">{project.description}</p>

            <div className="mb-6 pb-6 border-b border-white/10 border-dashed">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-none animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest group-hover:text-slate-400 transition-colors">Execution Result</span>
              </div>
              <p className="text-slate-300 font-medium text-sm">
                {project.impact}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono uppercase tracking-widest hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
