import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppIcon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { ToolPageShell } from "@/components/tool-page-shell";
import {
  accentStyles,
  categories,
  getCategoryByPath,
  getToolByPath,
  getToolsByCategory,
  tools
} from "@/lib/tools";

type CleanPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const reservedSlugs = new Set([
    "dashboard",
    "budget-planner",
    "grocery-planner",
    "fashion-planner",
    "map-discovery",
    "seller-join",
    "pricing",
    "faq"
  ]);
  const categorySlugs = categories.map((category) => ({ slug: category.path.slice(1) }));
  const toolSlugs = tools
    .filter((tool) => !tool.path.startsWith("/tools/"))
    .filter((tool) => !reservedSlugs.has(tool.path.slice(1)))
    .map((tool) => ({ slug: tool.path.slice(1) }));

  return [...categorySlugs, ...toolSlugs].filter(
    (item, index, all) => all.findIndex((other) => other.slug === item.slug) === index
  );
}

export async function generateMetadata({ params }: CleanPageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = `/${slug}`;
  const tool = getToolByPath(path);
  const category = getCategoryByPath(path);

  if (tool) {
    return {
      title: tool.title,
      description: tool.description,
      alternates: {
        canonical: tool.path
      },
      openGraph: {
        title: `${tool.title} | Wisely`,
        description: tool.description,
        url: tool.path
      }
    };
  }

  if (category) {
    return {
      title: category.seoTitle,
      description: category.description,
      alternates: {
        canonical: category.path
      },
      openGraph: {
        title: `${category.seoTitle} | Wisely`,
        description: category.description,
        url: category.path
      }
    };
  }

  return {};
}

export default async function CleanPage({ params }: CleanPageProps) {
  const { slug } = await params;
  const path = `/${slug}`;
  const tool = getToolByPath(path);
  const category = getCategoryByPath(path);

  if (!tool && !category) notFound();

  if (tool) {
    return <ToolPageShell tool={tool} />;
  }

  if (!category) notFound();

  const accent = accentStyles[category.accent];
  const categoryTools = getToolsByCategory(category.slug);

  return (
    <section className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Category" title={category.seoTitle} description={category.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryTools.map((item) => (
            <ToolCard key={item.slug} tool={item} />
          ))}
        </div>
        {category.accent === "neutral" ? (
          <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.045] p-6">
            <div className="flex items-start gap-3">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${accent.soft} ${accent.text}`}>
                <AppIcon name="Info" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-semibold text-white">Secondary SEO tools</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  These converters help people discover Wisely, but the core product remains monthly planning, expenses, groceries, savings, EMI, subscriptions, and reports.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
