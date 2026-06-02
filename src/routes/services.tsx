import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { CTA } from "@/components/site/CTA";
import { Process } from "@/components/site/Process";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — EGYITECH" },
      {
        name: "description",
        content: "Custom software, web, mobile, AI, ERP, education, healthcare, and cloud solutions.",
      },
      { property: "og:title", content: "Services — EGYITECH" },
      { property: "og:description", content: "End-to-end product engineering services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <div className="pt-24">
      <Services />
      <Process />
      <CTA />
    </div>
  ),
});
