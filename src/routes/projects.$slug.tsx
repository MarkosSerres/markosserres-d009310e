import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Gamepad2 } from "lucide-react";
import { projects, contact } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import {
  MediaPlaceholder,
  Parallax,
  PixelBits,
  PixelDivider,
  Reveal,
  Tag,
} from "@/components/portfolio/primitives";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    const title = loaderData ? `${loaderData.project.titleEN} — Markos Serres` : "Projeto — Markos Serres";
    const description = loaderData
      ? loaderData.project.description.pt
      : "Case study do portfólio de Markos Serres.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const { lang, t } = useI18n();
  const title = lang === "pt" ? project.titlePT : project.titleEN;
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length]!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="relative overflow-hidden border-b border-border">
          <Parallax speed={0.08} className="absolute inset-0 -z-10 opacity-40">
            <div className="grid-bg h-full w-full" />
          </Parallax>
          <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase hover:text-primary"
            >
              <ArrowLeft className="size-3.5" /> {t("case.back")}
            </Link>
            <div className="mt-8 flex items-center gap-3">
              <PixelBits />
              <span className="label-eyebrow">{project.category[lang]}</span>
            </div>
            <h1 className="mt-4 font-display text-5xl leading-[0.9] font-bold sm:text-8xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{project.description[lang]}</p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
              <div>
                <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {t("work.role")}
                </dt>
                <dd className="mt-1 text-sm">{project.role[lang]}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Year</dt>
                <dd className="mt-1 text-sm">{project.year}</dd>
              </div>
              <div className="col-span-2">
                <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {t("work.tools")}
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
          <Reveal>
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={title}
                className="aspect-[16/8] w-full object-cover"
              />
            ) : (
              <MediaPlaceholder
                file={project.images[0] ?? "hero.png"}
                tone={project.accent ?? "primary"}
                className="aspect-[16/8] w-full"
              />
            )}
          </Reveal>
        </section>

        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          {(project.blocks ?? []).map((block, i) => (
            <Reveal as="section" key={block.heading.en} delay={40} className="py-10">
              <div className="flex items-baseline gap-4">
                <span className="pixel-font text-[10px] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">{block.heading[lang]}</h2>
              </div>
              {block.body ? (
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {block.body[lang]}
                </p>
              ) : null}
              {block.media ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {block.media.map((m) => (
                    <MediaPlaceholder
                      key={m.file}
                      file={m.file}
                      label={m.caption[lang]}
                      tone={project.accent ?? "primary"}
                      className="aspect-[4/3]"
                    />
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}

          <PixelDivider />

          {project.projectType === "game" ? (
            <Reveal className="border border-border bg-surface p-8 text-center">
              <Gamepad2 className="mx-auto size-6 text-primary" />
              <h2 className="mt-4 pixel-font text-[12px] text-primary">{t("games.play")}</h2>
              {project.itchLink ? (
                <a
                  href={project.itchLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-[11px] tracking-widest text-primary-foreground uppercase"
                >
                  Play on itch.io
                </a>
              ) : (
                <p className="mt-4 font-mono text-[11px] text-muted-foreground">{t("games.playSoon")}</p>
              )}
            </Reveal>
          ) : null}

          {project.externalLink ? (
            <Reveal className="py-10 text-center">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border border-primary px-6 py-3 font-mono text-[11px] tracking-widest text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t("art.behance")} <ArrowRight className="size-3.5" />
              </a>
            </Reveal>
          ) : null}
        </div>

        <section className="mt-16 border-t border-border">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-16 sm:px-8"
          >
            <span className="label-eyebrow">{t("case.next")}</span>
            <span className="font-display text-4xl font-bold transition-colors group-hover:text-primary sm:text-6xl">
              {lang === "pt" ? next.titlePT : next.titleEN} →
            </span>
          </Link>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-sm text-muted-foreground hover:text-primary"
            >
              {contact.email}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
