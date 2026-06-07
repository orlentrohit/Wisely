"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/icon";
import { SearchBar } from "@/components/search-bar";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/budget-planner", label: "Budget" },
  { href: "/grocery-planner", label: "Grocery" },
  { href: "/fashion-planner", label: "Fashion" },
  { href: "/map-discovery", label: "Map" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-wisely-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Wisely home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600 text-white shadow-glow">
            <AppIcon name="CalendarCheck2" className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold text-white">Wisely</span>
        </Link>

        <div className="ml-auto hidden flex-1 justify-center lg:flex">
          <SearchBar />
        </div>

        <nav className="ml-auto hidden items-center gap-4 md:flex lg:ml-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="ml-auto grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 md:hidden"
        >
          <AppIcon name={open ? "X" : "Menu"} className="h-5 w-5" />
        </button>
      </div>

      <div className="border-t border-white/10 px-4 py-3 lg:hidden">
        <div className="mx-auto max-w-7xl">
          <SearchBar />
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-wisely-ink px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
