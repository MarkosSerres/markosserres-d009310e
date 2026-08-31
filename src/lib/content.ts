import arcadeHeroAsset from "@/assets/arcade-hero.png.asset.json";
import type { Lang } from "./i18n";

export type Bi = { pt: string; en: string };

export const pick = (v: Bi, lang: Lang) => v[lang];

export type ProjectType = "game" | "identity" | "art" | "product";

export type CaseBlock = {
  heading: Bi;
  body?: Bi;
  /** clearly-marked placeholder media slots, no invented assets */
  media?: { file: string; caption: Bi }[];
};

export type Project = {
  slug: string;
  title: string;
  titlePT: string;
  titleEN: string;
  category: Bi;
  description: Bi;
  role: Bi;
  tools: string[];
  year: string;
  images: string[];
  video: string | null;
  externalLink: string | null;
  itchLink: string | null;
  featured: boolean;
  projectType: ProjectType;
  accent?: "primary" | "cyan" | "violet";
  span?: "wide" | "tall" | "normal";
  blocks?: CaseBlock[];
  /** Real hero image URL (CDN). When present, replaces the placeholder. */
  heroImage?: string;
};

export const projects: Project[] = [
  {
    slug: "rune-rumble",
    title: "Rune Rumble",
    titlePT: "Rune Rumble",
    titleEN: "Rune Rumble",
    category: { pt: "Jogo — Arena PvP", en: "Game — Arena PvP" },
    description: {
      pt: "Jogo pixel art de arena PvP para até quatro jogadores. Cada jogador controla um mago e coleta poderes espalhados pelos totens da arena.",
      en: "Pixel art arena PvP game for up to four players. Each player controls a mage and collects powers from totems across the arena.",
    },
    role: { pt: "Pixel Artist / Game Artist", en: "Pixel Artist / Game Artist" },
    tools: ["Unity", "Pixel Art", "Aseprite", "2D Animation"],
    year: "2025",
    images: ["rune-rumble-hero.png", "rune-rumble-gameplay.gif", "rune-rumble-menu.png"],
    video: null,
    externalLink: null,
    itchLink: null,
    featured: true,
    projectType: "game",
    accent: "primary",
    span: "wide",
    blocks: [
      {
        heading: { pt: "O Jogo", en: "The Game" },
        body: {
          pt: "Rune Rumble é um jogo pixel art de arena PvP para até quatro jogadores, desenvolvido pela Knockup Games. Cada jogador controla um mago e pode coletar poderes espalhados pelos totens presentes na arena: Fogo, Água, Energia e Escuridão. Cada magia possui seu próprio projétil e existem combinações entre poderes. O jogo possui três mapas e o vencedor é determinado pelo número de mapas conquistados.",
          en: "Rune Rumble is a pixel art arena PvP game for up to four players, developed by Knockup Games. Each player controls a mage and can collect powers from totems in the arena: Fire, Water, Energy and Darkness. Each spell has its own projectile and powers can be combined. The game has three maps and the winner is decided by the number of maps conquered.",
        },
      },
      {
        heading: { pt: "Meu Papel", en: "My Role" },
        body: {
          pt: "Markos trabalhou durante aproximadamente um ano no projeto, responsável por backgrounds, menus, animações, pixel art, assets visuais e elementos de interface, em conjunto com outras duas artistas. Ao longo do processo passou a atuar também como mentor de artistas nos novos projetos da associação.",
          en: "Markos worked on the project for roughly a year, responsible for backgrounds, menus, animations, pixel art, visual assets and interface elements, alongside two other artists. Over time he also became a mentor for artists on the association's new projects.",
        },
      },
      {
        heading: { pt: "Direção de Arte", en: "Art Direction" },
        media: [
          { file: "rune-rumble-backgrounds.png", caption: { pt: "Backgrounds", en: "Backgrounds" } },
          { file: "rune-rumble-menu.png", caption: { pt: "Menus", en: "Menus" } },
          { file: "rune-rumble-animations.gif", caption: { pt: "Animações", en: "Animations" } },
        ],
      },
      {
        heading: { pt: "Time", en: "Team" },
        body: {
          pt: "Projeto desenvolvido pela Knockup Games, com Markos atuando junto a outras duas artistas. Hoje ele é co-fundador da Knockup Games e tesoureiro da associação.",
          en: "Developed by Knockup Games, with Markos working alongside two other artists. Today he is a co-founder of Knockup Games and treasurer of the association.",
        },
      },
    ],
  },
  {
    slug: "eco-dive",
    title: "Eco Dive",
    titlePT: "Eco Dive",
    titleEN: "Eco Dive",
    category: { pt: "Jogo — Educacional", en: "Game — Educational" },
    description: {
      pt: "Jogo educativo desenvolvido por estudantes para uma disciplina universitária. O jogador controla um peixe que explora o oceano desviando de lixo e predadores.",
      en: "Educational game built by students for a university course. The player controls a small fish exploring the ocean while dodging trash and predators.",
    },
    role: { pt: "Pixel Artist", en: "Pixel Artist" },
    tools: ["Unity", "Pixel Art", "2D Animation"],
    year: "2025",
    images: ["eco-dive-hero.png", "eco-dive-gameplay.gif"],
    video: null,
    externalLink: null,
    itchLink: null,
    featured: true,
    projectType: "game",
    accent: "cyan",
    span: "normal",
    blocks: [
      {
        heading: { pt: "O Jogo", en: "The Game" },
        body: {
          pt: "Ao encontrar animais marinhos, o jogo apresenta informações através de áudio/dublagem, indicando o nome dos animais. Na segunda fase, o jogador precisa classificar os animais de acordo com suas subespécies.",
          en: "When the player meets sea animals, the game presents information through audio/voice-over, naming each animal. In the second stage the player must classify the animals by subspecies.",
        },
      },
      {
        heading: { pt: "Meu Papel", en: "My Role" },
        body: { pt: "Pixel art e assets visuais do jogo.", en: "Pixel art and visual assets for the game." },
      },
    ],
  },
  {
    slug: "amorinx-analytics",
    title: "Amorinx Analytics",
    titlePT: "Amorinx Analytics",
    titleEN: "Amorinx Analytics",
    category: { pt: "Identidade Visual", en: "Visual Identity" },
    description: {
      pt: "Um dos projetos mais completos de identidade visual: logo, sistema visual, assets para o site, materiais digitais e elementos destinados a materiais físicos.",
      en: "One of the most complete visual identity projects: logo, visual system, website assets, digital materials and elements for physical media.",
    },
    role: { pt: "Designer de Identidade Visual", en: "Visual Identity Designer" },
    tools: ["Illustrator", "Photoshop", "Figma"],
    year: "—",
    images: ["amorinx-branding.png", "amorinx-mockups.png", "amorinx-website.png"],
    video: null,
    externalLink: null,
    itchLink: null,
    featured: true,
    projectType: "identity",
    accent: "violet",
    span: "tall",
    blocks: [
      {
        heading: { pt: "01 — Concept", en: "01 — Concept" },
        media: [{ file: "amorinx-concept.png", caption: { pt: "Conceito", en: "Concept" } }],
      },
      {
        heading: { pt: "02 — Logo", en: "02 — Logo" },
        media: [{ file: "amorinx-logo.png", caption: { pt: "Logo", en: "Logo" } }],
      },
      {
        heading: { pt: "03 — Color / 04 — Typography", en: "03 — Color / 04 — Typography" },
        media: [
          { file: "amorinx-palette.png", caption: { pt: "Paleta", en: "Palette" } },
          { file: "amorinx-typography.png", caption: { pt: "Tipografia", en: "Typography" } },
        ],
      },
      {
        heading: { pt: "05 — Applications", en: "05 — Applications" },
        media: [
          { file: "amorinx-website.png", caption: { pt: "Website", en: "Website" } },
          { file: "amorinx-mockups.png", caption: { pt: "Mockups", en: "Mockups" } },
          { file: "amorinx-print.png", caption: { pt: "Materiais físicos", en: "Physical materials" } },
        ],
      },
      {
        heading: { pt: "06 — Final Identity", en: "06 — Final Identity" },
        media: [{ file: "amorinx-final.png", caption: { pt: "Identidade final", en: "Final identity" } }],
      },
    ],
  },
  {
    slug: "visual-identities",
    title: "Visual Identities",
    titlePT: "Identidades Visuais",
    titleEN: "Visual Identities",
    category: { pt: "Branding & Design Gráfico", en: "Branding & Graphic Design" },
    description: {
      pt: "Conjunto de projetos de identidade visual com foco no processo — do conceito às aplicações. Projetos adicionais serão inseridos aqui.",
      en: "A set of visual identity projects focused on process — from concept to applications. Additional projects go here.",
    },
    role: { pt: "Designer Gráfico", en: "Graphic Designer" },
    tools: ["Illustrator", "Photoshop"],
    year: "—",
    images: ["identity-placeholder-01.png"],
    video: null,
    externalLink: "https://www.behance.net/markosserres",
    itchLink: null,
    featured: true,
    projectType: "identity",
    span: "normal",
  },
  {
    slug: "arcades-publicos",
    title: "Totens Interativos / Arcades Públicos",
    titlePT: "Totens Interativos / Arcades Públicos",
    titleEN: "Interactive Kiosks / Public Arcades",
    category: { pt: "Tecnologia + Arte + Jogos", en: "Technology + Art + Games" },
    description: {
      pt: "Transformação de antigos totens de atendimento inoperantes em arcades públicos: reaproveitamento de hardware, identidade visual e licenciamento de jogos de estúdios brasileiros.",
      en: "Turning old out-of-service service kiosks into public arcades: hardware reuse, visual identity and game licensing from Brazilian studios.",
    },
    role: { pt: "Estagiário de TI / Liderança de equipe / Identidade visual", en: "IT Intern / Team lead / Visual identity" },
    tools: ["Hardware", "Design", "Gestão de projeto"],
    year: "2025—2026",
    images: ["arcade-hero.png", "arcade-plotagem.png"],
    video: null,
    externalLink: null,
    itchLink: null,
    featured: true,
    projectType: "product",
    span: "wide",
    blocks: [
      {
        heading: { pt: "Overview", en: "Overview" },
        body: {
          pt: "Projeto desenvolvido na Prefeitura Municipal de Ponta Grossa. Markos participou da transformação de antigos totens de atendimento inoperantes em arcades públicos, liderando outros estagiários e cuidando da identidade visual do projeto.",
          en: "Developed at the Ponta Grossa City Hall. Markos took part in turning old out-of-service kiosks into public arcades, leading other interns and handling the project's visual identity.",
        },
      },
      {
        heading: { pt: "Destaques", en: "Highlights" },
        body: {
          pt: "Liderança de outros estagiários · reaproveitamento de hardware · redução de descarte eletrônico · identidade visual · artes para plotagem · logo · apresentações · camisetas · contato com estúdios brasileiros · obtenção de licenças para os jogos.",
          en: "Leading other interns · hardware reuse · less electronic waste · visual identity · wrap artwork · logo · presentations · t-shirts · contact with Brazilian studios · obtaining game licenses.",
        },
      },
    ],
  },
];

