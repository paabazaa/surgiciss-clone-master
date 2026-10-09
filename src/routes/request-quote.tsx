import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { company, detail } from "@/data/company";

export const Route = createFileRoute("/request-quote")({
  validateSearch: (search: Record<string, unknown>): { item?: string } =>
    typeof search["item"] === "string" ? { item: search["item"] } : {},
  head: () => ({
    meta: [
      { title: "Request a quote — SURGICISS LTD" },
      {
        name: "description",
        content:
          "Request a quotation for SURGICISS products, software or services. Tell us quantities, delivery point and timescales and we will price the work.",
      },
      { property: "og:title", content: "Request a quote — SURGICISS LTD" },
      {
        property: "og:description",
        content: "Send SURGICISS your requirement and we will come back with a considered quotation.",
      },
      { property: "og:url", content: "https://surgiciss-clone-master.lovable.app/request-quote" },
    ],
    links: [{ rel: "canonical", href: "https://surgiciss-clone-master.lovable.app/request-quote" }],
  }),
  component: RequestQuotePage,
});

function RequestQuotePage() {
  const { item } = Route.useSearch();
  const interest = item ?? "";

  return (
    <>
      <PageBanner
        title="Request a quote"
        crumbs={[{ label: "Request a quote" }]}
        lead="The more you can tell us about the sets, volumes and timescales, the more useful our quotation will be."
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            {item && (
              <p className="mb-6 border-l-4 border-primary bg-surface-tint px-4 py-3 text-sm text-foreground">
                Enquiry about: <strong>{item}</strong>
              </p>
            )}
            <EnquiryForm variant="quote" defaultInterest={interest} />
          </div>

          <aside className="space-y-6 text-sm">
            <div className="border border-border bg-surface-tint p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">What happens next</h2>
              <ol className="mt-3 space-y-2 text-muted-foreground">
                <li>1. We read the enquiry and check what we need to clarify.</li>
                <li>2. We come back with questions or a written quotation.</li>
                <li>3. If it is a fit, we agree delivery or a start date.</li>
              </ol>
            </div>
            <div className="border border-border p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Prefer to speak to us?</h2>
              <p className="mt-3 text-muted-foreground">{detail(company.phone, "Telephone available on request")}</p>
              <p className="text-muted-foreground">{detail(company.email, "Use the form on this page")}</p>
              <p className="mt-2 text-muted-foreground">{detail(company.hours, "Opening hours available on request")}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
