import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-wisely-ink py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-slate-400">
          The page may have moved, or the link may be incomplete.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
