import kitchenSkylight from "@/assets/photos/kitchen-skylight.webp.asset.json";
import displayCabinet from "@/assets/photos/display-cabinet.webp.asset.json";
import kitchenWalnut from "@/assets/photos/kitchen-walnut.webp.asset.json";
import kitchenWhite from "@/assets/photos/kitchen-white.webp.asset.json";
import tvWall from "@/assets/photos/tv-wall.webp.asset.json";
import diningArch from "@/assets/photos/dining-arch.webp.asset.json";
import kidsNavy from "@/assets/photos/kids-navy.webp.asset.json";
import kidsMint from "@/assets/photos/kids-mint.webp.asset.json";
import logo from "@/assets/photos/logo.webp.asset.json";

export type Lang = "en" | "ku" | "ar";
export const LANGS: { code: Lang; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "ku", label: "کوردی", dir: "rtl" },
  { code: "ar", label: "عربي", dir: "rtl" },
];

export const images = {
  logo: logo.url,
  kitchenSkylight: kitchenSkylight.url,
  displayCabinet: displayCabinet.url,
  kitchenWalnut: kitchenWalnut.url,
  kitchenWhite: kitchenWhite.url,
  tvWall: tvWall.url,
  diningArch: diningArch.url,
  kidsNavy: kidsNavy.url,
  kidsMint: kidsMint.url,
};

export const contact = {
  phoneDisplay: "0770 645 5520",
  phoneHref: "tel:+9647706455520",
  whatsapp: "https://wa.me/9647706455520",
  instagram: "https://www.instagram.com/sulihome1/",
  facebook: "https://www.facebook.com/p/Suli-home-61594256903864/",
  plusCode: "GFM6+38F",
  mapEmbed: "https://maps.google.com/maps?q=GFM6%2B38F%20Sulaymaniyah&z=16&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=GFM6%2B38F%20Sulaymaniyah",
};

export type ProjectCat = "kitchens" | "living" | "kids" | "storage";
export const projects: { src: string; cat: ProjectCat; w: number; h: number; key: string }[] = [
  { key: "p1", src: images.kitchenSkylight, cat: "kitchens", w: 828, h: 1021 },
  { key: "p2", src: images.tvWall, cat: "living", w: 828, h: 1030 },
  { key: "p3", src: images.kidsNavy, cat: "kids", w: 828, h: 821 },
  { key: "p4", src: images.displayCabinet, cat: "storage", w: 828, h: 1028 },
  { key: "p5", src: images.kitchenWalnut, cat: "kitchens", w: 828, h: 1030 },
  { key: "p6", src: images.diningArch, cat: "living", w: 828, h: 1023 },
  { key: "p7", src: images.kidsMint, cat: "kids", w: 828, h: 820 },
  { key: "p8", src: images.kitchenWhite, cat: "kitchens", w: 828, h: 1030 },
];

export const serviceImages = [
  images.kitchenWalnut,
  images.tvWall,
  images.displayCabinet,
  images.diningArch,
  images.kidsMint,
  images.kitchenSkylight,
];

