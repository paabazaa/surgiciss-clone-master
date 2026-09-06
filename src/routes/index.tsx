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
import { ProductCard, ServiceCard, SoftwareCard } from "@/components/site/Cards";
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
    title: "Sterile Instrument Systems",
    body: "With considered technology and patient-centred expertise, SURGICISS supports the consistent delivery of clean, sterile, functional and relevant surgical instruments, equipment and supplies — on time and on budget.",
  },
  {
    image: heroMasterWrap,
    title: "Surgical Instrument Master Wrap",
    body: "The Master Wrap adds a protective outer layer that helps displace handling impact before it can tear or puncture a wrapped instrument tray.",
  },
  {
    image: softwareDashboard,
    title: "We supercharge instrument technicians",
    body: "SURGICISS Matrix gives supervisors a single view of set location and status, so the department is managed on evidence rather than telephone calls.",
  },
];

function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[index]!;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-secondary">
        <img
          src={slide.image}
          alt=""
          width={1920}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="relative mx-auto flex min-h-[380px] max-w-[900px] flex-col items-center justify-center px-12 py-20 text-center sm:min-h-[440px]">
          <h1 className="text-2xl font-semibold text-secondary-foreground sm:text-3xl md:text-4xl">{slide.title}</h1>
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

      <section className="bg-surface-tint" aria-label="Software shortcuts">
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

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:gap-14">
          <div>
            <h2 className="section-title">Sterile Instrument Systems</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{company.tagline}</p>
          </div>
          <div className="rich-text text-sm sm:text-base">
            <p>
              The difficulty in healthcare today is rarely a lack of advanced technology or skilled hands. More often it
              is the absence of simple, practical innovations that help each pair of hands get the basics right first
              time. Those apparently small steps are where even well-equipped theatres come unstuck.
            </p>
            <p>
              SURGICISS works on that ground: products, software and methods that prevent avoidable error, reduce delay,
              take cost out of the process and make compliance something a department can demonstrate rather than hope
              for.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-tint py-14">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-block border border-primary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary hover:bg-primary hover:text-primary-foreground"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <h2 className="section-title">Products</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Through research, development and steady use in real departments, our products, software and methods are
          intended to support patient safety and the financial health of the services that deliver it.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="inline-block bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
          >
            View all products
          </Link>
        </div>
      </section>

      <section className="bg-surface-tint py-14">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="section-title">Software</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Four systems covering instrument sets, case carts, resuscitation trolleys and flexible endoscopes.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {software.map((item) => (
              <SoftwareCard key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <h2 className="section-title">Programmes</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {programmes.map((programme) => (
            <article key={programme.slug} className="border-l-4 border-primary bg-card p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">{programme.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{programme.summary}</p>
              <Link
                to="/programmes/$slug"
                params={{ slug: programme.slug }}
                className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-secondary-foreground">
              Tell us what your department is working with
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/80">
              Send us the sets, the volumes and the problem you are trying to solve, and we will come back with a
              considered quotation rather than a price list.
            </p>
          </div>
          <Link
            to="/request-quote"
            className="self-start bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
