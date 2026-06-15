import { researchAreas } from '../data/content'
import ResearchAreas from '../components/sections/ResearchAreas'

export default function ResearchPage() {
  return (
    <main id="main-content" className="mx-auto max-w-[1100px] px-4 py-16">
      <title>Research — Dr. Susil Kumar Mohanty</title>
      <meta
        name="description"
        content="Research areas of Dr. Susil Kumar Mohanty: Payment Channel Networks, Blockchain, Social IoV, Decentralized Energy, ZKP, and Federated Learning."
      />
      <ResearchAreas areas={researchAreas} />
    </main>
  )
}
