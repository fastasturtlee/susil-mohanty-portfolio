import { motion } from 'motion/react'
import type { ResearchArea } from '../../types'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'

interface ResearchAreasProps {
  areas: ResearchArea[]
}

export default function ResearchAreas({ areas }: ResearchAreasProps) {
  return (
    <section aria-labelledby="research-heading" className="py-16 bg-[var(--color-surface)]/70">
      <div className="mx-auto max-w-[1100px] px-4">
        <SectionHeader
          id="research-heading"
          title="Research Areas"
          subtitle="My work spans distributed systems security, cryptographic protocols, and decentralized technologies."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.article
              key={area.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 hover:border-[var(--color-teal)] hover:shadow-sm transition-all"
            >
              <h3 className="font-serif text-lg text-[var(--color-text)]">{area.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {area.description}
              </p>
              {area.tags && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
