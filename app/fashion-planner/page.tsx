import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageShell } from "@/components/tool-page-shell";
import { getToolByPath } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Fashion Planner",
  description:
    "Plan monthly fashion budgets, boys, girls, unisex needs, seasonal wardrobes, event outfits, shopping lists, and nearby fashion stores.",
  alternates: {
    canonical: "/fashion-planner"
  }
};

export default function FashionPlannerPage() {
  const tool = getToolByPath("/fashion-planner");
  if (!tool) notFound();
  return <ToolPageShell tool={tool} />;
}
