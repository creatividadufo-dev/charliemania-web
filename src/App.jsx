import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ScanLine,
  Dumbbell,
  Flame,
  Utensils,
  CheckCircle2,
  MessageCircle,
  BookOpen,
  UserRound,
  Menu,
  Zap,
  Target,
  Brain,
  HeartPulse,
  Leaf,
  Sparkles,
  Instagram,
  Youtube,
} from "lucide-react";

const SCANNER_URL = "https://charliemania-scanner-v25.vercel.app/planes";
const WHATSAPP_URL =
  "https://wa.me/593987767107?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Charliemania%20y%20mi%20PLAN";
const INSTAGRAM_URL = "https://www.instagram.com/charliemaniapower/";
const YOUTUBE_URL = "https://www.youtube.com/@CHARLIEMANIA2026";

const LOGO_URL = "/charliemania-logo.png";
const PORTRAIT_URL = "/carlos-charliemania-portrait.png";
const BOOK_COVER_URL = "/cuerpos-que-conquistan-portada.png";

const navItems = [
  "Inicio",
  "Método",
  "Scanner",
  "Libro",
  "Planes",
  "Sobre mí",
  "Contacto",
];

const pillars = [
  {
    icon: <Utensils className="h-6 w-6" />,
    title: "Nutrición real",
    text: "No se trata de vivir con miedo a la comida, sino de aprender a comer con ciencia, orden y sabiduría.",
  },
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Fuerza con propósito",
    text: "El músculo no es vanidad: es defensa metabólica, salud, energía y autonomía para servir mejor.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Libertad metabólica",
    text: "El objetivo no es solo bajar de peso. Es recuperar metabolismo, claridad, dominio propio y dirección.",
  },
];

const plans = [
  {
    title: "Recomposición corporal",
    text: "No es bajar de peso por comer menos. Es mejorar el cuerpo desde adentro: metabolismo, fuerza, hábitos y alimentación real.",
  },
  {
    title: "Salud integral",
    text: "Trabajamos energía, inflamación, sueño, microbiota, hormonas, estrés, movimiento y dominio propio.",
  },
  {
    title: "Fuerza y propósito",
    text: "Entrenamiento y nutrición para construir un cuerpo útil, fuerte y coherente con la vida que dices querer vivir.",
  },
];

function idFrom(label) {
  return label
    .toLowerCase()
    .replace("í", "i")
    .replace("é", "e")
    .replace(" ", "-");
}

