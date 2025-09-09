import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink, FileDown, ChevronRight } from "lucide-react";

// ============ QUICK CONFIG ============
const DATA = {
  name: "Tu Nombre",
  role: "Desarrollador/a • Data Analytics • Creativo/a",
  blurb:
    "Portfolio con estilo neumórfico. Proyectos, experiencia y formación variada organizada de forma clara.",
  location: "Buenos Aires, AR",
  email: "tuemail@ejemplo.com",
  links: {
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
    cv: "#" // Reemplazar con link a tu CV PDF cuando lo tengas
  },
  skills: [
    "React",
    "TypeScript",
    "Python",
    "Pandas",
    "SQL",
    "TailwindCSS",
    "Figma",
    "CustomTkinter",
    "WordPress",
  ],
  projects: [
    {
      title: "Invoice Generator (React)",
      about:
        "App minimalista para generar facturas y recibos con base de clientes y servicios.",
      stack: ["React", "Tailwind", "SQLite", "PDFKit"],
      link: "#",
      repo: "#",
    },
    {
      title: "POS / Inventario (Python)",
      about:
        "Sistema offline con CustomTkinter, gestión de stock, ventas y reportes.",
      stack: ["Python", "SQLite", "CustomTkinter"],
      link: "#",
      repo: "#",
    },
    {
      title: "Storm – Idea Board",
      about:
        "Web tipo Pinterest para guardar ideas con etiquetas, estados y proyectos.",
      stack: ["React", "Zustand", "IndexedDB"],
      link: "#",
      repo: "#",
    },
  ],
  experience: [
    {
      org: "Agencia Kido",
      role: "Co‑Founder / Ops",
      period: "2023 — Presente",
      bullets: [
        "Lideré gestión de redes y ads para PyMEs; +38% de interacción media.",
        "Estandaricé procesos (onboarding, brief, revisiones) reduciendo tiempos en 25%.",
      ],
    },
    {
      org: "Freelance IT Support",
      role: "Soporte Técnico / Armado de PCs",
      period: "2021 — 2023",
      bullets: [
        "Armado y mantenimiento para locales de indumentaria (zona Flores).",
        "Implementé respaldos y formateos con checklist reduciendo fallas recurrentes.",
      ],
    },
  ],
  education: [
    {
      place: "Cursos & Diplomaturas",
      detail:
        "Trayectoria multidisciplinaria (Data Analytics, Dev Frontend, Teología, Gestión).",
    },
  ],
};

// ============ NEUMORPHISM HELPERS ============
const base = "bg-[#e0e5ec] text-slate-800"; // base light surface
const softCard =
  "rounded-2xl p-6 shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]";
const inset =
  "shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff]";
const btn =
  "rounded-2xl px-4 py-2 shadow-[6px_6px_12px_#b8bcc2,-6px_-6px_12px_#ffffff] active:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-all";

