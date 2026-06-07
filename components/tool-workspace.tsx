"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { AppIcon } from "@/components/icon";
import { MapDiscoveryPanel } from "@/components/map-discovery-panel";
import { featuredShops } from "@/lib/planning";
import { accentStyles, expenseCategories, type Tool } from "@/lib/tools";
import { formatCurrency, formatNumber } from "@/lib/utils";

type ToolWorkspaceProps = {
  tool: Tool;
};

type Expense = {
  id: number;
  name: string;
  category: string;
  amount: number;
};

type GroceryItem = {
  id: number;
  name: string;
  qty: number;
  price: number;
};

type FashionItem = {
  id: number;
  item: string;
  category: string;
  price: number;
};

type Subscription = {
  id: number;
  name: string;
  amount: number;
  dueDay: number;
  status: "Paid" | "Due soon" | "Review";
};

const groceryEstimateItems: GroceryItem[] = [
  { id: 1, name: "Rice / grains", qty: 10, price: 70 },
  { id: 2, name: "Milk", qty: 30, price: 60 },
  { id: 3, name: "Vegetables", qty: 18, price: 55 },
  { id: 4, name: "Fruits", qty: 10, price: 90 },
  { id: 5, name: "Cooking oil", qty: 3, price: 160 }
];

const starterFashionItems: FashionItem[] = [
  { id: 1, item: "Everyday shirts", category: "Seasonal wardrobe", price: 2500 },
  { id: 2, item: "Event outfit", category: "Event-based", price: 4500 },
  { id: 3, item: "Footwear", category: "Accessories", price: 3200 }
];

