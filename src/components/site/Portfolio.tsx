import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

type Cat = "all" | "enterprise" | "education" | "business" | "specialized";

type Project = {
  title: string;
  cat: Exclude<Cat, "all">;
  desc: string;
  url: string;
  accent: string;
};

const projects: Project[] = [
  { title: "ESOP", cat: "enterprise", desc: "Employee stock & ownership platform.", url: "esop.demo.egyitech.com", accent: "from-blue-500 to-indigo-600" },
  { title: "ESOW", cat: "enterprise", desc: "Enterprise scope of work platform.", url: "esow.demo.egyitech.com", accent: "from-indigo-500 to-purple-600" },
  { title: "HMS", cat: "enterprise", desc: "Hospital management system.", url: "hms.demo.egyitech.com", accent: "from-cyan-500 to-blue-600" },
  { title: "ISH", cat: "enterprise", desc: "Integrated services hub.", url: "ish.demo.egyitech.com", accent: "from-violet-500 to-fuchsia-600" },
  { title: "SMP", cat: "enterprise", desc: "Strategic management platform.", url: "smp.demo.egyitech.com", accent: "from-sky-500 to-indigo-600" },

  { title: "CBATU Main", cat: "education", desc: "Flagship university platform.", url: "cbatu.com", accent: "from-purple-500 to-pink-600" },
  { title: "CBATU IT", cat: "education", desc: "IT faculty platform.", url: "it.cbatu.com", accent: "from-blue-500 to-cyan-500" },
  { title: "CBATU Student Portal", cat: "education", desc: "Student services portal.", url: "students.cbatu.com", accent: "from-indigo-500 to-blue-600" },
  { title: "Orientation Day", cat: "education", desc: "Onboarding experience.", url: "orientationday.cbatu.com", accent: "from-fuchsia-500 to-purple-600" },
  { title: "CBATU Store", cat: "education", desc: "Campus commerce.", url: "store.cbatu.com", accent: "from-emerald-500 to-cyan-600" },
  { title: "CBATU Thinker", cat: "education", desc: "Critical thinking platform.", url: "thinker.cbatu.com", accent: "from-amber-500 to-pink-600" },
  { title: "Avocado", cat: "education", desc: "Learning platform.", url: "avocado.cbatu.com", accent: "from-lime-500 to-emerald-600" },

  { title: "VBC", cat: "business", desc: "Virtual business center.", url: "vbc.egyitech.com", accent: "from-blue-600 to-violet-600" },
  { title: "Future Way", cat: "business", desc: "Business platform.", url: "fw.egyitech.com", accent: "from-purple-500 to-indigo-600" },
  { title: "FWA Academy", cat: "business", desc: "Training & certification.", url: "fwa.egyitech.com", accent: "from-cyan-500 to-purple-600" },

  { title: "Aerospace", cat: "specialized", desc: "Aerospace platform.", url: "aerospace.egyitech.com", accent: "from-slate-500 to-blue-700" },
  { title: "Weather", cat: "specialized", desc: "Weather monitoring system.", url: "weather.egyitech.com", accent: "from-sky-400 to-indigo-600" },
  { title: "Itqan Quran", cat: "specialized", desc: "Digital Quran platform.", url: "itqanquraneg.com", accent: "from-emerald-500 to-teal-700" },
  { title: "GP Atlas UK", cat: "specialized", desc: "International atlas platform.", url: "gpatlas.co.uk", accent: "from-rose-500 to-purple-600" },
  { title: "Batechu", cat: "specialized", desc: "Digital product platform.", url: "batechu.com", accent: "from-fuchsia-500 to-blue-600" },
];

export function Portfolio() {
  const { t } = useI18n();
  const [cat, setCat] = useState<Cat>("all");
  const cats: { id: Cat; label: string }[] = [
    { id: "all", label: t("portfolio.all") },
    { id: "enterprise", label: t("portfolio.enterprise") },
    { id: "education", label: t("portfolio.education") },
    { id: "business", label: t("portfolio.business") },
    { id: "specialized", label: t("portfolio.specialized") },
  ];
  const filtered = cat === "all" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {t("portfolio.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("portfolio.subtitle")}</p>
          </div>
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
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.a
                layout
                key={p.title}
                href={`https://${p.url}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group glass relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
                  <div className="grid-pattern absolute inset-0 opacity-20" />
                  <div className="absolute bottom-3 start-4 text-3xl font-bold text-white/90 drop-shadow-lg">
                    {p.title}
                  </div>
                  <ArrowUpRight className="absolute end-4 top-4 h-5 w-5 text-white/80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {p.cat}
                    </div>
                    <span className="text-[11px] text-muted-foreground">{p.url}</span>
                  </div>
                  <p className="mt-2 text-sm">{p.desc}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
