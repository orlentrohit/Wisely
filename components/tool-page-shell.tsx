import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { ToolCard } from "@/components/tool-card";
import { ToolWorkspace } from "@/components/tool-workspace";
import { accentStyles, getCategory, getToolsByCategory, type Tool } from "@/lib/tools";

export function ToolPageShell({ tool }: { tool: Tool }) {
  const category = getCategory(tool.category);
  const accent = accentStyles[tool.accent];
  const relatedTools = getToolsByCategory(tool.category)
    .filter((item) => item.slug !== tool.slug)
    .slice(0, 3);

  return (
    <article className="bg-wisely-ink">
      <section className="border-b border-white/10 bg-wisely-ink py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              {category ? (
                <Link
                  href={category.path}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/[0.09]"
                >
                  <AppIcon name={category.icon} className="h-4 w-4" />
                  {category.name}
                </Link>
              ) : null}
              <h1 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl">
                {tool.title}
              </h1>
              <p className="mt-5 text-pretty text-lg leading-8 text-slate-300">
                {tool.description}
              </p>
            </div>
            <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl ${accent.soft} ${accent.text} ring-1 ${accent.ring}`}>
              <AppIcon name={tool.icon} className="h-9 w-9" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ToolWorkspace tool={tool} />
        </div>
      </section>

      {relatedTools.length > 0 ? (
        <section className="bg-slate-900/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                Related
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">More {category?.name}</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((item) => (
                <ToolCard key={item.slug} tool={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
