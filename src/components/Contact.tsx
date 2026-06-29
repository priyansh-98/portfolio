"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CONTACTS = [
  { label: "EMAIL", value: "priyanshkumawat9828@gmail.com", href: "mailto:priyanshkumawat9828@gmail.com", number: "01" },
  { label: "GITHUB", value: "github.com/priyansh-98", href: "https://github.com/priyansh-98", number: "02" },
  { label: "LINKEDIN", value: "linkedin.com/in/priyanshkumawat", href: "https://www.linkedin.com/in/priyansh-kumawat-88984b344/", number: "03" },
];

export default function Contact() {
  return (
    <div className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto flex flex-col space-y-20 border-t border-luxury-gold/5">
      {/* Intro text */}
      <div className="max-w-3xl">
        <span className="text-xs font-mono tracking-[0.25em] text-luxury-gold uppercase block mb-6">
          04 / CONTACT INQUIRIES
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-foreground leading-tight select-none">
          Let's create something <span className="italic text-luxury-gold font-normal">extraordinary</span> together.
        </h2>
      </div>

      {/* Row Links */}
      <div className="flex flex-col border-t border-luxury-gold/10">
        {CONTACTS.map((contact, idx) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group py-8 sm:py-10 border-b border-luxury-gold/10 flex flex-col sm:flex-row justify-between sm:items-center cursor-pointer transition-colors duration-500 hover:bg-luxury-gold/[0.01] px-4"
          >
            {/* Left side labels */}
            <div className="flex items-center space-x-6">
              <span className="text-xs font-mono text-luxury-gold">{contact.number}</span>
              <span className="text-[10px] font-mono tracking-widest text-luxury-gray group-hover:text-luxury-gold transition-colors duration-300">
                {contact.label}
              </span>
            </div>

            {/* Right side values */}
            <div className="flex items-center justify-between sm:justify-end space-x-6 mt-4 sm:mt-0">
              <span className="text-xl sm:text-3xl font-serif text-foreground group-hover:text-luxury-gold transition-colors duration-500 font-light">
                {contact.value}
              </span>
              <div className="text-luxury-gray group-hover:text-luxury-gold transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={22} />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Details */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-12 border-t border-luxury-gold/5 text-[10px] font-mono text-luxury-gray/40 space-y-4 sm:space-y-0">
        <span>© 2026 PRIYANSH KUMAWAT. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED & DEVELOPED WITH EXCELLENCE.</span>
      </div>
    </div>
  );
}
