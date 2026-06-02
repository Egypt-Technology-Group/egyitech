import { createFileRoute } from "@tanstack/react-router";
import { Collaborations } from "@/components/site/Collaborations";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/collaborations")({
  head: () => ({
    meta: [
      { title: "Collaborations — EGYITECH" },
      {
        name: "description",
        content: "Strategic and international technology collaborations driving digital transformation.",
      },
      { property: "og:title", content: "Collaborations — EGYITECH" },
      { property: "og:description", content: "Partnerships that shape digital transformation." },
      { property: "og:url", content: "/collaborations" },
    ],
    links: [{ rel: "canonical", href: "/collaborations" }],
  }),
  component: () => (
    <div className="pt-24">
      <Collaborations />
      <Testimonials />
      <CTA />
    </div>
  ),
});
