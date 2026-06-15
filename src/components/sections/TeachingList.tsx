import { motion } from 'motion/react'
import { BookOpen, ExternalLink } from 'lucide-react'
import type { Course } from '../../types'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'

interface TeachingListProps {
  courses: Course[]
}

export default function TeachingList({ courses }: TeachingListProps) {
  return (
    <section aria-labelledby="courses-heading" className="py-12">
      <SectionHeader
        id="courses-heading"
        title="Courses"
        subtitle="Courses taught at IIT Jodhpur."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, i) => (
          <motion.article
            key={course.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 hover:border-[var(--color-teal)]/50 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--color-teal-light)]">
                  <BookOpen size={18} className="text-[var(--color-teal)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--color-text-muted)]">{course.code}</p>
                  <h3 className="font-serif text-base text-[var(--color-text)]">{course.name}</h3>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-xs text-[var(--color-text-muted)]">{course.semester} {course.year}</span>
                {course.active && <Badge variant="rank">Active</Badge>}
              </div>
            </div>

            {course.description && (
              <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">{course.description}</p>
            )}

            {course.textbooks && course.textbooks.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wide mb-2">References</p>
                <ul className="space-y-1">
                  {course.textbooks.map((book, bi) => (
                    <li key={bi} className="text-xs text-[var(--color-text-muted)] leading-relaxed flex gap-1.5">
                      <span className="shrink-0 text-[var(--color-teal)]">·</span>
                      {book}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.syllabusUrl && (
              <a
                href={course.syllabusUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Syllabus for ${course.name} (opens in new tab)`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[var(--color-teal)] hover:text-[var(--color-teal-hover)] transition-colors"
              >
                <ExternalLink size={12} aria-hidden="true" /> Syllabus
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
