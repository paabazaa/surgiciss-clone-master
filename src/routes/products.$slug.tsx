import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand, ProductCard } from "@/components/site/Cards";
import { categoryName, findProduct, products } from "@/data/catalogue";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — SURGICISS LTD" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — SURGICISS LTD` },
        { name: "description", content: product.summary },
        { property: "og:title", content: `${product.name} — SURGICISS LTD` },
        { property: "og:description", content: product.summary },
        { property: "og:url", content: `/products/${product.slug}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/products/${product.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.summary,
            category: categoryName(product.category),
            brand: { "@type": "Brand", name: "SURGICISS LTD" },
          }),
        },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);

  return (
    <>
      <PageBanner
        title={product.name}
        crumbs={[{ label: "Products", to: "/products" }, { label: product.name }]}
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
          <div>
            <img
              src={product.image}
              alt={product.name}
              width={1024}
              height={1024}
              className="w-full border border-border bg-surface-tint object-cover shadow-card"
            />
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
              Category:{" "}
              <Link
                to="/product-category/$slug"
                params={{ slug: product.category }}
                className="text-primary hover:underline"
              >
                {categoryName(product.category)}
              </Link>
            </p>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-foreground sm:text-base">{product.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/request-quote"
                search={{ item: product.name }}
                className="bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
              >
                Request a quote
              </Link>
              <Link
                to="/contact-us"
                className="border border-input px-6 py-3 text-xs font-semibold uppercase tracking-wide text-foreground hover:border-primary hover:text-primary"
              >
                Ask a question
              </Link>
            </div>

            <div className="rich-text mt-8 text-sm sm:text-base">
              {product.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Features</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {product.features.map((feature) => (
                    <li key={feature} className="border-l-2 border-primary pl-3">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Where it is used</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {product.applications.map((application) => (
                    <li key={application} className="border-l-2 border-primary pl-3">
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="mt-10 text-base font-semibold uppercase tracking-wide text-secondary">Specification</h2>
            <table className="mt-3 w-full border border-border text-sm">
              <tbody>
                {product.specifications.map((spec) => (
                  <tr key={spec.label} className="border-b border-border last:border-0">
                    <th scope="row" className="w-1/2 bg-surface-tint px-4 py-3 text-left font-medium text-foreground">
                      {spec.label}
                    </th>
                    <td className="px-4 py-3 text-muted-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="section-title">Related products</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} {...item} />
              ))}
            </div>
          </div>
        )}
      </section>

      <CtaBand heading={`Quotation for ${product.name}`} body="Tell us quantities and delivery point and we will price it." />
    </>
  );
}
