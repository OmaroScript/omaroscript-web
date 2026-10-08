"use client";

import { motion } from "framer-motion";

type Job = {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
};

const experiences: Job[] = [
  {
    title: "Senior Frontend Developer",
    company: "BBVA",
    location: "Híbrido, CDMX",
    period: "Jun. 2026 — Actual",
    current: true,
    highlights: [
      "Desarrollo de nuevas funcionalidades y atención de bugs con Polymer y LitElement, con pruebas unitarias y E2E.",
      "Refactorización de flujos productivos y de ambiente test, creación de componentes.",
      "Implementación de agentes de IA y optimización de flujos.",
    ],
    tags: ["Polymer", "LitElement", "JavaScript", "E2E", "Agentes IA"],
  },
  {
    title: "Senior Mobile Developer",
    company: "JAAK",
    location: "Presencial, CDMX",
    period: "Mar. 2026 — Jun. 2026",
    highlights: [
      "Desarrollo de apps y SDKs KYC para iOS (Swift) y Android (Kotlin) enfocados en validación de identidad.",
      "Seguridad y criptografía móvil: Keychain / Keystore, autenticación biométrica y manejo seguro de datos sensibles.",
      "Publicación de SDKs en Maven Central y CocoaPods; releases en Google Play Console y App Store.",
      "Apps híbridas con Angular e Ionic, integrando plugins nativos vía Cordova y Capacitor.",
    ],
    tags: ["Swift", "Kotlin", "React Native", "Angular", "Ionic", "Capacitor", "GraphQL"],
  },
  {
    title: "Líder Mobile - React Native",
    company: "Pinit / Big Move Smart",
    location: "Remoto, CDMX",
    period: "Jun. 2024 — Mar. 2026",
    highlights: [
      "Liderazgo técnico de una app de logística y entregas de media y última milla con React Native y TypeScript.",
      "Arquitectura modular y estrategia Offline First con persistencia y sincronización en SQLite.",
      "GraphQL y Apollo Client con caché y paginación; estado con Redux Toolkit, Context API y Hooks.",
      "Monitoreo con New Relic, Firebase y AWS (EC2, S3, CloudWatch); releases Android e iOS en ambientes Dev, Staging y Prod.",
    ],
    tags: ["React Native", "TypeScript", "SQLite", "GraphQL", "Redux", "Firebase", "AWS"],
  },
  {
    title: "Software Engineer II",
    company: "Pinit / Big Move Smart",
    location: "Remoto, CDMX",
    period: "Abr. 2023 — Jun. 2024",
    highlights: [
      "Mantenimiento y refactorización del CRM de logística y creación de nueva versión con React 19.",
      "Endpoints con Express JS y manejo de datos con MySQL.",
      "React con TypeScript, Hooks, Redux Saga, Thunk y Toolkit.",
    ],
    tags: ["React", "TypeScript", "Express", "MySQL", "Redux Saga"],
  },
  {
    title: "Senior Frontend Developer",
    company: "Walmart México",
    location: "Remoto, CDMX",
    period: "Ene. 2022 — Feb. 2023",
    highlights: [
      "Desarrollo con React JS de SPOT, plataforma interna de ventas, reportes y estatus por zona de todas las tiendas.",
      "Migración a Redux, Hooks, Material UI, Axios, servicios REST y Dremio.",
      "App en React Native para dashboards y métricas de entregas, con login vía Firebase.",
    ],
    tags: ["React", "React Native", "Redux", "Material UI", "Firebase"],
  },
  {
    title: "Senior Frontend Developer",
    company: "BBVA México",
    location: "Remoto, CDMX",
    period: "Jun. 2022 — Dic. 2022",
    highlights: [
      "Atención de incidencias productivas y resolución de bugs en la app de BBVA México.",
      "Refactorización de flujos y pruebas unitarias con Mocha.",
      "Componentes con Polymer y LitElement con pruebas E2E.",
    ],
    tags: ["Polymer", "LitElement", "Mocha", "E2E"],
  },
  {
    title: "Analista Programador",
    company: "BBVA México",
    location: "Remoto, CDMX",
    period: "Nov. 2019 — Ene. 2022",
    highlights: [
      "Componentes híbridos con Polymer, React JS y JavaScript sobre CELLS, empaquetados nativamente con Swift (iOS) y Java (Android).",
      "Migración del flujo global de contratación de TDC y del flujo de actualización de datos personales.",
      "Desarrollo ágil bajo marco SCRUM.",
    ],
    tags: ["Polymer", "React", "CELLS", "Swift", "Java", "SCRUM"],
  },
  {
    title: "Full Stack Developer",
    company: "Lennken Group",
    location: "Remoto, CDMX",
    period: "Nov. 2021 — Ene. 2022",
    highlights: [
      "Mantenimiento del CRM con C#, SQL Server y lectura de archivos XML.",
      "Nuevos módulos de reportes descargables en Excel y Word.",
    ],
    tags: ["C#", "SQL Server", "XML"],
  },
  {
    title: "Full Stack Developer",
    company: "Integra Company",
    location: "Chapultepec, CDMX",
    period: "Ene. 2019 — Ago. 2019",
    highlights: [
      "Migración de un ERP de Visual Basic a .NET, con mantenimiento y creación de módulos.",
      "SQL Server: consultas, triggers, procedimientos, vistas y tablas.",
    ],
    tags: [".NET", "C#", "SQL Server"],
  },
];

