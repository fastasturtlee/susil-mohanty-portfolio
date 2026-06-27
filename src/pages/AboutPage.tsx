import { journeyItems, profile } from '../data/content'
import JourneyTimeline from '../components/sections/JourneyTimeline'

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto max-w-[1100px] px-4 py-16">
      <title>About — Dr. Susil Kumar Mohanty</title>
      <meta
        name="description"
        content="Career journey and educational background of Dr. Susil Kumar Mohanty — PhD IIT Patna, Postdoc University of Warsaw, Assistant Professor IIT Jodhpur."
      />

      <div className="mb-2">
        <h1 className="font-serif text-4xl text-[var(--color-text)]">About</h1>
        <div className="mt-3 h-0.5 w-12 bg-[var(--color-teal)]" />
      </div>

      <p className="mt-6 mb-2 text-base text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
        {profile.about}
      </p>

      <JourneyTimeline items={journeyItems} type="experience" title="Work Experience" />
      <JourneyTimeline items={journeyItems} type="education" title="Education" />
    </main>
  )
}
