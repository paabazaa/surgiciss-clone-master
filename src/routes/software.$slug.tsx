import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand } from "@/components/site/Cards";
import { findSoftware, software, softwareDashboard } from "@/data/catalogue";

export const Route = createFileRoute("/software/$slug")({
  loader: ({ params }) => {
    const item = findSoftware(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Software unavailable — SURGICISS LTD" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.name} — SURGICISS LTD` },
        { name: "description", content: item.summary },
        { property: "og:title", content: `${item.name} — SURGICISS LTD` },
        { property: "og:description", content: item.summary },
        { property: "og:url", content: `/software/${item.slug}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/software/${item.slug}` }],
    };
  },
  component: SoftwareDetailPage,
});

function SoftwareDetailPage() {
  const { item } = Route.useLoaderData();
  const related = software.filter((s) => s.slug !== item.slug);

  return (
    <>
      <PageBanner
        title={item.name}
        crumbs={[{ label: "Software", to: "/software" }, { label: item.name }]}
        lead={item.summary}
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <img
              src={softwareDashboard}
              alt={`${item.name} in use at a sterile services workstation`}
              loading="lazy"
              width={1200}
              height={760}
              className="w-full border border-border object-cover shadow-card"
            />
            <div className="rich-text mt-8 text-sm sm:text-base">
              {item.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Modules</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {item.modules.map((module) => (
                    <li key={module} className="border-l-2 border-primary pl-3">
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">
                  What departments get from it
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="border-l-2 border-primary pl-3">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-border bg-surface-tint p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Enquire about {item.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell us how many sets, trolleys or scopes you handle and we will scope the work against that.
              </p>
              <Link
                to="/request-quote"
                search={{ item: item.name }}
                className="mt-4 inline-block bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
              >
                Request a quote
              </Link>
            </div>

            <div className="border border-border p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Other software</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((other) => (
                  <li key={other.slug}>
                    <Link
                      to="/software/$slug"
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

      <CtaBand heading={`Considering ${item.name}?`} body="We will talk you through what it does and what it does not do." />
    </>
  );
}