const projects: Job[] = [
  {
    title: "Soporte de Aplicaciones",
    company: "Skandia",
    location: "Remoto, CDMX",
    period: "Ene. 2025 — Jun. 2025",
    highlights: [
      "Atención de tickets, monitoreo de servidores y bases de datos, corrección de transacciones.",
      "Automatización de procesos con Node.js y Next.js.",
    ],
    tags: ["Node.js", "Next.js"],
  },
  {
    title: "Senior Frontend Developer",
    company: "PepsiCo",
    location: "Remoto, CDMX",
    period: "Jul. 2024 — Sept. 2024",
    highlights: [
      "Apps con React, TypeScript y Redux Toolkit; endpoints con Express y Nest JS.",
      "SQL Server (SP, consultas, vistas) y despliegue con Azure Pipelines.",
    ],
    tags: ["React", "Nest JS", "SQL Server", "Azure"],
  },
  {
    title: "Senior Frontend Developer",
    company: "KODE IT",
    location: "Remoto, CDMX",
    period: "Mar. 2023 — Feb. 2024",
    highlights: [
      "Nuevos sitios y optimización de los sitios de INTER.MX con React, Redux, Tailwind y TypeScript.",
      "Mantenimiento y creación de endpoints con Nest JS.",
    ],
    tags: ["React", "TypeScript", "Tailwind", "Nest JS"],
  },
  {
    title: "Full Stack Developer",
    company: "MKT Trust",
    location: "Remoto, Texas",
    period: "Feb. 2023 — Ene. 2025",
    highlights: [
      "Backend con PHP (Codeigniter y Laravel) sobre MariaDB y MySQL.",
      "Apps móviles híbridas y nativas con Ionic, Angular, React Native y Expo.",
      "Sitio de marketing en React JS para control de promotores y supervisores, migrado desde HTML.",
    ],
    tags: ["Laravel", "Ionic", "Angular", "React Native", "React"],
  },
];

function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      className="relative pl-8 border-l-2 border-primary/20"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index, 4) * 0.1 }}
    >
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${job.current ? "bg-primary ring-4 ring-primary-container" : "bg-on-surface-variant"}`}></div>
      <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <h3 className="text-xl font-bold font-headline">{job.title}</h3>
        {job.current ? (
          <span className="self-start text-primary font-bold text-sm bg-primary-container px-3 py-1 rounded-full whitespace-nowrap">{job.period}</span>
        ) : (
          <span className="text-on-surface-variant font-bold text-sm whitespace-nowrap">{job.period}</span>
        )}
      </div>
      <div className="mb-4">
        <span className="text-on-surface font-semibold">{job.company}</span>
        <span className="text-on-surface-variant text-sm"> · {job.location}</span>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-on-surface-variant text-sm leading-relaxed mb-4">
        {job.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <>
      <section className="px-8 py-24 bg-surface-container-low" id="experience">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-6">Evolución Profesional</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Una trayectoria entregando productos digitales de alto nivel para gigantes bancarios, retail, identidad digital y startups logísticas dinámicas.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {experiences.map((job, index) => (
              <JobCard key={`${job.company}-${job.period}`} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24" id="projects">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-6">Proyectos / Freelance</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Colaboraciones por proyecto con empresas nacionales e internacionales, del frontend al backend.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {projects.map((job, index) => (
              <JobCard key={`${job.company}-${job.period}`} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
