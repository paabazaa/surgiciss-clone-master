import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { company, detail } from "@/data/company";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of use — SURGICISS LTD" },
      {
        name: "description",
        content: "Terms governing the use of the SURGICISS LTD website, quotations and product information.",
      },
      { property: "og:title", content: "Terms of use — SURGICISS LTD" },
      { property: "og:description", content: "Terms governing use of the SURGICISS LTD website and quotations." },
      { property: "og:url", content: "https://surgiciss-clone-master.lovable.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://surgiciss-clone-master.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageBanner title="Terms of use" crumbs={[{ label: "Terms of use" }]} />

      <section className="mx-auto max-w-[900px] px-4 py-14">
        <div className="rich-text text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-secondary">About this site</h2>
          <p>
            This website is operated by {company.name}, company registration {detail(company.registration)}, registered at{" "}
            {detail(company.address)}. By using the site you accept these terms.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">Product information</h2>
          <p>
            Descriptions, specifications and images are provided as a guide. Where a specification is marked as pending it
            has not yet been confirmed and must not be relied on. Always confirm the current specification with us before
            ordering or writing a device into a local procedure.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">Not clinical advice</h2>
          <p>
            Nothing on this site replaces manufacturer instructions for use, national guidance or your own local policy.
            Decisions about reprocessing, sterilisation and instrument handling remain with the responsible clinician or
            department manager.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">Quotations and orders</h2>
          <p>
            Quotations are valid for the period stated on them and are subject to our conditions of sale:{" "} on request. Prices shown in correspondence exclude tax and delivery unless
            stated otherwise.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">Intellectual property</h2>
          <p>
            The SURGICISS name, site text, images and software interfaces are our property or used with permission. Please
            ask before reproducing them.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">Governing law</h2>
          <p>These terms are governed by on request.</p>

          <p className="mt-8 text-xs text-muted-foreground">
            Provided in good faith and not legal advice. Have these terms reviewed before publication:{" "} on request.
          </p>
        </div>
      </section>
    </>
  );
}
