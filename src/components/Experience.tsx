"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Líder Mobile - React Native",
    company: "Pinit / Big Move Smart",
    period: "Actual",
    description: "Orquestando la estrategia móvil y el desarrollo de sistemas complejos de logística y entrega. Liderando un equipo para entregar aplicaciones de alto rendimiento con seguimiento en tiempo real.",
    current: true,
  },
  {
    title: "Desarrollador Frontend Senior",
    company: "Walmart México",
    period: "2021 — 2023",
    description: "Desarrollé soluciones robustas de comercio electrónico y herramientas internas, enfocándome en la accesibilidad, modularidad y rendimiento de alto tráfico para el mercado mexicano.",
    current: false,
  },
  {
    title: "Desarrollador Frontend Senior",
    company: "BBVA México",
    period: "2019 — 2021",
    description: "Pionero en experiencias bancarias seguras e intuitivas. Implementé tableros financieros complejos y flujos de transacciones para millones de usuarios activos.",
    current: false,
  },
];

export default function Experience() {
  return (
    <section className="px-8 py-24 bg-surface-container-low" id="experience">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-6">Evolución Profesional</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Una trayectoria entregando productos digitales de alto nivel para gigantes bancarios y startups logísticas dinámicas.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative pl-8 border-l-2 border-primary/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${exp.current ? "bg-primary ring-4 ring-primary-container" : "bg-on-surface-variant"}`}></div>
              <div className="mb-2 flex justify-between items-start">
                <h3 className="text-xl font-bold font-headline">{exp.title}</h3>
                {exp.current ? (
                  <span className="text-primary font-bold text-sm bg-primary-container px-3 py-1 rounded-full">Actual</span>
                ) : (
                  <span className="text-on-surface-variant font-bold text-sm">{exp.period}</span>
                )}
              </div>
              <div className="text-on-surface font-semibold mb-4">{exp.company}</div>
              <p className="text-on-surface-variant text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
