import { GraduationCap, Link2, Code2, BookOpen, FlaskConical } from 'lucide-react'
import { profile } from '../../data/content'
import type { SocialPlatform } from '../../types'

const BUILD_DATE = import.meta.env.VITE_BUILD_DATE ?? new Date().getFullYear().toString()

const platformIcons: Record<SocialPlatform, React.ReactNode> = {
  'google-scholar': <GraduationCap size={16} aria-hidden="true" />,
  researchgate: <FlaskConical size={16} aria-hidden="true" />,
  dblp: <BookOpen size={16} aria-hidden="true" />,
  linkedin: <Link2 size={16} aria-hidden="true" />,
  github: <Code2 size={16} aria-hidden="true" />,
}

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[var(--color-teal)] mt-20">
      <div className="mx-auto max-w-[1100px] px-4 py-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-serif text-base text-white">{profile.name}</p>
          <p className="text-sm text-white/75 mt-0.5">{profile.title}</p>
          <p className="text-sm text-white/75">Department of {profile.department}</p>
          <p className="text-sm text-white/75">{profile.institution}</p>
          <p className="text-sm text-white/75 mt-2">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition-colors"
            >
              {profile.email}
            </a>
          </p>
          <p className="text-sm text-white/75">
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              className="hover:text-white transition-colors"
            >
              {profile.phone}
            </a>
          </p>
          <p className="text-xs text-white/60 mt-3">
            Last updated: {BUILD_DATE}
          </p>
        </div>

        <nav aria-label="Social media links" className="flex items-center gap-4">
          {profile.socialLinks.map(({ platform, label, url }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in new tab)`}
              className="flex items-center gap-1.5 text-sm text-white/75 hover:text-white transition-colors"
            >
              {platformIcons[platform]}
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
