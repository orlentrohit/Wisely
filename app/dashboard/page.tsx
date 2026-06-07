import type { Metadata } from "next";
import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { featuredShops, savedPlans } from "@/lib/planning";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Preview the Wisely dashboard for saved plans, monthly category comparison, grocery planning, fashion planning, and nearby shop recommendations.",
  alternates: {
    canonical: "/dashboard"
  }
};

const categoryComparison = [
  { label: "Monthly expenses", value: "INR 74,500", tone: "text-blue-200" },
  { label: "Grocery plan", value: "INR 18,000", tone: "text-green-200" },
  { label: "Fashion plan", value: "INR 12,000", tone: "text-pink-200" },
  { label: "Savings goal", value: "INR 28,000", tone: "text-violet-200" }
];

export default function DashboardPage() {
  return (
    <article className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dashboard"
          title="A planning cockpit for users, sellers, and admins"
          description="The dashboard model connects saved plans, category comparison, grocery and fashion budgets, map-based store suggestions, and account roles."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {categoryComparison.map((item) => (
            <article key={item.label} className="rounded-lg border border-white/10 bg-wisely-panel p-5">
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className={`mt-3 text-2xl font-semibold ${item.tone}`}>{item.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-white">Saved plans</h2>
              <AppIcon name="Save" className="h-5 w-5 text-violet-200" />
            </div>
            <div className="mt-5 grid gap-3">
              {savedPlans.map((plan) => (
                <article key={plan.id} className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
                  <h3 className="font-semibold text-white">{plan.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{plan.type} plan | Updated {plan.updatedAt}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-white">Recommended nearby stores</h2>
              <AppIcon name="MapPinned" className="h-5 w-5 text-blue-200" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {featuredShops.slice(0, 4).map((shop) => (
                <article key={shop.id} className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
                  <h3 className="font-semibold text-white">{shop.shopName}</h3>
                  <p className="mt-1 text-sm text-slate-400">{shop.category} | {shop.city}</p>
                  <p className="mt-3 text-xs text-orange-200">{shop.offer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/budget-planner" className="inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-semibold text-white transition hover:bg-orange-400">
            Start Planning
          </Link>
          <Link href="/map-discovery" className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.06]">
            Explore Map
          </Link>
        </div>
      </div>
    </article>
  );
}
