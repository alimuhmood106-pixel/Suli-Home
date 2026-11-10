import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { contact } from "@/content";
import { isOpenAt } from "@/lib/hours";
import { useI18n } from "@/lib/i18n";
import { ArrowIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const tick = () => setOpen(isOpenAt(new Date()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="contact" className="mx-auto max-w-[1600px] px-6 py-28 md:px-16 md:py-40">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><span className="label-line">{c.label}</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-8 text-4xl leading-tight md:text-5xl lg:text-6xl">{c.title}</h2></Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-14 space-y-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.phone}</dt>
                <dd className="mt-2"><a href={contact.phoneHref} dir="ltr" className="font-display nav-link text-3xl">{contact.phoneDisplay}</a></dd>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-sweep text-ink"><WhatsAppIcon className="h-4 w-4" /> {c.whatsapp}</a>
                <a href={contact.phoneHref} className="btn-sweep border-ink/30 text-ink"><PhoneIcon className="h-4 w-4" /> {t.nav.call}</a>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.address}</dt>
                <dd className="mt-2 flex items-start gap-2 leading-relaxed"><PinIcon className="mt-1 h-4 w-4 shrink-0 text-copper" />{c.addressText}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {c.hours}
                  {open !== null && (
                    <span className={`inline-flex items-center gap-1.5 border px-2 py-0.5 normal-case tracking-normal ${open ? "border-copper text-walnut" : "border-border text-muted-foreground"}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${open ? "bg-copper" : "bg-muted-foreground"}`} />
                      {open ? c.open : c.closed}
                    </span>
                  )}
                </dt>
                <dd className="mt-3 max-w-sm space-y-2 text-sm">
                  <div className="flex justify-between gap-4 border-b border-border pb-2"><span>{c.satThu}</span><span className="text-muted-foreground">{c.satThuHours}</span></div>
                  <div className="flex justify-between gap-4"><span>{c.fri}</span><span className="text-muted-foreground">{c.friHours}</span></div>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="space-y-10 lg:col-span-6 lg:col-start-7">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={0.1}>
            <div className="gold-frame relative aspect-[16/10] overflow-hidden bg-muted">
              <iframe
                title="Suli Home on Google Maps"
                src={contact.mapEmbed}
                className="absolute inset-0 h-full w-full grayscale-[60%] sepia-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={contact.mapLink} target="_blank" rel="noopener noreferrer" className="nav-link mt-4 inline-flex items-center gap-2 text-sm">
              {c.openMap} <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { t } = useI18n();
  const f = t.contact.form;
  const [vals, setVals] = useState({ name: "", phone: "", type: "", message: "" });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (vals.name.trim().length < 2) er.name = f.errName;
    if (!/^\+?[\d\s-]{7,16}$/.test(vals.phone.trim())) er.phone = f.errPhone;
    if (!vals.type) er.type = f.errType;
    if (vals.message.trim().length < 5) er.message = f.errMessage;
    setErrs(er);
    if (!Object.keys(er).length) setDone(true);
  };

  const field = "w-full border-b border-input bg-transparent py-3 outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-copper";
  const set = (k: keyof typeof vals) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setVals({ ...vals, [k]: e.target.value });
  const Err = ({ k }: { k: string }) => (errs[k] ? <p className="mt-1 text-xs text-destructive" role="alert">{errs[k]}</p> : null);

  return (
    <div className="relative min-h-[420px]">
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div key="ok" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex min-h-[420px] flex-col justify-center border border-copper/50 p-10">
            <svg viewBox="0 0 40 40" className="h-12 w-12 text-copper" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="20" cy="20" r="18" /><motion.path d="M12 20.5l5 5 11-11" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.2 }} /></svg>
            <h3 className="mt-6 text-3xl">{f.successTitle}</h3>
            <p className="mt-3 max-w-sm text-muted-foreground">{f.successBody}</p>
            <button onClick={() => { setDone(false); setVals({ name: "", phone: "", type: "", message: "" }); }} className="nav-link mt-8 self-start text-sm">{f.again}</button>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0 }} onSubmit={submit} noValidate className="grid gap-6 sm:grid-cols-2">
            <label className="block"><span className="sr-only">{f.name}</span><input className={field} placeholder={f.name} value={vals.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errs.name} /><Err k="name" /></label>
            <label className="block"><span className="sr-only">{f.phone}</span><input className={field} placeholder={f.phone} value={vals.phone} onChange={set("phone")} type="tel" autoComplete="tel" dir="ltr" aria-invalid={!!errs.phone} /><Err k="phone" /></label>
            <label className="block sm:col-span-2">
              <span className="sr-only">{f.type}</span>
              <select className={`${field} ${vals.type ? "" : "text-muted-foreground/70"}`} value={vals.type} onChange={set("type")} aria-invalid={!!errs.type}>
                <option value="">{f.type} — {f.choose}</option>
                {t.services.items.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
              </select>
              <Err k="type" />
            </label>
            <label className="block sm:col-span-2"><span className="sr-only">{f.message}</span><textarea rows={4} className={`${field} resize-none`} placeholder={f.message} value={vals.message} onChange={set("message")} aria-invalid={!!errs.message} /><Err k="message" /></label>
            <div className="sm:col-span-2"><button type="submit" className="btn-sweep bg-ink text-cream">{f.send} <ArrowIcon className="h-4 w-4" /></button></div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
