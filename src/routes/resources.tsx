import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand } from "@/components/site/Cards";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources for sterile services teams — SURGICISS LTD" },
      {
        name: "description",
        content:
          "Guidance notes, checklists and reading for sterile services teams working on tray integrity, count accuracy, loaner sets and endoscope traceability.",
      },
      { property: "og:title", content: "Resources — SURGICISS LTD" },
      {
        property: "og:description",
        content: "Guidance notes and checklists for sterile services teams.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const resources = [
  {
    title: "Protecting the sterile barrier in transit",
    body: "Where wrapped trays are most often damaged between the sterilizer and the theatre, and the handling changes that reduce it.",
  },
  {
    title: "Making a count sheet usable",
    body: "Practical points on layout, protection and placement so a count sheet survives assembly and theatre use intact.",
  },
  {
    title: "Receiving loaner instrument sets",
    body: "A receipt-to-return sequence for loaners, including what to record when a set arrives late or incomplete.",
  },
  {
    title: "Endoscope traceability basics",
    body: "The minimum record set that lets a department reconstruct which scope was used, on whom, and after which reprocessing cycle.",
  },
];

function ResourcesPage() {
  return (
    <>
      <PageBanner
        title="Resources"
        crumbs={[{ label: "Resources" }]}
        lead="Short pieces written for the people doing the work. Downloadable versions are being prepared: [INSERT SURGICISS RESOURCE DOWNLOADS]."
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {resources.map((resource) => (
            <article key={resource.title} className="border border-border bg-card p-6 shadow-card">
              <h2 className="text-base font-semibold text-secondary">{resource.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{resource.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Looking for something specific?{" "}
          <Link to="/contact-us" className="text-primary hover:underline">
            Ask us
          </Link>{" "}
          and we will point you to it or write it.
        </p>
      </section>

      <CtaBand heading="Want these as handouts for your team?" body="Tell us how many you need and in what format." />
    </>
  );
}
