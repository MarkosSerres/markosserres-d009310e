import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Comp>
  );
}

/** Slow vertical parallax driven by scroll position. */
export function Parallax({
  speed = 0.12,
  className,
  children,
}: {
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className="flex items-center gap-3">
        <PixelBits />
        <span className="label-eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-4xl leading-[0.95] font-bold sm:text-6xl">{title}</h2>
      {sub ? <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p> : null}
    </Reveal>
  );
}

export function PixelBits({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-[3px]", className)} aria-hidden="true">
      <i className="block size-[6px] bg-primary" />
      <i className="block size-[6px] bg-primary/60" />
      <i className="animate-blink-pixel block size-[6px] bg-primary/30" />
    </span>
  );
}

export function PixelDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 overflow-hidden py-10", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-border" />
      {[0, 1, 2, 3, 4].map((i) => (
        <i
          key={i}
          className="block size-[6px] bg-primary"
          style={{ opacity: 1 - i * 0.18 }}
        />
      ))}
      <span className="h-px w-16 bg-border" />
    </div>
  );
}

/** Clearly identified media placeholder — never a fake stock photo. */
export function MediaPlaceholder({
  file,
  label,
  className,
  tone = "primary",
}: {
  file: string;
  label?: string;
  className?: string;
  tone?: "primary" | "cyan" | "violet";
}) {
  const { t } = useI18n();
  const toneClass =
    tone === "cyan" ? "text-cyan" : tone === "violet" ? "text-violet" : "text-primary";
  return (
    <div
      role="img"
      aria-label={`${t("ph.image")}: ${file}`}
      className={cn(
        "grid-bg noise relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-border bg-surface p-6 text-center",
        className,
      )}
    >
      <span className={cn("pixel-font text-[8px]", toneClass)}>{t("ph.image")}</span>
      <span className="font-mono text-[11px] break-all text-muted-foreground">{file}</span>
      {label ? <span className="text-sm text-foreground/80">{label}</span> : null}
      <span className="pointer-events-none absolute top-2 left-2 size-2 bg-primary/70" aria-hidden="true" />
      <span className="pointer-events-none absolute right-2 bottom-2 size-2 bg-primary/40" aria-hidden="true" />
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-border px-2 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
      {children}
    </span>
  );
}
