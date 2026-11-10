import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className, as = "div" }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "li" }) {
  const reduce = useReducedMotion();
  const C = as === "li" ? motion.li : motion.div;
  return (
    <C
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </C>
  );
}

/** Image that opens from the bottom like an arch window as it enters view. */
export function ClipImage({ src, alt, w, h, className, imgClassName, eager }: { src: string; alt: string; w: number; h: number; className?: string; imgClassName?: string; eager?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, ease: [0.7, 0, 0.2, 1] }}
    >
      <FadeImg src={src} alt={alt} w={w} h={h} eager={eager} className={imgClassName ?? "h-full w-full object-cover"} />
    </motion.div>
  );
}

export function FadeImg({ src, alt, w, h, className, eager }: { src: string; alt: string; w: number; h: number; className?: string; eager?: boolean }) {
  return (
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`${className ?? ""} transition-opacity duration-700`}
      style={{ opacity: eager ? 1 : 0 }}
      onLoad={(e) => (e.currentTarget.style.opacity = "1")}
      ref={(el) => {
        if (el?.complete) el.style.opacity = "1";
      }}
    />
  );
}
