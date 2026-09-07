import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { company, detail } from "@/data/company";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy notice — SURGICISS LTD" },
      {
        name: "description",
        content: "How SURGICISS LTD handles the personal information submitted through enquiry and quotation forms.",
      },
      { property: "og:title", content: "Privacy notice — SURGICISS LTD" },
      { property: "og:description", content: "How SURGICISS LTD handles personal information from enquiries." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy notice" crumbs={[{ label: "Privacy notice" }]} />

      <section className="mx-auto max-w-[900px] px-4 py-14">
        <div className="rich-text text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-secondary">What we collect</h2>
          <p>
            When you send an enquiry or request a quotation we collect the details you enter: your name, organisation,
            email address, telephone number if given, location, what your enquiry concerns and your message.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">Why we use it</h2>
          <p>
            We use those details only to answer your enquiry, prepare a quotation and keep a record of the correspondence.
            We do not sell your information and we do not add you to marketing lists without asking.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">How long we keep it</h2>
          <p>
            Enquiry records are retained for as long as needed to deal with the enquiry and any resulting supply, then
            reviewed and deletedon request.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">Who processes it</h2>
          <p>
            Enquiries are handled by SURGICISS staff. Where a hosting or email provider processes data on our behalf, they
            do so under written termson request.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">Your rights</h2>
          <p>
            You can ask us for a copy of the information we hold about you, ask us to correct it, or ask us to delete it.
            Write to {detail(company.email, "our enquiry form")} or {detail(company.address, "our registered address")}.
          </p>

          <h2 className="mt-8 text-lg font-semibold text-secondary">Cookies</h2>
          <p>
            This site works without advertising or tracking cookies. Any measurement we add in future will be described
            here firston request.
          </p>

          <p className="mt-8 text-xs text-muted-foreground">
            This notice is provided in good faith and is not legal advice. Have it reviewed before publication:{" "} on request.
          </p>
        </div>
      </section>
    </>
  );
}
