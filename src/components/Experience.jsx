import React from 'react';
import { motion } from 'motion/react';

const experience = [
  {
    title: 'FOSSEE Summer Fellowship',
    organization: 'IIT Bombay | Remote',
    period: 'May 2025 – July 2025',
    details: [
      'Developed an AI-powered eSim ChatBot using Python and Flask for circuit simulation support.',
      'Integrated Large Language Models (LLMs) with domain-specific datasets to improve contextual response accuracy by 25%.',
      'Deployed the chatbot in a scalable environment and contributed to FOSSEE’s open-source ecosystem.'
    ]
  },
  {
    title: 'Astronomy and Astrophysics Summer School',
    organization: 'India Space Academy',
    period: 'June 2025 – July 2025',
    details: [
      'Completed 120 hours of intensive training and project work in Data-Driven Astronomy.',
      'Applied computational methods to analyze astronomical datasets and astrophysical phenomena using Python.',
      'Strengthened skills in scientific inquiry, data visualization, and research methodology.'
    ]
  }
];

const education = [
  {
    title: 'B.Tech in Computer Science (AI & ML)',
    organization: 'Dronacharya College of Engineering, Gurugram',
    period: 'Sept 2023 – May 2027',
    details: ['Relevant Coursework: Data Structures, Algorithms, DBMS, Computer Networks, Data Science, Machine Learning.']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container relative">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <motion.div
          className="md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2 mb-0">Experience & Education</h2>
        </motion.div>
        
        <div className="md:col-span-8 space-y-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              <span className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
              Experience
            </h3>
            <div className="space-y-8 border-l-2 border-white/10 ml-1.5 pl-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="absolute w-4 h-4 bg-slate-900 rounded-full -left-[1.85rem] top-6 border-2 border-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:bg-cyan-500 transition-all duration-300"></div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{exp.title}</h4>
                  <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
                    {exp.organization} • {exp.period}
                  </p>
                  <ul className="space-y-2 text-slate-400 text-sm leading-relaxed list-none">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="relative pl-4">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              <span className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
              Education
            </h3>
            <div className="space-y-8 border-l-2 border-white/10 ml-1.5 pl-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="absolute w-4 h-4 bg-slate-900 rounded-full -left-[1.85rem] top-6 border-2 border-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:bg-cyan-500 transition-all duration-300"></div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{edu.title}</h4>
                  <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
                    {edu.organization} • {edu.period}
                  </p>
                  <ul className="space-y-2 text-slate-400 text-sm leading-relaxed list-none">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="relative pl-4">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
