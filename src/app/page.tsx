"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundGrid from "@/components/BackgroundGrid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, [isLoading]);

  return (
    <>
      <PageLoader onLoadComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <main className="relative min-h-screen bg-black select-none text-foreground selection:bg-luxury-gold/30">
          <CustomCursor />
          <ScrollProgress />
          <BackgroundGrid />
          <Navbar />
          
          <div className="relative z-10 flex flex-col w-full overflow-hidden">
            <section id="hero">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="work">
              <SelectedWork />
            </section>
            
            <section id="experience">
              <Experience />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </div>
        </main>
      )}
    </>
  );
}
