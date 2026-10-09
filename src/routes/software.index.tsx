import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand, SoftwareCard } from "@/components/site/Cards";
import { software, softwareDashboard } from "@/data/catalogue";

export const Route = createFileRoute("/software/")({
  head: () => ({
    meta: [
      { title: "Sterile services software — SURGICISS LTD" },
      {
        name: "description",
        content:
          "SURGICISS software for instrument set tracking, case cart preparation, resuscitation trolley checks and flexible endoscope traceability.",
      },
      { property: "og:title", content: "Sterile services software — SURGICISS LTD" },
      {
        property: "og:description",
        content: "Four systems covering instrument sets, case carts, resuscitation trolleys and flexible endoscopes.",
      },
      { property: "og:url", content: "https://surgiciss-clone-master.lovable.app/software" },
    ],
    links: [{ rel: "canonical", href: "https://surgiciss-clone-master.lovable.app/software" }],
  }),
  component: SoftwarePage,
});

function SoftwarePage() {
  return (
    <>
      <PageBanner
        title="Software"
        crumbs={[{ label: "Software" }]}
        lead="Four systems built around the way a sterile services department actually runs: sets in motion, trolleys due for checking, and records that have to stand up afterwards."
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-center">
          <div className="rich-text text-sm sm:text-base">
            <h2 className="section-title">One record, from decontamination to theatre</h2>
            <p className="mt-4">
              Departments rarely lack information; they lack it in one place. Cycle printouts sit in one folder, count
              sheets in another, and the answer to "where is that set?" lives in somebody's memory.
            </p>
            <p>
              Our software brings those records together so that the state of the department can be seen at a glance and
              reconstructed later. Hosting, interfaces and configuration are agreed during scoping rather than assumed:{" "} on request.
            </p>
          </div>
          <img
            src={softwareDashboard}
            alt="Tracking software in use at a sterile services workstation"
            loading="lazy"
            width={1200}
            height={760}
            className="w-full border border-border object-cover shadow-card"
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {software.map((item) => (
            <SoftwareCard key={item.slug} {...item} />
          ))}
        </div>
      </section>

      <CtaBand
        heading="Ask for a walkthrough"
        body="We will show the system against your own workflow, not a demonstration dataset."
      />
    </>
  );
}
