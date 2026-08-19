import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { contact } from "@/lib/content";
import { cn } from "@/lib/utils";
import { PixelBits } from "./primitives";

const links = [
  { key: "nav.home", href: "/#top" },
  { key: "nav.projects", href: "/#work" },
  { key: "nav.games", href: "/#games" },
  { key: "nav.art", href: "/#art" },
  { key: "nav.experience", href: "/#experience" },
  { key: "nav.about", href: "/#about" },
  { key: "nav.contact", href: "/#contact" },
];

const socials = [
  { label: "Behance", href: contact.behance, short: "Be" },
  { label: "ArtStation", href: contact.artstation, short: "As" },
  { label: "LinkedIn", href: contact.linkedin, short: "In" },
  { label: "Instagram", href: contact.instagram, short: "Ig" },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link to="/" className="group flex items-center gap-2" aria-label="Markos Serres — home">
          <PixelBits />
          <span className="font-display text-sm font-bold tracking-tight">
            MARKOS<span className="text-primary">.</span>SERRES
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                className="relative font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-2 md:flex">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid size-8 place-items-center border border-border font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {s.short}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center border border-border font-mono text-[11px]">
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  "px-2 py-1.5 uppercase transition-colors",
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-5 py-4">
          {links.map((l, i) => (
            <li key={l.key} style={{ transitionDelay: `${i * 30}ms` }}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 font-display text-lg"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-2 px-5 pb-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border px-3 font-mono text-[11px] text-muted-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
