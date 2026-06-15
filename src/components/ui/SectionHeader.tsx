interface SectionHeaderProps {
  id?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ id, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 id={id} className="font-serif text-3xl text-[var(--color-text)]">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-[var(--color-text-muted)] text-base max-w-2xl">{subtitle}</p>
      )}
      <div className={`mt-3 h-0.5 w-12 bg-[var(--color-teal)] ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
