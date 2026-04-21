import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="section-container relative">
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 mb-0">About Me</h2>
          </motion.div>

          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6 text-body">
              <p>
                I am a detail-oriented and analytical B.Tech student specializing in Artificial Intelligence and Machine Learning. My passion lies in solving complex problems through elegant code and data-driven insights.
              </p>
              <p>
                With hands-on experience in Python, full-stack web development, and modern AI frameworks, I build applications that are not only functional but also scalable and user-centric. I enjoy bridging the gap between sophisticated backend AI logic and clean, accessible frontend interfaces.
              </p>
              <p>
                Currently, I am seeking opportunities to apply my technical and problem-solving skills to real-world software and AI challenges, continuing to learn and grow in a fast-paced environment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
