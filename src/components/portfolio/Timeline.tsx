import { Link } from "@tanstack/react-router";
import { experiences } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Reveal, Tag } from "./primitives";

export function Timeline() {
  const { lang } = useI18n();

  return (
    <ol className="relative border-l border-border pl-6 sm:pl-10">
      {experiences.map((exp, i) => (
        <Reveal as="li" key={exp.org} delay={i * 60} className="relative pb-12 last:pb-0">
          <span
            aria-hidden="true"
            className={cn(
              "absolute -left-[27px] top-2 block size-[10px] sm:-left-[43px]",
              exp.scale === "major" ? "bg-primary" : "bg-muted-foreground/50",
            )}
          />
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            {exp.period[lang]}
          </p>
          <h3
            className={cn(
              "mt-1 font-display font-bold",
              exp.scale === "major" ? "text-3xl sm:text-4xl" : exp.scale === "normal" ? "text-2xl" : "text-xl",
            )}
          >
            {exp.org}
          </h3>
          <p className={cn("mt-1", exp.scale === "major" ? "text-primary" : "text-foreground/80")}>
            {exp.role[lang]}
          </p>
          {exp.note ? <p className="mt-2 max-w-xl text-sm text-muted-foreground">{exp.note[lang]}</p> : null}
          <div className="mt-3 flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {exp.link ? (
            <Link
              to="/projects/$slug"
              params={{ slug: exp.link.slug }}
              className="mt-4 inline-flex items-center gap-2 border border-primary px-4 py-2 font-mono text-[11px] tracking-widest text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {exp.link.label[lang]} →
            </Link>
          ) : null}
        </Reveal>
      ))}
    </ol>
  );
}
