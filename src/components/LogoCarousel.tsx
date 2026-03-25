"use client";

import { motion } from "framer-motion";

const logos = [
  "WALMART MÉXICO",
  "BBVA MÉXICO",
  "PINIT",
  "PEPSICO",
  "SKANDIA",
  "LENNKEN GROUP",
  "INTER MX",
];

export default function LogoCarousel() {
  return (
    <section className="py-12 border-y border-on-surface-variant/10 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/60">
          Confianza de líderes de la industria
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center gap-12 md:gap-24"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <span
              key={index}
              className="text-2xl font-black text-on-surface/40 hover:text-primary transition-colors cursor-default px-4"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
