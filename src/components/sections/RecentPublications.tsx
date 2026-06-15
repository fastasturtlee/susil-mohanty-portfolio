import { Link } from 'react-router-dom'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import type { Publication } from '../../types'
import Badge from '../ui/Badge'
import SectionHeader from '../ui/SectionHeader'
import { formatAuthors } from '../../utils/formatAuthors'

interface RecentPublicationsProps {
  publications: Publication[]
}

export default function RecentPublications({ publications }: RecentPublicationsProps) {
  const recent = publications.slice(0, 3)

  return (
    <section aria-labelledby="recent-pubs-heading" className="py-16 bg-[var(--color-background)]">
      <div className="mx-auto max-w-[1100px] px-4">
        <SectionHeader id="recent-pubs-heading" title="Recent Publications" />
        <div className="flex flex-col gap-4">
          {recent.map((pub, i) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 hover:border-[var(--color-teal)] hover:shadow-sm transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <Badge variant={pub.type}>{pub.type}</Badge>
                  {pub.featured && <Badge variant="featured">★ Featured</Badge>}
                  <span className="text-xs text-[var(--color-text-muted)]">{pub.year}</span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-text)] leading-snug">{pub.title}</h3>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {formatAuthors(pub.authors)}
                </p>
                <p className="mt-1 text-xs text-[var(--color-teal)] font-medium">{pub.venue}</p>
              </div>
              {(pub.doi || pub.pdfUrl) && (
                <a
                  href={pub.doi ?? pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View "${pub.title}" (opens in new tab)`}
                  className="shrink-0 self-center text-[var(--color-text-muted)] hover:text-[var(--color-teal)] transition-colors"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
        <div className="mt-7 text-center">
          <Link
            to="/publications"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-teal)] hover:text-[var(--color-teal-hover)] transition-colors"
          >
            View all publications <ChevronRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
