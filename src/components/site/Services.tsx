import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { serviceImages } from "@/content";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Services() {
  const { t } = useI18n();
  const [hover, setHover] = useState<number | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  // Picture shown in the side panel on desktop: the last title that was clicked.
  const [shown, setShown] = useState(0);
  const [fine, setFine] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Cursor-follow preview needs a real mouse. "any-" also covers touch laptops where
  // the main pointer is reported as touch.
  useEffect(() => {
    const mq = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const track = (e: React.MouseEvent) => {
    // Flip to the left of the cursor near the right edge so the preview is never cut off.
    x.set(e.clientX > window.innerWidth - 320 ? e.clientX - 320 : e.clientX);
    y.set(e.clientY);
  };

  return (
    <section id="services" className="glow-edge relative bg-ink py-28 text-cream md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-16">
        <div className="grid gap-8 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Reveal><span className="label-line">{t.services.label}</span></Reveal>
              <Reveal delay={0.1}><h2 className="mt-8 text-4xl leading-tight md:text-5xl">{t.services.title}</h2></Reveal>

              {/* Desktop picture panel: follows the title you click */}
              <div className="relative mt-12 hidden aspect-[4/5] w-full max-w-[19rem] overflow-hidden bg-cream/5 md:block" aria-hidden>
                {serviceImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    width={828}
                    height={1030}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${shown === i ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <ul className="md:col-span-8" onMouseMove={track} onMouseLeave={() => setHover(null)}>
            {t.services.items.map((s, i) => {
              const isOpen = openIdx === i;
              return (
                <Reveal as="li" key={i} delay={i * 0.05} className="group border-b border-cream/15">
                  <button
                    className="flex w-full items-baseline gap-6 py-7 text-start md:py-9"
                    onMouseEnter={(e) => { if (fine) { track(e); setHover(i); } }}
                    onClick={() => { setOpenIdx(isOpen ? null : i); setShown(i); }}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display w-8 shrink-0 text-xs text-copper transition-transform duration-500 group-hover:-translate-y-1">0{i + 1}</span>
                    <span className="font-display flex-1 text-3xl font-extralight transition-transform duration-500 group-hover:translate-x-3 rtl:group-hover:-translate-x-3 md:text-5xl lg:text-6xl">
                      {s.name}
                    </span>
                    <span className="relative hidden h-px w-16 self-center overflow-hidden bg-cream/20 md:block">
                      <span className="absolute inset-0 origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right" />
                    </span>
                    <span className={`text-copper transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden>+</span>
                  </button>
                  <div
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-500 motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-lg pb-8 ps-14 text-sm leading-relaxed text-sand/70 md:text-base">{s.desc}</p>
                      <div className="mb-8 ms-14 aspect-[4/5] w-44 overflow-hidden md:hidden">
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

      {/* Desktop hover preview: picture beside the cursor */}
      {fine && (
        <motion.div className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block" style={{ x, y }} aria-hidden>
          <AnimatePresence>
            {hover !== null && (
              <motion.div
                key={hover}
                className="absolute -top-[150px] left-8 aspect-[4/5] w-60 overflow-hidden bg-ink"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
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
