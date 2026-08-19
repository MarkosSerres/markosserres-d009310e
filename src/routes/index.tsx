import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, Gamepad2, Mail } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { Gallery } from "@/components/portfolio/Gallery";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Timeline } from "@/components/portfolio/Timeline";
import {
  MediaPlaceholder,
  Parallax,
  PixelBits,
  PixelDivider,
  Reveal,
  SectionHeader,
  Tag,
} from "@/components/portfolio/primitives";
import { artCategories, contact, flow, games, pillars, projects } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const TITLE = "Markos Serres — Artista Digital & Desenvolvedor de Jogos";
const DESCRIPTION =
  "Portfólio de Markos Serres, artista digital, pixel artist e desenvolvedor de jogos, apresentando game art, pixel art, identidade visual, UX/UI e projetos em Unity.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Markos Serres",
          jobTitle: "Digital Artist & Game Developer",
          email: "serresalmeida@gmail.com",
          sameAs: [
            "https://www.behance.net/markosserres",
            "https://www.artstation.com/markosserres",
            "https://www.linkedin.com/in/markos-christopher-serres-almeida-9b564b22b/",
            "https://www.instagram.com/markosserres",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function FloatingPixels() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        { top: "18%", left: "8%", size: 10, delay: "0s", color: "bg-primary" },
        { top: "62%", left: "14%", size: 6, delay: "1.2s", color: "bg-cyan" },
        { top: "30%", left: "84%", size: 8, delay: "0.6s", color: "bg-primary/70" },
        { top: "74%", left: "78%", size: 12, delay: "2s", color: "bg-violet" },
        { top: "48%", left: "48%", size: 5, delay: "1.6s", color: "bg-primary/40" },
      ].map((p, i) => (
        <span
          key={i}
          className={`animate-float-pixel absolute block ${p.color}`}
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}

function FlowStrip() {
  return (
    <div className="overflow-hidden border-y border-border py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex gap-10">
            {flow.map((step) => (
              <span key={`${rep}-${step}`} className="flex items-center gap-10">
                <span className="pixel-font text-[10px] text-muted-foreground">{step}</span>
                <i className="block size-[6px] bg-primary" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  const { t, lang } = useI18n();
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background" id="top">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
          <Parallax speed={0.06} className="absolute inset-0 -z-20">
            <div className="grid-bg h-full w-full opacity-70" />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute top-1/3 -left-40 -z-10 size-[520px] rounded-full bg-primary/10 blur-[140px]"
          />
          <FloatingPixels />

          <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <PixelBits />
                  <span className="label-eyebrow">Digital Atelier · Portfolio 2026</span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 font-display text-[16vw] leading-[0.82] font-bold tracking-tighter sm:text-[11vw] lg:text-[8.5vw]">
                  MARKOS
                  <br />
                  <span className="text-outline">SERRES</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 font-display text-xl text-primary sm:text-2xl">{t("hero.role")}</p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-4 max-w-xl text-base text-foreground/85 sm:text-lg">{t("hero.line1")}</p>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">{t("hero.line2")}</p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="inline-flex min-h-11 items-center gap-2 bg-primary px-6 py-3 font-mono text-[11px] tracking-widest text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {t("hero.cta1")} <ArrowRight className="size-3.5" />
                  </a>
                  <a
                    href="#games"
                    className="inline-flex min-h-11 items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-widest uppercase transition-colors hover:border-primary hover:text-primary"
                  >
                    <Gamepad2 className="size-4" /> {t("hero.cta2")}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={360} className="relative hidden lg:block">
              <Parallax speed={-0.06}>
                <div className="relative">
                  <MediaPlaceholder
                    file="markos-profile.jpg"
                    label={t("hero.portrait")}
                    className="pixel-edge aspect-[3/4] w-full"
                  />
                  <span aria-hidden="true" className="absolute -top-3 -left-3 size-6 bg-primary" />
                  <span aria-hidden="true" className="absolute -right-4 -bottom-4 size-3 bg-cyan" />
                </div>
              </Parallax>
            </Reveal>
          </div>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 pixel-font text-[8px] text-muted-foreground">
            {t("hero.scroll")}
          </span>
        </section>

        <FlowStrip />

        {/* SELECTED WORK */}
        <section id="work" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-24 sm:px-8">
          <SectionHeader eyebrow={t("work.eyebrow")} title={t("work.title")} sub={t("work.sub")} />
          <div className="mt-14 grid auto-rows-[minmax(260px,auto)] grid-cols-1 gap-5 md:grid-cols-6">
            <ProjectCard project={featured[0]!} className="md:col-span-4 md:row-span-2" />
            <ProjectCard project={featured[2]!} className="md:col-span-2 md:row-span-2" />
            <ProjectCard project={featured[1]!} className="md:col-span-3" />
            <ProjectCard project={featured[4]!} className="md:col-span-3" />
            <ProjectCard project={featured[3]!} className="md:col-span-6" />
          </div>
        </section>

        {/* GAME DEVELOPMENT */}
        <section id="games" className="relative scroll-mt-20 overflow-hidden border-y border-border bg-surface/40">
          <Parallax speed={0.1} className="absolute inset-0 -z-10 opacity-60">
            <div className="grid-bg h-full w-full" />
          </Parallax>
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
            <SectionHeader eyebrow={t("games.eyebrow")} title={t("games.title")} />
            <Reveal delay={80}>
              <p className="mt-3 font-display text-2xl text-primary sm:text-3xl">{t("games.sub")}</p>
              <p className="mt-6 max-w-3xl text-base text-muted-foreground">{t("games.intro")}</p>
            </Reveal>

            <div className="mt-16 space-y-20">
              {games.map((game, i) => (
                <Reveal key={game.slug} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <Parallax speed={i % 2 === 0 ? 0.05 : -0.05} className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <MediaPlaceholder
                      file={game.images[0]!}
                      tone={game.accent ?? "primary"}
                      className="aspect-[16/10] w-full"
                    />
                  </Parallax>
                  <div>
                    <span className="pixel-font text-[10px] text-primary">
                      {String(i + 1).padStart(2, "0")} / {String(games.length).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
                      {lang === "pt" ? game.titlePT : game.titleEN}
                    </h3>
                    <p className="mt-4 text-muted-foreground">{game.description[lang]}</p>
                    <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5 font-mono text-[11px]">
                      <div>
                        <dt className="text-muted-foreground uppercase">{t("games.engine")}</dt>
                        <dd className="mt-1 text-foreground">{game.tools[0]}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground uppercase">{t("games.genre")}</dt>
                        <dd className="mt-1 text-foreground">{game.category[lang].split("— ")[1]}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground uppercase">{t("work.role")}</dt>
                        <dd className="mt-1 text-foreground">{game.role[lang]}</dd>
                      </div>
                    </dl>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`/projects/${game.slug}`}
                        className="inline-flex min-h-11 items-center gap-2 bg-primary px-5 py-3 font-mono text-[11px] tracking-widest text-primary-foreground uppercase"
                      >
                        {t("work.view")} <ArrowRight className="size-3.5" />
                      </a>
                      <span className="inline-flex min-h-11 items-center border border-dashed border-border px-5 py-3 font-mono text-[10px] text-muted-foreground">
                        {t("games.playSoon")}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ART */}
        <section id="art" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-24 sm:px-8">
          <SectionHeader eyebrow={t("art.eyebrow")} title={t("art.title")} sub={t("art.sub")} />
          <Reveal delay={60} className="mt-8 flex flex-wrap gap-2">
            {artCategories.map((c) => (
              <Tag key={c.en}>{c[lang]}</Tag>
            ))}
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
          <Reveal className="mt-12 flex flex-wrap gap-3">
            <a
              href={contact.behance}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-2 border border-primary px-6 py-3 font-mono text-[11px] tracking-widest text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t("art.behance")} <ArrowRight className="size-3.5" />
            </a>
            <a
              href={contact.artstation}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-widest uppercase transition-colors hover:border-primary hover:text-primary"
            >
              {t("art.artstation")}
            </a>
          </Reveal>

          <PixelDivider />

          {/* VISUAL IDENTITIES */}
          <div id="identity" className="scroll-mt-20">
            <SectionHeader eyebrow={t("identity.eyebrow")} title={t("identity.title")} sub={t("identity.sub")} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {["01 — Concept", "02 — Logo", "03 — Color", "04 — Typography", "05 — Applications", "06 — Final Identity"].map(
                (step, i) => (
                  <Reveal key={step} delay={i * 60} className="border border-border bg-surface p-5">
                    <span className="pixel-font text-[9px] text-primary">{step}</span>
                    <MediaPlaceholder file={`amorinx-step-0${i + 1}.png`} className="mt-4 aspect-[4/3] w-full" />
                  </Reveal>
                ),
              )}
            </div>
            <Reveal className="mt-8">
              <a
                href="/projects/amorinx-analytics"
                className="inline-flex min-h-11 items-center gap-2 bg-primary px-6 py-3 font-mono text-[11px] tracking-widest text-primary-foreground uppercase"
              >
                Amorinx Analytics — case study <ArrowRight className="size-3.5" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* BEYOND THE ART */}
        <section className="relative overflow-hidden border-y border-border bg-surface/40">
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
            <SectionHeader eyebrow={t("beyond.eyebrow")} title={t("beyond.title")} sub={t("beyond.sub")} />
            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-5">
              {pillars.map((p, i) => (
                <Reveal key={p.key} delay={i * 70} className="group bg-background p-6 transition-colors hover:bg-surface">
                  <span className="pixel-font text-[9px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{p.title[lang]}</h3>
                  <ul className="mt-4 space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <i aria-hidden="true" className="block size-[5px] shrink-0 bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-24 sm:px-8">
          <SectionHeader eyebrow={t("exp.eyebrow")} title={t("exp.title")} sub={t("exp.sub")} />
          <div className="mt-14">
            <Timeline />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 border-y border-border bg-surface/40">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Parallax speed={0.04}>
                <MediaPlaceholder file="markos-profile.jpg" className="pixel-edge aspect-[4/5] w-full" />
              </Parallax>
            </Reveal>
            <Reveal delay={100}>
              <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} />
              <div className="mt-6 space-y-4 text-base text-muted-foreground">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
                <p className="text-foreground">{t("about.p4")}</p>
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 border border-dashed border-border px-6 py-3 font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                >
                  <Download className="size-4" /> {t("about.resume")}
                </button>
                <p className="mt-2 font-mono text-[10px] text-muted-foreground">{t("about.resumeNote")}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative scroll-mt-20 overflow-hidden">
          <Parallax speed={0.08} className="absolute inset-0 -z-10 opacity-50">
            <div className="grid-bg h-full w-full" />
          </Parallax>
          <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8">
            <SectionHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} sub={t("contact.text")} />
            <Reveal delay={80} className="mt-10">
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-3 font-display text-2xl font-bold break-all sm:text-4xl"
              >
                <Mail className="size-6 shrink-0 text-primary" />
                <span className="transition-colors group-hover:text-primary">{contact.email}</span>
              </a>
              <p className="mt-3 font-mono text-sm text-muted-foreground">WhatsApp: {contact.phone}</p>
            </Reveal>
            <Reveal delay={140} className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "LinkedIn", href: contact.linkedin },
                { label: "Instagram", href: contact.instagram },
                { label: "Behance", href: contact.behance },
                { label: "ArtStation", href: contact.artstation },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center border border-border px-5 py-3 font-mono text-[11px] tracking-widest uppercase transition-colors hover:border-primary hover:text-primary"
                >
                  {s.label}
                </a>
              ))}
              <span className="inline-flex min-h-11 items-center border border-dashed border-border px-5 py-3 font-mono text-[10px] text-muted-foreground">
                {t("contact.itchNote")}
              </span>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
