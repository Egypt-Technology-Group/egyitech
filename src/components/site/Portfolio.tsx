import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye, Pause, Play, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Cat = "all" | "enterprise" | "education" | "business" | "specialized";

type Project = {
  title: string;
  cat: Exclude<Cat, "all">;
  desc: string;
  url: string;
  livePreview?: boolean;
};

const projects: Project[] = [
  { title: "ESOP", cat: "enterprise", desc: "Employee stock & ownership platform.", url: "esop.demo.egyitech.com" },
  { title: "ESOW", cat: "enterprise", desc: "Enterprise scope of work platform.", url: "esow.demo.egyitech.com" },
  { title: "HMS", cat: "enterprise", desc: "Hospital management system.", url: "hms.demo.egyitech.com" },
  { title: "ISH", cat: "enterprise", desc: "Integrated services hub.", url: "ish.demo.egyitech.com" },
  { title: "SMP", cat: "enterprise", desc: "Strategic management platform.", url: "smp.demo.egyitech.com" },
  { title: "CBATU Main", cat: "education", desc: "Flagship university platform.", url: "cbatu.com", livePreview: true },
  { title: "CBATU IT", cat: "education", desc: "IT faculty platform.", url: "it.cbatu.com", livePreview: true },
  { title: "CBATU Student Portal", cat: "education", desc: "Student services portal.", url: "students.cbatu.com" },
  { title: "Orientation Day", cat: "education", desc: "Onboarding experience.", url: "orientationday.cbatu.com" },
  { title: "CBATU Store", cat: "education", desc: "Campus commerce.", url: "store.cbatu.com" },
  { title: "CBATU Thinker", cat: "education", desc: "Critical thinking platform.", url: "thinker.cbatu.com" },
  { title: "Avocado", cat: "education", desc: "Learning platform.", url: "avocado.cbatu.com" },
  { title: "VBC", cat: "business", desc: "Virtual business center.", url: "vbc.egyitech.com" },
  { title: "Future Way", cat: "business", desc: "Business platform.", url: "fw.egyitech.com" },
  { title: "FWA Academy", cat: "business", desc: "Training & certification.", url: "fwa.egyitech.com" },
  { title: "Aerospace", cat: "specialized", desc: "Aerospace platform.", url: "aerospace.egyitech.com" },
  { title: "Weather", cat: "specialized", desc: "Weather monitoring system.", url: "weather.egyitech.com" },
  { title: "Itqan Quran", cat: "specialized", desc: "Digital Quran platform.", url: "itqanquraneg.com", livePreview: true },
  { title: "GP Atlas UK", cat: "specialized", desc: "International atlas platform.", url: "gpatlas.co.uk", livePreview: true },
  { title: "Batechu", cat: "specialized", desc: "Digital product platform.", url: "batechu.com", livePreview: true },
];

// Free screenshot service — generates real previews from URLs.
const shotUrl = (url: string) =>
  `https://image.thum.io/get/width/1600/crop/1000/noanimate/https://${url}`;

function BrowserFrame({ url, src, title }: { url: string; src: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d12] shadow-2xl shadow-black/40">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-4 py-2.5 backdrop-blur">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex max-w-[60%] items-center gap-1.5 truncate rounded-md bg-white/5 px-3 py-0.5 text-[10px] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {url}
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
        )}
        <img
          src={src}
          alt={`${title} preview`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover object-top transition-all duration-700 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-[1.04]`}
        />
        {/* Glow overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </div>
  );
}

export function Portfolio() {
  const { t } = useI18n();
  const [cat, setCat] = useState<Cat>("all");
  const [autoplay, setAutoplay] = useState(true);
  const [livePreview, setLivePreview] = useState<Project | null>(null);

  const autoplayRef = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, containScroll: false },
    [autoplayRef.current],
  );

  const cats: { id: Cat; label: string }[] = [
    { id: "all", label: t("portfolio.all") },
    { id: "enterprise", label: t("portfolio.enterprise") },
    { id: "education", label: t("portfolio.education") },
    { id: "business", label: t("portfolio.business") },
    { id: "specialized", label: t("portfolio.specialized") },
  ];

  const filtered = cat === "all" ? projects : projects.filter((p) => p.cat === cat);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, filtered.length]);

  useEffect(() => {
    const a = autoplayRef.current;
    if (!a) return;
    if (autoplay) a.play();
    else a.stop();
  }, [autoplay]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" className="relative overflow-hidden py-24">
      {/* Animated background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-float" />
        <div
          className="absolute right-1/4 bottom-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live showcase
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {t("portfolio.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("portfolio.subtitle")}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="glass flex flex-wrap gap-1 rounded-xl p-1">
              {cats.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    cat === c.id
                      ? "bg-gradient-brand text-white shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setAutoplay((v) => !v)}
              className="glass rounded-xl p-2 text-muted-foreground transition hover:text-foreground"
              aria-label={autoplay ? "Pause autoplay" : "Play autoplay"}
            >
              {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mt-12">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y pl-6 md:pl-12">
            {filtered.map((p, i) => (
              <motion.div
                key={`${p.url}-${cat}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative mr-6 min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] lg:basis-[42%] xl:basis-[36%]"
              >
                <div className="glass relative overflow-hidden rounded-3xl p-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.4)]">
                  {/* Animated gradient border on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-fuchsia-500/20 to-purple-500/30 blur-xl" />
                  </div>

                  <div className="relative">
                    <BrowserFrame url={p.url} src={shotUrl(p.url)} title={p.title} />
                  </div>

                  <div className="relative flex items-start justify-between gap-3 p-5">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-[0.18em] text-primary/80">
                          {p.cat}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                        <span className="truncate text-[11px] text-muted-foreground">{p.url}</span>
                      </div>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-2 px-5 pb-5">
                    <a
                      href={`https://${p.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
                    >
                      Visit Project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    {p.livePreview && (
                      <button
                        onClick={() => setLivePreview(p)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground/90 backdrop-blur transition hover:border-primary/40 hover:bg-white/10"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Live Preview
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nav arrows */}
        <div className="mx-auto mt-8 flex max-w-7xl items-center justify-end gap-3 px-6">
          <button
            onClick={scrollPrev}
            className="glass rounded-full p-3 text-foreground transition hover:border-primary/40 hover:bg-primary/10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="glass rounded-full p-3 text-foreground transition hover:border-primary/40 hover:bg-primary/10"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Live preview modal */}
      <AnimatePresence>
        {livePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
            onClick={() => setLivePreview(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d12] shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="mx-auto truncate rounded-md bg-white/5 px-3 py-0.5 text-xs text-white/70">
                  {livePreview.url}
                </div>
                <button
                  onClick={() => setLivePreview(null)}
                  className="rounded-md p-1 text-white/60 hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <iframe
                src={`https://${livePreview.url}`}
                title={livePreview.title}
                className="h-[calc(100%-44px)] w-full bg-white"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
