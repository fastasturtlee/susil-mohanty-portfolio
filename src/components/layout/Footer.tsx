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
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] mt-20">
      <div className="mx-auto max-w-[1100px] px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-serif text-base text-[var(--color-text)]">{profile.name}</p>
          <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
            {profile.title} · {profile.department}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-3">
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
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-teal)] transition-colors"
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
