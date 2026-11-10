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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Suli Home",
  description: DESC,
  telephone: "+964 770 645 5520",
  address: { "@type": "PostalAddress", streetAddress: "GFM6+38F, Qirga – Ibrahim Ahmed", addressLocality: "Sulaymaniyah", addressRegion: "Sulaymaniyah Governorate", addressCountry: "IQ" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "21:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
  ],
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
      { name: "twitter:card", content: "summary_large_image" },
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
