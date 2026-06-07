import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { accentStyles, categories, getToolsByCategory } from "@/lib/tools";

export function CategoryGrid() {
  const primaryCategories = categories.filter((category) => category.accent !== "neutral");

  return (
    <section id="planning-tools" className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Monthly planning"
          title="Budget, grocery, savings, EMI, and calendar tools"
          description="Wisely keeps monthly money decisions together, so families, students, professionals, and small households can plan without opening separate spreadsheets."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {primaryCategories.map((category) => {
            const accent = accentStyles[category.accent];
            return (
              <Link
                key={category.slug}
                href={category.path}
                className="group rounded-lg border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${accent.bg} text-white`}>
                  <AppIcon name={category.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
                <p className={`mt-6 text-sm font-semibold ${accent.text}`}>
                  {getToolsByCategory(category.slug).length} planning tools
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
