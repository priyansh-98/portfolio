"use client";

import { motion } from "framer-motion";

const SKILLS = [
  { name: "React.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Socket.IO", category: "Real-time" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "AI Tools", category: "Intelligence" },
  { name: "GitHub", category: "VCS" },
];

export default function About() {
  return (
    <div className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto flex flex-col space-y-24 sm:space-y-36">
      {/* Introduction */}
      <div className="max-w-4xl">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs font-mono tracking-[0.25em] text-luxury-gold uppercase block mb-6"
        >
          01 / INTRODUCTION
        </motion.span>
        
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground leading-snug sm:leading-tight"
          >
            I build <span className="italic text-luxury-gold font-normal">scalable web applications</span>, real-time communication systems, and <span className="italic font-normal">AI-powered products</span> that solve real-world complex problems.
          </motion.h2>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-[0.25em] text-luxury-gray uppercase"
          >
            SKILLS & ECOSYSTEM
          </motion.span>
          <div className="w-12 border-t border-luxury-gold/30" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-luxury-gold/10">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.04, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              data-skills-hover="true"
              className="group relative p-6 sm:p-8 border-r border-b border-luxury-gold/10 flex flex-col justify-between h-36 sm:h-44 overflow-hidden cursor-pointer bg-black transition-all duration-500 hover:bg-luxury-darkGray/10"
            >
              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle top decoration */}
              <div className="flex justify-between items-start z-10">
                <span className="text-[9px] font-mono text-luxury-gray tracking-widest uppercase">
                  {skill.category}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold/25 group-hover:bg-luxury-gold transition-all duration-300" />
              </div>
              
              {/* Skill Title */}
              <div className="z-10 pt-4 flex items-end justify-between">
                <h3 className="text-xl sm:text-2xl font-serif text-foreground group-hover:text-luxury-gold transition-colors duration-300 font-light">
                  {skill.name}
                </h3>
                <span className="text-[9px] font-mono text-luxury-gray/40 group-hover:text-luxury-gold/70 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom line trigger hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
