import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center grow text-center px-4">
      <h2 className="text-3xl mb-4">Page Not Found</h2>
      <p className="max-w-md text-muted-foreground mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable. Please go back to the previous
        page or visit the home page.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
