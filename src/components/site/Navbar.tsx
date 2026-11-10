import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { contact, images, LANGS } from "@/content";
import { useI18n } from "@/lib/i18n";
import { PhoneIcon } from "./icons";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const links = [
    ["#home", t.nav.home], ["#projects", t.nav.projects], ["#services", t.nav.services], ["#about", t.nav.about], ["#contact", t.nav.contact],
  ] as const;
  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,backdrop-filter] duration-500 ${
        solid ? "bg-cream/85 text-ink backdrop-blur-md" : "bg-transparent text-cream"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10" aria-label="Main">
        <a href="#home" className="relative z-10 flex items-center gap-3" aria-label="Suli Home">
          <img src={images.logo} alt="" width={44} height={44} className="h-10 w-10 rounded-full md:h-11 md:w-11" />
          <span className="font-display hidden text-lg tracking-[0.08em] sm:inline">Suli Home</span>
        </a>

        <ul className="hidden items-center gap-9 text-sm lg:flex">
          {links.map(([href, label]) => (
            <li key={href}><a className="nav-link" href={href}>{label}</a></li>
          ))}
        </ul>

        <div className="relative z-10 flex items-center gap-4">
          <LangSwitch lang={lang} setLang={setLang} />
          <a href={contact.phoneHref} className="hidden items-center gap-2 border border-copper px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-copper hover:text-ink md:inline-flex">
            <PhoneIcon className="h-3.5 w-3.5" /> {t.nav.call}
          </a>
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
          >
            <span className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex flex-col justify-between bg-ink px-6 pb-10 pt-28 text-cream lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
          >
            <ul className="space-y-4">
              {links.map(([href, label], i) => (
                <motion.li key={href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.07, duration: 0.5 }}>
                  <a href={href} onClick={() => setOpen(false)} className="font-display flex items-baseline gap-4 text-4xl">
                    <span className="text-xs text-copper">0{i + 1}</span>{label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} href={contact.phoneHref} className="btn-sweep self-start text-cream">
              <PhoneIcon className="h-4 w-4" /> {contact.phoneDisplay}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: string; setLang: (l: "en" | "ku" | "ar") => void }) {
  return (
    <div className="flex items-center gap-1 text-xs" role="group" aria-label="Language">
      {LANGS.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">/</span>}
          <button
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            className={`px-1 py-1 transition-colors ${lang === l.code ? "text-copper" : "opacity-70 hover:opacity-100"}`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}
