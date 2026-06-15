import { motion } from 'motion/react'
import { GraduationCap, Link2, Code2, BookOpen, FlaskConical, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Profile } from '../../types'
import type { SocialPlatform } from '../../types'

const platformIcons: Record<SocialPlatform, React.ReactNode> = {
  'google-scholar': <GraduationCap size={18} aria-hidden="true" />,
  researchgate: <FlaskConical size={18} aria-hidden="true" />,
  dblp: <BookOpen size={18} aria-hidden="true" />,
  linkedin: <Link2 size={18} aria-hidden="true" />,
  github: <Code2 size={18} aria-hidden="true" />,
}

interface HeroProps {
  profile: Profile
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section
      aria-label="Introduction"
      className="bg-[var(--color-background)] pt-16 pb-20"
    >
      <div className="mx-auto max-w-[1100px] px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Credential badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
              <span className="inline-flex items-center rounded-full bg-[var(--color-gold-light)] text-[var(--color-gold-dark)] px-3 py-1 text-xs font-semibold">
                ★ CRYPTO 2026
              </span>
              <span className="inline-flex items-center rounded-full bg-[var(--color-teal-light)] text-[var(--color-teal)] px-3 py-1 text-xs font-semibold">
                ERC Postdoc · Univ. of Warsaw
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-[var(--color-text)] leading-tight">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-[var(--color-teal)] font-medium">
              {profile.title}
            </p>
            <p className="mt-1 text-base text-[var(--color-text-muted)]">
              {profile.department} · {profile.institution}
            </p>
            <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              {profile.researchTagline}
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-3">
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-teal)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-hover)] transition-colors"
              >
                View Publications <ChevronRight size={15} aria-hidden="true" />
              </Link>
            </div>

            {/* Social links */}
            <nav aria-label="Academic profiles" className="mt-7 flex flex-wrap justify-center md:justify-start gap-4">
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
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-48 md:w-60 rounded-2xl overflow-hidden border-2 border-[var(--color-border)] shadow-md bg-[var(--color-surface)]">
              <img
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                className="w-full h-auto block"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-5xl font-serif text-[var(--color-text-muted)] bg-[var(--color-surface)]">S</div>`
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
