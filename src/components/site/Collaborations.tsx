import { motion } from "framer-motion";
import { ArrowUpRight, Handshake, Globe2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Collaborations() {
  const { t } = useI18n();
  const items = [
    {
      icon: Handshake,
      tag: t("collab.strategic"),
      title: t("collab.fwa.title"),
      desc: t("collab.fwa.desc"),
      url: "fwa.egyitech.com",
    },
    {
      icon: Globe2,
      tag: t("collab.international"),
      title: t("collab.tp.title"),
      desc: t("collab.tp.desc"),
      url: "turningpointe.cc",
    },
  ];
  return (
    <section id="collaborations" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {t("collab.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("collab.subtitle")}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.a
              key={i}
              href={`https://${it.url}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-px"
              style={{ background: "var(--gradient-brand)" }}
            >
              <div className="relative h-full rounded-[15px] bg-card p-8">
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-brand inline-flex h-11 w-11 items-center justify-center rounded-xl text-white">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {it.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug md:text-2xl">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-primary">
                  {it.url}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
