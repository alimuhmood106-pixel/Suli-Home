import { images } from "@/content";
import { useI18n } from "@/lib/i18n";
import { ArrowIcon } from "./icons";
import { ClipImage, Reveal } from "./Reveal";

export function Quote() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-24 md:grid-cols-12 md:px-16 md:py-32">
        <div className="md:col-span-7">
          <Reveal><p className="font-display text-4xl font-extralight leading-[1.1] md:text-6xl lg:text-7xl">{t.quote.line}</p></Reveal>
          <Reveal delay={0.15}>
            <a href="#contact" className="btn-sweep mt-12 text-ink">{t.quote.cta} <ArrowIcon className="h-4 w-4" /></a>
          </Reveal>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <div className="glow-bottom mx-auto aspect-[4/5] w-3/4 overflow-hidden md:w-full">
            <ClipImage src={images.kitchenWalnut} alt="Kitchen with walnut backsplash and warm LED light" w={828} h={1030} className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
