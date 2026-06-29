"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const TIMELINE_DATA = [
  {
    period: "2025 - Present",
    role: "Full Stack Developer",
    company: "Freelance & Startup Consultancy",
    description: "Architecting and implementing scalable client systems, high-throughput backend APIs, and real-time synchronizers.",
    responsibilities: [
      "Build scalable, state-of-the-art web applications",
      "Robust RESTful and WebSocket API Development",
      "Design real-time synchronization systems and channels",
      "Deploy code to AWS/Docker cloud environments"
    ],
  },
  {
    period: "2024 - 2025",
    role: "AI & Full Stack Engineer",
    company: "Innovate AI Labs",
    description: "Integrated state-of-the-art generative AI systems with scalable React frontends, designing smart conversational flows.",
    responsibilities: [
      "Connect and parse OpenAI/Anthropic model feeds",
      "Design responsive Tailwind interfaces and dashboards",
      "Implement multi-channel real-time notifications with Socket.IO",
      "Streamline query indexing on MongoDB databases"
    ],
  },
  {
    period: "2023 - 2024",
    role: "Associate Backend Developer",
    company: "CoreTech Solutions",
    description: "Designed secure backend server routes, managed relational data layers, and automated verification suites.",
    responsibilities: [
      "Implement secure authentication routes and permissions",
      "Refactor Legacy routes to performance-enhanced queries",
      "Maintain unit test suites for API validation",
      "Integrate GitHub action automated CI/CD pipelines"
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside experience container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-w-6xl mx-auto relative">
      {/* Title Header */}
      <div className="flex flex-col space-y-4 mb-20 sm:mb-28">
        <span className="text-xs font-mono tracking-[0.25em] text-luxury-gold uppercase block">
          03 / CHRONOLOGY
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif font-light text-foreground select-none">
          Experience
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-8 sm:pl-16">
        
        {/* Animated vertical track line */}
        <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-luxury-gold/15">
          <motion.div 
            className="w-[1.5px] bg-luxury-gold origin-top absolute top-0 bottom-0 left-0"
            style={{ scaleY }}
          />
        </div>

        {/* Timeline Entries */}
        <div className="space-y-16 sm:space-y-24">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              
              {/* Timeline circle point */}
              <div className="absolute left-[-37px] sm:left-[-69px] top-2 w-2.5 h-2.5 bg-black border border-luxury-gold rounded-full z-10 transition-transform duration-500 group-hover:scale-150 group-hover:bg-luxury-gold" />
              
              {/* Left Column: Dates & Company */}
              <div className="lg:col-span-4 flex flex-col space-y-2">
                <span className="text-xs font-mono tracking-[0.2em] text-luxury-gold uppercase">
                  {item.period}
                </span>
                
                <h3 className="text-2xl font-serif font-light text-foreground italic">
                  {item.role}
                </h3>
                
                <span className="text-[10px] font-mono text-luxury-gray uppercase tracking-widest">
                  {item.company}
                </span>
              </div>

              {/* Right Column: Descriptions & bullet points */}
              <div className="lg:col-span-8 flex flex-col space-y-6">
                <p className="text-sm font-sans font-light text-luxury-gray leading-relaxed">
                  {item.description}
                </p>

                {/* Responsibilities list */}
                <ul className="space-y-3 pl-4 border-l border-luxury-gold/10">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs font-sans font-light text-luxury-gray flex items-start space-x-3">
                      <span className="w-1 h-1 rounded-full bg-luxury-gold mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
