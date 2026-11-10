import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { Quote } from "@/components/site/Quote";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Suli Home | Interior Design & Creation in Sulaymaniyah";
const DESC = "Custom kitchens, TV walls, display cabinets, kids' rooms and full interior fit-outs, designed and built in Sulaymaniyah. Every space has a story. We design yours.";

// Change SITE_URL if the site moves to a custom domain (share previews need absolute URLs).
const SITE_URL = "https://suli-home.pages.dev";
const OG_IMAGE = `${SITE_URL}/og.jpg`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Suli Home",
  url: SITE_URL,
  image: OG_IMAGE,
  logo: `${SITE_URL}/photos/logo.webp`,
  description: DESC,
  telephone: "+964 750 117 5923",
  address: { "@type": "PostalAddress", addressLocality: "Sulaymaniyah", addressCountry: "IQ" },
  sameAs: ["https://www.instagram.com/sulihome1/", "https://www.facebook.com/p/Suli-home-61594256903864/"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Corner kitchen with fluted doors and warm LED light by Suli Home" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
