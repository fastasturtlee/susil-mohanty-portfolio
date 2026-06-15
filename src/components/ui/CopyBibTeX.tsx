import { useState } from 'react'
import { Clipboard, Check } from 'lucide-react'

interface CopyBibTeXProps {
  bibtex: string
  publicationId: string
}

export default function CopyBibTeX({ bibtex, publicationId }: CopyBibTeXProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: select a temporary textarea
      const el = document.createElement('textarea')
      el.value = bibtex
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy BibTeX for publication ${publicationId}`}
      title="Copy BibTeX"
      className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-teal)] transition-colors min-w-[44px] min-h-[44px] justify-center"
    >
      {copied ? (
        <>
          <Check size={13} aria-hidden="true" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Clipboard size={13} aria-hidden="true" />
          <span>BibTeX</span>
        </>
      )}
    </button>
  )
}
