import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Building2,
  GraduationCap,
  HeartPulse,
  Cloud,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();
  const items = [
    { icon: Code2, t: t("services.custom.title"), d: t("services.custom.desc") },
    { icon: Globe, t: t("services.web.title"), d: t("services.web.desc") },
    { icon: Smartphone, t: t("services.mobile.title"), d: t("services.mobile.desc") },
    { icon: Brain, t: t("services.ai.title"), d: t("services.ai.desc") },
    { icon: Building2, t: t("services.erp.title"), d: t("services.erp.desc") },
    { icon: GraduationCap, t: t("services.edu.title"), d: t("services.edu.desc") },
    { icon: HeartPulse, t: t("services.health.title"), d: t("services.health.desc") },
    { icon: Cloud, t: t("services.cloud.title"), d: t("services.cloud.desc") },
  ];
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("services.subtitle")}</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div
                className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "var(--gradient-mesh)" }}
              />
              <div className="bg-gradient-brand mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
