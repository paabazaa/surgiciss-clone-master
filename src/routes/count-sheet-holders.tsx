import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand, ProductCard } from "@/components/site/Cards";
import { products } from "@/data/catalogue";

export const Route = createFileRoute("/count-sheet-holders")({
  head: () => ({
    meta: [
      { title: "Instrument count sheet holders — SURGICISS LTD" },
      {
        name: "description",
        content:
          "Instrument count sheet holders from SURGICISS LTD: keep the count sheet visible, clean and with the tray it belongs to throughout assembly and theatre use.",
      },
      { property: "og:title", content: "Instrument count sheet holders — SURGICISS LTD" },
      {
        property: "og:description",
        content: "Holders that keep count sheets readable, protected and with the correct tray.",
      },
      { property: "og:url", content: "https://surgiciss-clone-master.lovable.app/count-sheet-holders" },
    ],
    links: [{ rel: "canonical", href: "https://surgiciss-clone-master.lovable.app/count-sheet-holders" }],
  }),
  component: CountSheetHoldersPage,
});

function CountSheetHoldersPage() {
  const holders = products.filter((product) => product.category === "count-sheet-holders");

  return (
    <>
      <PageBanner
        title="Instrument count sheet holders"
        crumbs={[{ label: "Instrument count sheet holders" }]}
        lead="A count sheet only helps if the technician can read it, reach it and trust that it belongs to the tray in front of them."
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="rich-text max-w-3xl text-sm sm:text-base">
          <h2 className="section-title">Why holders matter</h2>
          <p className="mt-4">
            Count sheets get wet, torn, filed in the wrong tray or left on a bench. Each of those small failures turns
            into a recount, a delayed set or a discrepancy that nobody can resolve afterwards.
          </p>
          <p>
            A holder fixes the sheet in one predictable place, keeps it legible during assembly and inspection, and
            travels with the tray so the record and the instruments never separate.
          </p>
        </div>

        {holders.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {holders.map((holder) => (
              <ProductCard key={holder.slug} {...holder} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted-foreground">
            Holder options are being listed. In the meantime,{" "}
            <Link to="/contact-us" className="text-primary hover:underline">
              contact us
            </Link>{" "}
            and we will send the current range.
          </p>
        )}

        <div className="mt-10">
          <Link
            to="/products"
            className="inline-block border border-primary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary hover:bg-primary hover:text-primary-foreground"
          >
            All products
          </Link>
        </div>
      </section>

      <CtaBand heading="Sizing a holder to your sheets?" body="Send us the sheet dimensions and tray type and we will confirm the fit." />
    </>
  );
}
