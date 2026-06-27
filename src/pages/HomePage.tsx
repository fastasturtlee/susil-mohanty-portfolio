import { profile, publications, researchAreas, news } from '../data/content'
import Hero from '../components/sections/Hero'
import RecentNews from '../components/sections/RecentNews'
import RecentPublications from '../components/sections/RecentPublications'
import ResearchAreas from '../components/sections/ResearchAreas'
import { sortPublicationsByYear } from '../utils/sortPublications'

const sorted = sortPublicationsByYear(publications)

export default function HomePage() {
  return (
    <main id="main-content">
      <title>Dr. Susil Kumar Mohanty — IIT Jodhpur</title>
      <meta
        name="description"
        content="Personal portfolio of Dr. Susil Kumar Mohanty, Assistant Professor of CSE at IIT Jodhpur, specializing in blockchain, payment channel networks, and cryptographic protocols."
      />
      <Hero profile={profile} />
      <RecentNews items={news} />
      <RecentPublications publications={sorted} />
      <ResearchAreas areas={researchAreas} />
    </main>
  )
}
