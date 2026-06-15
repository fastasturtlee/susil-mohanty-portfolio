import { useSearchParams } from 'react-router-dom'
import type { Publication } from '../types'

export type PubTypeFilter = 'all' | 'journal' | 'conference' | 'preprint'

export function usePublicationFilter(publications: Publication[]) {
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = (searchParams.get('type') ?? 'all') as PubTypeFilter
  const query = searchParams.get('q') ?? ''
  const yearFilter = searchParams.get('year') ?? 'all'

  const setType = (type: PubTypeFilter) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (type === 'all') next.delete('type')
      else next.set('type', type)
      return next
    })
  }

  const setQuery = (q: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (!q) next.delete('q')
      else next.set('q', q)
      return next
    })
  }

  const setYear = (year: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (year === 'all') next.delete('year')
      else next.set('year', year)
      return next
    })
  }

  const filtered = publications.filter((pub) => {
    if (typeFilter !== 'all' && pub.type !== typeFilter) return false
    if (yearFilter !== 'all' && String(pub.year) !== yearFilter) return false
    if (query) {
      const q = query.toLowerCase()
      return (
        pub.title.toLowerCase().includes(q) ||
        pub.venue.toLowerCase().includes(q) ||
        pub.authors.some((a) => a.toLowerCase().includes(q))
      )
    }
    return true
  })

  const availableYears = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a)

  return { filtered, typeFilter, query, yearFilter, availableYears, setType, setQuery, setYear }
}
