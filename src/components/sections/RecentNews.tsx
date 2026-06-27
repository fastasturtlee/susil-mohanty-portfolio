import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { NewsItem } from '../../types'

interface RecentNewsProps {
  items: NewsItem[]
}

const AUTOPLAY_MS = 6000

export default function RecentNews({ items }: RecentNewsProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const count = items.length

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir)
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index])
  const next = useCallback(() => goTo(index + 1, 1), [goTo, index])

  useEffect(() => {
    if (paused || count <= 1) return
    const id = window.setInterval(() => goTo(index + 1, 1), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, count, goTo, index])

  if (count === 0) return null

  const item = items[index]

  return (
    <section
      aria-labelledby="recent-news-heading"
      className="py-10"
    >
      <div className="mx-auto max-w-[1100px] px-4">
        <div
          className="flex items-stretch rounded-xl overflow-hidden shadow-sm border border-[var(--color-border)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          role="group"
          aria-roledescription="carousel"
          aria-label="Recent news"
        >
          {/* Left: indigo label */}
          <div
            className="shrink-0 flex items-center justify-center px-6 py-6 min-w-[110px]"
            style={{ backgroundColor: 'var(--color-teal)' }}
          >
            <h2
              id="recent-news-heading"
              className="font-serif text-white text-center text-lg leading-tight"
            >
              Recent<br />News
            </h2>
          </div>

          {/* Right: light content panel */}
          <div
            className="flex-1 flex flex-col justify-center px-6 py-5 min-w-0"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.article
                  key={item.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -30 }}
                  transition={{ duration: 0.3 }}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    {item.featured && (
                      <span className="inline-flex items-center rounded-full bg-[var(--color-gold-light)] text-[var(--color-gold-dark)] px-2.5 py-0.5 text-xs font-semibold">
                        ★ New
                      </span>
                    )}
                    {item.date && (
                      <span className="text-sm font-medium text-[var(--color-teal)]">{item.date}</span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed">{item.text}</p>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Dots + navigation */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2">
                {items.map((it, i) => (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => goTo(i, i > index ? 1 : -1)}
                    aria-label={`Go to news item ${i + 1}`}
                    aria-current={i === index}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? 'w-5 bg-[var(--color-teal)]'
                        : 'w-2 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous news item"
                  className="p-1.5 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-colors"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next news item"
                  className="p-1.5 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-colors"
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
