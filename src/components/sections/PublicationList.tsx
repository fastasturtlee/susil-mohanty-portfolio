import { useState } from 'react'
import { Search, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import type { Publication } from '../../types'
import type { PubTypeFilter } from '../../hooks/usePublicationFilter'
import Badge from '../ui/Badge'
import CopyBibTeX from '../ui/CopyBibTeX'
import { formatAuthors } from '../../utils/formatAuthors'
import { formatBibTeX } from '../../utils/formatBibTeX'

interface PublicationListProps {
  publications: Publication[]
  typeFilter: PubTypeFilter
  query: string
  yearFilter: string
  availableYears: number[]
  onTypeChange: (t: PubTypeFilter) => void
  onQueryChange: (q: string) => void
  onYearChange: (y: string) => void
}

const typeLabels: { value: PubTypeFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'journal', label: 'Journals' },
  { value: 'conference', label: 'Conferences' },
  { value: 'preprint', label: 'Preprints' },
]

function PublicationEntry({ pub, index }: { pub: Publication; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className={`rounded-xl border p-5 transition-all ${
        pub.featured
          ? 'border-[var(--color-gold-dark)]/40 bg-[var(--color-gold-light)]/30'
          : 'border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-teal)]/50'
      }`}
    >
      <div className="flex gap-4">
        <span className="shrink-0 w-6 text-sm text-[var(--color-text-muted)] font-mono pt-0.5 text-right">
          {index + 1}.
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant={pub.type}>{pub.type}</Badge>
            {pub.featured && <Badge variant="featured">★ CRYPTO 2026</Badge>}
            <span className="text-xs text-[var(--color-text-muted)]">{pub.year}</span>
          </div>

          <h3 className="text-sm font-semibold text-[var(--color-text)] leading-snug">{pub.title}</h3>

          <p className="mt-1.5 text-xs text-[var(--color-text-muted)] leading-relaxed">
            {formatAuthors(pub.authors)}
          </p>

          <p className="mt-1 text-xs text-[var(--color-teal)] font-medium italic">{pub.venue}</p>

          {pub.metrics && (
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">{pub.metrics}</p>
          )}

          {/* Abstract accordion */}
          {pub.abstract && (
            <div className="mt-3">
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
                aria-controls={`abstract-${pub.id}`}
                className="inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-teal)] transition-colors"
              >
                {expanded ? <ChevronUp size={12} aria-hidden="true" /> : <ChevronDown size={12} aria-hidden="true" />}
                Abstract
              </button>
              {expanded && (
                <p id={`abstract-${pub.id}`} className="mt-2 text-xs text-[var(--color-text-muted)] leading-relaxed border-l-2 border-[var(--color-teal-light)] pl-3">
                  {pub.abstract}
                </p>
              )}
            </div>
          )}

          {/* Action links */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {pub.doi && (
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`DOI for "${pub.title}" (opens in new tab)`}
                className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs bg-[var(--color-surface)] text-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-colors min-h-[44px]"
              >
                <ExternalLink size={11} aria-hidden="true" /> DOI
              </a>
            )}
            {pub.pdfUrl && (
              <a
                href={pub.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`PDF/preprint for "${pub.title}" (opens in new tab)`}
                className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-colors min-h-[44px]"
              >
                <ExternalLink size={11} aria-hidden="true" /> {pub.type === 'preprint' ? 'ePrint' : 'PDF'}
              </a>
            )}
            {pub.codeUrl && (
              <a
                href={pub.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Code repository for "${pub.title}" (opens in new tab)`}
                className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-colors min-h-[44px]"
              >
                Code
              </a>
            )}
            <CopyBibTeX bibtex={formatBibTeX(pub)} publicationId={pub.id} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default function PublicationList({
  publications,
  typeFilter,
  query,
  yearFilter,
  availableYears,
  onTypeChange,
  onQueryChange,
  onYearChange,
}: PublicationListProps) {
  return (
    <div>
      {/* Search + filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by title, author, or venue…"
            aria-label="Search publications"
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] pl-9 pr-4 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-teal)] focus:outline-none transition-colors"
          />
        </div>
        <div
          role="group"
          aria-label="Filter by type"
          className="flex flex-wrap gap-2"
        >
          {typeLabels.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => onTypeChange(value)}
              aria-pressed={typeFilter === value}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors min-h-[44px] ${
                typeFilter === value
                  ? 'bg-[var(--color-teal)] text-white'
                  : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <select
          value={yearFilter}
          onChange={(e) => onYearChange(e.target.value)}
          aria-label="Filter by year"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-teal)] focus:outline-none"
        >
          <option value="all">All years</option>
          {availableYears.map((y) => (
            <option key={y} value={String(y)}>{y}</option>
          ))}
        </select>
      </div>

      {/* Results summary */}
      <p className="mb-4 text-sm text-[var(--color-text-muted)]" aria-live="polite">
        {publications.length === 0
          ? 'No publications match your search.'
          : `Showing ${publications.length} publication${publications.length !== 1 ? 's' : ''}`}
      </p>

      {/* List */}
      <div className="flex flex-col gap-4">
        {publications.map((pub, i) => (
          <PublicationEntry key={pub.id} pub={pub} index={i} />
        ))}
      </div>
    </div>
  )
}
