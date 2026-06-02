import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EGYITECH" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact — EGYITECH" },
      { property: "og:description", content: "Let's build something exceptional together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-gradient">{t("contact.title")}</span>
          </h1>
          <p className="mt-4 text-muted-foreground">{t("contact.subtitle")}</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6">
              <Mail className="text-brand-cyan h-5 w-5" />
              <div className="mt-3 text-sm font-medium">hello@egyitech.com</div>
              <div className="text-xs text-muted-foreground">We reply within 1 business day</div>
            </div>
            <div className="glass rounded-2xl p-6">
              <MapPin className="text-brand-cyan h-5 w-5" />
              <div className="mt-3 text-sm font-medium">Egypt — Serving clients worldwide</div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch.");
            }}
            className="glass space-y-4 rounded-2xl p-8 md:col-span-3"
          >
            <div>
              <label className="text-xs font-medium text-muted-foreground">{t("contact.name")}</label>
              <input
                required
                className="mt-1 w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">{t("contact.email")}</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">{t("contact.message")}</label>
              <textarea
                required
                rows={5}
                className="mt-1 w-full resize-none rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-brand glow inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.01]"
            >
              <Send className="h-4 w-4" />
              {t("contact.send")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
