import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects, type ProjectCat } from "@/content";
import { useI18n } from "@/lib/i18n";
import { ArrowIcon, CloseIcon } from "./icons";
import { FadeImg, Reveal } from "./Reveal";

type Filter = "all" | ProjectCat;
const FILTERS: Filter[] = ["all", "kitchens", "living", "kids", "storage"];

export function Projects() {
  const { t, dir } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);
  const list = projects.filter((p) => filter === "all" || p.cat === filter);
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scroll: 0, moved: false });

  useEffect(() => {
    track.current?.scrollTo({ left: 0 });
  }, [filter, dir]);

  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { down: true, startX: e.clientX, scroll: track.current.scrollLeft, moved: false };
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down || !track.current) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    track.current.scrollLeft = d.scroll - dx;
  };
  const onUp = () => (drag.current.down = false);
  const open = (i: number) => {
    if (drag.current.moved) return;
    setActive(i);
  };

  return (
    <section id="projects" className="py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal><span className="label-line">{t.projects.label}</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-8 max-w-xl text-4xl leading-tight md:text-5xl lg:text-6xl">{t.projects.title}</h2></Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" role="tablist">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`nav-link py-1 transition-colors ${filter === f ? "text-copper after:scale-x-100" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {t.projects.filters[f]}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Desktop: horizontal track */}
      <div
        ref={track}
        className="no-scrollbar mt-16 hidden cursor-grab snap-x overflow-x-auto overscroll-x-contain active:cursor-grabbing md:block"
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
      >
        <motion.ul layout className="flex w-max items-end gap-6 px-16 pb-4">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.li
                layout key={p.key}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`snap-start ${i % 3 === 1 ? "h-[62vh] max-h-[640px]" : "h-[52vh] max-h-[540px]"}`}
                style={{ aspectRatio: `${p.w}/${p.h}` }}
              >
                <button onClick={() => open(i)} className={`group block h-full w-full overflow-hidden ${i % 4 === 0 ? "arch-sm" : ""}`} draggable={false} aria-label={t.projects.alts[p.key]}>
                  <FadeImg src={p.src} alt={t.projects.alts[p.key]} w={p.w} h={p.h} className="pointer-events-none h-full w-full select-none object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
      <p className="mx-auto mt-6 hidden max-w-[1600px] px-16 text-xs uppercase tracking-[0.3em] text-muted-foreground md:block">{t.projects.hint} <ArrowIcon className="inline h-3 w-3" /></p>

      {/* Mobile: masonry */}
      <ul className="mt-12 columns-2 gap-3 px-4 md:hidden">
        {list.map((p, i) => (
          <li key={p.key} className="mb-3 break-inside-avoid">
            <button onClick={() => setActive(i)} className={`block w-full overflow-hidden ${i % 3 === 0 ? "arch-sm" : ""}`} style={{ aspectRatio: `${p.w}/${p.h}` }}>
              <FadeImg src={p.src} alt={t.projects.alts[p.key]} w={p.w} h={p.h} className="h-full w-full object-cover" />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={list} index={active} setIndex={setActive} />
    </section>
  );
}

function Lightbox({ items, index, setIndex }: { items: typeof projects; index: number | null; setIndex: (i: number | null) => void }) {
  const { t, dir } = useI18n();
  const n = items.length;
  const go = useCallback((d: number) => index !== null && setIndex((index + d + n) % n), [index, n, setIndex]);

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") go(dir === "rtl" ? -1 : 1);
      if (e.key === "ArrowLeft") go(dir === "rtl" ? 1 : -1);
    };
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [index, go, setIndex, dir]);

  const p = index !== null ? items[index] : null;
  return (
    <AnimatePresence>
      {p && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          role="dialog" aria-modal="true" aria-label={t.projects.alts[p.key]}
          onClick={() => setIndex(null)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={p.key}
              src={p.src} alt={t.projects.alts[p.key]} width={p.w} height={p.h}
              className="max-h-[86svh] w-auto max-w-full touch-pan-y select-none object-contain"
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.4}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(dir === "rtl" ? -1 : 1);
                else if (info.offset.x > 60) go(dir === "rtl" ? 1 : -1);
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>
          <button className="absolute end-4 top-4 p-3 text-cream hover:text-copper" onClick={() => setIndex(null)} aria-label={t.projects.close}><CloseIcon className="h-6 w-6" /></button>
          <button className="absolute start-2 top-1/2 -translate-y-1/2 p-3 text-cream hover:text-copper md:start-8" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label={t.projects.prev}><ArrowIcon className="h-7 w-7 rotate-180" /></button>
          <button className="absolute end-2 top-1/2 -translate-y-1/2 p-3 text-cream hover:text-copper md:end-8" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label={t.projects.next}><ArrowIcon className="h-7 w-7" /></button>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-xs tracking-[0.3em] text-sand/70">{(index ?? 0) + 1} / {n}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
