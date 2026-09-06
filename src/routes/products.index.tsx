import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand, ProductCard } from "@/components/site/Cards";
import { productCategories, products } from "@/data/catalogue";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — SURGICISS LTD sterile barrier and instrument products" },
      {
        name: "description",
        content:
          "SURGICISS products for sterile services: tray integrity testing, instrument brush racks, count sheet holders, master wrap, quality assurance cards and monitoring.",
      },
      { property: "og:title", content: "Products — SURGICISS LTD" },
      {
        property: "og:description",
        content: "Sterile barrier, workstation organisation and monitoring products for sterile services departments.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Products"
        crumbs={[{ label: "Products" }]}
        lead="Practical devices for the parts of the process that most often go wrong: protecting wrapped trays, keeping brushes and count sheets where they belong, and proving that checks were carried out."
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              to="/product-category/$slug"
              params={{ slug: category.slug }}
              className="border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:border-primary hover:text-primary"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>

      <CtaBand
        heading="Need a quotation for several lines?"
        body="Send one enquiry with the products and quantities and we will price it together."
      />
    </>
  );
}
