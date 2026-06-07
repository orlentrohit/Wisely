import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { categories, tools } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/dashboard",
    "/budget-planner",
    "/grocery-planner",
    "/fashion-planner",
    "/map-discovery",
    "/seller-join",
    "/pricing",
    "/blog",
    "/faq",
    "/contact",
    "/privacy",
    "/terms"
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}${category.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  const toolRoutes = tools.map((tool) => ({
    url: `${siteConfig.url}${tool.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: tool.kind === "planner" ? 0.85 : 0.6
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes, ...blogRoutes].filter(
    (route, index, all) => all.findIndex((item) => item.url === route.url) === index
  );
}