export default function CharliemaniaWebsite() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-red-600 selection:text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Charliemania"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="leading-tight">
              <p className="text-lg font-black tracking-tight">CHARLIEMANIA</p>
              <p className="hidden text-xs text-zinc-400 sm:block">
                Nutrición, fuerza y libertad metabólica
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${idFrom(item)}`}
                className="text-sm font-semibold text-zinc-300 transition hover:text-yellow-400"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Charliemania"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-yellow-400/50 hover:text-yellow-400 md:inline-flex"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Charliemania"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-red-500/50 hover:text-red-400 md:inline-flex"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-yellow-400 px-5 py-2 text-sm font-black text-black transition hover:bg-yellow-300 md:inline-flex"
            >
              Quiero mi plan
            </a>
            <button
              className="rounded-xl border border-white/10 bg-white/5 p-2 lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section
        id="inicio"
        className="relative flex min-h-screen items-center px-5 pb-16 pt-28 md:px-8 lg:px-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.2),transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/30 px-4 py-2 text-sm font-semibold text-red-100">
              <Flame className="h-4 w-4 text-yellow-400" />
              Bienvenido a la resistencia metabólica
            </div>

            <div className="space-y-5">
              <p className="text-lg font-black uppercase tracking-[0.35em] text-yellow-400">
                Charliemania
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl xl:text-8xl">
                Nutrición, fuerza y{" "}
                <span className="text-red-500">libertad metabólica</span>.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
                No es comer menos. Es despertar tu metabolismo, sanar desde
                adentro y recuperar el gobierno de tu cuerpo con ciencia,
                sabiduría y propósito.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={SCANNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 text-lg font-black shadow-[0_0_40px_rgba(220,38,38,0.35)] transition hover:bg-red-500"
              >
                Abrir Scanner
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 px-7 py-4 text-lg font-black text-yellow-200 transition hover:bg-yellow-400/20"
              >
                <MessageCircle className="h-5 w-5" />
                Quiero mi plan
              </a>
              <a
                href="#libro"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-lg font-black text-white transition hover:bg-white/10"
              >
                <BookOpen className="h-5 w-5" />
                Conocer el libro
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-7 py-4 text-lg font-black text-red-100 transition hover:bg-red-500/20"
              >
                <Youtube className="h-5 w-5" />
                Ver YouTube
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-full bg-red-600/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 shadow-2xl backdrop-blur">
              <img
                src={PORTRAIT_URL}
                alt="Carlos, fundador de Charliemania"
                className="h-full min-h-[520px] w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-7">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-400">
                  Contra el sistema con conocimiento
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  Carlos · Charliemania
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-300">
                  Nutrición, fuerza y criterio para recuperar el control de tu
                  cuerpo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-400">
              La base de la marca
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              No es solo fitness. Es una forma de despertar.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-black p-7 transition hover:border-red-500/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/15 text-red-400">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                <p className="leading-relaxed text-zinc-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-black px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-400">
              El Método Charliemania
            </p>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              No es bajar de peso. Es recuperar el gobierno del templo.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              El mundo fitness te vende restricción, culpa y resultados rápidos.
              Charliemania va más profundo: no busca que comas menos por miedo,
              sino que entiendas cómo reconstruir tu salud desde adentro.
            </p>
            <p className="text-lg leading-relaxed text-zinc-300">
              Aquí trabajamos nutrición real, fuerza, microbiota, hormonas,
              inflamación, sueño, estrés, hábitos, propósito y mayordomía del
              cuerpo. Porque tu cuerpo no es basura, no es mercancía y no está
              en venta.
            </p>
            <div className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-6">
              <p className="text-xl font-black leading-relaxed text-yellow-100">
                “No viniste a vivir esclavo de la balanza. Viniste a reconstruir
                un cuerpo capaz de sostener tu llamado.”
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: <Leaf className="h-7 w-7" />,
                title: "Desde adentro",
                text: "Microbiota, metabolismo, inflamación, hormonas y energía.",
              },
              {
                icon: <Brain className="h-7 w-7" />,
                title: "Con sabiduría",
                text: "Decisiones conscientes, dominio propio y criterio frente al sistema.",
              },
              {
                icon: <HeartPulse className="h-7 w-7" />,
                title: "Con propósito",
                text: "Espíritu, alma y cuerpo alineados para vivir con coherencia.",
              },
              {
                icon: <Sparkles className="h-7 w-7" />,
                title: "Sin culpa",
                text: "No venimos a condenarte. Venimos a despertarte.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/15 text-red-400">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scanner" className="bg-black px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-400">
              Scanner Charliemania
            </p>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Escanea lo que comes. Decide con sabiduría.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              El scanner es una herramienta del ecosistema Charliemania: no
              existe para que tengas miedo a comer, sino para ayudarte a leer
              productos, interpretar etiquetas y tomar decisiones con criterio.
            </p>
            <a
              href={SCANNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 text-lg font-black transition hover:bg-red-500"
            >
              Ir al Scanner Charliemania
              <ScanLine className="h-5 w-5" />
            </a>
          </div>
          <div className="rounded-[2rem] border border-red-500/20 bg-zinc-950 p-6 shadow-[0_0_80px_rgba(220,38,38,0.12)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-black p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-red-400">
                    Escaneo activo
                  </p>
                  <h3 className="mt-1 text-2xl font-black">
                    Resultado inteligente
                  </h3>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/40 bg-red-600/20">
                  <ScanLine className="h-7 w-7 text-red-400" />
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Azúcar añadida: alerta",
                  "Fibra: revisar",
                  "Proteína: evaluar",
                  "Ingredientes: leer antes de creer",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold text-zinc-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="libro" className="bg-zinc-950 px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-yellow-400/25 bg-gradient-to-br from-yellow-400/15 via-red-600/10 to-black p-8">
            <div className="rounded-[1.5rem] border border-white/10 bg-black p-8 text-center shadow-2xl">
              <img
                src={BOOK_COVER_URL}
                alt="Portada del libro Cuerpos que Conquistan"
                className="mb-6 w-full rounded-2xl border border-white/10 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <BookOpen className="mx-auto mb-6 h-14 w-14 text-yellow-400" />
              <p className="text-sm font-black uppercase tracking-[0.35em] text-red-400">
                Libro oficial
              </p>
              <h3 className="mt-4 text-4xl font-black leading-tight">
                Cuerpos que Conquistan
              </h3>
              <p className="mt-3 text-xl font-black text-yellow-400">
                La paradoja del templo enfermo
              </p>
              <p className="mt-5 text-zinc-400">
                No es solo un libro de salud. Es una confrontación con el
                sistema que normalizó tu deterioro.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-400">
              El manifiesto
            </p>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              No es solo un libro de salud. Es un llamado a recuperar el templo.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              Cuerpos que Conquistan une ciencia metabólica, salud integral, fe
              bíblica y una voz profética antisistema para recordarte una verdad
              urgente: tu cuerpo es templo, herramienta de misión y territorio
              de conquista.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 px-7 py-4 text-lg font-black text-yellow-200 transition hover:bg-yellow-400/20"
            >
              Quiero información del libro
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="planes" className="bg-black px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-400">
              Planes personalizados
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              No necesitas otra dieta de castigo. Necesitas reconstruir tu salud
              desde adentro.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-7"
              >
                <Target className="mb-5 h-9 w-9 text-yellow-400" />
                <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                <p className="leading-relaxed text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobre-mi"
        className="bg-zinc-950 px-5 py-24 md:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-black p-5">
            <img
              src={PORTRAIT_URL}
              alt="Carlos Charliemania"
              className="h-[520px] w-full rounded-[1.5rem] object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-400">
              Sobre mí
            </p>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Soy Carlos Alberto Males Ponce, creador de Charliemania.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              Charliemania nació de una confrontación personal: entender que mi
              cuerpo no estaba fallando por casualidad, sino respondiendo al
              ambiente que yo mismo le había impuesto. Desde ahí decidí unir
              verdad bíblica, ciencia del cuerpo y práctica diaria para ayudar a
              personas reales a recuperar salud, fuerza, claridad y propósito.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Brain className="mb-3 h-7 w-7 text-red-400" />
                <h3 className="font-black">Conocimiento</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Ciencia, Biblia y práctica diaria para dejar de obedecer
                  modas.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <UserRound className="mb-3 h-7 w-7 text-yellow-400" />
                <h3 className="font-black">Acompañamiento</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Acompañamiento para reconstruir espíritu, alma y cuerpo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.25),transparent_45%),#050505] px-5 py-24 md:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/30 bg-black/70 p-8 text-center shadow-[0_0_80px_rgba(220,38,38,0.18)] md:p-14">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-400/15 text-yellow-400">
            <MessageCircle className="h-8 w-8" />
          </div>
          <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            Empieza hoy a recuperar el gobierno de tu cuerpo.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            Escríbeme la palabra PLAN y conversemos cómo empezar una
            transformación integral: nutrición, fuerza, salud metabólica y
            propósito.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-8 py-4 text-lg font-black transition hover:bg-red-500"
            >
              Escribir por WhatsApp
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={SCANNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-black transition hover:bg-white/10"
            >
              Abrir Scanner
              <ScanLine className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-black text-zinc-200 transition hover:border-yellow-400/40 hover:text-yellow-400"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-black text-zinc-200 transition hover:border-red-500/40 hover:text-red-400"
            >
              <Youtube className="h-5 w-5" />
              YouTube
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-10 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-zinc-500 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Charliemania"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div>
              <p className="text-xl font-black text-white">CHARLIEMANIA</p>
              <p className="text-sm">Nutrición, fuerza y libertad metabólica</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Charliemania"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-yellow-400/50 hover:text-yellow-400"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Charliemania"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-red-500/50 hover:text-red-400"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm">
            © Charliemania · Contra el sistema con conocimiento
          </p>
        </div>
      </footer>
    </main>
  );
}
