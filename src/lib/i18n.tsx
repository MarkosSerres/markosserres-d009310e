import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, { pt: string; en: string }>;

export const dict: Dict = {
  "nav.home": { pt: "Home", en: "Home" },
  "nav.projects": { pt: "Projetos", en: "Projects" },
  "nav.games": { pt: "Games", en: "Games" },
  "nav.art": { pt: "Arte", en: "Art" },
  "nav.experience": { pt: "Experiência", en: "Experience" },
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.contact": { pt: "Contato", en: "Contact" },

  "hero.role": { pt: "Artista Digital & Desenvolvedor de Jogos", en: "Digital Artist & Game Developer" },
  "hero.line1": {
    pt: "Transformo ideias em experiências visuais, interativas e jogáveis.",
    en: "I turn ideas into visual, interactive and playable experiences.",
  },
  "hero.line2": {
    pt: "Pixel art, game development, design e tecnologia — criando experiências que conectam criatividade e funcionalidade.",
    en: "Pixel art, game development, design and technology — building experiences where creativity meets function.",
  },
  "hero.cta1": { pt: "Ver meus projetos", en: "See my projects" },
  "hero.cta2": { pt: "Explorar meus jogos", en: "Explore my games" },
  "hero.scroll": { pt: "role para explorar", en: "scroll to explore" },
  "hero.portrait": { pt: "Foto de perfil — placeholder", en: "Profile photo — placeholder" },

  "work.eyebrow": { pt: "01 — Trabalhos", en: "01 — Work" },
  "work.title": { pt: "Projetos em Destaque", en: "Selected Work" },
  "work.sub": {
    pt: "Uma seleção entre game art, desenvolvimento e identidade visual.",
    en: "A selection across game art, development and visual identity.",
  },
  "work.role": { pt: "Papel", en: "Role" },
  "work.tools": { pt: "Ferramentas", en: "Tools" },
  "work.view": { pt: "Ver case study", en: "View case study" },

  "games.eyebrow": { pt: "02 — Games", en: "02 — Games" },
  "games.title": { pt: "GAME DEVELOPMENT", en: "GAME DEVELOPMENT" },
  "games.sub": { pt: "Where art becomes playable.", en: "Where art becomes playable." },
  "games.intro": {
    pt: "Desenvolvimento de jogos é a principal área de interesse profissional de Markos. É onde arte, animação, interface e código se encontram — e onde ele atua tanto criando assets quanto pensando a experiência completa do jogador.",
    en: "Game development is Markos' main professional focus. It is where art, animation, interface and code meet — and where he works both creating assets and shaping the whole player experience.",
  },
  "games.play": { pt: "JOGAR", en: "PLAY THE GAME" },
  "games.playSoon": {
    pt: "Placeholder — link do itch.io a ser adicionado",
    en: "Placeholder — itch.io link to be added",
  },
  "games.engine": { pt: "Engine", en: "Engine" },
  "games.genre": { pt: "Gênero", en: "Genre" },

  "art.eyebrow": { pt: "03 — Arte", en: "03 — Art" },
  "art.title": { pt: "ART & VISUAL DESIGN", en: "ART & VISUAL DESIGN" },
  "art.sub": {
    pt: "Galeria de produção artística e visual. Imagens reais serão inseridas nos espaços marcados.",
    en: "A gallery of artistic and visual work. Real images go into the marked slots.",
  },
  "art.behance": { pt: "Ver mais no Behance", en: "View more on Behance" },
  "art.artstation": { pt: "Explorar meu ArtStation", en: "Explore my ArtStation" },

  "identity.eyebrow": { pt: "04 — Branding", en: "04 — Branding" },
  "identity.title": { pt: "VISUAL IDENTITIES", en: "VISUAL IDENTITIES" },
  "identity.sub": {
    pt: "Identidade visual e design gráfico com foco no processo: do conceito às aplicações.",
    en: "Visual identity and graphic design with a focus on process: from concept to applications.",
  },

  "beyond.eyebrow": { pt: "05 — Diferencial", en: "05 — Edge" },
  "beyond.title": { pt: "BEYOND THE ART", en: "BEYOND THE ART" },
  "beyond.sub": {
    pt: "A combinação entre criatividade, tecnologia e organização permite compreender projetos de diferentes perspectivas.",
    en: "Creativity, technology and organization combined make it possible to understand a project from several perspectives.",
  },

  "exp.eyebrow": { pt: "06 — Trajetória", en: "06 — Track record" },
  "exp.title": { pt: "EXPERIÊNCIA", en: "EXPERIENCE" },
  "exp.sub": {
    pt: "Uma trajetória entre arte, tecnologia e times.",
    en: "A path between art, technology and teams.",
  },

  "about.eyebrow": { pt: "07 — Sobre", en: "07 — About" },
  "about.title": { pt: "ABOUT ME", en: "ABOUT ME" },
  "about.p1": {
    pt: "Markos é um artista digital e desenvolvedor de jogos interessado em unir criatividade e tecnologia.",
    en: "Markos is a digital artist and game developer interested in bringing creativity and technology together.",
  },
  "about.p2": {
    pt: "Sua experiência transita entre pixel art, game art, design gráfico, UX/UI, desenvolvimento e suporte tecnológico.",
    en: "His experience moves between pixel art, game art, graphic design, UX/UI, development and technical support.",
  },
  "about.p3": {
    pt: "Ao longo de seus projetos, desenvolveu também experiência em liderança, organização e trabalho em equipe.",
    en: "Across his projects he also developed experience in leadership, organization and teamwork.",
  },
  "about.p4": {
    pt: "Atualmente, seu principal objetivo profissional é crescer na indústria de desenvolvimento de jogos.",
    en: "His current professional goal is to grow within the game development industry.",
  },
  "about.resume": { pt: "Baixar Currículo", en: "Download Resume" },
  "about.resumeNote": {
    pt: "Placeholder — arquivo do currículo ainda não adicionado",
    en: "Placeholder — resume file not added yet",
  },

  "contact.eyebrow": { pt: "08 — Contato", en: "08 — Contact" },
  "contact.title": { pt: "VAMOS CRIAR ALGO", en: "LET'S BUILD SOMETHING" },
  "contact.text": {
    pt: "Se você está procurando alguém que combine arte, tecnologia e desenvolvimento de jogos, entre em contato.",
    en: "If you are looking for someone who combines art, technology and game development, get in touch.",
  },
  "contact.itchNote": {
    pt: "itch.io — placeholder, link a ser fornecido",
    en: "itch.io — placeholder, link to be provided",
  },

  "case.back": { pt: "Voltar ao portfólio", en: "Back to portfolio" },
  "case.overview": { pt: "Overview", en: "Overview" },
  "case.game": { pt: "O Jogo", en: "The Game" },
  "case.myrole": { pt: "Meu Papel", en: "My Role" },
  "case.artdir": { pt: "Direção de Arte", en: "Art Direction" },
  "case.process": { pt: "Processo", en: "Development Process" },
  "case.team": { pt: "Time", en: "Team" },
  "case.gallery": { pt: "Galeria", en: "Gallery" },
  "case.next": { pt: "Próximo projeto", en: "Next project" },

  "ph.image": { pt: "PLACEHOLDER DE IMAGEM", en: "IMAGE PLACEHOLDER" },
  "ph.note": {
    pt: "Espaço reservado — conteúdo real será adicionado.",
    en: "Reserved slot — real content to be added.",
  },
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved." },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict | string) => string };

const I18nContext = createContext<Ctx>({ lang: "pt", setLang: () => {}, t: (k) => String(k) });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("ms-lang");
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("ms-lang", l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback((k: string) => dict[k]?.[lang] ?? k, [lang]);

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
