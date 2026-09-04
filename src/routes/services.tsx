import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand, ServiceCard } from "@/components/site/Cards";
import { services } from "@/data/catalogue";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — sterile processing management, morale and training" },
      {
        name: "description",
        content:
          "SURGICISS services for sterile services departments: management and leadership support, morale boosting sessions and technician training programmes.",
      },
      { property: "og:title", content: "Services — SURGICISS LTD" },
      {
        property: "og:description",
        content: "Management and leadership support, morale sessions and technician training for sterile services teams.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services"
        crumbs={[{ label: "Services" }]}
        lead="Departments are held together by people. These services are aimed at the supervisors, managers and technicians who carry the work."
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>

        <div className="rich-text mx-auto mt-14 max-w-3xl text-sm sm:text-base">
          <h2 className="section-title">Support that fits the department you have</h2>
          <p className="mt-4">
            We do not arrive with a template. Each engagement starts by watching the work as it is done — the handovers,
            the interruptions, the trays that come back twice — and agreeing which two or three changes will make the
            most difference in the first quarter.
          </p>
          <p>
            Scope, duration and fees are set out in writing before anything begins:{" "}
            {"[INSERT SURGICISS SERVICE ENGAGEMENT TERMS]"}.
          </p>
        </div>
      </section>

      <CtaBand heading="Talk to us about your department" body="A short conversation is usually enough to see whether we can help." />
    </>
  );
}
