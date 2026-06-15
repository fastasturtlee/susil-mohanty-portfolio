import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-serif text-6xl text-[var(--color-text)]">404</h1>
      <p className="text-[var(--color-text-muted)]">Page not found.</p>
      <Link to="/" className="text-[var(--color-teal)] underline hover:text-[var(--color-teal-hover)]">
        Return home
      </Link>
    </main>
  )
}
