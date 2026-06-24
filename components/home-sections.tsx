import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { MapDiscoveryPanel } from "@/components/map-discovery-panel";
import { PricingCards } from "@/components/pricing-cards";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { featuredShops, homepageFaqs, savedPlans } from "@/lib/planning";
import { getPlanningTools } from "@/lib/tools";

const planningCategories = [
  {
    title: "Budget Planning",
    href: "/budget-planner",
    icon: "WalletCards",
    color: "text-violet-200",
    copy: "Plan income, core costs, savings, and remaining balance."
  },
  {
    title: "Grocery Planning",
    href: "/grocery-planner",
    icon: "ShoppingBasket",
    color: "text-green-200",
    copy: "Build weekly or monthly grocery lists with editable prices."
  },
  {
    title: "Fashion Planning",
    href: "/fashion-planner",
    icon: "Shirt",
    color: "text-pink-200",
    copy: "Plan seasonal, event, boys, girls, and unisex fashion spending."
  },
  {
    title: "Map Discovery",
    href: "/map-discovery",
    icon: "MapPinned",
    color: "text-blue-200",
    copy: "Find nearby grocery and fashion stores by city and category."
  }
];

export function DashboardPreview() {
  return (
    <section className="bg-slate-900/50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionHeading
          eyebrow="Dashboard preview"
          title="One monthly command center for users, sellers, and admins"
          description="User accounts save plans and compare categories. Seller accounts manage shop visibility. Admin accounts prepare the platform for moderation and featured listings."
        />
        <div className="grid gap-4">
          {[
            ["User account", "Budget, grocery, fashion, calendar, saved plans", "UserRound", "text-violet-200"],
            ["Seller account", "Shop profile, map pin, offers, featured listings", "Store", "text-orange-200"],
            ["Admin account", "Categories, featured placements, future analytics", "ShieldCheck", "text-blue-200"]
          ].map(([title, copy, icon, tone]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-wisely-panel p-5">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06]">
                  <AppIcon name={icon} className={`h-5 w-5 ${tone}`} />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlanningCategories() {
  const tools = getPlanningTools().filter((tool) =>
    ["monthly-budget-planner", "grocery-planner", "fashion-planner", "map-discovery", "expense-tracker", "savings-goal-planner"].includes(tool.slug)
  );

  return (
    <section id="planning-tools" className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Planning categories"
          title="Plan the month, compare categories, and connect with local stores"
          description="Wisely keeps monthly expenses, grocery needs, wardrobe planning, and nearby shop discovery in one connected system."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {planningCategories.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-lg border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-white/20">
              <AppIcon name={item.icon} className={`h-6 w-6 ${item.color}`} />
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FashionPlanningSection() {
  return (
    <section className="bg-gradient-to-b from-[#fff8fb] to-[#fdeef5] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Fashion planning"
            title="Plan wardrobe spending before visiting stores"
            description="Create monthly fashion budgets for boys, girls, or unisex needs. Add seasonal wardrobe items, event outfits, and manual prices before comparing nearby fashion shops."
          />
          <Link
            href="/fashion-planner"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-semibold text-slate-900 transition hover:bg-orange-400"
          >
            Open Fashion Planner
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Monthly fashion budget", "Boys / girls / unisex", "Seasonal wardrobe", "Event-based planning", "Shopping list", "Nearby fashion stores"].map((item) => (
            <article key={item} className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm">
              <AppIcon name="Shirt" className="h-5 w-5 text-pink-200" />
              <h3 className="mt-4 font-semibold text-slate-900">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GroceryPlanningSection() {
  return (
    <section className="bg-wisely-ink py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {["Family size", "Country and city", "Weekly or monthly budget", "Manual price input", "Category-wise planning", "Nearby grocery stores"].map((item) => (
            <article key={item} className="rounded-2xl border border-green-200 bg-white p-5 shadow-sm">
              <AppIcon name="ShoppingBasket" className="h-5 w-5 text-green-200" />
              <h3 className="mt-4 font-semibold text-slate-900">{item}</h3>
            </article>
          ))}
        </div>
        <div>
          <SectionHeading
            eyebrow="Grocery planning"
            title="Use editable local prices, not fixed live prices"
            description="Wisely lets users enter or adjust prices manually by item and category. Community pricing can come later, but the current product stays honest and user-controlled."
          />
          <Link
            href="/grocery-planner"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-green-600 px-6 text-sm font-semibold text-slate-900 transition hover:bg-green-500"
          >
            Open Grocery Planner
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MapDiscoverySection() {
  return (
    <section className="bg-gradient-to-b from-[#f5faff] to-[#eaf4ff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Map discovery"
          title="Find local shops by city, category, and store pins"
          description="Map discovery connects planning with local shop visibility. It shows nearby shops, featured offers, city filters, and category search with no delivery routes."
        />
        <div className="mt-10">
          <MapDiscoveryPanel compact />
        </div>
      </div>
    </section>
  );
}

export function SellerJoinSection() {
  return (
    <section className="bg-gradient-to-b from-[#fffdf8] to-[#f6f0df] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionHeading
          eyebrow="Seller accounts"
          title="Give local shops visibility inside planning moments"
          description="Sellers can publish shop names, categories, city and country, product or service lists, contact details, offers, featured placements, and map location pins."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {featuredShops.slice(0, 3).map((shop) => (
            <article
              key={shop.id}
              className="rounded-2xl border border-[#eadfca] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <AppIcon
                name={
                  shop.category === "Fashion"
                    ? "Shirt"
                    : "ShoppingBasket"
                }
                className={
                  shop.category === "Fashion"
                    ? "h-5 w-5 text-pink-500"
                    : "h-5 w-5 text-green-600"
                }
              />

              <h3 className="mt-4 font-semibold text-slate-900">
                {shop.shopName}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {shop.area}, {shop.city}
              </p>

              <p className="mt-3 text-xs font-medium text-amber-700">
                {shop.offer}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/seller-join"
          className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-[#b8872b] px-6 text-sm font-semibold text-white transition hover:bg-[#9f7422] lg:col-start-2"
        >
          Join as Shop
        </Link>
      </div>
    </section>
  );
}

export function SavedPlansSection() {
  return (
    <section className="bg-gradient-to-b from-[#fafafa] to-[#f3f4f6] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          eyebrow="Saved plans"
          title="Save, compare, export, and share monthly decisions"
          description="Budget, grocery, fashion, and savings plans can be structured for account-backed storage, export, sharing, and calendar reporting."
        />
        <div className="grid gap-4">
          {savedPlans.map((plan) => (
            <article key={plan.id} className="rounded-2xl border border-[#eadfca] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{plan.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{plan.type} plan updated {plan.updatedAt}</p>
                </div>
                <AppIcon name="Save" className="h-5 w-5 text-[#b8872b]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingPreview() {
  return (
    <section className="bg-gradient-to-b from-[#fffdf6] to-[#f6edd6] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Pricing"
            title="Monetization for users and local shops"
            description="Wisely earns through shop subscriptions, featured listings, premium user planning, sponsored placement, and future premium analytics."
          />
          <Link href="/pricing" className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-[#b8872b] px-6 text-sm font-semibold text-white transition hover:bg-[#9f7422]">
            View Pricing
          </Link>
        </div>
        <div className="mt-10">
          <PricingCards preview />
        </div>
      </div>
    </section>
  );
}

export function HomeFAQ() {
  return (
    <section className="bg-[#fffaf2] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Planning and discovery, without delivery complexity"
          description="Wisely is built around personal planning, shop visibility, maps, and saved decisions."
          align="center"
        />
        <div className="mt-10 grid gap-4">
          {homepageFaqs.map((faq) => (
            <article
  key={faq.question}
  className="rounded-2xl border border-[#eadfca] bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
