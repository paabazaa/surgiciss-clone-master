import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand, ProductCard } from "@/components/site/Cards";
import { productCategories, products } from "@/data/catalogue";

export const Route = createFileRoute("/product-category/$slug")({
  loader: ({ params }) => {
    const category = productCategories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category, items: products.filter((p) => p.category === category.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Category unavailable — SURGICISS LTD" }, { name: "robots", content: "noindex" }] };
    }
    const { category } = loaderData;
    return {
      meta: [
        { title: `${category.name} — SURGICISS LTD` },
        { name: "description", content: category.description },
        { property: "og:title", content: `${category.name} — SURGICISS LTD` },
        { property: "og:description", content: category.description },
        { property: "og:url", content: `https://surgiciss-clone-master.lovable.app/product-category/${category.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://surgiciss-clone-master.lovable.app/product-category/${category.slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();

  return (
    <>
      <PageBanner
        title={category.name}
        crumbs={[{ label: "Products", to: "/products" }, { label: category.name }]}
        lead={category.description}
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No products are listed in this category yet. Contact us and we will tell you what is planned.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ProductCard key={item.slug} {...item} />
            ))}
          </div>
        )}
      </section>

      <CtaBand heading="Not sure which option suits your sets?" body="Describe the trays and we will recommend a fit." />
    </>
  );
}
