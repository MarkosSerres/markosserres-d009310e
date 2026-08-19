import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallerySlots } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { MediaPlaceholder, Reveal } from "./primitives";

export function Gallery() {
  const { lang, t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const active = openIndex === null ? null : gallerySlots[openIndex];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {gallerySlots.map((slot, i) => (
          <Reveal key={slot.file} delay={(i % 3) * 80} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full text-left"
              aria-label={`${slot.label[lang]} — ${slot.file}`}
            >
              <div className="relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
                <MediaPlaceholder
                  file={slot.file}
                  className={`${slot.ratio} w-full transition-colors group-hover:border-primary`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/80 px-3 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-mono text-[10px] tracking-widest uppercase">{slot.label[lang]}</span>
                  <span className="pixel-font text-[7px] text-primary">VIEW</span>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.label[lang]}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-5 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute top-5 right-5 grid size-11 place-items-center border border-border hover:border-primary hover:text-primary"
          >
            <X className="size-4" />
          </button>
          <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <MediaPlaceholder file={active.file} label={active.label[lang]} className="aspect-[16/10] w-full" />
            <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">{t("ph.note")}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
