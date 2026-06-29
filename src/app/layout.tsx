import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priyansh Kumawat | Full Stack Developer & AI Enthusiast",
  description: "Explore the premium portfolio of Priyansh Kumawat, a Full Stack Developer, AI Enthusiast, and Problem Solver crafting award-winning high-performance web applications and real-time systems.",
  keywords: [
    "Priyansh Kumawat",
    "Full Stack Developer",
    "AI Specialist",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Portfolio",
    "Creative Developer",
    "Awwwards Style Portfolio"
  ],
  authors: [{ name: "Priyansh Kumawat" }],
  creator: "Priyansh Kumawat",
  openGraph: {
    title: "Priyansh Kumawat | Full Stack Developer & AI Enthusiast",
    description: "Premium creative portfolio showcasing high-performance web apps, real-time systems, and AI integrations.",
    url: "https://priyanshkumawat.com",
    siteName: "Priyansh Kumawat Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyansh Kumawat | Full Stack Developer & AI Enthusiast",
    description: "Premium creative portfolio showcasing high-performance web apps, real-time systems, and AI integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-black text-foreground antialiased overflow-x-hidden selection:bg-luxury-gold/30 selection:text-foreground">
        {/* Luxury Background Grain Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