const en = {
  nav: { home: "Home", projects: "Projects", services: "Services", about: "About", contact: "Contact", call: "Call", menu: "Menu", close: "Close" },
  hero: {
    label: "Interior Design & Creation",
    line: "Every space has a story. We design yours.",
    sub: "Kitchens, TV walls and full interiors — drawn, built and installed in Sulaymaniyah.",
    projects: "View Projects",
    contact: "Contact Us",
    scroll: "Scroll",
  },
  about: {
    label: "About the studio",
    title: "Tailored rooms that work as hard as they look.",
    body: "We are a small team of designers and makers in Sulaymaniyah. Every piece is measured for your walls, your storage and your habits — then built in our workshop and fitted by the same people who drew it. Warm light, honest materials, nothing you don't need.",
    tags: ["Modern", "Elegant", "Practical", "Spaces"],
  },
  services: {
    label: "What we make",
    title: "From one cabinet to the whole house.",
    items: [
      { name: "Kitchens", desc: "Kitchens built around how you actually cook — storage where your hands go, light where you work." },
      { name: "TV Walls", desc: "Clean media walls with hidden cables, soft LED edges and room for the things you love." },
      { name: "Display & Storage", desc: "Glass-front cabinets and shelving lit from within, so everyday objects look considered." },
      { name: "Entryway Furniture", desc: "Mirrors, shoe storage and benches that make the first two metres of your home feel calm." },
      { name: "Kids' Rooms", desc: "Bunk beds, stairs with drawers, reading nooks — safe, playful and built to last a childhood." },
      { name: "Full Interior Design", desc: "One team for the whole fit-out: layout, materials, lighting, joinery and installation." },
    ],
  },
  projects: {
    label: "Selected work",
    title: "Recent homes in Sulaymaniyah.",
    hint: "Drag or scroll",
    filters: { all: "All", kitchens: "Kitchens", living: "Living", kids: "Kids", storage: "Storage" },
    alts: {
      p1: "White shaker kitchen under a skylight with gold handles and LED strips",
      p2: "Cream TV wall with floating walnut shelf and glowing display niche",
      p3: "Navy bunk bed with storage stairs and lit shelves",
      p4: "Black-framed glass display cabinet lit from inside",
      p5: "Kitchen with walnut backsplash and warm under-cabinet light",
      p6: "Arched doorway opening onto a round dining table",
      p7: "Mint and white kids' bunk bed with staircase drawers",
      p8: "White kitchen with walnut backsplash and patterned rug",
    } as Record<string, string>,
    close: "Close", prev: "Previous", next: "Next",
  },
  process: {
    label: "How we work",
    title: "Four steps, one team.",
    steps: [
      { name: "Consultation", desc: "We visit, measure and listen — how you live, what bothers you, what you want to keep." },
      { name: "Design", desc: "Plans and 3D views with real materials and lighting, revised until it feels right." },
      { name: "Production", desc: "Built in our workshop with careful joinery, edges and finishes." },
      { name: "Installation", desc: "Fitted, levelled and lit by our own team, then cleaned up before we leave." },
    ],
  },
  quote: { line: "Details create a more beautiful home.", cta: "Start your project" },
  contact: {
    label: "Contact",
    title: "Tell us about your space.",
    phone: "Phone", whatsapp: "WhatsApp", address: "Address", hours: "Opening hours",
    addressText: "GFM6+38F, Qirga – Ibrahim Ahmed, Sulaymaniyah",
    openMap: "Open in Google Maps",
    satThu: "Saturday – Thursday", satThuHours: "8:00 AM – 9:30 PM",
    fri: "Friday", friHours: "9:00 AM – 6:00 PM",
    open: "Open now", closed: "Closed now",
    form: {
      name: "Your name", phone: "Phone number", type: "Project type", message: "A few words about the project",
      choose: "Choose one", send: "Send message",
      errName: "Please enter your name.", errPhone: "Please enter a valid phone number.", errType: "Please choose a project type.", errMessage: "Please write a short message.",
      successTitle: "Thank you.", successBody: "We'll call you back within a day. For anything urgent, call or WhatsApp us.", again: "Send another",
    },
  },
  footer: { tagline: "Every space has a story. We design yours.", links: "Explore", follow: "Follow", reach: "Reach us", hours: "Sat–Thu 8:00–21:30 · Fri 9:00–18:00", rights: "All rights reserved." },
  skip: "Skip",
};

type Dict = typeof en;

