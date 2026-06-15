import { motion } from 'motion/react'
import type { JourneyItem } from '../../types'
import Badge from '../ui/Badge'
import SectionHeader from '../ui/SectionHeader'

interface JourneyTimelineProps {
  items: JourneyItem[]
  type: 'education' | 'experience'
  title: string
}

function TimelineItem({ item, index }: { item: JourneyItem; index: number }) {
  const periodStr =
    item.period.end === 'present'
      ? `${item.period.start} – Present`
      : item.period.start === item.period.end
      ? String(item.period.start)
      : `${item.period.start} – ${item.period.end}`

  return (
    <motion.article
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[var(--color-teal)] ring-2 ring-[var(--color-background)] ring-offset-0" aria-hidden="true" />
      <div className="absolute left-1.5 top-4 bottom-0 w-px bg-[var(--color-border)] last:hidden" aria-hidden="true" />

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 hover:border-[var(--color-teal)]/50 hover:shadow-sm transition-all">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-base text-[var(--color-text)]">{item.title}</h3>
            <p className="mt-0.5 text-sm font-medium text-[var(--color-teal)]">{item.institution}</p>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            <span className="text-xs text-[var(--color-text-muted)] whitespace-nowrap">{periodStr}</span>
            {item.rank && <Badge variant="rank">{item.rank}</Badge>}
          </div>
        </div>

        {item.location && (
          <p className="mt-1.5 text-xs text-[var(--color-text-muted)]">📍 {item.location}</p>
        )}
        {item.description && (
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
        )}
        {item.grant && (
          <p className="mt-2 text-xs text-[var(--color-text-muted)] italic">
            Grant: {item.grant}
          </p>
        )}
        {item.supervisor && (
          <p className="mt-1.5 text-xs text-[var(--color-text-muted)]">
            Supervisor: {item.supervisor}
          </p>
        )}
        {item.thesis && (
          <p className="mt-1.5 text-xs text-[var(--color-text-muted)] italic leading-relaxed">
            Thesis: "{item.thesis}"
          </p>
        )}
      </div>
    </motion.article>
  )
}

export default function JourneyTimeline({ items, type, title }: JourneyTimelineProps) {
  const filtered = items
    .filter((i) => i.type === type)
    .sort((a, b) => b.period.start - a.period.start)

  return (
    <section aria-labelledby={`${type}-heading`} className="py-12">
      <SectionHeader id={`${type}-heading`} title={title} />
      <div className="relative">
        {filtered.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
