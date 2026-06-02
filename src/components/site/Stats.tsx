import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => Math.floor(v).toString() + suffix);

  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.6, ease: "easeOut" });
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Stats() {
  const { t } = useI18n();
  const items = [
    { value: 15, suffix: "+", label: t("stats.projects") },
    { value: 10, suffix: "+", label: t("stats.platforms") },
    { value: 8, suffix: "+", label: t("stats.industries") },
    { value: 20, suffix: "+", label: t("stats.clients") },
  ];
  return (
    <section className="border-y border-border/60 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="bg-background px-6 py-10 text-center"
          >
            <div className="text-gradient text-4xl font-semibold tracking-tight md:text-5xl">
              <Counter to={it.value} suffix={it.suffix} />
            </div>
            <div className="mt-2 text-xs text-muted-foreground md:text-sm">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
