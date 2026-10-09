import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand } from "@/components/site/Cards";
import { findProgramme, programmes } from "@/data/catalogue";

export const Route = createFileRoute("/programmes/$slug")({
  loader: ({ params }) => {
    const programme = findProgramme(params.slug);
    if (!programme) throw notFound();
    return { programme };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Programme unavailable — SURGICISS LTD" }, { name: "robots", content: "noindex" }] };
    }
    const { programme } = loaderData;
    return {
      meta: [
        { title: `${programme.name} — SURGICISS LTD` },
        { name: "description", content: programme.summary },
        { property: "og:title", content: `${programme.name} — SURGICISS LTD` },
        { property: "og:description", content: programme.summary },
        { property: "og:url", content: `https://surgiciss-clone-master.lovable.app/programmes/${programme.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `https://surgiciss-clone-master.lovable.app/programmes/${programme.slug}` }],
    };
  },
  component: ProgrammeDetailPage,
});

function ProgrammeDetailPage() {
  const { programme } = Route.useLoaderData();
  const others = programmes.filter((p) => p.slug !== programme.slug);

  return (
    <>
      <PageBanner
        title={programme.name}
        crumbs={[{ label: "Programmes", to: "/programmes" }, { label: programme.name }]}
        lead={programme.summary}
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <img
              src={programme.image}
              alt={programme.name}
              loading="lazy"
              width={1200}
              height={760}
              className="w-full border border-border object-cover shadow-card"
            />
            <div className="rich-text mt-8 text-sm sm:text-base">
              {programme.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="border border-border bg-surface-tint p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Discuss this programme</h2>
              <Link
                to="/request-quote"
                search={{ item: programme.name }}
                className="mt-4 inline-block bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
              >
                Request details
              </Link>
            </div>
            <div className="border border-border p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Other programmes</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      to="/programmes/$slug"
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

      <CtaBand heading="Interested in this programme?" body="We will send the outline, timescales and what we need from you." />
    </>
  );
}
