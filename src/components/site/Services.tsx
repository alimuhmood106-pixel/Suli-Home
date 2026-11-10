import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { serviceImages } from "@/content";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Services() {
  const { t } = useI18n();
  const [hover, setHover] = useState<number | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [fine, setFine] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 24 });
  const sy = useSpring(y, { stiffness: 180, damping: 24 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    setFine(mq.matches);
  }, []);

  return (
    <section id="services" className="glow-edge relative bg-ink py-28 text-cream md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-16">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal><span className="label-line">{t.services.label}</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-8 text-4xl leading-tight md:text-5xl">{t.services.title}</h2></Reveal>
          </div>

          <ul className="md:col-span-8" onMouseMove={(e) => { x.set(e.clientX); y.set(e.clientY); }} onMouseLeave={() => setHover(null)}>
            {t.services.items.map((s, i) => {
              const isOpen = openIdx === i;
              return (
                <Reveal as="li" key={i} delay={i * 0.05} className="group border-b border-cream/15">
                  <button
                    className="flex w-full items-baseline gap-6 py-7 text-start md:py-9"
                    onMouseEnter={() => fine && setHover(i)}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display w-8 shrink-0 text-xs text-copper transition-transform duration-500 group-hover:-translate-y-1">0{i + 1}</span>
                    <span className="font-display flex-1 text-3xl font-extralight transition-transform duration-500 group-hover:translate-x-3 rtl:group-hover:-translate-x-3 md:text-5xl lg:text-6xl">
                      {s.name}
                    </span>
                    <span className="relative hidden h-px w-16 self-center overflow-hidden bg-cream/20 md:block">
                      <span className="absolute inset-0 origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right" />
                    </span>
                    <span className={`text-copper transition-transform duration-300 md:hidden ${isOpen ? "rotate-45" : ""}`} aria-hidden>+</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 md:grid-rows-[1fr] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-lg pb-8 ps-14 text-sm leading-relaxed text-sand/70 md:-mt-4 md:text-base">{s.desc}</p>
                      <div className="arch-sm mb-8 ms-14 aspect-[4/5] w-44 md:hidden">
                        <img src={serviceImages[i]} alt="" width={828} height={1030} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>

      {fine && (
        <motion.div className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block" style={{ x: sx, y: sy }} aria-hidden>
          <AnimatePresence>
            {hover !== null && (
              <motion.div
                key={hover}
                className="arch-sm absolute -top-40 left-8 aspect-[4/5] w-60 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <img src={serviceImages[hover]} alt="" width={828} height={1030} className="h-full w-full object-cover" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
