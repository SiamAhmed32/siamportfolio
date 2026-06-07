import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-center text-white">
      <section className="max-w-2xl">
        <p className="section-label text-xs">404</p>
        <h1 className="display-title mt-6 text-7xl uppercase md:text-9xl">Page Not Found</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">
          The page you are looking for does not exist. Go back to the portfolio homepage.
        </p>
        <Link href="/" className="orange-button mt-8 text-sm">
          Back Home
        </Link>
      </section>
    </main>
  );
}
