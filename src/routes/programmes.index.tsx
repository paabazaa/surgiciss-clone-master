import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand, ProgrammeCard } from "@/components/site/Cards";
import { programmes } from "@/data/catalogue";

export const Route = createFileRoute("/programmes/")({
  head: () => ({
    meta: [
      { title: "Programmes — cost reduction, loaner processing, sterile forensics" },
      {
        name: "description",
        content:
          "SURGICISS programmes covering cost reduction, loaner instrument processing and sterile forensics investigation for sterile services departments.",
      },
      { property: "og:title", content: "Programmes — SURGICISS LTD" },
      {
        property: "og:description",
        content: "Structured programmes for cost reduction, loaner instrument processing and sterile forensics.",
      },
      { property: "og:url", content: "https://surgiciss-clone-master.lovable.app/programmes" },
    ],
    links: [{ rel: "canonical", href: "https://surgiciss-clone-master.lovable.app/programmes" }],
  }),
  component: ProgrammesPage,
});

function ProgrammesPage() {
  return (
    <>
      <PageBanner
        title="Programmes"
        crumbs={[{ label: "Programmes" }]}
        lead="Longer pieces of work, run with the department rather than around it, each with an agreed measure of success."
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} {...programme} />
          ))}
        </div>
      </section>

      <CtaBand heading="Which programme fits your position?" body="Tell us the pressure you are under and we will suggest a starting point." />
    </>
  );
}
