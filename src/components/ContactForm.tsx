"use client";

import { useState } from "react";
import { Send, Link as LinkIcon, Share2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="px-8 py-24 bg-primary text-on-primary" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl lg:text-5xl font-extrabold mb-8">
          Construyamos juntos el futuro de la tecnología móvil.
        </h2>

        <p className="text-lg opacity-90 mb-12">
          Ponte en contacto para nuevas oportunidades o colaboraciones. Actualmente estoy abierto a roles senior y asociaciones estratégicas.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-on-primary/10 p-6 rounded-2xl backdrop-blur-md text-left">
            <div className="text-sm uppercase tracking-widest opacity-70 mb-2">
              Envíame un correo
            </div>
            <a
              className="text-xl font-bold hover:underline decoration-2 underline-offset-4 transition-all"
              href="mailto:omaroscript.dev@gmail.com"
            >
              omaroscript.dev@gmail.com
            </a>
          </div>

          <div className="bg-on-primary/10 p-6 rounded-2xl backdrop-blur-md text-left">
            <div className="text-sm uppercase tracking-widest opacity-70 mb-2">
              Llámame
            </div>
            <a
              className="text-xl font-bold hover:underline decoration-2 underline-offset-4 transition-all"
              href="tel:+525547924616"
            >
              +52 5547924616
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 p-8 rounded-3xl backdrop-blur-md text-left mb-12"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold mb-2 opacity-80">Nombre</label>
              <input
                name="name"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-white/50 transition-all"
                placeholder="Tu Nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 opacity-80">
                Correo Electrónico
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-white/50 transition-all"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 opacity-80">Mensaje</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-white/50 transition-all resize-none"
              placeholder="¿Cómo puedo ayudarte?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-white text-yellow-500 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {status === "loading"
              ? "Enviando..."
              : status === "success"
              ? "¡Mensaje Enviado!"
              : "Enviar Mensaje"}
            <Send size={18} />
          </button>
        </form>

        {status === "error" && (
          <p className="mb-8 text-sm opacity-90">
            Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.
          </p>
        )}

        <div className="flex justify-center gap-6 hidden">
          <a
            className="w-12 h-12 rounded-full border border-on-primary/30 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all"
            href="#"
          >
            <LinkIcon size={20} />
          </a>
          <a
            className="w-12 h-12 rounded-full border border-on-primary/30 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all"
            href="#"
          >
            <Share2 size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}