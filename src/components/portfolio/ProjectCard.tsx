import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { MediaPlaceholder, Tag } from "./primitives";

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const { lang, t } = useI18n();
  const title = lang === "pt" ? project.titlePT : project.titleEN;

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={cn(
        "group relative flex flex-col overflow-hidden border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-primary",
        className,
      )}
    >
      <div className="relative flex-1 overflow-hidden">
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={title}
            className="h-full min-h-[220px] w-full border-0 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <MediaPlaceholder
            file={project.images[0] ?? "placeholder.png"}
            tone={project.accent ?? "primary"}
            className="h-full min-h-[220px] w-full border-0 transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
        <span className="absolute top-3 left-3 bg-background/80 px-2 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
          {project.category[lang]}
        </span>
      </div>

      <div className="relative flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl leading-tight font-bold">{title}</h3>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">{project.description[lang]}</p>

        <div className="grid max-h-0 grid-rows-[0fr] overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-52 group-hover:grid-rows-[1fr] group-hover:opacity-100 motion-reduce:max-h-52 motion-reduce:grid-rows-[1fr] motion-reduce:opacity-100">
          <div className="min-h-0 space-y-3 pt-2">
            <p className="font-mono text-[11px] text-muted-foreground">
              <span className="text-primary">{t("work.role")}:</span> {project.role[lang]} · {project.year}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
