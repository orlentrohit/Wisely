import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { pricingPlans } from "@/lib/planning";

export function PricingCards({ preview = false }: { preview?: boolean }) {
  const plans = preview ? pricingPlans.slice(0, 3) : pricingPlans;

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={`rounded-lg border p-6 ${
            plan.highlighted
              ? "border-violet-400/50 bg-violet-500/15"
              : "border-white/10 bg-white/[0.045]"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {plan.audience}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{plan.name}</h3>
            </div>
            <AppIcon
              name={plan.audience === "Shop" ? "Store" : "UserRound"}
              className={plan.highlighted ? "h-5 w-5 text-violet-200" : "h-5 w-5 text-slate-400"}
            />
          </div>
          <p className="mt-4 text-3xl font-semibold text-white">{plan.price}</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">{plan.description}</p>
          <ul className="mt-6 grid gap-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                <AppIcon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-green-300" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href={plan.href}
            className={`mt-6 inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-semibold transition ${
              plan.highlighted
                ? "bg-orange-500 text-white hover:bg-orange-400"
                : "border border-white/10 text-slate-100 hover:bg-white/[0.06]"
            }`}
          >
            {plan.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}
