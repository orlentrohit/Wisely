import Link from "next/link";
import { AppIcon } from "@/components/icon";

const dashboardStats = [
  { label: "Monthly plan", value: "INR 120k", tone: "text-amber-700" },
  { label: "Grocery budget", value: "INR 18k", tone: "text-emerald-700" },
  { label: "Fashion plan", value: "INR 12k", tone: "text-rose-700" },
  { label: "Saved plans", value: "24", tone: "text-violet-700" }
];

const floatingTags = [
  { label: "Saving Goals", top: "12%", left: "8%", delay: "0s" },
  { label: "Family Planning", top: "18%", right: "10%", delay: "1.2s" },
  { label: "Fashion Picks", bottom: "18%", left: "10%", delay: "0.8s" },
  { label: "Grocery Lists", top: "55%", right: "6%", delay: "1.6s" },
  { label: "Monthly Budget", bottom: "14%", right: "18%", delay: "0.4s" },
  { label: "Shop Discovery", top: "38%", left: "18%", delay: "1.4s" }
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf8] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,205,112,0.28),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.95),transparent_24%),radial-gradient(circle_at_center,rgba(255,224,153,0.18),transparent_45%),linear-gradient(180deg,#fffef9_0%,#f8f3e8_100%)]" />
      <div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(rgba(120,101,45,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(120,101,45,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1600px] items-center gap-14 px-6 py-14 lg:grid-cols-[1fr_1.1fr] lg:px-12">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-white/70 px-4 py-2 text-sm text-amber-900 shadow-sm backdrop-blur">
            <AppIcon name="ShieldCheck" className="h-4 w-4 text-amber-700" />
            Premium planning SaaS for households and local shops
          </div>

          <h1 className="mt-7 max-w-5xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-8xl">
            Budget Better.
            <br />
            Shop Smarter.
            <br />
            Live Wisely.
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-xl leading-9 text-slate-700">
            Wisely connects monthly budgets, grocery lists, fashion planning, saved plans, and nearby shop discovery in one premium workspace.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Link
              href="/budget-planner"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#b8860b] px-5 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(184,134,11,0.28)] transition hover:bg-[#a87406]"
            >
              Start Planning
            </Link>
            <Link
              href="/seller-join"
              className="inline-flex h-12 items-center justify-center rounded-full border border-amber-300/70 bg-white/70 px-5 text-sm font-semibold text-amber-950 transition hover:bg-amber-50"
            >
              Join as Shop
            </Link>
            <Link
              href="/map-discovery"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/60 px-5 text-sm font-semibold text-slate-800 transition hover:border-amber-200 hover:bg-white"
            >
              Explore Stores
            </Link>
          </div>
        </div>

        <div className="relative h-[720px] lg:h-[780px]">
          <div className="absolute inset-0 rounded-[2rem] border border-white/70 bg-white/55 shadow-[0_20px_80px_rgba(132,98,16,0.10)] backdrop-blur-xl" />

          {/* floating tags */}
          {floatingTags.map((tag) => (
            <div
              key={tag.label}
              className="absolute z-10 rounded-full border border-amber-200/70 bg-white/80 px-4 py-2 text-xs font-medium text-amber-950 shadow-sm backdrop-blur animate-float-y"
              style={{
                top: tag.top,
                left: tag.left,
                right: tag.right,
                animationDelay: tag.delay
              }}
            >
              {tag.label}
            </div>
          ))}

          {/* coin area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[380px] w-[380px] sm:h-[480px] sm:w-[480px]">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,224,153,0.55)_0%,rgba(255,214,102,0.25)_38%,rgba(255,255,255,0)_70%)] blur-2xl" />

              <div className="absolute inset-6 rounded-full border border-amber-200/70 bg-[radial-gradient(circle_at_30%_30%,#fff8d6_0%,#f5d46b_22%,#d9a72d_48%,#9b6a10_76%,#6f4a08_100%)] shadow-[inset_0_10px_25px_rgba(255,255,255,0.55),inset_0_-20px_35px_rgba(0,0,0,0.18),0_18px_55px_rgba(171,120,15,0.25)] animate-spin [animation-duration:28s] [animation-timing-function:linear] [animation-iteration-count:infinite]" />

              <div className="absolute inset-14 rounded-full border border-white/60 bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.32)_18%,rgba(255,255,255,0)_40%)] opacity-80" />

              <div className="absolute inset-[68px] rounded-full border border-amber-100/80 bg-white/12 shadow-inner backdrop-blur-sm" />

              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-full border border-white/80 bg-white/65 px-8 py-6 text-center shadow-xl backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
                    Wisely
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    Save • Plan • Grow
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* dashboard card */}
          <div className="absolute bottom-6 left-6 right-6 z-10 rounded-3xl border border-white/70 bg-white/92 p-5 shadow-[0_20px_70px_rgba(132,98,16,0.10)] backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold text-slate-950">June planning dashboard</p>
                <p className="mt-1 text-xs text-slate-500">User account preview</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                <AppIcon name="CheckCircle2" className="h-3.5 w-3.5" />
                On track
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {dashboardStats.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-[#fffdf7] p-4">
                  <p className="text-xs text-slate-500">{metric.label}</p>
                  <p className={`mt-2 text-2xl font-semibold ${metric.tone}`}>{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-emerald-500" />
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Grocery", icon: "ShoppingBasket" },
                { label: "Fashion", icon: "Shirt" },
                { label: "Local shops", icon: "MapPinned" }
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.label === "Grocery" ? "/grocery-planner" : item.label === "Fashion" ? "/fashion-planner" : "/map-discovery"}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-md"
                >
                  <AppIcon name={item.icon} className="h-5 w-5 text-amber-700" />
                  <p className="mt-3 text-sm font-semibold text-slate-950">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Connected planning flow</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
