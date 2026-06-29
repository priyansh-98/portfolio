"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundGrid() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  // Soft lagging spring movement for the spotlight glow
  const glowX = useSpring(mouseX, { damping: 50, stiffness: 150 });
  const glowY = useSpring(mouseY, { damping: 50, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-black">
      {/* Spotlight mouse glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(197,168,128,1) 0%, rgba(197,168,128,0.2) 40%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(197, 168, 128, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(197, 168, 128, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "6rem 6rem",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-luxury-gold/20"
            style={{
              width: `${Math.random() * 3 + 1.5}px`,
              height: `${Math.random() * 3 + 1.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-slow-${i % 3} ${Math.random() * 20 + 20}s infinite ease-in-out`,
              animationDelay: `${Math.random() * -15}s`,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes float-slow-0 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
          50% { transform: translate(60px, -80px) scale(1.2); opacity: 0.4; }
        }
        @keyframes float-slow-1 {
          0%, 100% { transform: translate(0, 0) scale(1.1); opacity: 0.3; }
          50% { transform: translate(-50px, -50px) scale(0.8); opacity: 0.1; }
        }
        @keyframes float-slow-2 {
          0%, 100% { transform: translate(0, 0) scale(0.9); opacity: 0.2; }
          50% { transform: translate(40px, 40px) scale(1.3); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
