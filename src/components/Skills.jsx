import React from 'react';
import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'R', 'Bash'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Flask', 'Django', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn', 'React.js', 'Next.js', 'Node.js', 'Bootstrap'],
  },
  {
    title: 'Databases & Tools',
    skills: ['MySQL', 'Firebase', 'SQLite', 'Git', 'Docker', 'Google Cloud', 'Linux'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <motion.div
          className="md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2 mb-0">Technical Skills</h2>
          <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-xs">
            A comprehensive toolkit spanning AI development, full-stack web engineering, and data analysis.
          </p>
        </motion.div>
        
        <div className="md:col-span-8 grid gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
