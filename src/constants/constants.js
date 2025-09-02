const Nav = {
  Links: ["home", "services", "about", "work", "contact"],
  Media: [
    { name: "github", link: "https://github.com/web-dev-pasta" },
    {
      name: "frontend mentor",
      link: "https://www.frontendmentor.io/profile/web-dev-pasta",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/omar-nasser-a80441254/",
    },
  ],
};
const servicesData = [
  {
    title: "React & Next.js Development",
    description: "Crafted by expert hands.",
    items: [
      {
        title: "Modern Architecture",
        description: "(Reusable components, hooks, context, clean structure)",
      },
      {
        title: "Next.js Power",
        description:
          "(SSR, SSG, ISR, API routes for optimal SEO & performance)",
      },
      {
        title: "TypeScript Excellence",
        description: "(Type-safe code, fewer bugs, long-term maintainability)",
      },
    ],
  },
  {
    title: "Responsive & Pixel-Perfect UI",
    description: "A stunning interface across all devices.",
    items: [
      {
        title: "Responsive Layouts",
        description: "(Tailwind CSS, CSS Grid, Flexbox, mobile-first design)",
      },
      {
        title: "Cross-Browser Support",
        description:
          "(Consistent experience across Chrome, Safari, Edge, Firefox)",
      },
      {
        title: "Accessibility",
        description: "(WCAG standards, ARIA roles, semantic HTML)",
      },
    ],
  },
  {
    title: "Animations & Interactions",
    description: "Smooth motion brings interfaces to life.",
    items: [
      {
        title: "Micro-Interactions",
        description: "(Buttons, hover states, loaders, feedback UX)",
      },
      {
        title: "Advanced Animations",
        description: "(Framer Motion, GSAP, timeline-based effects)",
      },
      {
        title: "Page Transitions",
        description: "(Fluid navigation, reduced jank, immersive flow)",
      },
    ],
  },
  {
    title: "Performance & Quality",
    description: "Fast apps retain users.",
    items: [
      {
        title: "Performance Optimization",
        description:
          "(Code splitting, lazy loading, image optimization, caching)",
      },
      {
        title: "SEO & Speed",
        description: "(Lighthouse 90+ scores, structured data, meta tags)",
      },
      {
        title: "Testing & Reviews",
        description: "(Jest, React Testing Library, Cypress, code audits)",
      },
    ],
  },
];
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
const cld = new Cloudinary({ cloud: { cloudName: "dwcxvcjrr" } });
const curtains = cld
  .image(`v1756802284/curtains_rpcgtu.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(400));
const plantshop = cld
  .image(`v1756802302/plant-shop_hgdowc.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(744));
const poster = cld
  .image(`v1756802286/poster_x3smv7.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(400));
const table = cld
  .image(`v1756802290/table_jcqzai.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(400));
const blanket = cld
  .image(`v1756802292/blanket_waidue.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(400));
const map = cld
  .image(`v1756802293/map_pr0jgz.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(400));
const homeDecorStore = cld
  .image(`v1756802298/home-decor-store_jouopu.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(744));
const appleTechStore = cld
  .image(`v1756802300/apple-tech-store_skc1sw.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(744));
const gameStore = cld
  .image(`v1756802299/game-store_u0lsze.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(744));
const electronicsStore = cld
  .image(`v1756802299/electronics-store_gcwvua.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(744));
const MobileAccessories = cld
  .image(`v1756802299/mobile-accessories-store_xinrt2.jpg`)
  .format("auto")
  .quality("auto")
  .resize(auto().width(744));
const projects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: MobileAccessories,
    bgImage: blanket,
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: plantshop,
    bgImage: curtains,
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: appleTechStore,
    bgImage: map,
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: electronicsStore,
    bgImage: poster,
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: homeDecorStore,
    bgImage: table,
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: gameStore,
    bgImage: curtains,
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];
export { projects, Nav, servicesData };
