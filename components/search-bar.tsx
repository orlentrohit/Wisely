"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AppIcon } from "@/components/icon";
import { categories, tools } from "@/lib/tools";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const matches = useMemo(() => {
    if (!normalizedQuery) return [];

    return tools
      .filter((tool) =>
        [tool.title, tool.shortDescription, tool.category]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery)
      )
      .slice(0, 6);
  }, [normalizedQuery]);

  return (
    <div className="relative w-full max-w-xl">
      <AppIcon
        name="Search"
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
      />
      <input
        aria-label="Search tools"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search budget, grocery, EMI, calendar, PDF tools"
        className="h-12 w-full rounded-full border border-white/10 bg-white/[0.06] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:bg-white/[0.09] focus:ring-4 focus:ring-violet-500/15"
      />
      {matches.length > 0 ? (
        <div className="absolute left-0 right-0 top-14 z-30 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur">
          {matches.map((tool) => {
            const category = categories.find((item) => item.slug === tool.category);
            return (
              <Link
                key={tool.slug}
                href={tool.path}
                className="flex items-center gap-3 border-b border-white/5 px-4 py-3 transition last:border-b-0 hover:bg-white/[0.06]"
                onClick={() => setQuery("")}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-200">
                  <AppIcon name={tool.icon} className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-white">{tool.title}</span>
                  <span className="block truncate text-xs text-slate-400">{category?.name}</span>
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