export default function PortfolioNeumorphism() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={`${base} min-h-screen antialiased`}>      
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 opacity-80" aria-hidden>
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl" style={{background:"radial-gradient(circle at center, #ffffff 0%, #e0e5ec 60%)"}} />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl" style={{background:"radial-gradient(circle at center, #cfd6df 0%, #e0e5ec 70%)"}} />
      </div>

      {/* Container */}
      <div className="mx-auto max-w-6xl px-5 pb-24">
        {/* NAV */}
        <nav className="sticky top-4 z-10 mt-5 flex items-center justify-between rounded-2xl px-4 py-3 ${softCard}">
          <div className={`flex items-center gap-3 ${softCard} px-4 py-2`}> 
            <div className={`h-10 w-10 rounded-full ${inset} grid place-items-center font-semibold`}>👋</div>
            <div className="leading-tight">
              <h1 className="text-lg font-bold">{DATA.name}</h1>
              <p className="text-xs opacity-70">{DATA.role}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href={DATA.links.github} target="_blank" rel="noreferrer" className={`${btn} flex items-center gap-2`}><Github size={18}/>GitHub</a>
            <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className={`${btn} flex items-center gap-2`}><Linkedin size={18}/>LinkedIn</a>
            <a href={DATA.links.cv} className={`${btn} flex items-center gap-2`}><FileDown size={18}/>CV</a>
          </div>
        </nav>

        {/* HERO */}
        <header className={`mt-10 grid grid-cols-1 items-center gap-6 md:grid-cols-3 ${softCard}`}>
          <div className="col-span-2 pr-2">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{DATA.role}</h2>
            <p className="mt-3 text-sm opacity-80 md:text-base">{DATA.blurb}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-2 ${btn}`}><MapPin size={16}/>{DATA.location}</span>
              <a href={`mailto:${DATA.email}`} className={`inline-flex items-center gap-2 ${btn}`}><Mail size={16}/>{DATA.email}</a>
            </div>
          </div>
          <div className="col-span-1">
            <div className={`h-40 w-full rounded-2xl ${inset} grid place-items-center text-sm opacity-60`}>
              Foto/Logo aquí
            </div>
          </div>
        </header>

        {/* SKILLS */}
        <section className="mt-10">
          <h3 className="mb-4 text-xl font-semibold tracking-tight">Skills</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {DATA.skills.map((s, i) => (
              <div key={s} className={`${softCard} text-sm text-center font-medium py-3`}>{s}</div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-10">
          <h3 className="mb-4 text-xl font-semibold tracking-tight">Proyectos</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {DATA.projects.map((p, i) => (
              <motion.article
                key={p.title}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
                className={`${softCard} group`}
              >
                <div className={`h-28 w-full rounded-2xl ${inset} grid place-items-center text-xs opacity-60`}>
                  Thumbnail / Screenshot
                </div>
                <h4 className="mt-4 text-lg font-bold">{p.title}</h4>
                <p className="mt-1 text-sm opacity-80">{p.about}</p>
                <div className="mt-3 flex flex-wrap gap-2 opacity-80">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-xl px-3 py-1 text-xs border border-white/60">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={p.link} className={`${btn} flex items-center gap-2 text-sm`}><ExternalLink size={16}/>Demo</a>
                  <a href={p.repo} className={`${btn} flex items-center gap-2 text-sm`}><Github size={16}/>Repo</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-10">
          <h3 className="mb-4 text-xl font-semibold tracking-tight">Experiencia</h3>
          <div className="grid grid-cols-1 gap-4">
            {DATA.experience.map((e) => (
              <div key={e.org} className={`${softCard}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold opacity-70">{e.org}</p>
                    <h4 className="text-lg font-bold">{e.role}</h4>
                  </div>
                  <div className={`px-3 py-1 rounded-xl text-xs ${inset}`}>{e.period}</div>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2"><ChevronRight size={16} className="mt-0.5 opacity-70"/><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mt-10">
          <h3 className="mb-4 text-xl font-semibold tracking-tight">Formación</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {DATA.education.map((ed, i) => (
              <div key={i} className={`${softCard}`}>
                <h4 className="text-base font-bold">{ed.place}</h4>
                <p className="mt-1 text-sm opacity-80">{ed.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mt-10">
          <h3 className="mb-4 text-xl font-semibold tracking-tight">Contacto</h3>
          <div className={`${softCard} grid gap-4 md:grid-cols-2`}>
            <div>
              <p className="text-sm opacity-80">¿Querés que trabajemos juntos en tu próximo proyecto o revisar tu CV? Escribime.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`mailto:${DATA.email}`} className={`${btn} flex items-center gap-2`}><Mail size={18}/>Email</a>
                <a href={DATA.links.linkedin} className={`${btn} flex items-center gap-2`}><Linkedin size={18}/>LinkedIn</a>
              </div>
            </div>
            <form className="grid gap-3">
              <input className={`h-11 rounded-2xl px-4 ${inset} outline-none placeholder:opacity-60`} placeholder="Tu nombre"/>
              <input className={`h-11 rounded-2xl px-4 ${inset} outline-none placeholder:opacity-60`} placeholder="Tu email"/>
              <textarea rows={4} className={`rounded-2xl p-4 ${inset} outline-none placeholder:opacity-60`} placeholder="Contame brevemente tu necesidad"/>
              <button type="button" className={`${btn} font-semibold`}>Enviar</button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-xs opacity-60">
          © {new Date().getFullYear()} {DATA.name}. Hecho con React + Tailwind (estilo neumórfico).
        </footer>
      </div>
    </div>
  );
}
