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
      pt: "Transformação de antigos totens de atendimento inoperantes em arcades públicos, unindo reaproveitamento de hardware, identidade visual, desenvolvimento de peças personalizadas e licenciamento de jogos de estúdios brasileiros.\n\nO projeto buscou transformar equipamentos que seriam descartados em pontos de entretenimento acessíveis ao público, dando uma nova finalidade ao hardware e aproximando o público de jogos desenvolvidos no Brasil.",
      en: "Turning old out-of-service kiosks into public arcades, combining hardware reuse, visual identity, custom-built parts and game licensing from Brazilian studios.\n\nThe project aimed to turn equipment that would be discarded into accessible public entertainment, giving new purpose to the hardware and bringing the public closer to games developed in Brazil.",
    },
    role: { pt: "Estagiário de TI / Liderança de equipe / Identidade visual / Gestão de projeto", en: "IT Intern / Team leadership / Visual identity / Project management" },
    tools: ["Hardware", "Design", "Gestão de projeto", "Modelagem 3D", "Comunicação"],
    year: "2025—2026",
    images: ["arcade-hero.png", "arcade-plotagem.png"],
    video: null,
    externalLink: null,
    itchLink: null,
    featured: true,
    projectType: "product",
    span: "wide",
    heroImage: arcadeHeroAsset.url,
    blocks: [
      {
        heading: { pt: "Overview", en: "Overview" },
        body: {
          pt: "Projeto desenvolvido na Prefeitura Municipal de Ponta Grossa com o objetivo de transformar antigos totens de atendimento inoperantes em arcades públicos.\n\nMarkos participou ativamente da concepção e desenvolvimento do projeto, liderando outros estagiários, planejando a identidade visual dos equipamentos e trabalhando na definição de como o hardware existente poderia ser reaproveitado para criar uma experiência de arcade.\n\nAlém da parte técnica e visual, o projeto envolveu articulação com o ecossistema brasileiro de desenvolvimento de jogos. Foram realizados contatos com estúdios nacionais, buscando autorização para disponibilizar jogos desenvolvidos no Brasil nos futuros arcades.\n\nEntre os estúdios contatados estiveram a Dumativa e a Double Dash Studios, que apoiaram a iniciativa disponibilizando licenças gratuitas de diversos de seus jogos para utilização nos totens.\n\nO projeto também contou com a participação de uma Empresa Júnior da UTFPR, responsável pelo desenvolvimento de uma solução de personalização física dos equipamentos. Foram planejadas e desenvolvidas peças e modelos 3D para criar uma espécie de \"tampa\" para os totens, permitindo transformar visualmente os equipamentos antigos em máquinas de arcade com identidade própria.",
          en: "Project developed at the Ponta Grossa City Hall, aimed at turning old out-of-service kiosks into public arcades.\n\nMarkos took an active part in conceiving and developing the project, leading other interns, planning the visual identity of the equipment and working out how the existing hardware could be reused to create an arcade experience.\n\nBeyond the technical and visual side, the project involved outreach to the Brazilian game development ecosystem. National studios were contacted, seeking permission to feature games developed in Brazil in the future arcades.\n\nAmong the studios contacted were Dumativa and Double Dash Studios, which supported the initiative by granting free licenses for several of their games to be used in the kiosks.\n\nThe project also involved a Junior Enterprise from UTFPR, responsible for developing a physical customization solution for the equipment. Parts and 3D models were planned and built to create a kind of \"cover\" for the kiosks, making it possible to visually transform the old equipment into arcade machines with their own identity.",
        },
      },
      {
        heading: { pt: "Destaques", en: "Highlights" },
        body: {
          pt: "Liderança de outros estagiários · coordenação de atividades e divisão de tarefas\n\nReaproveitamento de hardware · transformação de equipamentos de atendimento sem utilização em potenciais máquinas de entretenimento\n\nRedução de descarte eletrônico · proposta de dar uma nova vida útil a equipamentos que seriam inutilizados\n\nIdentidade visual · criação da linguagem visual dos arcades e desenvolvimento de materiais para apresentação do projeto\n\nArtes para plotagem · preparação dos materiais gráficos para aplicação nos equipamentos\n\nLogo · desenvolvimento da identidade da iniciativa\n\nApresentações · criação de materiais para apresentar e defender o projeto\n\nCamisetas · desenvolvimento de materiais de identidade visual para a equipe e iniciativa\n\nModelagem 3D · planejamento e desenvolvimento dos modelos das peças de personalização dos totens em parceria com uma Empresa Júnior da UTFPR\n\nContato com estúdios brasileiros · prospecção e comunicação direta com desenvolvedoras nacionais\n\nLicenciamento de jogos · negociação e obtenção de licenças gratuitas para disponibilizar jogos brasileiros nos futuros arcades\n\nParcerias com desenvolvedoras · apoio de estúdios como Dumativa e Double Dash Studios, que disponibilizaram gratuitamente licenças de seus jogos para o projeto",
          en: "Leading other interns · coordinating activities and dividing tasks\n\nHardware reuse · turning unused service equipment into potential entertainment machines\n\nLess electronic waste · proposing a new useful life for equipment that would be scrapped\n\nVisual identity · creating the visual language of the arcades and developing materials to present the project\n\nWrap artwork · preparing the graphic materials to be applied to the equipment\n\nLogo · developing the identity of the initiative\n\nPresentations · creating materials to present and defend the project\n\nT-shirts · developing visual identity materials for the team and the initiative\n\n3D modeling · planning and developing the models for the kiosk customization parts in partnership with a UTFPR Junior Enterprise\n\nContact with Brazilian studios · prospecting and direct communication with national developers\n\nGame licensing · negotiating and obtaining free licenses to feature Brazilian games in the future arcades\n\nPartnerships with developers · support from studios such as Dumativa and Double Dash Studios, which granted free licenses for their games to the project",
        },
      },
      {
        heading: { pt: "Desfecho", en: "Outcome" },
        body: {
          pt: "Apesar do desenvolvimento da proposta, das parcerias estabelecidas e da obtenção das licenças, o projeto não chegou à fase de implantação.\n\nA execução dependia de processos burocráticos e da contratação de serviços pela Prefeitura. Durante esse processo, não foi encontrado um orçamento que se adequasse às condições disponíveis para a execução do projeto.\n\nCom isso, a iniciativa acabou sendo interrompida antes da implementação dos arcades.\n\nMesmo sem chegar à etapa final, o projeto resultou na concepção completa da solução, desenvolvimento da identidade visual, planejamento da estrutura física, criação dos modelos 3D, articulação com uma Empresa Júnior da UTFPR e construção de parcerias com desenvolvedoras brasileiras que apoiaram a iniciativa com licenças gratuitas de seus jogos.",
          en: "Despite the development of the proposal, the partnerships established and the licenses obtained, the project never reached the implementation phase.\n\nExecution depended on bureaucratic processes and on hiring services through the City Hall. During that process, no budget was found that fit the available conditions to carry out the project.\n\nAs a result, the initiative was interrupted before the arcades could be implemented.\n\nEven without reaching the final stage, the project resulted in a complete solution concept, development of the visual identity, planning of the physical structure, creation of the 3D models, outreach to a UTFPR Junior Enterprise and partnerships with Brazilian developers who supported the initiative with free licenses for their games.",
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
