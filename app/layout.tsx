import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Wisely - Monthly Budget, Grocery, Expense, and Savings Planner",
    template: "%s | Wisely"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "monthly budget planner",
    "grocery planner",
    "fashion planner",
    "local shop discovery",
    "map discovery",
    "expense tracker",
    "savings goal planner",
    "EMI planner",
    "subscription tracker",
    "family budget planner",
    "financial health score",
    "shop listing",
    "budget planner",
    "Wisely"
  ],
  authors: [{ name: "Wisely" }],
  creator: "Wisely",
  publisher: "Wisely",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Wisely - Monthly Planning SaaS",
    description: siteConfig.description
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisely - Monthly Planning SaaS",
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    url: siteConfig.url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description: siteConfig.description
  };

  return (
    <html lang="en">
      <body>
        <Script
          id="wisely-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
