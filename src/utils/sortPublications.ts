import type { Publication } from '../types'

export function sortPublicationsByYear(pubs: Publication[]): Publication[] {
  return [...pubs].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year
    // featured publications bubble to top within same year
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })
}
