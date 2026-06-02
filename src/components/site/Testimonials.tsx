import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const items = [
  {
    quote:
      "EGYITECH transformed our entire learning infrastructure. The platform handles thousands of students with rock-solid reliability.",
    name: "Dr. A. Hassan",
    role: "Dean, CBATU",
  },
  {
    quote:
      "A rare partner who combines engineering depth with real product thinking. Shipped on time, exceeded scope.",
    name: "M. Saad",
    role: "CEO, Future Way Academy",
  },
  {
    quote:
      "Our hospital workflows are now genuinely digital. Our staff onboarded in days, not months.",
    name: "Dr. N. Ali",
    role: "Director, HMS Pilot",
  },
  {
    quote:
      "From discovery to deployment, the team moves like a top international product studio.",
    name: "S. Mahmoud",
    role: "CTO, Turning Pointe",
  },
];

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t("test.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("test.subtitle")}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="glass relative rounded-2xl p-8"
            >
              <Quote className="text-brand-purple/60 absolute end-6 top-6 h-8 w-8" />
              <blockquote className="text-base leading-relaxed md:text-lg">
                "{it.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="bg-gradient-brand grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-white">
                  {it.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{it.name}</div>
                  <div className="text-xs text-muted-foreground">{it.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
