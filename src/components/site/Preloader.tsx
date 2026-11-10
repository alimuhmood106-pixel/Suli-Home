import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { images } from "@/content";
import { useI18n } from "@/lib/i18n";

export function Preloader() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("suli-loaded")) return;
    sessionStorage.setItem("suli-loaded", "1");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setShow(true);
    const id = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
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
