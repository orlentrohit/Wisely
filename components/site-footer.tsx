import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { categories, getPlanningTools, getTrafficTools } from "@/lib/tools";

const legalLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/seller-join", label: "Seller Join" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-wisely-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600 text-white">
              <AppIcon name="CalendarCheck2" className="h-5 w-5" />
            </span>
            <span className="text-xl font-semibold text-white">Wisely</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Monthly planning, grocery planning, fashion planning, saved plans, and map-based local shop discovery.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Categories</h3>
            <div className="mt-4 grid gap-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={category.path}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Planning</h3>
            <div className="mt-4 grid gap-3">
              {getPlanningTools()
                .slice(0, 5)
                .map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.path}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {tool.title}
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <div className="mt-4 grid gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
          <h3 className="text-sm font-semibold text-white">Secondary traffic tools</h3>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {getTrafficTools().slice(0, 8).map((tool) => (
              <Link key={tool.slug} href={tool.path} className="text-sm text-slate-400 transition hover:text-white">
                {tool.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6">
        <p className="mx-auto max-w-7xl text-sm text-slate-500 sm:px-6 lg:px-8">
          (c) {new Date().getFullYear()} Wisely. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
