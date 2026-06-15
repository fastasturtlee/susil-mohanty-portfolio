type BadgeVariant = 'journal' | 'conference' | 'preprint' | 'featured' | 'rank' | 'default'

const variantClasses: Record<BadgeVariant, string> = {
  journal: 'bg-[var(--color-emerald-light)] text-[var(--color-emerald-dark)]',
  conference: 'bg-[var(--color-blue-light)] text-[var(--color-blue-dark)]',
  preprint: 'bg-[var(--color-amber-light)] text-[var(--color-amber-dark)]',
  featured: 'bg-[var(--color-gold-light)] text-[var(--color-gold-dark)] font-semibold',
  rank: 'bg-[var(--color-teal-light)] text-[var(--color-teal)]',
  default: 'bg-[var(--color-surface)] text-[var(--color-text-muted)]',
}

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

export default function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
