import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: `${post.title} | Wisely`,
      description: post.excerpt,
      url: `/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
          {post.category}
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-sm text-slate-500">
          {post.publishedAt} | {post.readTime}
        </p>
        <p className="mt-8 text-lg leading-8 text-slate-300">{post.excerpt}</p>
        <div className="mt-10 grid gap-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
              <p className="mt-4 leading-8 text-slate-300">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
