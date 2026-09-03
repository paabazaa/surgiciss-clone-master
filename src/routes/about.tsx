import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand } from "@/components/site/Cards";
import { company } from "@/data/company";
import { heroSterileProcessing } from "@/data/catalogue";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SURGICISS LTD — Sterile services specialists" },
      {
        name: "description",
        content:
          "Who SURGICISS LTD is, how we work with sterile services departments and what we hold ourselves to when supplying products and software.",
      },
      { property: "og:title", content: "About SURGICISS LTD" },
      {
        property: "og:description",
        content: "How SURGICISS LTD works with sterile services departments in hospitals and surgery centres.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageBanner title="About us" crumbs={[{ label: "About" }]} />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          <div className="rich-text text-sm sm:text-base">
            <h2 className="section-title">Dedicated to best surgical outcomes</h2>
            <p className="mt-4">{company.intro}</p>
            <p>
              Our work sits in the space between the operating theatre and the sterile services department, where most
              instrument problems are either created or prevented. We supply products that protect the sterile barrier,
              software that records what happened to a set, and support for the teams responsible for both.
            </p>
            <p>
              We would rather solve a problem in a department's own routine than sell it something it does not need,
              which is why most of our conversations begin with a walk through the department rather than a catalogue.
            </p>
            <h3 className="mt-10 text-lg font-semibold text-secondary">How we work</h3>
            <p>
              Every recommendation we make should be defensible: traceable to the department's own records, achievable
              with the staff and equipment available, and measurable once it is in place. Where we do not yet hold
              information — a specification, a certification, a lead time — we say so rather than fill the gap.
            </p>
            <h3 className="mt-10 text-lg font-semibold text-secondary">Company details</h3>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-foreground">Registered name</dt>
                <dd className="text-muted-foreground">{company.name}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Company registration</dt>
                <dd className="text-muted-foreground">{company.registration}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Registered address</dt>
                <dd className="text-muted-foreground">{company.address}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Office hours</dt>
                <dd className="text-muted-foreground">{company.hours}</dd>
              </div>
            </dl>
          </div>
          <div>
            <img
              src={heroSterileProcessing}
              alt="Technicians inspecting surgical instruments in a sterile services department"
              loading="lazy"
              width={1920}
              height={1000}
              className="w-full border border-border object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      <CtaBand
        heading="Considering a change in your department?"
        body="Send us the detail and we will tell you honestly whether we can help."
      />
    </>
  );
}
