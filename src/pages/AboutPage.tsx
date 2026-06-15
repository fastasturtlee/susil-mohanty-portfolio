import { journeyItems, profile } from '../data/content'
import JourneyTimeline from '../components/sections/JourneyTimeline'
import { Download } from 'lucide-react'

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto max-w-[1100px] px-4 py-16">
      <title>About — Dr. Susil Kumar Mohanty</title>
      <meta
        name="description"
        content="Career journey and educational background of Dr. Susil Kumar Mohanty — PhD IIT Patna, Postdoc University of Warsaw, Assistant Professor IIT Jodhpur."
      />

      <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
        <div>
          <h1 className="font-serif text-4xl text-[var(--color-text)]">About</h1>
          <div className="mt-3 h-0.5 w-12 bg-[var(--color-teal)]" />
        </div>
        <a
          href={profile.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV (PDF, opens in new tab)"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-teal)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-hover)] transition-colors"
        >
          <Download size={15} aria-hidden="true" /> Download CV
        </a>
      </div>

      <p className="mt-6 mb-2 text-base text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
        {profile.about}
      </p>

      <JourneyTimeline items={journeyItems} type="experience" title="Work Experience" />
      <JourneyTimeline items={journeyItems} type="education" title="Education" />
    </main>
  )
}
