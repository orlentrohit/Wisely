import { SectionHeading } from "@/components/section-heading";

const faqs = [
  {
    question: "Is Wisely a converter website?",
    answer:
      "No. Wisely is a monthly planning, expense tracking, grocery planning, savings, and calendar-based money management platform. Converters are secondary SEO tools."
  },
  {
    question: "Can grocery prices be updated by users?",
    answer:
      "Yes. The grocery planner supports editable estimates and manual item prices instead of fixed live prices."
  },
  {
    question: "Is the architecture ready for accounts and data storage?",
    answer:
      "Yes. The UI separates users, budgets, expenses, grocery plans, savings goals, recurring bills, reports, events, and future price suggestions as product concepts ready for Supabase integration."
  },
  {
    question: "Are pages SEO optimized?",
    answer:
      "Each primary planning page, converter category, tool page, blog post, legal page, sitemap, and robots route has clean metadata and internal links."
  }
];

export function FAQ() {
  return (
    <section className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Built as a planning SaaS first"
          description="The launch foundation supports free planning tools now and premium dashboards, reports, exports, AI recommendations, and family sharing later."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
              <h3 className="text-base font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
