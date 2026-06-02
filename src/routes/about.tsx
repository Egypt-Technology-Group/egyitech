import { createFileRoute } from "@tanstack/react-router";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EGYITECH" },
      {
        name: "description",
        content: "EGYITECH is an Egyptian software company helping organizations transform ideas into scalable digital products.",
      },
      { property: "og:title", content: "About — EGYITECH" },
      { property: "og:description", content: "Egyptian software, global standards." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 pb-12 text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          <span className="text-gradient">{t("about.title")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">{t("about.body")}</p>
      </section>
      <Stats />
      <WhyChoose />
      <CTA />
    </div>
  );
}
