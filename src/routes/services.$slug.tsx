import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand } from "@/components/site/Cards";
import { findService, services } from "@/data/catalogue";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service unavailable — SURGICISS LTD" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} — SURGICISS LTD` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.name} — SURGICISS LTD` },
        { property: "og:description", content: service.summary },
        { property: "og:url", content: `/services/${service.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${service.slug}` }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageBanner
        title={service.name}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.name }]}
        lead={service.summary}
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <img
              src={service.image}
              alt={service.name}
              loading="lazy"
              width={1200}
              height={760}
              className="w-full border border-border object-cover shadow-card"
            />
            <div className="rich-text mt-8 text-sm sm:text-base">
              {service.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <h2 className="mt-10 text-base font-semibold uppercase tracking-wide text-secondary">What is included</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {service.includes.map((entry) => (
                <li key={entry} className="border-l-2 border-primary pl-3">
                  {entry}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="border border-border bg-surface-tint p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Enquire</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell us the size of the team and the problem you want addressed first.
              </p>
              <Link
                to="/request-quote"
                search={{ item: service.name }}
                className="mt-4 inline-block bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
              >
                Request a proposal
              </Link>
            </div>
            <div className="border border-border p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Other services</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: other.slug }}
                      className="text-muted-foreground hover:text-primary hover:underline"
                    >
                      {other.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand heading="Ready to start?" body="We will set out scope, timings and cost before any work begins." />
    </>
  );
}
