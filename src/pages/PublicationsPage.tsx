import { publications } from '../data/content'
import PublicationList from '../components/sections/PublicationList'
import { usePublicationFilter } from '../hooks/usePublicationFilter'
import { sortPublicationsByYear } from '../utils/sortPublications'
import SectionHeader from '../components/ui/SectionHeader'

const sorted = sortPublicationsByYear(publications)

export default function PublicationsPage() {
  const {
    filtered,
    typeFilter,
    query,
    yearFilter,
    availableYears,
    setType,
    setQuery,
    setYear,
  } = usePublicationFilter(sorted)

  return (
    <main id="main-content" className="mx-auto max-w-[1100px] px-4 py-16">
      <title>Publications — Dr. Susil Kumar Mohanty</title>
      <meta
        name="description"
        content="Complete list of publications by Dr. Susil Kumar Mohanty including journals in ACM TOPS, IEEE T-ITS, Elsevier, and conferences including CRYPTO 2026."
      />
      <SectionHeader
        title="Publications"
        subtitle={`${publications.length} publications across journals, conferences, and preprints.`}
      />
      <PublicationList
        publications={filtered}
        typeFilter={typeFilter}
        query={query}
        yearFilter={yearFilter}
        availableYears={availableYears}
        onTypeChange={setType}
        onQueryChange={setQuery}
        onYearChange={setYear}
      />
    </main>
  )
}
