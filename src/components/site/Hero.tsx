import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/content";
import { useI18n } from "@/lib/i18n";
import { ArrowIcon } from "./icons";

export function Hero() {
  const { t, lang } = useI18n();
  const reduce = useReducedMotion();
  const words = t.hero.line.split(" ");
  return (
    <section id="home" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink text-cream">
      <img
        src={images.kitchenFluted}
        alt="Corner kitchen with fluted doors, oak worktop and warm LED light by Suli Home"
        width={1200} height={1500}
        fetchPriority="high"
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-[50%_55%]"
      />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="pointer-events-none absolute inset-3 border border-copper/60 md:inset-6" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:px-16 md:pb-24">
        <motion.span className="label-line mb-8" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {t.hero.label}
        </motion.span>
        <h1 key={lang} className="max-w-4xl text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {w}
              </motion.span>
              {i < words.length - 1 && "\u00A0"}
            </span>
          ))}
        </h1>
        <motion.div
          className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <p className="max-w-md text-sm leading-relaxed text-sand/85 md:text-base">{t.hero.sub}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-sweep bg-copper/10 text-cream">{t.hero.projects} <ArrowIcon className="h-4 w-4" /></a>
            <a href="#contact" className="btn-sweep border-cream/50 text-cream">{t.hero.contact}</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 end-8 z-10 hidden flex-col items-center gap-3 md:flex md:end-12" aria-hidden>
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-sand/70 [writing-mode:vertical-rl]">{t.hero.scroll}</span>
        <span className="relative h-12 w-px overflow-hidden bg-sand/25">
          <span className="animate-scroll-dot absolute inset-x-0 top-0 h-1/2 bg-copper" />
        </span>
      </div>
    </section>
  );
}
