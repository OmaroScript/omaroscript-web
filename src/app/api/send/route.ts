import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_CVRUC5pt_4qg3Sia37QXFwxoq6UhdTwJg');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const company = String(body.company || "").trim(); // honeypot

    // honeypot anti-spam
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Todos los campos son obligatorios." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Correo inválido." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "OmaroScript Web <omaroscript@resend.dev>",
      to: "omaroscript.dev@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      text: `
Nombre: ${name}
Correo: ${email}

Mensaje:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Nuevo mensaje desde tu portafolio</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="padding: 12px; border-radius: 8px; background: #f5f5f5; white-space: pre-wrap;">
            ${escapeHtml(message)}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("SEND_EMAIL_ERROR:", error);

    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
