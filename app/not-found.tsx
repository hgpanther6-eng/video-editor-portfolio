import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center">
      <div className="text-center px-6">
        <span className="text-xs uppercase tracking-editorial text-charcoal-muted mb-6 block">
          404
        </span>
        <h1 className="text-display-md font-semibold tracking-tight text-charcoal mb-4">
          Page not found.
        </h1>
        <p className="text-body text-charcoal-muted mb-10 max-w-sm mx-auto">
          This page doesn't exist or was moved. Head back to see the work.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-warm-white text-sm font-medium rounded-sm hover:bg-charcoal-mid transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
