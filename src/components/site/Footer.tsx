import { contact, images } from "@/content";
import { useI18n } from "@/lib/i18n";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const { t } = useI18n();
  const links = [["#home", t.nav.home], ["#projects", t.nav.projects], ["#services", t.nav.services], ["#about", t.nav.about], ["#contact", t.nav.contact]] as const;
  return (
    <footer className="glow-edge bg-ink text-sand">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 md:grid-cols-12 md:px-16">
        <div className="md:col-span-4">
          <img src={images.logo} alt="Suli Home — Interior Design & Creation" width={120} height={120} loading="lazy" className="h-28 w-28 rounded-full" />
          <p className="font-display mt-6 max-w-xs text-lg font-light text-cream">{t.footer.tagline}</p>
        </div>
        <nav className="md:col-span-2 md:col-start-6" aria-label="Footer">
          <h3 className="text-xs uppercase tracking-[0.3em] text-copper">{t.footer.links}</h3>
          <ul className="mt-5 space-y-2 text-sm">{links.map(([h, l]) => <li key={h}><a href={h} className="nav-link">{l}</a></li>)}</ul>
        </nav>
        <div className="md:col-span-2">
          <h3 className="text-xs uppercase tracking-[0.3em] text-copper">{t.footer.follow}</h3>
          <ul className="mt-5 flex gap-4">
            <li><a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-copper"><InstagramIcon className="h-6 w-6" /></a></li>
            <li><a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-copper"><FacebookIcon className="h-6 w-6" /></a></li>
            <li><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-copper"><WhatsAppIcon className="h-6 w-6" /></a></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-xs uppercase tracking-[0.3em] text-copper">{t.footer.reach}</h3>
          <a href={contact.phoneHref} dir="ltr" className="font-display mt-5 block text-2xl text-cream">{contact.phoneDisplay}</a>
        </div>
      </div>
      <div className="border-t border-sand/10">
        <p className="mx-auto max-w-[1600px] px-6 py-6 text-xs text-sand/50 md:px-16">© {new Date().getFullYear()} Suli Home. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
