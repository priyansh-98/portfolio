"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", id: "about", number: "01" },
  { label: "Work", id: "work", number: "02" },
  { label: "Experience", id: "experience", number: "03" },
  { label: "Contact", id: "contact", number: "04" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // Smooth scroll using target element
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 sm:px-12 md:px-16 flex justify-between items-center ${
          isScrolled 
            ? "bg-black/60 backdrop-blur-xl border-b border-luxury-gold/5 py-4" 
            : "bg-transparent py-7"
        }`}
      >
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
          className="font-serif italic text-xl sm:text-2xl tracking-widest text-luxury-gold hover:text-foreground transition-colors duration-400 focus:outline-none"
        >
          P. KUMAWAT
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-14">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="group relative flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-luxury-gray hover:text-foreground transition-colors duration-300 focus:outline-none"
            >
              <span className="text-[8px] text-luxury-gold/60">{item.number}</span>
              <span className="relative pb-1">
                {item.label.toUpperCase()}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          ))}
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground hover:text-luxury-gold transition-colors duration-300 z-50 p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-black z-40 flex flex-col justify-between p-8 pt-28 pb-16 font-mono"
          >
            {/* Top background accent line */}
            <div className="w-full border-t border-luxury-gold/10 my-auto" />

            <div className="flex flex-col space-y-10 my-auto text-left pl-4 sm:pl-12">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className="flex items-baseline space-x-4 group focus:outline-none"
                  >
                    <span className="text-[10px] text-luxury-gold">{item.number}</span>
                    <span className="text-4xl sm:text-6xl font-serif text-foreground group-hover:text-luxury-gold transition-all duration-300 font-light hover:italic">
                      {item.label}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col space-y-4 text-xs pl-4 sm:pl-12 text-luxury-gray">
              <div className="w-16 border-t border-luxury-gold/20" />
              <div className="flex justify-between items-center w-full max-w-xs text-[10px] tracking-widest text-luxury-gray/60">
                <span>PRIYANSH KUMAWAT</span>
                <span>© 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
