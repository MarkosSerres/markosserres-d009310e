import { useI18n } from "@/lib/i18n";
import { contact, flow } from "@/lib/content";
import { PixelBits } from "./primitives";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <PixelBits />
          <span className="font-display text-sm font-bold">
            MARKOS<span className="text-primary">.</span>SERRES
          </span>
        </div>
        <p className="pixel-font text-[8px] text-muted-foreground">{flow.join("  ›  ")}</p>
        <div className="flex flex-wrap gap-4 font-mono text-[11px] text-muted-foreground">
          <a className="hover:text-primary" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a className="hover:text-primary" href={contact.behance} target="_blank" rel="noreferrer noopener">
            Behance
          </a>
          <a className="hover:text-primary" href={contact.artstation} target="_blank" rel="noreferrer noopener">
            ArtStation
          </a>
          <a className="hover:text-primary" href={contact.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-5 pb-8 font-mono text-[10px] text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Markos Serres. {t("footer.rights")}
      </div>
    </footer>
  );
}
