type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true };

export const PhoneIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" /></svg>
);
export const WhatsAppIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 8 19.4z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a5 5 0 0 1-2.3-2.3l.8-1-1-2z" /></svg>
);
export const InstagramIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" /></svg>
);
export const FacebookIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M14 21v-8h3l.5-3.5H14V7.5c0-1 .4-1.7 1.8-1.7H18V2.7A22 22 0 0 0 15.3 2.5C12.6 2.5 10.7 4 10.7 7v2.5H8V13h2.7v8" /></svg>
);
export const PinIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const ArrowIcon = ({ className }: P) => (
  <svg {...base} className={`${className ?? ""} rtl:-scale-x-100`}><path d="M4 12h16M14 6l6 6-6 6" /></svg>
);
export const CloseIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5 5l14 14M19 5L5 19" /></svg>
);
