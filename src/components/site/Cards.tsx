import { Link } from "@tanstack/react-router";

export function ProductCard({
  slug,
  name,
  summary,
  image,
}: {
  slug: string;
  name: string;
  summary: string;
  image: string;
}) {
  return (
    <article className="flex h-full flex-col border border-border bg-card shadow-card">
      <Link to="/products/$slug" params={{ slug }} className="block overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={900}
          height={700}
          className="h-52 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">
          <Link to="/products/$slug" params={{ slug }} className="hover:text-primary">
            {name}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{summary}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/request-quote"
            search={{ item: name }}
            className="bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
          >
            Request a quote
          </Link>
          <Link
            to="/products/$slug"
            params={{ slug }}
            className="border border-input px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground hover:border-primary hover:text-primary"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ServiceCard({
  slug,
  name,
  summary,
  image,
}: {
  slug: string;
  name: string;
  summary: string;
  image: string;
}) {
  return (
    <article className="flex h-full flex-col border border-border bg-card shadow-card">
      <img src={image} alt={name} loading="lazy" width={900} height={640} className="h-52 w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">{name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{summary}</p>
        <Link
          to="/services/$slug"
          params={{ slug }}
          className="mt-5 self-start text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

export function SoftwareCard({ slug, name, summary }: { slug: string; name: string; summary: string }) {
  return (
    <article className="flex h-full flex-col border-t-4 border-primary bg-card p-6 shadow-card">
      <h3 className="text-base font-semibold uppercase tracking-wide text-secondary">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{summary}</p>
      <Link
        to="/software/$slug"
        params={{ slug }}
        className="mt-5 self-start bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
      >
        Explore
      </Link>
    </article>
  );
}

export function ProgrammeCard({
  slug,
  name,
  summary,
  image,
}: {
  slug: string;
  name: string;
  summary: string;
  image: string;
}) {
  return (
    <article className="flex h-full flex-col border border-border bg-card shadow-card">
      <img src={image} alt={name} loading="lazy" width={900} height={640} className="h-48 w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">{name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{summary}</p>
        <Link
          to="/programmes/$slug"
          params={{ slug }}
          className="mt-5 self-start text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

export function CtaBand({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold text-secondary-foreground">{heading}</h2>
          <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/80">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/request-quote"
            className="bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
          >
            Request a quote
          </Link>
          <Link
            to="/contact-us"
            className="border border-secondary-foreground/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-secondary-foreground hover:border-secondary-foreground"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
