import type { Metadata } from "next";
import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Seller Join",
  description:
    "Create a Wisely seller account with shop profile, category, location pin, products, contact details, offers, and featured listing options.",
  alternates: {
    canonical: "/seller-join"
  }
};

const sellerFeatures = [
  "Shop name and category",
  "Location pin on map",
  "City and country",
  "Product or service listing",
  "Fashion and grocery availability",
  "Contact details",
  "Offers",
  "Featured listing options"
];

export default function SellerJoinPage() {
  return (
    <article className="bg-wisely-ink py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Seller account"
            title="Put your shop where customers plan spending"
            description="Wisely helps local grocery and fashion shops become visible inside monthly planning, map discovery, and category comparison workflows."
          />
          <div className="mt-8 rounded-lg border border-orange-400/20 bg-orange-500/10 p-5">
            <div className="flex items-start gap-3">
              <AppIcon name="Info" className="mt-0.5 h-5 w-5 text-orange-200" />
              <p className="text-sm leading-6 text-orange-100">
                This is shop visibility only. Wisely does not include delivery, logistics, shipping, or route planning.
              </p>
            </div>
          </div>
        </div>

        <section className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
          <h2 className="text-xl font-semibold text-white">Shop profile checklist</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {sellerFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-lg border border-white/10 bg-slate-950/60 p-4">
                <AppIcon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-green-300" />
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/pricing" className="inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-semibold text-white transition hover:bg-orange-400">
              View Shop Plans
            </Link>
            <Link href="/map-discovery" className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.06]">
              See Map Discovery
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
