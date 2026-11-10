import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { images } from "@/content";
import { useI18n } from "@/lib/i18n";

/**
 * First-visit-per-session preloader.
 * An inline script in <head> (see routes/__root.tsx) sets data-pre="1" on <html> before the
 * first paint when the visitor has not seen it this session and has not asked for reduced
 * motion. CSS (styles.css) shows the black overlay only in that case, so there is no flash
 * of page content before React hydrates. This component then plays the ring animation,
 * lifts the screen away and removes the flag.
 */
export function Preloader() {
  const { t } = useI18n();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (document.documentElement.dataset.pre !== "1") {
      setShow(false);
      return;
    }
    try {
      sessionStorage.setItem("suli-loaded", "1");
    } catch {
      /* storage blocked: nothing to remember */
    }
    const id = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => document.documentElement.removeAttribute("data-pre")}>
      {show && (
        <motion.div
          className="preloader-ssr fixed inset-0 z-[100] items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
          onClick={() => setShow(false)}
        >
          <div className="relative h-40 w-40">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
              {[48, 45].map((r, i) => (
                <motion.circle
                  key={r}
                  cx="50" cy="50" r={r} fill="none" stroke="var(--copper)" strokeWidth="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: i * 0.15, ease: "easeInOut" }}
                />
              ))}
            </svg>
            <motion.img
              src={images.logo} alt="Suli Home" width={160} height={160}
              className="absolute inset-[10%] h-[80%] w-[80%] rounded-full object-cover"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
            />
          </div>
          <button
            onClick={() => setShow(false)}
            className="absolute bottom-8 end-8 text-xs uppercase tracking-[0.3em] text-sand/70 hover:text-copper"
          >
            {t.skip}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
