import { profile, publications, researchAreas } from '../data/content'
import Hero from '../components/sections/Hero'
import ImpactCounters from '../components/sections/ImpactCounters'
import RecentPublications from '../components/sections/RecentPublications'
import ResearchAreas from '../components/sections/ResearchAreas'
import { sortPublicationsByYear } from '../utils/sortPublications'

const sorted = sortPublicationsByYear(publications)

const counters = [
  { value: publications.filter((p) => p.type !== 'preprint').length, label: 'Peer-reviewed Publications' },
  { value: researchAreas.length, label: 'Research Areas' },
  { value: 2, label: 'Courses Taught' },
  { value: 1, label: 'IACR Flagship Paper' },
]

export default function HomePage() {
  return (
    <main id="main-content">
      <title>Dr. Susil Kumar Mohanty — IIT Jodhpur</title>
      <meta
        name="description"
        content="Personal portfolio of Dr. Susil Kumar Mohanty, Assistant Professor of CSE at IIT Jodhpur, specializing in blockchain, payment channel networks, and cryptographic protocols."
      />
      <Hero profile={profile} />
      <ImpactCounters counters={counters} />
      <RecentPublications publications={sorted} />
      <ResearchAreas areas={researchAreas} />
    </main>
  )
}
