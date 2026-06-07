import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides for monthly budgeting, grocery planning, EMI planning, savings, and calendar-based money management.",
  alternates: {
    canonical: "/blog"
  }
};

export default function BlogPage() {
  return (
    <section className="bg-wisely-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Wisely guides</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Practical writing for family budgeting, grocery planning, EMI decisions, savings goals, and recurring expenses.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
                {post.category}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{post.excerpt}</p>
              <p className="mt-6 text-xs text-slate-500">
                {post.publishedAt} | {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
