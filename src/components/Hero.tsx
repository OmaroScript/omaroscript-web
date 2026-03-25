"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import omaro from "@/assets/omaro.png";

export default function Hero() {
  return (
    <section className="relative px-8 py-20 lg:pt-32 lg:pb-16 max-w-7xl mx-auto overflow-hidden" id="home">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-7 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Disponible para Proyectos
          </span>
          <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
            Desarrollador <span className="text-primary">Frontend</span> Mobile Senior
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            Experto en <span className="font-semibold text-on-surface">React Native & TypeScript</span>. Con más de 7 años de experiencia total y más de 4 años especializándome en aplicaciones bancarias y logísticas complejas.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/files/Omar_Hernandez_CV.pdf"
              download
              className="px-8 py-4 bg-yellow-400 text-on-primary rounded-full font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95"
            >
              <Download size={20} />
              Descargar CV
            </a>
            <button className="px-8 py-4 bg-surface-container-highest text-on-surface rounded-full font-bold hover:bg-surface-container-high transition-all active:scale-95 hidden">
              Ver Portafolio
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="aspect-square rounded-3xl bg-primary-container overflow-hidden shadow-2xl relative group">
            <Image
              src={omaro}
              alt="Professional Workspace"
              className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-container/20 rounded-2xl -z-10 rotate-12"></div>
        </motion.div>
      </div>
    </section>
  );
}
