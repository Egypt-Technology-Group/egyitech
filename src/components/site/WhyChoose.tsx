import { motion } from "framer-motion";
import { Rocket, Briefcase, TrendingUp, Target, ShieldCheck, Handshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhyChoose() {
  const { t } = useI18n();
  const items = [
    { i: Rocket, t: t("why.innovation.t"), d: t("why.innovation.d") },
    { i: Briefcase, t: t("why.industry.t"), d: t("why.industry.d") },
    { i: TrendingUp, t: t("why.scalable.t"), d: t("why.scalable.d") },
    { i: Target, t: t("why.client.t"), d: t("why.client.d") },
    { i: ShieldCheck, t: t("why.enterprise.t"), d: t("why.enterprise.d") },
    { i: Handshake, t: t("why.partner.t"), d: t("why.partner.d") },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t("why.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("why.subtitle")}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="glass group rounded-2xl p-6 transition-all hover:border-primary/40"
            >
              <it.i className="text-brand-cyan h-6 w-6" />
              <h3 className="mt-4 text-lg font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
