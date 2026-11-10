import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/content";
import { useI18n } from "@/lib/i18n";
import { ClipImage, Reveal } from "./Reveal";

export function About() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -80]);

  return (
    <section id="about" ref={ref} className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-16 md:py-40">
      <div className="grid items-center gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5 md:col-start-1">
          <Reveal><span className="label-line">{t.about.label}</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-8 text-4xl leading-[1.1] md:text-5xl lg:text-6xl">{t.about.title}</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-8 max-w-md leading-relaxed text-muted-foreground">{t.about.body}</p></Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-12 flex flex-wrap gap-x-3 gap-y-2 font-display text-xs uppercase tracking-[0.3em] text-walnut">
              {t.about.tags.map((tag, i) => (
                <li key={tag} className="flex items-center gap-3">{i > 0 && <span className="text-copper">/</span>}{tag}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative md:col-span-6 md:col-start-7">
          <div className="glow-bottom relative ms-auto aspect-[4/5] w-[82%] overflow-hidden md:w-[78%]">
            <ClipImage src={images.displayCabinet} alt="Lit glass display cabinet with black frame" w={828} h={1028} className="h-full w-full" />
          </div>
          <motion.div style={{ y }} className="absolute -bottom-10 start-0 w-[44%] md:-bottom-16">
            <div className="aspect-[3/4] overflow-hidden border-[6px] border-cream">
              <ClipImage src={images.entryway} alt="Fluted entryway cabinet under a round backlit mirror" w={1200} h={1500} className="h-full w-full" imgClassName="h-full w-full object-cover object-[45%_40%]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
