import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { homepageFaqs } from "@/lib/planning";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Wisely monthly planning, grocery planning, fashion planning, map discovery, seller accounts, pricing, and no-delivery scope.",
  alternates: {
    canonical: "/faq"
  }
};

export default function FAQPage() {
  return (
    <article className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Wisely planning and local discovery questions"
          description="Clear answers for users, sellers, and admins preparing to use Wisely as a planning-first SaaS platform."
          align="center"
        />
        <div className="mt-10 grid gap-4">
          {homepageFaqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
              <h2 className="font-semibold text-white">{faq.question}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
