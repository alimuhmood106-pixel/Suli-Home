import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Process() {
  const { t, dir } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const scale = reduce ? 1 : p;

  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-28 md:px-16 md:pb-40">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4 md:col-start-2">
          <Reveal><span className="label-line">{t.process.label}</span></Reveal>
        </div>
        <div className="md:col-span-6">
          <Reveal delay={0.1}><h2 className="text-4xl leading-tight md:text-5xl">{t.process.title}</h2></Reveal>
        </div>
      </div>

      <div ref={ref} className="relative mt-20">
        {/* horizontal line desktop */}
        <div className="absolute inset-x-0 top-[7px] hidden h-px bg-border md:block" />
        <motion.div className="absolute inset-x-0 top-[7px] hidden h-px bg-copper md:block" style={{ scaleX: scale, transformOrigin: dir === "rtl" ? "right" : "left" }} />
        {/* vertical line mobile */}
        <div className="absolute bottom-0 start-[7px] top-0 w-px bg-border md:hidden" />
        <motion.div className="absolute bottom-0 start-[7px] top-0 w-px origin-top bg-copper md:hidden" style={{ scaleY: scale }} />

        <ol className="grid gap-14 md:grid-cols-4 md:gap-8">
          {t.process.steps.map((s, i) => (
            <Reveal as="li" key={i} delay={i * 0.12} className="relative ps-10 md:ps-0 md:pt-14">
              <span className="absolute start-0 top-1 h-[15px] w-[15px] rounded-full border border-copper bg-background md:top-0" />
              <span className="font-display text-xs tracking-[0.3em] text-copper">0{i + 1}</span>
              <h3 className="mt-3 text-2xl md:text-3xl">{s.name}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
