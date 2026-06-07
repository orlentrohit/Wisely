import { AppIcon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { getPopularTools, getTrafficTools } from "@/lib/tools";

const months = [
  { name: "Jan", value: "INR 68k", progress: "50%" },
  { name: "Feb", value: "INR 72k", progress: "56%" },
  { name: "Mar", value: "INR 81k", progress: "68%" },
  { name: "Apr", value: "INR 70k", progress: "53%" },
  { name: "May", value: "INR 76k", progress: "60%" },
  { name: "Jun", value: "INR 74k", progress: "58%" }
];

const statuses = [
  { label: "Healthy", icon: "CheckCircle2", tone: "text-green-200", copy: "Savings and bills are on track." },
  { label: "Warning", icon: "AlertTriangle", tone: "text-orange-200", copy: "Flexible spending needs attention." },
  { label: "Over Budget", icon: "AlertTriangle", tone: "text-red-200", copy: "Expense plan has crossed the limit." },
  { label: "Great Savings", icon: "PiggyBank", tone: "text-green-200", copy: "Savings rate is stronger than target." },
  { label: "High EMI Pressure", icon: "Gauge", tone: "text-red-200", copy: "Loan payments are taking too much income." }
];

export function PopularTools() {
  const trafficTools = getTrafficTools();

  return (
    <>
      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core workflows"
            title="Start with the tools people use every month"
            description="Planning tools come first. Each workspace is ready for Supabase-backed persistence, reports, exports, and family sharing later."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {getPopularTools().map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wisely-ink py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
              Financial health
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Clear status labels for every budget condition
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Health states use icons, labels, helper text, and high-contrast cards so users never have to infer meaning from color alone.
            </p>
            <div className="mt-8 grid gap-3">
              {statuses.map((status) => (
                <div key={status.label} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06] ${status.tone}`}>
                    <AppIcon name={status.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{status.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{status.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Yearly spending calendar</p>
                <p className="mt-1 text-xs text-slate-400">Month-to-month comparison preview</p>
              </div>
              <div className="inline-flex rounded-full border border-white/10 bg-slate-950/60 p-1">
                <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">2026</span>
                <span className="px-3 py-1 text-xs font-semibold text-slate-400">2025</span>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {months.map((month) => (
                <div key={month.name} className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{month.name}</p>
                    <p className="text-sm text-slate-300">{month.value}</p>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: month.progress }} />
                  </div>
                  <p className="mt-3 text-xs text-slate-500">Recurring bills and goals included</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="traffic-tools" className="bg-slate-900/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Traffic tools"
            title="Converters stay secondary"
            description="PDF, image, and document tools are neutral SEO entry points that lead users back into Wisely's planning platform."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trafficTools.slice(0, 8).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
