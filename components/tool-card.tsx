import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { accentStyles, categories, type Tool } from "@/lib/tools";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  const category = categories.find((item) => item.slug === tool.category);
  const accent = accentStyles[tool.accent];

  return (
    <Link
      href={tool.path}
      className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`grid h-11 w-11 place-items-center rounded-xl ${accent.soft} ${accent.text} ring-1 ${accent.ring}`}>
          <AppIcon name={tool.icon} className="h-5 w-5" />
        </span>
        <AppIcon
          name="ChevronRight"
          className={`mt-2 h-4 w-4 text-slate-500 transition group-hover:translate-x-1 ${accent.text}`}
        />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{tool.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{tool.shortDescription}</p>
      {category ? (
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          {category.name}
        </p>
      ) : null}
    </Link>
  );
}
