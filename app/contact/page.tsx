import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Wisely team for support, partnerships, and product feedback.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <section className="bg-wisely-ink py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Talk to Wisely</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Send feedback, request a workflow, or ask about bringing Wisely tools into your team.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex text-sm font-semibold text-violet-200 transition hover:text-white"
          >
            {siteConfig.email}
          </a>
        </div>
        <form
          action={`mailto:${siteConfig.email}`}
          method="post"
          encType="text/plain"
          className="rounded-lg border border-white/10 bg-white/[0.045] p-6"
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-200">Name</span>
              <input
                name="name"
                className="h-12 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-200">Email</span>
              <input
                type="email"
                name="email"
                className="h-12 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-200">Message</span>
              <textarea
                name="message"
                className="min-h-36 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/15"
              />
            </label>
            <button
              type="submit"
              className="h-12 rounded-full bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