export const games = projects.filter((p) => p.projectType === "game");

export const artCategories: Bi[] = [
  { pt: "Pixel Art", en: "Pixel Art" },
  { pt: "Game Art", en: "Game Art" },
  { pt: "Animação 2D", en: "2D Animation" },
  { pt: "Character Art", en: "Character Art" },
  { pt: "Design Gráfico", en: "Graphic Design" },
  { pt: "Identidade Visual", en: "Visual Identity" },
  { pt: "UI/UX", en: "UI/UX" },
  { pt: "Ilustração", en: "Illustration" },
];

/** Gallery slots — clearly marked placeholders, filenames ready to be swapped. */
export const gallerySlots = [
  { file: "pixel-art-01.png", label: { pt: "Pixel Art", en: "Pixel Art" }, ratio: "aspect-[4/5]" },
  { file: "game-art-01.png", label: { pt: "Game Art", en: "Game Art" }, ratio: "aspect-[4/3]" },
  { file: "character-art-01.png", label: { pt: "Character Art", en: "Character Art" }, ratio: "aspect-square" },
  { file: "animation-01.gif", label: { pt: "Animação 2D", en: "2D Animation" }, ratio: "aspect-[3/4]" },
  { file: "illustration-01.png", label: { pt: "Ilustração", en: "Illustration" }, ratio: "aspect-[4/3]" },
  { file: "uiux-01.png", label: { pt: "UI/UX", en: "UI/UX" }, ratio: "aspect-square" },
  { file: "graphic-design-01.png", label: { pt: "Design Gráfico", en: "Graphic Design" }, ratio: "aspect-[4/5]" },
  { file: "pixel-art-02.png", label: { pt: "Pixel Art", en: "Pixel Art" }, ratio: "aspect-[4/3]" },
];

