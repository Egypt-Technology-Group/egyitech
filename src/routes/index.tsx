import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Collaborations } from "@/components/site/Collaborations";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EGYITECH — Software That Moves Businesses Forward" },
      {
        name: "description",
        content:
          "Custom software, AI, ERP, healthcare, and educational platforms engineered for enterprise scale by EGYITECH.",
      },
      { property: "og:title", content: "EGYITECH — Digital Products & Enterprise Software" },
      {
        property: "og:description",
        content: "Egyptian software, global standards. Built for growth.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Collaborations />
      <WhyChoose />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
