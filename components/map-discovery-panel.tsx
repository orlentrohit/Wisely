"use client";

import { useMemo, useState } from "react";
import { AppIcon } from "@/components/icon";
import { featuredShops } from "@/lib/planning";

const categories = ["All", "Grocery", "Fashion", "General"];
const cities = ["All", "Bengaluru", "Mumbai", "Delhi"];

export function MapDiscoveryPanel({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = useState("All");
  const [city, setCity] = useState("All");

  const shops = useMemo(
    () =>
      featuredShops.filter(
        (shop) =>
          (category === "All" || shop.category === category) &&
          (city === "All" || shop.city === city)
      ),
    [category, city]
  );

  return (
    <div className={compact ? "grid gap-5 lg:grid-cols-[1.1fr_0.9fr]" : "grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"}>
      <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-wisely-panel">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(22,163,74,0.18),transparent_25%),radial-gradient(circle_at_65%_45%,rgba(236,72,153,0.14),transparent_25%),radial-gradient(circle_at_55%_70%,rgba(37,99,235,0.16),transparent_24%)]" />
        <div className="relative flex flex-wrap gap-2 p-4">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                category === item
                  ? "bg-violet-600 text-white"
                  : "border border-white/10 bg-slate-950/70 text-slate-300 hover:bg-white/[0.06]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${shop.position.x}%`, top: `${shop.position.y}%` }}
          >
            <span className={`grid h-11 w-11 place-items-center rounded-full border border-white/20 shadow-lg ${
              shop.category === "Grocery" ? "bg-green-600" : shop.category === "Fashion" ? "bg-pink-500" : "bg-blue-600"
            }`}>
              <AppIcon name={shop.category === "Fashion" ? "Shirt" : shop.category === "Grocery" ? "ShoppingBasket" : "Store"} className="h-5 w-5 text-white" />
            </span>
          </div>
        ))}
        <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-slate-950/80 p-3 text-xs text-slate-300 backdrop-blur">
          Store pins only. No delivery routes.
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">City</span>
            <select
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="h-11 rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none focus:border-violet-400"
            >
              {cities.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Category</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-11 rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none focus:border-violet-400"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 grid gap-3">
          {shops.map((shop) => (
            <article key={shop.id} className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white">{shop.shopName}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {shop.area}, {shop.city}
                  </p>
                </div>
                {shop.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/15 px-2 py-1 text-xs font-semibold text-orange-200">
                    <AppIcon name="Star" className="h-3.5 w-3.5" />
                    Featured
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm text-slate-300">{shop.offer}</p>
              <p className="mt-2 text-xs text-slate-500">{shop.products.join(", ")}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
