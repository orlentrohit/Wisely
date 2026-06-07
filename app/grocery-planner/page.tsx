import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageShell } from "@/components/tool-page-shell";
import { getToolByPath } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Grocery Planner",
  description:
    "Plan weekly or monthly grocery spending by family size, country, city, manual prices, categories, and nearby grocery shops.",
  alternates: {
    canonical: "/grocery-planner"
  }
};

export default function GroceryPlannerPage() {
  const tool = getToolByPath("/grocery-planner");
  if (!tool) notFound();
  return <ToolPageShell tool={tool} />;
}
