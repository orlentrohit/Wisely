import type { Metadata } from "next";
import Link from "next/link";
import { PricingCards } from "@/components/pricing-cards";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare Wisely pricing for free users, pro users, local shop profiles, featured listings, and shop pro visibility.",
  alternates: {
    canonical: "/pricing"
  }
};

export default function PricingPage() {
  return (
    <article className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans for personal planning and local shop visibility"
          description="Wisely monetizes through premium user planning, shop subscriptions, featured listings, sponsored placement, and future analytics."
          align="center"
        />
        <div className="mt-10">
          <PricingCards />
        </div>
        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.045] p-6 text-center">
          <h2 className="text-2xl font-semibold text-white">No delivery fees. No logistics modules.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Wisely is a planning and discovery platform. Shop plans focus on profiles, map listing, category promotion, leads, and visibility.
          </p>
          <Link href="/seller-join" className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-semibold text-white transition hover:bg-orange-400">
            Join as Shop
          </Link>
        </div>
      </div>
    </article>
  );
}
