import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Wisely terms of use.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <section className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Terms</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Terms of Use</h1>
        <div className="mt-10 grid gap-8">
          {[
            {
              heading: "Use of the Service",
              body:
                "Wisely provides monthly planning, expense tracking, grocery planning, savings, EMI, subscription, calendar, and secondary converter tools. Users are responsible for reviewing their own inputs and decisions."
            },
            {
              heading: "Availability",
              body:
                "The website may change as new tools, integrations, and processing features are added."
            },
            {
              heading: "Liability",
              body:
                "Wisely is provided as a productivity aid and does not replace professional financial, legal, or technical advice."
            }
          ].map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
              <p className="mt-4 leading-8 text-slate-300">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
