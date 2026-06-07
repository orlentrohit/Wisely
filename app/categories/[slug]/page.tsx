import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AppIcon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { accentStyles, categories, getCategory, getToolsByCategory } from "@/lib/tools";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/categories/${category.slug}`
    },
    openGraph: {
      title: `${category.name} | Wisely`,
      description: category.description,
      url: `/categories/${category.slug}`
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(category.slug);
  const accent = accentStyles[category.accent];

  return (
    <section className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Category"
          title={category.name}
          description={category.description}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
        <Link
          href={category.path}
          className={`mt-10 inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition ${accent.button}`}
        >
          Open clean {category.seoTitle} page
          <AppIcon name="ChevronRight" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
