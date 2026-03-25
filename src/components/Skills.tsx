"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Code, Database, Cloud, Terminal } from "lucide-react";

const skills = [
  { name: "React Native", icon: Smartphone },
  { name: "React", icon: Globe },
  { name: "TypeScript", icon: Code },
  { name: "Redux Toolkit", icon: Database },
  { name: "Firebase", icon: Cloud },
  { name: "Node.js", icon: Terminal },
];

export default function Skills() {
  return (
    <section className="px-8 py-24 max-w-7xl mx-auto" id="skills">
      <div className="mb-16">
        <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-4">Arsenal Técnico</h2>
        <div className="w-16 h-1 bg-primary"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-surface-container-lowest rounded-2xl border border-on-surface-variant/10 flex flex-col items-center gap-4 transition-transform hover:-translate-y-2"
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
              <skill.icon size={32} />
            </div>
            <span className="font-bold text-center text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="md:col-span-2 md:row-span-2 p-8 bg-surface-container-lowest rounded-2xl shadow-sm border border-on-surface-variant/10 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-6">
              <Smartphone size={24} />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Especialista en React Native</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Creando experiencias móviles multiplataforma de alto rendimiento con fluidez de nivel nativo. Especializado en arquitectura, gestión de estado compleja y optimización de rendimiento.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface">Redux Toolkit</span>
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface">React Navigation</span>
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface">Reanimated</span>
          </div>
        </div>
        
        <div className="p-6 bg-surface-container-low rounded-2xl transition-all hover:bg-primary-container hover:text-on-primary-container group">
          <div className="mb-4 text-primary group-hover:text-on-primary-container">
            <Code size={24} />
          </div>
          <h4 className="font-bold text-lg mb-2">TypeScript</h4>
          <p className="text-sm opacity-80">Arquitecturas estrictamente tipadas para aplicaciones empresariales escalables y mantenibles.</p>
        </div>
        
        <div className="p-6 bg-surface-container-low rounded-2xl transition-all hover:bg-primary-container hover:text-on-primary-container group">
          <div className="mb-4 text-primary group-hover:text-on-primary-container">
            <Terminal size={24} />
          </div>
          <h4 className="font-bold text-lg mb-2">Node.js & SQL</h4>
          <p className="text-sm opacity-80">Capacidades full-stack con sistemas backend robustos y diseño de bases de datos.</p>
        </div>
        
        <div className="p-6 bg-surface-container-low rounded-2xl transition-all hover:bg-primary-container hover:text-on-primary-container group">
          <div className="mb-4 text-primary group-hover:text-on-primary-container">
            <Cloud size={24} />
          </div>
          <h4 className="font-bold text-lg mb-2">Firebase</h4>
          <p className="text-sm opacity-80">Integración de datos en tiempo real, autenticación y funciones serverless.</p>
        </div>
        
        <div className="p-6 bg-surface-container-low rounded-2xl transition-all hover:bg-primary-container hover:text-on-primary-container group">
          <div className="mb-4 text-primary group-hover:text-on-primary-container">
            <Smartphone size={24} />
          </div>
          <h4 className="font-bold text-lg mb-2">Kotlin & Swift</h4>
          <p className="text-sm opacity-80">Desarrollo de puentes nativos e implementación de características específicas de plataforma.</p>
        </div>
      </div>
    </section>
  );
}
