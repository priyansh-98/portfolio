"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.3 };
  const ringSpringConfig = { damping: 28, stiffness: 120, mass: 0.7 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const ringXSpring = useSpring(ringX, ringSpringConfig);
  const ringYSpring = useSpring(ringY, ringSpringConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const activeElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const clickable = target.closest("a") || target.closest("button") || target.closest('[role="button"]') || target.classList.contains("cursor-pointer");
      const projectCard = target.closest("[data-project-hover]");
      const skillsCard = target.closest("[data-skills-hover]");

      if (projectCard) {
        setIsHovered(true);
        setIsClickable(true);
        setCursorText("VIEW");
      } else if (skillsCard) {
        setIsHovered(true);
        setIsClickable(false);
        setCursorText("SKILL");
      } else if (clickable) {
        setIsHovered(true);
        setIsClickable(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setIsClickable(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (typeof window === "undefined" || !isVisible) return null;

  return (
    <>
      {/* Tiny Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-luxury-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Interactive Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-luxury-gold pointer-events-none z-[9998] flex items-center justify-center font-mono font-bold tracking-widest text-[8px] text-luxury-gold text-center overflow-hidden"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 60 : 36) : 24,
          height: isHovered ? (cursorText ? 60 : 36) : 24,
          backgroundColor: isHovered ? "rgba(197, 168, 128, 0.08)" : "rgba(197, 168, 128, 0)",
          borderColor: isHovered ? "rgba(197, 168, 128, 0.9)" : "rgba(197, 168, 128, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-luxury-gold select-none font-bold"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
