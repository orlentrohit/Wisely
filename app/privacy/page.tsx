import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Wisely privacy policy and data handling overview.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      sections={[
        {
          heading: "Information We Collect",
          body:
            "Wisely may collect contact details submitted through forms, basic analytics, and planning data that users choose to save when account features are enabled."
        },
        {
          heading: "Planning Data",
          body:
            "Budget, expense, grocery, savings, bill, and calendar inputs are used to provide the planning experience and future reports."
        },
        {
          heading: "Contact",
          body:
            "Questions about privacy can be sent to hello@wisely.app."
        }
      ]}
    />
  );
}

function LegalPage({
  eyebrow,
  title,
  sections
}: {
  eyebrow: string;
  title: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <section className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
        <div className="mt-10 grid gap-8">
          {sections.map((section) => (
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
