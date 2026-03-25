import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoCarousel />

      <section className="bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-headline font-extrabold text-primary mb-2">
              7+
            </div>
            <div className="text-sm font-label text-on-surface-variant uppercase tracking-wider">
              Años de Experiencia
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-headline font-extrabold text-primary mb-2">
              4
            </div>
            <div className="text-sm font-label text-on-surface-variant uppercase tracking-wider">
              Apps Lanzadas
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-headline font-extrabold text-primary mb-2">
              100%
            </div>
            <div className="text-sm font-label text-on-surface-variant uppercase tracking-wider">
              Tipado Seguro
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-headline font-extrabold text-primary mb-2">
              Senior
            </div>
            <div className="text-sm font-label text-on-surface-variant uppercase tracking-wider">
              React Developer
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experience />

      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-10">
              Educación
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ingeniería en Sistemas</h4>
                  <p className="text-on-surface-variant">UTEL Universidad</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    TSU en Tecnologías de la Información
                  </h4>
                  <p className="text-on-surface-variant">
                    Universidad Tecnológica de Nezahualcóyotl (UTN)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-highest p-10 rounded-3xl flex flex-col justify-center">
            <h3 className="font-headline text-2xl font-bold mb-6 italic text-primary">
              "Precisión en el código, excelencia en la experiencia del
              usuario."
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Mi enfoque combina la disciplina de la ingeniería con un profundo
              conocimiento de los ecosistemas móviles para crear productos que
              no solo son funcionales, sino encantadores de usar.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
              </div>
              <span className="font-bold text-sm tracking-widest uppercase">
                Desarrollador Senior Certificado
              </span>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-on-surface-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <div className="text-lg font-bold text-on-surface">
            Omar Hernández Aniceto
          </div>
          <div className="text-sm text-on-surface-variant">
            © 2026 Omar Hernández Aniceto. Desarrollador Senior Mobile &
            Frontend.
          </div>
          <div className="flex gap-6 text-on-surface-variant">
            <a
              className="hover:text-primary transition-colors"
              href="https://linkedin.com/in/omar-ha19"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              className="hover:text-primary transition-colors"
              href="https://github.com/omaroscript"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              className="hover:text-primary transition-colors"
              href="mailto:omaroscript.dev@gmail.com"
              aria-label="Correo"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
