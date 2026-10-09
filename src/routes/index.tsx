import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  heroMasterWrap,
  heroSterileProcessing,
  products,
  programmes,
  services,
  software,
  softwareDashboard,
} from "@/data/catalogue";
import { company } from "@/data/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SURGICISS LTD — Sterile Instrument Systems" },
      {
        name: "description",
        content:
          "SURGICISS LTD supports sterile services departments with sterile barrier products, tracking software, training and department improvement programmes.",
      },
      { property: "og:title", content: "SURGICISS LTD — Sterile Instrument Systems" },
      {
        property: "og:description",
        content:
          "Sterile barrier products, sterile services software, training and improvement programmes for hospitals and surgery centres.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const slides = [
  {
    image: heroSterileProcessing,
    title: "SURGICISS LTD:",
    body: "With advanced technologies and patient-centred expertise, SURGICISS instrument systems support the consistent delivery of clean, sterile, functional and relevant surgical instruments, equipment and supplies — on time and on budget.",
  },
  {
    image: services[0]!.image,
    title: "For patient safety and system viability:",
    body: "Healthcare providers must improve quality, increase efficiency, eliminate waste and lower cost. We partner with them to make that possible.",
  },
  {
    image: heroMasterWrap,
    title: "Surgical Instrument Master Wrap",
    body: "Master Wrap applies impact displacement to help prevent a tear or puncture of a wrapped instrument tray.",
  },
  {
    image: softwareDashboard,
    title: "We supercharge instrument technicians:",
    body: "We support sterile processing technicians with practical skills, structured training and analytical technologies that show what is happening in the department.",
  },
  {
    image: services[2]!.image,
    title: "Enrol in our hospital viability programme:",
    body: "A structured review of instrument sets, workflow and spend, carried out with your own team inside your own department.",
  },
];

function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[index]!;

  return (
    <>
      {/* Hero slider */}
      <section className="relative isolate overflow-hidden bg-secondary" aria-label="Featured">
        <img
          src={slide.image}
          alt=""
          width={1920}
          height={800}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="relative mx-auto flex min-h-[340px] max-w-[900px] flex-col items-center justify-center px-12 py-16 text-center sm:min-h-[420px]">
          <h1 className="text-xl font-semibold text-secondary-foreground sm:text-2xl md:text-3xl">{slide.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-secondary-foreground/90 sm:text-base">
            {slide.body}
          </p>
        </div>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/85 p-2 text-foreground hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setIndex((index + 1) % slides.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/85 p-2 text-foreground hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </section>

      {/* Software quick links */}
      <section className="bg-surface-tint" aria-label="Software">
        <div className="mx-auto grid max-w-[1200px] gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {software.map((item) => (
            <Link
              key={item.slug}
              to="/software/$slug"
              params={{ slug: item.slug }}
              className="bg-primary px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-raised hover:bg-primary-dark"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Company introduction */}
      <section className="mx-auto max-w-[1200px] px-4 py-12">
        <h2 className="text-center text-xl font-semibold uppercase tracking-wide text-secondary sm:text-2xl">
          {company.name}
        </h2>
        <h3 className="mt-3 text-center text-base font-semibold text-primary sm:text-lg">{company.tagline}</h3>
        <p className="mx-auto mt-5 max-w-4xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          The problem with healthcare today is not the lack of advanced technologies and skilled hands, but the absence
          of simple innovations that help each pair of hands get the basics done right the first time. These seemingly
          trivial steps have led to failure, time and again, in even the most sophisticated operating rooms. For patient
          safety, SURGICISS LTD provides simple innovations that prevent error, minimise delay, reduce unnecessary cost
          and support real-time compliance in sterile processing departments and operating rooms.
        </p>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1200px] px-4 pb-12">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug}>
              <Link to="/services/$slug" params={{ slug: service.slug }} className="block overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  width={800}
                  height={520}
                  className="h-48 w-full object-cover"
                />
              </Link>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-secondary">
                <Link to="/services/$slug" params={{ slug: service.slug }} className="hover:text-primary">
                  {service.name}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-surface-tint py-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-center text-xl font-semibold uppercase tracking-wide text-secondary sm:text-2xl">
            Products
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            Through research, development and the steady use of instrument processing products, software and methods in
            real departments, we work to support patient safety and the viability of the services that deliver it.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {featured.map((product) => (
              <article key={product.slug}>
                <Link to="/products/$slug" params={{ slug: product.slug }} className="block overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={800}
                    height={520}
                    className="h-48 w-full object-cover"
                  />
                </Link>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-secondary">
                  <Link to="/products/$slug" params={{ slug: product.slug }} className="hover:text-primary">
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
                <Link
                  to="/request-quote"
                  search={{ item: product.name }}
                  className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
                >
                  Request for a quote
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-block bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
            >
              All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const featuredSlugs = ["quality-assurance-card", "surgical-instrument-master-wrap", "universal-surgical-count-sheet-holder"];
const featured = featuredSlugs.map((slug) => products.find((product) => product.slug === slug)!).filter(Boolean);
