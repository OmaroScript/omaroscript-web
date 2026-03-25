"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-sm py-4" : "bg-transparent py-6"}`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8">
        <div className="text-xl font-extrabold tracking-tighter text-on-surface">
          Omar Hernández
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          <a className="text-primary after:content-[''] after:block after:w-1 after:h-1 after:bg-primary after:mx-auto after:rounded-full" href="#home">Inicio</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#skills">Habilidades</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#experience">Experiencia</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#contact">Contacto</a>
        </div>
        <a 
          className="px-6 py-2.5 bg-yellow-400 text-on-primary rounded-full font-bold text-sm transition-all active:scale-95 hover:opacity-90" 
          href="#contact"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