function NumberField({
  label,
  value,
  onChange,
  suffix,
  min = 0
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
  min?: number;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <div className="relative">
        <input
          type="number"
          min={min}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-12 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 pr-14 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
        />
        {suffix ? (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">{suffix}</span>
        ) : null}
      </div>
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function ResultTile({ label, value, icon = "CircleDollarSign" }: { label: string; value: string; icon?: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-center gap-2 text-slate-400">
        <AppIcon name={icon} className="h-4 w-4" />
        <p className="text-sm">{label}</p>
      </div>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

function StatusBadge({ tone, icon, label }: { tone: string; icon: string; label: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold ${tone}`}>
      <AppIcon name={icon} className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function CalculatorShell({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{children}</div>;
}

function FileTool({ tool }: { tool: Tool }) {
  const [files, setFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState(82);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(800);
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const accepted = tool.inputs?.map((input) => `.${input.toLowerCase()}`).join(",") ?? undefined;
  const isResize = tool.slug === "image-resizer";
  const isCompression = tool.slug.includes("compressor");

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
      <div className="rounded-lg border border-dashed border-blue-400/40 bg-blue-500/10 p-8 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-blue-500/20 text-blue-100">
          <AppIcon name="UploadCloud" className="h-8 w-8" />
        </div>
        <h2 className="mt-5 text-xl font-semibold text-white">Upload files</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-300">
          Secondary traffic tool. Supported input: {tool.inputs?.join(", ") ?? "Files"}.
        </p>
        <label className="mt-6 inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-500">
          Choose files
          <input
            type="file"
            multiple
            accept={accepted}
            className="sr-only"
            onChange={(event) => {
              setFiles(Array.from(event.target.files ?? []));
              setStatus("idle");
            }}
          />
        </label>
        {files.length > 0 ? (
          <div className="mt-6 grid gap-2 text-left">
            {files.map((file) => (
              <div key={`${file.name}-${file.size}`} className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3">
                <p className="truncate text-sm font-medium text-white">{file.name}</p>
                <p className="mt-1 text-xs text-slate-500">{formatNumber(file.size / 1024)} KB</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <aside className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <h3 className="text-lg font-semibold text-white">Options</h3>
        <div className="mt-5 grid gap-5">
          {isCompression ? (
            <label className="grid gap-3">
              <span className="text-sm font-medium text-slate-200">Quality</span>
              <input
                type="range"
                min="30"
                max="100"
                value={quality}
                onChange={(event) => setQuality(Number(event.target.value))}
                className="accent-blue-500"
              />
              <span className="text-sm text-slate-400">{quality}%</span>
            </label>
          ) : null}
          {isResize ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <NumberField label="Width" value={width} onChange={setWidth} suffix="px" min={1} />
              <NumberField label="Height" value={height} onChange={setHeight} suffix="px" min={1} />
            </div>
          ) : null}
          <button
            type="button"
            disabled={files.length === 0}
            onClick={() => setStatus("ready")}
            className="h-12 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          >
            Prepare Output
          </button>
          {status === "ready" ? (
            <div className="rounded-lg border border-green-400/20 bg-green-400/10 p-4 text-sm text-green-100">
              <div className="flex items-center gap-2 font-semibold">
                <AppIcon name="CheckCircle2" className="h-4 w-4" />
                Output prepared
              </div>
              <p className="mt-2 text-green-100/80">Your output is ready for a future export pipeline.</p>
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}

function BudgetPlanner({ family = false }: { family?: boolean }) {
  const [income, setIncome] = useState(family ? 140000 : 85000);
  const [rent, setRent] = useState(family ? 34000 : 22000);
  const [grocery, setGrocery] = useState(family ? 18000 : 10000);
  const [utilities, setUtilities] = useState(7500);
  const [emi, setEmi] = useState(family ? 18000 : 9000);
  const [school, setSchool] = useState(family ? 12000 : 0);
  const [subscriptions, setSubscriptions] = useState(2500);
  const [savings, setSavings] = useState(family ? 28000 : 15000);
  const [emergency, setEmergency] = useState(6000);
  const total = rent + grocery + utilities + emi + school + subscriptions + savings + emergency;
  const remaining = income - total;
  const progress = income > 0 ? Math.min(100, Math.round((total / income) * 100)) : 0;
  const overBudget = remaining < 0;

  return (
    <div className="grid gap-6">
      <CalculatorShell>
        <NumberField label={family ? "Household income" : "Monthly income"} value={income} onChange={setIncome} />
        <NumberField label="Rent" value={rent} onChange={setRent} />
        <NumberField label="Grocery" value={grocery} onChange={setGrocery} />
        <NumberField label="Electricity, water, internet" value={utilities} onChange={setUtilities} />
        <NumberField label="EMI" value={emi} onChange={setEmi} />
        <NumberField label={family ? "School fees" : "Education or upskilling"} value={school} onChange={setSchool} />
        <NumberField label="Subscriptions" value={subscriptions} onChange={setSubscriptions} />
        <NumberField label="Savings goal" value={savings} onChange={setSavings} />
        <NumberField label="Emergency fund" value={emergency} onChange={setEmergency} />
      </CalculatorShell>
      <div className="grid gap-4 md:grid-cols-3">
        <ResultTile label="Planned Outflow" value={formatCurrency(total)} icon="ReceiptText" />
        <ResultTile label="Remaining Balance" value={formatCurrency(remaining)} icon={overBudget ? "AlertTriangle" : "WalletCards"} />
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-slate-400">Budget Progress</p>
            <StatusBadge
              tone={overBudget ? "text-red-200" : "text-green-200"}
              icon={overBudget ? "AlertTriangle" : "CheckCircle2"}
              label={overBudget ? "Over Budget" : "On Track"}
            />
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
            <div className={`h-full rounded-full ${overBudget ? "bg-red-500" : "bg-violet-600"}`} style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 text-sm text-slate-400">{progress}% of income assigned.</p>
        </div>
      </div>
    </div>
  );
}

function GroceryPlanner() {
  const [country, setCountry] = useState("India");
  const [city, setCity] = useState("Bengaluru");
  const [familySize, setFamilySize] = useState(4);
  const [period, setPeriod] = useState("Monthly");
  const [budget, setBudget] = useState(18000);
  const [items, setItems] = useState<GroceryItem[]>(groceryEstimateItems);
  const [useEstimates, setUseEstimates] = useState(true);
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const remaining = budget - total;

  function updateItem(id: number, key: "name" | "qty" | "price", value: string | number) {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Plan settings</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Prices are editable estimates or manual entries, not fixed live prices.
            </p>
          </div>
          <StatusBadge tone="text-green-200" icon="ShoppingBasket" label="Editable" />
        </div>
        <div className="mt-5 grid gap-4">
          <TextField label="Country" value={country} onChange={setCountry} />
          <TextField label="City" value={city} onChange={setCity} />
          <NumberField label="Family size" value={familySize} onChange={setFamilySize} min={1} />
          <SelectField label="Planning period" value={period} onChange={setPeriod} options={["Weekly", "Monthly"]} />
          <NumberField label={`${period} budget`} value={budget} onChange={setBudget} />
          <label className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-slate-950/60 p-4">
            <span>
              <span className="block text-sm font-semibold text-white">Use starter estimates</span>
              <span className="mt-1 block text-xs text-slate-400">Switch off when every price is entered manually.</span>
            </span>
            <input
              type="checkbox"
              checked={useEstimates}
              onChange={(event) => setUseEstimates(event.target.checked)}
              className="h-5 w-5 accent-green-600"
            />
          </label>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Grocery items</h2>
            <p className="mt-1 text-sm text-slate-400">
              {country}, {city} | {familySize} people | {period}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setItems((current) => [...current, { id: Date.now(), name: "New item", qty: 1, price: 0 }])}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-green-600 px-4 text-sm font-semibold text-white transition hover:bg-green-500"
          >
            <AppIcon name="Plus" className="h-4 w-4" />
            Add item
          </button>
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-slate-400">
              <tr className="border-b border-white/10">
                <th className="pb-3 font-medium">Item</th>
                <th className="pb-3 font-medium">Qty</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 text-right font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-white/5">
                  <td className="py-3 pr-3">
                    <input
                      value={item.name}
                      onChange={(event) => updateItem(item.id, "name", event.target.value)}
                      className="h-10 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3 text-white outline-none focus:border-green-400"
                    />
                  </td>
                  <td className="py-3 pr-3">
                    <input
                      type="number"
                      min="0"
                      value={item.qty}
                      onChange={(event) => updateItem(item.id, "qty", Number(event.target.value))}
                      className="h-10 w-24 rounded-lg border border-white/10 bg-slate-950/70 px-3 text-white outline-none focus:border-green-400"
                    />
                  </td>
                  <td className="py-3 pr-3">
                    <input
                      type="number"
                      min="0"
                      value={item.price}
                      onChange={(event) => updateItem(item.id, "price", Number(event.target.value))}
                      className="h-10 w-28 rounded-lg border border-white/10 bg-slate-950/70 px-3 text-white outline-none focus:border-green-400"
                    />
                  </td>
                  <td className="py-3 text-right font-semibold text-white">{formatCurrency(item.qty * item.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <ResultTile label="Grocery Total" value={formatCurrency(total)} icon="ShoppingBasket" />
          <ResultTile label="Budget Left" value={formatCurrency(remaining)} icon={remaining < 0 ? "AlertTriangle" : "PiggyBank"} />
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
            <p className="text-sm text-slate-400">Price source</p>
            <StatusBadge
              tone={useEstimates ? "text-green-200" : "text-blue-200"}
              icon={useEstimates ? "Info" : "CheckCircle2"}
              label={useEstimates ? "Editable estimates" : "Manual prices"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FashionPlanner() {
  const [budget, setBudget] = useState(12000);
  const [audience, setAudience] = useState("Unisex");
  const [season, setSeason] = useState("Monsoon");
  const [event, setEvent] = useState("Wedding");
  const [city, setCity] = useState("Bengaluru");
  const [items, setItems] = useState<FashionItem[]>(starterFashionItems);
  const [saved, setSaved] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const remaining = budget - total;
  const fashionShops = featuredShops.filter(
    (shop) => shop.category === "Fashion" && (city === "All" || shop.city === city)
  );

  function updateItem(id: number, key: "item" | "category" | "price", value: string | number) {
    setItems((current) =>
      current.map((entry) => (entry.id === id ? { ...entry, [key]: value } : entry))
    );
    setSaved(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="rounded-lg border border-pink-400/20 bg-pink-500/10 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Fashion plan settings</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Plan wardrobe spending before shopping. Prices stay editable and user-controlled.
            </p>
          </div>
          <StatusBadge tone="text-pink-200" icon="Shirt" label="Fashion" />
        </div>
        <div className="mt-5 grid gap-4">
          <NumberField label="Monthly fashion budget" value={budget} onChange={setBudget} />
          <SelectField label="Planning type" value={audience} onChange={setAudience} options={["Boys", "Girls", "Unisex"]} />
          <SelectField label="Season" value={season} onChange={setSeason} options={["Summer", "Monsoon", "Winter", "Festive"]} />
          <SelectField label="Event" value={event} onChange={setEvent} options={["School", "Wedding", "Work", "Travel", "Festival", "Casual"]} />
          <SelectField label="City for shop suggestions" value={city} onChange={setCity} options={["All", "Bengaluru", "Delhi", "Mumbai"]} />
          <button
            type="button"
            onClick={() => setSaved(true)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            <AppIcon name="Save" className="h-4 w-4" />
            Save Fashion Plan
          </button>
          {saved ? (
            <p className="rounded-lg border border-green-400/20 bg-green-400/10 p-3 text-sm text-green-100">
              Fashion plan saved locally for this session.
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6">
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Shopping list</h2>
              <p className="mt-1 text-sm text-slate-400">
                {audience} | {season} | {event}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setItems((current) => [
                  ...current,
                  { id: Date.now(), item: "New fashion item", category: "Shopping list", price: 0 }
                ])
              }
              className="inline-flex h-10 items-center gap-2 rounded-full bg-pink-500 px-4 text-sm font-semibold text-white transition hover:bg-pink-400"
            >
              <AppIcon name="Plus" className="h-4 w-4" />
              Add item
            </button>
          </div>
          <div className="mt-5 grid gap-3">
            {items.map((entry) => (
              <div key={entry.id} className="grid gap-3 rounded-lg border border-white/10 bg-slate-950/60 p-4 md:grid-cols-[1fr_0.9fr_0.5fr]">
                <input
                  value={entry.item}
                  onChange={(changeEvent) => updateItem(entry.id, "item", changeEvent.target.value)}
                  className="h-10 rounded-lg border border-white/10 bg-slate-950/70 px-3 text-sm text-white outline-none focus:border-pink-400"
                />
                <select
                  value={entry.category}
                  onChange={(changeEvent) => updateItem(entry.id, "category", changeEvent.target.value)}
                  className="h-10 rounded-lg border border-white/10 bg-slate-950/70 px-3 text-sm text-white outline-none focus:border-pink-400"
                >
                  {["Seasonal wardrobe", "Event-based", "Accessories", "Boys", "Girls", "Unisex", "Shopping list"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <input
                  type="number"
                  min="0"
                  value={entry.price}
                  onChange={(changeEvent) => updateItem(entry.id, "price", Number(changeEvent.target.value))}
                  className="h-10 rounded-lg border border-white/10 bg-slate-950/70 px-3 text-sm text-white outline-none focus:border-pink-400"
                />
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <ResultTile label="Fashion total" value={formatCurrency(total)} icon="Shirt" />
            <ResultTile label="Budget left" value={formatCurrency(remaining)} icon={remaining < 0 ? "AlertTriangle" : "WalletCards"} />
            <ResultTile label="Items planned" value={String(items.length)} icon="ListChecks" />
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-white">Nearby fashion store suggestions</h2>
            <StatusBadge tone="text-blue-200" icon="MapPinned" label="Map-ready" />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(fashionShops.length > 0 ? fashionShops : featuredShops.filter((shop) => shop.category === "Fashion")).map((shop) => (
              <article key={shop.id} className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
                <h3 className="font-semibold text-white">{shop.shopName}</h3>
                <p className="mt-1 text-sm text-slate-400">{shop.area}, {shop.city}</p>
                <p className="mt-3 text-sm text-pink-100">{shop.offer}</p>
                <p className="mt-2 text-xs text-slate-500">{shop.products.join(", ")}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, name: "Internet", category: "Internet", amount: 1200 },
    { id: 2, name: "Groceries", category: "Grocery", amount: 3500 },
    { id: 3, name: "Fuel", category: "Fuel", amount: 2200 }
  ]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Grocery");
  const [amount, setAmount] = useState(0);
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <h2 className="text-lg font-semibold text-white">Add expense</h2>
        <div className="mt-5 grid gap-4">
          <TextField label="Name" value={name} onChange={setName} placeholder="Milk, school fees, medicine" />
          <SelectField label="Category" value={category} onChange={setCategory} options={expenseCategories} />
          <NumberField label="Amount" value={amount} onChange={setAmount} />
          <button
            type="button"
            onClick={() => {
              if (!name.trim() || amount <= 0) return;
              setExpenses((items) => [...items, { id: Date.now(), name: name.trim(), category, amount }]);
              setName("");
              setAmount(0);
            }}
            className="h-12 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Add Expense
          </button>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">This month</h2>
          <StatusBadge tone="text-blue-200" icon="ReceiptText" label={formatCurrency(total)} />
        </div>
        <div className="mt-5 grid gap-3">
          {expenses.map((expense) => (
            <div key={expense.id} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-slate-950/60 p-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{expense.name}</p>
                <p className="mt-1 text-xs text-slate-500">{expense.category}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-200">{formatCurrency(expense.amount)}</span>
                <button
                  type="button"
                  aria-label={`Remove ${expense.name}`}
                  onClick={() => setExpenses((items) => items.filter((item) => item.id !== expense.id))}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-red-300/40 hover:text-red-200"
                >
                  <AppIcon name="X" className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SavingsPlanner() {
  const [goal, setGoal] = useState(300000);
  const [saved, setSaved] = useState(85000);
  const [months, setMonths] = useState(12);
  const remaining = Math.max(0, goal - saved);
  const monthly = months > 0 ? remaining / months : 0;
  const progress = goal > 0 ? Math.min(100, Math.round((saved / goal) * 100)) : 0;

  return (
    <div className="grid gap-6">
      <CalculatorShell>
        <NumberField label="Goal amount" value={goal} onChange={setGoal} />
        <NumberField label="Already saved" value={saved} onChange={setSaved} />
        <NumberField label="Months to goal" value={months} onChange={setMonths} min={1} />
        <ResultTile label="Remaining" value={formatCurrency(remaining)} icon="Target" />
        <ResultTile label="Monthly Target" value={formatCurrency(monthly)} icon="PiggyBank" />
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Goal Progress</p>
            <StatusBadge tone="text-green-200" icon="TrendingUp" label={`${progress}%`} />
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-green-600" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </CalculatorShell>
    </div>
  );
}

function EmiPlanner() {
  const [principal, setPrincipal] = useState(800000);
  const [rate, setRate] = useState(9);
  const [months, setMonths] = useState(60);
  const [income, setIncome] = useState(100000);
  const monthlyRate = rate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
  const total = emi * months;
  const pressure = income > 0 ? (emi / income) * 100 : 0;
  const highPressure = pressure > 35;

  return (
    <CalculatorShell>
      <NumberField label="Loan amount" value={principal} onChange={setPrincipal} />
      <NumberField label="Annual rate" value={rate} onChange={setRate} suffix="%" />
      <NumberField label="Tenure" value={months} onChange={setMonths} suffix="mo" min={1} />
      <NumberField label="Monthly income" value={income} onChange={setIncome} />
      <ResultTile label="Monthly EMI" value={formatCurrency(emi)} icon="Landmark" />
      <ResultTile label="Total interest" value={formatCurrency(total - principal)} icon="LineChart" />
      <ResultTile label="Total payable" value={formatCurrency(total)} icon="ReceiptText" />
      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
        <p className="text-sm text-slate-400">EMI Pressure</p>
        <div className="mt-3">
          <StatusBadge
            tone={highPressure ? "text-red-200" : "text-green-200"}
            icon={highPressure ? "AlertTriangle" : "CheckCircle2"}
            label={highPressure ? "High EMI Pressure" : "Healthy"}
          />
        </div>
        <p className="mt-3 text-2xl font-semibold text-white">{formatNumber(pressure)}%</p>
      </div>
    </CalculatorShell>
  );
}

function SubscriptionTracker() {
  const [items, setItems] = useState<Subscription[]>([
    { id: 1, name: "Internet", amount: 1200, dueDay: 6, status: "Paid" },
    { id: 2, name: "Mobile Recharge", amount: 599, dueDay: 12, status: "Due soon" },
    { id: 3, name: "Streaming", amount: 799, dueDay: 18, status: "Review" }
  ]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [dueDay, setDueDay] = useState(1);
  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr]">
      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <h2 className="text-lg font-semibold text-white">Add recurring payment</h2>
        <div className="mt-5 grid gap-4">
          <TextField label="Subscription or bill" value={name} onChange={setName} placeholder="Insurance, OTT, internet" />
          <NumberField label="Amount" value={amount} onChange={setAmount} />
          <NumberField label="Due day" value={dueDay} onChange={setDueDay} min={1} />
          <button
            type="button"
            onClick={() => {
              if (!name.trim() || amount <= 0) return;
              setItems((current) => [...current, { id: Date.now(), name: name.trim(), amount, dueDay, status: "Due soon" }]);
              setName("");
              setAmount(0);
            }}
            className="h-12 rounded-full bg-orange-500 px-5 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            Add Recurring Bill
          </button>
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Recurring bills</h2>
          <StatusBadge tone="text-orange-200" icon="Repeat2" label={formatCurrency(total)} />
        </div>
        <div className="mt-5 grid gap-3">
          {items.map((item) => (
            <div key={item.id} className="grid gap-3 rounded-lg border border-white/10 bg-slate-950/60 p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-slate-500">Due every month on day {item.dueDay}</p>
              </div>
              <p className="text-sm font-semibold text-slate-200">{formatCurrency(item.amount)}</p>
              <StatusBadge
                tone={item.status === "Paid" ? "text-green-200" : item.status === "Due soon" ? "text-orange-200" : "text-red-200"}
                icon={item.status === "Paid" ? "CheckCircle2" : "AlertTriangle"}
                label={item.status}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarPlanner() {
  const [month, setMonth] = useState("June");
  const monthData = [
    { label: "Recurring payments", value: "INR 22,800", icon: "Repeat2" },
    { label: "Goal progress", value: "68%", icon: "Target" },
    { label: "Month spend", value: "INR 74,500", icon: "BarChart3" }
  ];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August"];

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-5">
        <div>
          <h2 className="text-lg font-semibold text-white">Yearly calendar</h2>
          <p className="mt-1 text-sm text-slate-400">Switch months and compare planned spending.</p>
        </div>
        <SelectField label="Month" value={month} onChange={setMonth} options={months} />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {monthData.map((item) => (
          <ResultTile key={item.label} label={`${month} ${item.label}`} value={item.value} icon={item.icon} />
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {months.map((item, index) => (
          <div key={item} className={`rounded-lg border p-4 ${item === month ? "border-violet-400/50 bg-violet-500/15" : "border-white/10 bg-white/[0.045]"}`}>
            <p className="font-semibold text-white">{item.slice(0, 3)}</p>
            <p className="mt-2 text-sm text-slate-400">Spend {formatCurrency(62000 + index * 3200)}</p>
            <p className="mt-1 text-xs text-slate-500">Recurring and goals tracked</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinancialHealth() {
  const [income, setIncome] = useState(120000);
  const [expenses, setExpenses] = useState(74500);
  const [savings, setSavings] = useState(28000);
  const [emi, setEmi] = useState(16000);
  const savingsRate = income > 0 ? (savings / income) * 100 : 0;
  const expenseRate = income > 0 ? (expenses / income) * 100 : 0;
  const emiRate = income > 0 ? (emi / income) * 100 : 0;
  const score = Math.max(0, Math.min(100, Math.round(100 - expenseRate + savingsRate - Math.max(0, emiRate - 25))));
  const label = score >= 75 ? "Great Savings" : score >= 55 ? "Healthy" : score >= 40 ? "Warning" : "Over Budget";
  const tone = label === "Over Budget" ? "text-red-200" : label === "Warning" ? "text-orange-200" : "text-green-200";
  const icon = label === "Warning" || label === "Over Budget" ? "AlertTriangle" : "CheckCircle2";

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr]">
      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <h2 className="text-lg font-semibold text-white">Inputs</h2>
        <div className="mt-5 grid gap-4">
          <NumberField label="Monthly income" value={income} onChange={setIncome} />
          <NumberField label="Total expenses" value={expenses} onChange={setExpenses} />
          <NumberField label="Savings" value={savings} onChange={setSavings} />
          <NumberField label="EMI payments" value={emi} onChange={setEmi} />
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Financial Health Score</p>
            <p className="mt-2 text-5xl font-semibold text-white">{score}</p>
          </div>
          <StatusBadge tone={tone} icon={icon} label={label} />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <ResultTile label="Savings rate" value={`${formatNumber(savingsRate)}%`} icon="PiggyBank" />
          <ResultTile label="Expense rate" value={`${formatNumber(expenseRate)}%`} icon="ReceiptText" />
          <ResultTile label="EMI pressure" value={`${formatNumber(emiRate)}%`} icon="Gauge" />
        </div>
        <p className="mt-5 rounded-lg border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300">
          Status uses score, label, icon, and explanatory text together so warnings are accessible without relying on color alone.
        </p>
      </div>
    </div>
  );
}

export function ToolWorkspace({ tool }: ToolWorkspaceProps) {
  const accent = accentStyles[tool.accent];
  const content = useMemo<ReactNode>(() => {
    if (tool.kind === "file") return <FileTool tool={tool} />;
    if (tool.slug === "grocery-planner") return <GroceryPlanner />;
    if (tool.slug === "fashion-planner") return <FashionPlanner />;
    if (tool.slug === "map-discovery") return <MapDiscoveryPanel />;
    if (tool.slug === "expense-tracker") return <ExpenseTracker />;
    if (tool.slug === "savings-goal-planner") return <SavingsPlanner />;
    if (tool.slug === "emi-planner") return <EmiPlanner />;
    if (tool.slug === "subscription-tracker") return <SubscriptionTracker />;
    if (tool.slug === "yearly-planning-calendar") return <CalendarPlanner />;
    if (tool.slug === "financial-health-score") return <FinancialHealth />;
    if (tool.slug === "family-budget-planner") return <BudgetPlanner family />;
    return <BudgetPlanner />;
  }, [tool]);

  return <div className={`rounded-lg border bg-slate-900/50 p-4 sm:p-6 ${accent.border}`}>{content}</div>;
}
