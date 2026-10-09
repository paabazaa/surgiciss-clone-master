import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageBanner } from "@/components/site/PageBanner";
import { products, programmes, services, software } from "@/data/catalogue";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — SURGICISS LTD" },
      {
        name: "description",
        content: "Search SURGICISS products, software, services and programmes by name or keyword.",
      },
      { property: "og:title", content: "Search — SURGICISS LTD" },
      { property: "og:description", content: "Search SURGICISS products, software, services and programmes." },
      { property: "og:url", content: "https://surgiciss-clone-master.lovable.app/search" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://surgiciss-clone-master.lovable.app/search" }],
  }),
  component: SearchPage,
});

type Result = { label: string; name: string; summary: string; slug: string; kind: "product" | "software" | "service" | "programme" };

const index: Result[] = [
  ...products.map((p) => ({ label: "Product", name: p.name, summary: p.summary, slug: p.slug, kind: "product" as const })),
  ...software.map((s) => ({ label: "Software", name: s.name, summary: s.summary, slug: s.slug, kind: "software" as const })),
  ...services.map((s) => ({ label: "Service", name: s.name, summary: s.summary, slug: s.slug, kind: "service" as const })),
  ...programmes.map((p) => ({
    label: "Programme",
    name: p.name,
    summary: p.summary,
    slug: p.slug,
    kind: "programme" as const,
  })),
];

function ResultLink({ result }: { result: Result }) {
  const className = "text-base font-semibold text-primary hover:underline";
  if (result.kind === "product") {
    return (
      <Link to="/products/$slug" params={{ slug: result.slug }} className={className}>
        {result.name}
      </Link>
    );
  }
  if (result.kind === "software") {
    return (
      <Link to="/software/$slug" params={{ slug: result.slug }} className={className}>
        {result.name}
      </Link>
    );
  }
  if (result.kind === "service") {
    return (
      <Link to="/services/$slug" params={{ slug: result.slug }} className={className}>
        {result.name}
      </Link>
    );
  }
  return (
    <Link to="/programmes/$slug" params={{ slug: result.slug }} className={className}>
      {result.name}
    </Link>
  );
}

function SearchPage() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const results = term.length < 2 ? [] : index.filter((entry) => `${entry.name} ${entry.summary}`.toLowerCase().includes(term));

  return (
    <>
      <PageBanner title="Search" crumbs={[{ label: "Search" }]} lead="Search our products, software, services and programmes." />

      <section className="mx-auto max-w-[900px] px-4 py-14">
        <label htmlFor="site-search" className="block text-sm font-medium text-foreground">
          What are you looking for?
        </label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="e.g. master wrap, endoscope, training"
          maxLength={80}
          className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
        />

        <div className="mt-8">
          {term.length < 2 && <p className="text-sm text-muted-foreground">Type at least two characters to search.</p>}
          {term.length >= 2 && results.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Nothing matched “{query}”.{" "}
              <Link to="/contact-us" className="text-primary hover:underline">
                Ask us
              </Link>{" "}
              and we will tell you whether we can supply it.
            </p>
          )}
          <ul className="divide-y divide-border">
            {results.map((result) => (
              <li key={`${result.kind}-${result.slug}`} className="py-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{result.label}</p>
                <ResultLink result={result} />
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{result.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