const ku: Dict = {
  nav: { home: "سەرەکی", projects: "پرۆژەکان", services: "خزمەتگوزارییەکان", about: "دەربارە", contact: "پەیوەندی", call: "پەیوەندی بکە", menu: "لیست", close: "داخستن" },
  hero: {
    label: "دیزاین و دروستکردنی ناوەوە",
    line: "هەموو شوێنێک چیرۆکێکی هەیە. ئێمە هی تۆ دیزاین دەکەین.",
    sub: "چێشتخانە، دیواری تەلەفزیۆن و ناوەوەی تەواو — لە سلێمانی دیزاین و دروست و دامەزراندن.",
    projects: "پرۆژەکان ببینە", contact: "پەیوەندیمان پێوە بکە", scroll: "خوارەوە",
  },
  about: {
    label: "دەربارەی ئێمە",
    title: "ژووری تایبەت کە هێندەی جوانییەکەی بەکەڵکە.",
    body: "ئێمە تیمێکی بچووکی دیزاینەر و دروستکەرین لە سلێمانی. هەموو پارچەیەک بە پێی دیوارەکانت، شوێنی هەڵگرتن و عادەتەکانت دەپێورێت — پاشان لە کارگەکەماندا دروست دەکرێت و هەمان کەس کە کێشاویەتی دایدەمەزرێنێت.",
    tags: ["مۆدێرن", "ڕازاوە", "بەکەڵک", "شوێنەکان"],
  },
  services: {
    label: "ئەوەی دروستی دەکەین",
    title: "لە یەک کابینەوە تا هەموو ماڵەکە.",
    items: [
      { name: "چێشتخانە", desc: "چێشتخانە بە پێی ئەوەی بەڕاستی چۆن چێشت لێدەنێیت." },
      { name: "دیواری تەلەفزیۆن", desc: "دیواری پاک بە وایەری شاراوە و ڕووناکی نەرمی LED." },
      { name: "نمایش و هەڵگرتن", desc: "کابینەی شووشەیی و ڕەفە کە لە ناوەوە ڕووناک دەکرێنەوە." },
      { name: "کەلوپەلی بەردەم دەرگا", desc: "ئاوێنە، شوێنی پێڵاو و کورسی بۆ دەستپێکێکی ئارام." },
      { name: "ژووری منداڵان", desc: "قەرەویلەی دوو نهۆمی، پلیکانەی چەکمەجەدار، سەلامەت و یاریانە." },
      { name: "دیزاینی تەواوی ناوەوە", desc: "یەک تیم بۆ هەموو کارەکە: نەخشە، ماددە، ڕووناکی و دامەزراندن." },
    ],
  },
  projects: {
    label: "کارە هەڵبژێردراوەکان", title: "ماڵە نوێیەکان لە سلێمانی.", hint: "ڕایبکێشە",
    filters: { all: "هەموو", kitchens: "چێشتخانە", living: "دانیشتن", kids: "منداڵان", storage: "هەڵگرتن" },
    alts: en.projects.alts, close: "داخستن", prev: "پێشوو", next: "دواتر",
  },
  process: {
    label: "چۆن کار دەکەین", title: "چوار هەنگاو، یەک تیم.",
    steps: [
      { name: "ڕاوێژ", desc: "سەردان دەکەین، دەپێوین و گوێ دەگرین." },
      { name: "دیزاین", desc: "نەخشە و وێنەی سێ ڕەهەندی بە ماددە و ڕووناکی ڕاستەقینە." },
      { name: "بەرهەمهێنان", desc: "لە کارگەکەماندا بە وردی دروست دەکرێت." },
      { name: "دامەزراندن", desc: "تیمەکەمان خۆی دایدەمەزرێنێت و پاکی دەکاتەوە." },
    ],
  },
  quote: { line: "وردەکارییەکان ماڵێکی جوانتر دروست دەکەن.", cta: "پرۆژەکەت دەست پێبکە" },
  contact: {
    label: "پەیوەندی", title: "باسی شوێنەکەتمان بۆ بکە.",
    phone: "تەلەفۆن", whatsapp: "واتسئاپ", address: "ناونیشان", hours: "کاتەکانی کارکردن",
    addressText: "GFM6+38F، قرگە – ئیبراهیم ئەحمەد، سلێمانی", openMap: "لە گووگڵ ماپ بیکەرەوە",
    satThu: "شەممە – پێنجشەممە", satThuHours: "٨:٠٠ – ٩:٣٠ ی ئێوارە", fri: "هەینی", friHours: "٩:٠٠ – ٦:٠٠ ی ئێوارە",
    open: "ئێستا کراوەیە", closed: "ئێستا داخراوە",
    form: {
      name: "ناوت", phone: "ژمارەی تەلەفۆن", type: "جۆری پرۆژە", message: "چەند وشەیەک دەربارەی پرۆژەکە",
      choose: "یەکێک هەڵبژێرە", send: "ناردن",
      errName: "تکایە ناوت بنووسە.", errPhone: "تکایە ژمارەیەکی دروست بنووسە.", errType: "تکایە جۆرێک هەڵبژێرە.", errMessage: "تکایە نامەیەکی کورت بنووسە.",
      successTitle: "سوپاس.", successBody: "لە ماوەی یەک ڕۆژدا پەیوەندیت پێوە دەکەینەوە.", again: "دیسان بنێرە",
    },
  },
  footer: { tagline: "هەموو شوێنێک چیرۆکێکی هەیە. ئێمە هی تۆ دیزاین دەکەین.", links: "بگەڕێ", follow: "فۆڵۆمان بکە", reach: "پەیوەندی", hours: "شەممە–پێنجشەممە ٨–٩:٣٠ · هەینی ٩–٦", rights: "هەموو مافەکان پارێزراون." },
  skip: "تێپەڕاندن",
};

