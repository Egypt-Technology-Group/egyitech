import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Process() {
  const { t } = useI18n();
  const steps = [
    t("process.s1"),
    t("process.s2"),
    t("process.s3"),
    t("process.s4"),
    t("process.s5"),
    t("process.s6"),
    t("process.s7"),
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {t("process.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("process.subtitle")}</p>
        </div>

        <div className="relative mt-16">
          <div className="bg-gradient-brand absolute start-0 end-0 top-6 mx-8 hidden h-px opacity-30 md:block" />
          <div className="grid gap-6 md:grid-cols-7">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center"
              >
                <div className="bg-gradient-brand glow mx-auto grid h-12 w-12 place-items-center rounded-full font-semibold text-white">
                  {i + 1}
                </div>
                <div className="mt-3 text-sm font-medium">{s}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
