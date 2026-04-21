import React from 'react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <footer id="contact" className="relative bg-[#020617] text-white py-20 border-t border-white/10 overflow-hidden">
      {/* Background Cyber Glowing Orbs */}
      <div className="absolute bottom-[-20%] left-[50%] -translate-x-1/2 w-[40rem] h-[20rem] rounded-[100%] bg-blue-600/20 blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            Let's build something together.
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:rudramaniupadhyay651@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold tracking-wide hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 hover:-translate-y-1"
          >
            SAY HELLO
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-slate-400 text-sm relative z-10">
          <p>&copy; {new Date().getFullYear()} Rudra Mani Upadhyay. All rights reserved.</p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="mailto:rudramaniupadhyay651@gmail.com"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/rudra-mani-upadhyay-47832b289"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Rudramani1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
