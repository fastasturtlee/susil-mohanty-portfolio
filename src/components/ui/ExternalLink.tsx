interface ExternalLinkProps {
  href: string
  label: string
  children: React.ReactNode
  className?: string
}

export default function ExternalLink({ href, label, children, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in new tab)`}
      className={className}
    >
      {children}
    </a>
  )
}
