import type { Metadata } from "next";
import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { MapDiscoveryPanel } from "@/components/map-discovery-panel";
import { SectionHeading } from "@/components/section-heading";
import { featuredShops } from "@/lib/planning";

export const metadata: Metadata = {
  title: "Map Discovery",
  description:
    "Discover nearby grocery and fashion shops by city, category, store pins, featured offers, and map-based local visibility without delivery routes.",
  alternates: {
    canonical: "/map-discovery"
  }
};

export default function MapDiscoveryPage() {
  return (
    <article className="bg-wisely-ink">
      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Map discovery"
            title="Discover nearby grocery and fashion shops"
            description="Search by city and category, compare store pins, review featured offers, and connect planning with local shop visibility. Wisely does not provide delivery, logistics, shipping, or route planning."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/grocery-planner" className="inline-flex h-12 items-center justify-center rounded-full bg-green-600 px-6 text-sm font-semibold text-white transition hover:bg-green-500">
              Plan Groceries
            </Link>
            <Link href="/fashion-planner" className="inline-flex h-12 items-center justify-center rounded-full bg-pink-500 px-6 text-sm font-semibold text-white transition hover:bg-pink-400">
              Plan Fashion
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MapDiscoveryPanel />
        </div>
      </section>

      <section className="bg-slate-900/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured shops"
            title="Local stores prepared for planning flows"
            description="Seller profiles include shop category, location pin, city, country, product or service listing, availability, contact details, offers, and featured listing status."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {featuredShops.map((shop) => (
              <article key={shop.id} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                <AppIcon name={shop.category === "Fashion" ? "Shirt" : "ShoppingBasket"} className={shop.category === "Fashion" ? "h-5 w-5 text-pink-200" : "h-5 w-5 text-green-200"} />
                <h3 className="mt-4 font-semibold text-white">{shop.shopName}</h3>
                <p className="mt-2 text-sm text-slate-400">{shop.area}, {shop.city}</p>
                <p className="mt-3 text-xs text-orange-200">{shop.offer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