const ar: Dict = {
  nav: { home: "الرئيسية", projects: "المشاريع", services: "الخدمات", about: "من نحن", contact: "تواصل", call: "اتصل", menu: "القائمة", close: "إغلاق" },
  hero: {
    label: "تصميم وتنفيذ داخلي",
    line: "لكل مساحة قصة. نحن نصمم قصتك.",
    sub: "مطابخ، جدران تلفاز وتصاميم داخلية كاملة — نصممها وننفذها ونركبها في السليمانية.",
    projects: "شاهد المشاريع", contact: "تواصل معنا", scroll: "مرّر",
  },
  about: {
    label: "عن الاستوديو",
    title: "غرف مفصّلة تعمل بقدر ما تبدو جميلة.",
    body: "نحن فريق صغير من المصممين والحرفيين في السليمانية. كل قطعة تُقاس على جدرانك ومساحات تخزينك وعاداتك، ثم تُصنع في ورشتنا ويركّبها نفس الفريق الذي رسمها.",
    tags: ["عصري", "أنيق", "عملي", "مساحات"],
  },
  services: {
    label: "ما نصنعه", title: "من خزانة واحدة إلى البيت كله.",
    items: [
      { name: "المطابخ", desc: "مطابخ مبنية حول طريقتك الحقيقية في الطبخ." },
      { name: "جدران التلفاز", desc: "جدران أنيقة بأسلاك مخفية وإضاءة LED ناعمة." },
      { name: "العرض والتخزين", desc: "خزائن زجاجية ورفوف مضاءة من الداخل." },
      { name: "أثاث المدخل", desc: "مرايا وخزائن أحذية ومقاعد لمدخل هادئ." },
      { name: "غرف الأطفال", desc: "أسرّة طابقين ودرج بأدراج، آمنة ومرحة." },
      { name: "تصميم داخلي كامل", desc: "فريق واحد لكل شيء: المخطط والمواد والإضاءة والتركيب." },
    ],
  },
  projects: {
    label: "أعمال مختارة", title: "منازل حديثة في السليمانية.", hint: "اسحب",
    filters: { all: "الكل", kitchens: "مطابخ", living: "معيشة", kids: "أطفال", storage: "تخزين" },
    alts: en.projects.alts, close: "إغلاق", prev: "السابق", next: "التالي",
  },
  process: {
    label: "طريقة عملنا", title: "أربع خطوات، فريق واحد.",
    steps: [
      { name: "الاستشارة", desc: "نزورك ونقيس ونستمع." },
      { name: "التصميم", desc: "مخططات وصور ثلاثية الأبعاد بمواد وإضاءة حقيقية." },
      { name: "التصنيع", desc: "يُصنع في ورشتنا بعناية في كل حافة وتشطيب." },
      { name: "التركيب", desc: "يركّبه فريقنا وينظف المكان قبل المغادرة." },
    ],
  },
  quote: { line: "التفاصيل تصنع بيتاً أجمل.", cta: "ابدأ مشروعك" },
  contact: {
    label: "تواصل", title: "حدّثنا عن مساحتك.",
    phone: "الهاتف", whatsapp: "واتساب", address: "العنوان", hours: "ساعات العمل",
    addressText: "GFM6+38F، قرگه – إبراهيم أحمد، السليمانية", openMap: "افتح في خرائط Google",
    satThu: "السبت – الخميس", satThuHours: "٨:٠٠ ص – ٩:٣٠ م", fri: "الجمعة", friHours: "٩:٠٠ ص – ٦:٠٠ م",
    open: "مفتوح الآن", closed: "مغلق الآن",
    form: {
      name: "الاسم", phone: "رقم الهاتف", type: "نوع المشروع", message: "كلمات قليلة عن المشروع",
      choose: "اختر واحداً", send: "إرسال",
      errName: "يرجى إدخال اسمك.", errPhone: "يرجى إدخال رقم صحيح.", errType: "يرجى اختيار نوع المشروع.", errMessage: "يرجى كتابة رسالة قصيرة.",
      successTitle: "شكراً لك.", successBody: "سنتصل بك خلال يوم. للأمور العاجلة اتصل بنا أو راسلنا على واتساب.", again: "إرسال آخر",
    },
  },
  footer: { tagline: "لكل مساحة قصة. نحن نصمم قصتك.", links: "تصفح", follow: "تابعنا", reach: "تواصل", hours: "السبت–الخميس ٨–٩:٣٠م · الجمعة ٩–٦م", rights: "جميع الحقوق محفوظة." },
  skip: "تخطي",
};

export const dict: Record<Lang, Dict> = { en, ku, ar };
export type { Dict };
