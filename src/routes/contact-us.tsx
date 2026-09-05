import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { company } from "@/data/company";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact SURGICISS LTD" },
      {
        name: "description",
        content:
          "Contact SURGICISS LTD about sterile barrier products, sterile services software, training and department improvement programmes.",
      },
      { property: "og:title", content: "Contact SURGICISS LTD" },
      {
        property: "og:description",
        content: "Get in touch with SURGICISS LTD by email, telephone or the enquiry form.",
      },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact SURGICISS LTD",
          mainEntity: {
            "@type": "Organization",
            name: "SURGICISS LTD",
            telephone: company.phone,
            email: company.email,
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact us"
        crumbs={[{ label: "Contact us" }]}
        lead="Tell us what your department is dealing with. We answer enquiries ourselves rather than routing them through a call centre."
      />

      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[340px_1fr]">
          <aside className="space-y-6 text-sm">
            <div className="border border-border bg-surface-tint p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">SURGICISS LTD</h2>
              <dl className="mt-4 space-y-3 text-muted-foreground">
                <div>
                  <dt className="font-medium text-foreground">Address</dt>
                  <dd>{company.address}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Telephone</dt>
                  <dd>{company.phone}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Email</dt>
                  <dd>{company.email}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Office hours</dt>
                  <dd>{company.hours}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Company registration</dt>
                  <dd>{company.registration}</dd>
                </div>
              </dl>
            </div>
            <div className="border border-border p-6">
              <h2 className="text-base font-semibold uppercase tracking-wide text-secondary">Who we work with</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{company.intro}</p>
            </div>
          </aside>

          <div>
            <h2 className="section-title">Send us an enquiry</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fields marked with an asterisk are required. We use your details only to answer this enquiry.
            </p>
            <div className="mt-6">
              <EnquiryForm variant="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
