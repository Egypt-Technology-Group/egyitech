import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function CTA() {
  const { t } = useI18n();
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-px"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div className="relative overflow-hidden rounded-[23px] bg-card px-8 py-16 text-center md:px-16 md:py-24">
            <div
              className="absolute inset-0 -z-10 opacity-60"
              style={{ background: "var(--gradient-mesh)" }}
            />
            <div className="bg-brand-purple/20 absolute -top-32 left-1/2 -z-10 h-64 w-[60%] -translate-x-1/2 rounded-full blur-3xl" />
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient">{t("cta.title")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("cta.subtitle")}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="bg-gradient-brand glow rounded-xl px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              >
                {t("cta.b1")}
              </Link>
              <Link
                to="/contact"
                className="glass hover:bg-accent rounded-xl px-6 py-3 text-sm font-medium"
              >
                {t("cta.b2")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
