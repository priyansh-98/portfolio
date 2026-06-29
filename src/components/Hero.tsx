"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  delay: number;
}

function AnimatedCounter({ label, value, suffix = "", delay }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1.5; // duration in seconds
    const end = value;
    if (end === 0) return;

    const timerDelay = delay * 1000;
    const totalSteps = 50;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timeout = setTimeout(() => {
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        start = Math.min(end, Math.round(increment * currentStep));
        setCount(start);
        
        if (currentStep >= totalSteps) {
          clearInterval(interval);
        }
      }, stepTime);
    }, timerDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      className="flex flex-col items-start space-y-1 p-4 border-l border-luxury-gold/10 hover:border-luxury-gold/40 transition-colors duration-500"
    >
      <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground font-light select-none">
        {count}
        <span className="text-luxury-gold font-normal text-3xl sm:text-4xl ml-0.5">{suffix}</span>
      </span>
      <span className="text-[10px] sm:text-xs font-mono tracking-widest text-luxury-gray uppercase pt-2 select-none">
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 md:px-16 lg:px-24">
      {/* Glow highlight background inside Hero section */}
      <div className="absolute top-[25%] left-[20%] w-[350px] h-[350px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto w-full">
        {/* Left Side: Brand introduction */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-luxury-gold uppercase block"
            >
              CREATIVE DEVELOPER PORTFOLIO
            </motion.span>
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-serif font-light text-foreground leading-[1.0] tracking-tight">
              <span className="block overflow-hidden h-fit py-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="inline-block"
                >
                  Priyansh
                </motion.span>
              </span>
              <span className="block overflow-hidden h-fit py-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  className="inline-block italic text-luxury-gold font-normal"
                >
                  Kumawat
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Subheadings list with fade reveals */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center space-x-3 text-xs sm:text-sm font-sans tracking-wide text-luxury-gray"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
              <span>Full Stack Developer</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-3 text-xs sm:text-sm font-sans tracking-wide text-luxury-gray"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
              <span>AI Enthusiast</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center space-x-3 text-xs sm:text-sm font-sans tracking-wide text-luxury-gray"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
              <span>Problem Solver</span>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Statistics Grid */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 pl-0 lg:pl-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 sm:gap-8">
            <AnimatedCounter 
              label="Projects Completed" 
              value={24} 
              suffix="+" 
              delay={0.8} 
            />
            <AnimatedCounter 
              label="Technologies" 
              value={15} 
              suffix="+" 
              delay={0.95} 
            />
            <AnimatedCounter 
              label="Experience Years" 
              value={2} 
              suffix="+" 
              delay={1.1} 
            />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Down Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="flex justify-between items-center w-full mt-12 pt-6 border-t border-luxury-gold/5"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-luxury-gray/60 uppercase">
          BASED IN INDIA / WORKING GLOBALLY
        </span>
        
        <a 
          href="#about"
          className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-luxury-gold hover:text-foreground transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={12} className="text-luxury-gold" />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
