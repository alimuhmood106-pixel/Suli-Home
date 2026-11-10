import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, LANGS, type Dict, type Lang } from "@/content";

type Ctx = { lang: Lang; t: Dict; dir: "ltr" | "rtl"; setLang: (l: Lang) => void };
const I18n = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("suli-lang") as Lang | null;
    if (saved && dict[saved]) setLangState(saved);
  }, []);
  const dir = LANGS.find((l) => l.code === lang)!.dir;
  useEffect(() => {
    document.documentElement.lang = lang === "ku" ? "ckb" : lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("suli-lang", l);
  };
  return <I18n.Provider value={{ lang, t: dict[lang], dir, setLang }}>{children}</I18n.Provider>;
}

export function useI18n() {
  const c = useContext(I18n);
  if (!c) throw new Error("useI18n outside provider");
  return c;
}
