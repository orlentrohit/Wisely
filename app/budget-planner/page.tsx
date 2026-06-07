import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageShell } from "@/components/tool-page-shell";
import { getToolByPath } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Budget Planner",
  description:
    "Plan monthly income, expenses, grocery spending, savings, EMI, emergency fund, and remaining balance with Wisely.",
  alternates: {
    canonical: "/budget-planner"
  }
};

export default function BudgetPlannerPage() {
  const tool = getToolByPath("/budget-planner");
  if (!tool) notFound();
  return <ToolPageShell tool={tool} />;
}
