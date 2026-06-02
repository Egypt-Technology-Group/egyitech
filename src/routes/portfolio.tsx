import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/site/Portfolio";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — EGYITECH" },
      {
        name: "description",
        content: "Selected enterprise, educational, business, and specialized platforms by EGYITECH.",
      },
      { property: "og:title", content: "Portfolio — EGYITECH" },
      { property: "og:description", content: "Platforms engineered for organizations across Egypt and beyond." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: () => (
    <div className="pt-24">
      <Portfolio />
      <CTA />
    </div>
  ),
});