export const pillars = [
  {
    key: "ART",
    title: { pt: "ARTE", en: "ART" },
    items: ["Pixel Art", "Game Art", "Animation"],
  },
  {
    key: "DESIGN",
    title: { pt: "DESIGN", en: "DESIGN" },
    items: ["Graphic Design", "Branding", "UX/UI"],
  },
  {
    key: "TECH",
    title: { pt: "TECNOLOGIA", en: "TECH" },
    items: ["Programming", "Web", "Automation", "Excel / BI"],
  },
  {
    key: "GAMES",
    title: { pt: "GAMES", en: "GAMES" },
    items: ["Unity", "Game Development", "Game Design"],
  },
  {
    key: "PEOPLE",
    title: { pt: "PESSOAS", en: "PEOPLE" },
    items: ["Leadership", "Mentoring", "Teamwork"],
  },
];

export type Experience = {
  org: string;
  role: Bi;
  period: Bi;
  tags: string[];
  note?: Bi;
  scale: "major" | "normal" | "compact";
  link?: { slug: string; label: Bi };
};

export const experiences: Experience[] = [
  {
    org: "Knockup Games",
    role: { pt: "Game Artist / Social Media / Co-fundador", en: "Game Artist / Social Media / Co-founder" },
    period: { pt: "Abril de 2025 — atual", en: "April 2025 — present" },
    tags: [
      "Pixel Art",
      "Game Art",
      "2D Animation",
      "Assets",
      "Social Media",
      "UX/UI",
      "Leadership",
      "Mentoring",
      "Co-founder",
      "Treasurer",
    ],
    scale: "major",
  },
  {
    org: "Prefeitura Municipal de Ponta Grossa",
    role: { pt: "Estagiário de TI", en: "IT Intern" },
    period: { pt: "Fevereiro de 2025 — Maio de 2026", en: "February 2025 — May 2026" },
    tags: ["Hardware", "Liderança", "Identidade visual", "Licenciamento"],
    note: {
      pt: "Projeto especial: Totens Interativos / Arcades Públicos.",
      en: "Special project: Interactive Kiosks / Public Arcades.",
    },
    scale: "major",
    link: { slug: "arcades-publicos", label: { pt: "Ver o projeto", en: "See the project" } },
  },
  {
    org: "LABRIoT",
    role: { pt: "Integrante", en: "Member" },
    period: { pt: "Março de 2025 — atual", en: "March 2025 — present" },
    tags: ["Suporte técnico", "Eventos", "Comunicação", "Social Media", "UX/UI", "Website", "Identidade visual"],
    scale: "normal",
  },
  {
    org: "Anil Cosméticos",
    role: { pt: "Designer Gráfico", en: "Graphic Designer" },
    period: { pt: "Março de 2023 — Setembro de 2023", en: "March 2023 — September 2023" },
    tags: ["Identidade visual", "Rótulos", "Social Media", "UX/UI", "Photoshop"],
    note: {
      pt: "Liderou a reformulação da experiência visual do site.",
      en: "Led the redesign of the website's visual experience.",
    },
    scale: "normal",
  },
  {
    org: "Printer do Brasil",
    role: { pt: "Suporte Técnico", en: "Technical Support" },
    period: { pt: "Maio de 2026 — atual", en: "May 2026 — present" },
    tags: ["Suporte técnico", "Diagnóstico", "Hardware", "Software"],
    scale: "compact",
  },
  {
    org: "Pater Distribuidora",
    role: { pt: "Operação → Analista de Logística", en: "Operations → Logistics Analyst" },
    period: { pt: "—", en: "—" },
    tags: ["Excel", "Análise de dados", "BI", "Dashboards", "Gestão operacional"],
    scale: "compact",
  },
];

export const contact = {
  email: "serresalmeida@gmail.com",
  phone: "159980499772",
  linkedin: "https://www.linkedin.com/in/markos-christopher-serres-almeida-9b564b22b/",
  instagram: "https://www.instagram.com/markosserres",
  behance: "https://www.behance.net/markosserres",
  artstation: "https://www.artstation.com/markosserres",
  itch: null as string | null,
};

export const flow = ["IDEA", "DESIGN", "BUILD", "PLAY", "SHARE"];
