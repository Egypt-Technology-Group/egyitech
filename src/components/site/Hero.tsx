import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="grid-pattern mask-fade-b absolute inset-0 -z-10" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{ background: "var(--gradient-glow)" }}
      />

      {/* floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="bg-brand-purple/30 absolute -top-20 end-[-10%] -z-10 h-[360px] w-[360px] rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="bg-brand-blue/30 absolute top-40 start-[-10%] -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
        >
          <Sparkles className="text-brand-cyan h-3.5 w-3.5" />
          <span className="text-muted-foreground">{t("hero.eyebrow")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
        >
          {t("hero.title").split(" ").slice(0, -3).join(" ")}{" "}
          <span className="text-gradient">{t("hero.title").split(" ").slice(-3).join(" ")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/contact"
            className="bg-gradient-brand glow group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            {t("hero.cta1")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </Link>
          <Link
            to="/portfolio"
            className="glass hover:bg-accent inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors"
          >
            {t("hero.cta2")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
