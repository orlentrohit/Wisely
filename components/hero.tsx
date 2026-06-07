import Link from "next/link";
import { AppIcon } from "@/components/icon";

const dashboardStats = [
  { label: "Monthly plan", value: "INR 120k", tone: "text-blue-200" },
  { label: "Grocery budget", value: "INR 18k", tone: "text-green-200" },
  { label: "Fashion plan", value: "INR 12k", tone: "text-pink-200" },
  { label: "Saved plans", value: "24", tone: "text-violet-200" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-wisely-ink">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.22),transparent_32%,rgba(37,99,235,0.12)_62%,rgba(22,163,74,0.12))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1600px] items-center gap-16 px-6 py-14 lg:grid-cols-[1fr_1.2fr] lg:px-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200">
            <AppIcon name="ShieldCheck" className="h-4 w-4 text-green-300" />
            Premium planning SaaS for households and local shops
          </div>
          <h1 className="mt-7 max-w-5xl text-balance text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-8xl">
            Budget Better.
            Shop Smarter.
            Live Wisely.
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-xl leading-9 text-slate-300">
            Wisely connects monthly budgets, grocery lists, fashion planning, saved plans, and nearby shop discovery in one premium workspace.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Link
              href="/budget-planner"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-semibold text-white shadow-glow transition hover:bg-orange-400"
            >
              Start Planning
            </Link>
            <Link
              href="/seller-join"
              className="inline-flex h-12 items-center justify-center rounded-full border border-violet-300/30 px-5 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/15"
            >
              Join as Shop
            </Link>
            <Link
              href="/map-discovery"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Explore Stores
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-white/10 bg-wisely-panel p-5 shadow-2xl shadow-black/30">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">June planning dashboard</p>
                <p className="mt-1 text-xs text-slate-400">User account preview</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-100">
                <AppIcon name="CheckCircle2" className="h-3.5 w-3.5" />
                On track
              </span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {dashboardStats.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-xs text-slate-400">{metric.label}</p>
                  <p className={`mt-2 text-2xl font-semibold ${metric.tone}`}>{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-green-600" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Grocery", icon: "ShoppingBasket", tone: "text-green-200" },
              { label: "Fashion", icon: "Shirt", tone: "text-pink-200" },
              { label: "Local shops", icon: "MapPinned", tone: "text-blue-200" }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.label === "Grocery" ? "/grocery-planner" : item.label === "Fashion" ? "/fashion-planner" : "/map-discovery"}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-1 hover:border-white/20"
              >
                <AppIcon name={item.icon} className={`h-5 w-5 ${item.tone}`} />
                <p className="mt-3 text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">Connected planning flow</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
