"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  onLoadComplete: () => void;
}

export default function PageLoader({ onLoadComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [typedName, setTypedName] = useState("");
  const fullName = "PRIYANSH KUMAWAT";

  useEffect(() => {
    let i = 0;
    const typingTimer = setInterval(() => {
      if (i < fullName.length) {
        const nextChar = fullName[i];
        setTypedName((prev) => prev + nextChar);
        i++;
      } else {
        clearInterval(typingTimer);
      }
    }, 60);
    return () => clearInterval(typingTimer);
  }, []);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Progressively slow down near 100
      const increment = Math.max(1, Math.floor((100 - current) / 8));
      current += increment;
      
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onLoadComplete, 1000); // Match exit transition duration
        }, 650);
      }
      setProgress(current);
    }, 45);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black p-8 text-foreground font-mono"
        >
          {/* Center Content: Name Typing & Subtle Progress */}
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-luxury-gold italic tracking-wider font-light flex items-center justify-center min-h-[1.2em]">
              {typedName || "\u00A0"}
              {typedName.length < fullName.length && (
                <span className="animate-pulse ml-1 text-luxury-gold">|</span>
              )}
            </h1>
            
            <div className="flex items-center space-x-3 text-[10px] tracking-[0.3em] text-luxury-gray/40 uppercase">
              <span>LOADING PORTFOLIO</span>
              <span>•</span>
              <span className="text-luxury-gold font-sans">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
