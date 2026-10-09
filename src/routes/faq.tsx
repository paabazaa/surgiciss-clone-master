import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { CtaBand } from "@/components/site/Cards";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently asked questions — SURGICISS LTD" },
      {
        name: "description",
        content:
          "Answers to common questions about SURGICISS products, software, lead times, training and how quotations are prepared.",
      },
      { property: "og:title", content: "Frequently asked questions — SURGICISS LTD" },
      {
        property: "og:description",
        content: "Common questions about SURGICISS products, software, lead times and quotations.",
      },
      { property: "og:url", content: "https://surgiciss-clone-master.lovable.app/faq" },
    ],
    links: [{ rel: "canonical", href: "https://surgiciss-clone-master.lovable.app/faq" }],
  }),
  component: FaqPage,
});

const faqs = [
  {
    question: "How do you prepare a quotation?",
    answer:
      "We ask for the products or modules you are considering, the quantities involved and where the goods or work are going. We then quote against that rather than publishing a single list price, because volume and delivery change the figure.",
  },
  {
    question: "What are your lead times?",
    answer:
      "Lead times depend on the item and the quantity ordered. We confirm a date in writing with every quotation.",
  },
  {
    question: "Can we trial a product before committing?",
    answer:
      "For most physical products we can arrange an evaluation quantity so your technicians can judge it in their own workflow. Terms for evaluations are agreed case by caseon request.",
  },
  {
    question: "Is your software hosted by you or by us?",
    answer:
      "Both arrangements are possible and the choice usually depends on your IT policy. The specific hosting, interface and data-retention options we support are confirmed during scopingon request.",
  },
  {
    question: "Do you deliver training on site?",
    answer:
      "Yes. Technician training and morale sessions are normally delivered in the department, because the point is to work with the equipment and pressures your team actually faces.",
  },
  {
    question: "What regulatory information can you supply?",
    answer:
      "We provide the documentation relevant to each product on request. Classifications and certifications differ by item and marketon request.",
  },
];

function FaqPage() {
  return (
    <>
      <PageBanner
        title="Frequently asked questions"
        crumbs={[{ label: "FAQ" }]}
        lead="The questions departments ask us most often. If yours is not here, send it to us."
      />

      <section className="mx-auto max-w-[900px] px-4 py-14">
        <dl className="divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <dt className="text-base font-semibold text-secondary">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaBand heading="Still have a question?" body="Ask us directly and we will answer plainly." />
    </>
  );
}
