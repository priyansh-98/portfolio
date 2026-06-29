"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "SyncHub",
    category: "Real-time Platform",
    tech: ["Socket.IO", "React", "Node.js", "WebRTC"],
    description: "Real-time device synchronization platform supporting instant file sharing, clipboard syncing, and multi-device photo transfer.",
    number: "01",
    github: "https://github.com/priyansh-98/SyncHub",
    live: "https://synchub-xih6.onrender.com",
  },
  {
    title: "AI Chat Assistant",
    category: "Artificial Intelligence",
    tech: ["OpenAI API", "Next.js", "Node.js", "Tailwind"],
    description: "Conversational assistant with semantic query routing, stateful history matching, and integrated DALL-E asset generation.",
    number: "02",
    github: "https://github.com/priyansh-98",
    live: "https://ai-chat.priyanshkumawat.com",
  },
  {
    title: "Smart Task Manager",
    category: "Web Application",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description: "Full Stack workflow planner featuring team kanbans, automated email notifications, and progress analytics widgets.",
    number: "03",
    github: "https://github.com/priyansh-98",
    live: "https://task-manager.priyanshkumawat.com",
  },
  {
    title: "Portfolio Website",
    category: "Creative Showcase",
    tech: ["Next.js 15", "TypeScript", "Framer Motion", "Lenis"],
    description: "Awwwards-inspired luxury designer portfolio with fluid smooth scroll, magnetic interactions, and dynamic preloading.",
    number: "04",
    github: "https://github.com/priyansh-98/priyansh-portfolio",
    live: "https://priyanshkumawat.com",
  },
];

export default function SelectedWork() {
  return (
    <div className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto flex flex-col space-y-12 sm:space-y-16 bg-black text-foreground">

      {/* Section Header */}
      <div className="flex flex-col space-y-4">
        <span className="text-xs font-mono tracking-[0.25em] text-luxury-gold uppercase block">
          02 / WORK SHOWCASE
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif font-light text-foreground select-none">
          Selected Work
        </h2>
      </div>

      {/* Vertical Cards Stack */}
      <div className="flex flex-col gap-8 sm:gap-12 w-full">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
            className="w-full min-h-[360px] p-8 sm:p-12 bg-luxury-charcoal border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-500 flex flex-col justify-between relative group overflow-hidden rounded-sm"
          >
            {/* Elegant subtle corner bracket transitions on hover */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t border-r border-luxury-gold/40 group-hover:w-8 group-hover:h-8 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-0 h-0 border-b border-l border-luxury-gold/40 group-hover:w-8 group-hover:h-8 transition-all duration-500" />

            {/* Ambient glow inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Top Row: Category and Case Number */}
            <div className="flex justify-between items-start z-10">
              <div className="flex flex-col space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-luxury-gold uppercase">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono text-luxury-gray/50">
                  CASE {project.number}
                </span>
              </div>

              {/* Action Buttons Group */}
              <div className="flex items-center space-x-3 z-20">
                {/* Github Source Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-luxury-gold/10 text-luxury-gray hover:text-black hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300 focus:outline-none"
                    title="View Source Code"
                  >
                    <Github size={16} />
                  </a>
                )}
                {/* Live Demo Link */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-luxury-gold/25 text-luxury-gold hover:text-black hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300 focus:outline-none"
                    title="Live Demo"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Content Row */}
            <div className="z-10 flex flex-col space-y-4 pt-8 pb-6">
              <h3 className="text-3xl sm:text-4xl font-serif font-light text-foreground group-hover:text-luxury-gold transition-colors duration-400">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm font-sans font-light text-luxury-gray leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* Tech list */}
            <div className="z-10 border-t border-luxury-gold/10 pt-6 flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-mono tracking-widest text-luxury-gray/70 bg-black/40 px-3 py-1 rounded-sm border border-luxury-gold/5 group-hover:border-luxury-gold/15"
                >
                  {t.toUpperCase()}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
