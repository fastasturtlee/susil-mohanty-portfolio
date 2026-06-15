import { Mail, MapPin, Building2 } from 'lucide-react'
import { motion } from 'motion/react'
import type { Profile } from '../../types'
import ExternalLink from '../ui/ExternalLink'
import { GraduationCap, Link2, Code2, BookOpen, FlaskConical } from 'lucide-react'
import type { SocialPlatform } from '../../types'
import SectionHeader from '../ui/SectionHeader'

const platformIcons: Record<SocialPlatform, React.ReactNode> = {
  'google-scholar': <GraduationCap size={18} aria-hidden="true" />,
  researchgate: <FlaskConical size={18} aria-hidden="true" />,
  dblp: <BookOpen size={18} aria-hidden="true" />,
  linkedin: <Link2 size={18} aria-hidden="true" />,
  github: <Code2 size={18} aria-hidden="true" />,
}

interface ContactInfoProps {
  profile: Profile
}

export default function ContactInfo({ profile }: ContactInfoProps) {
  return (
    <section aria-labelledby="contact-heading" className="py-12">
      <SectionHeader id="contact-heading" title="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="space-y-4"
        >
          <div className="flex items-start gap-3">
            <Mail size={18} className="text-[var(--color-teal)] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-[var(--color-text)] hover:text-[var(--color-teal)] transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building2 size={18} className="text-[var(--color-teal)] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">Office</p>
              <p className="text-sm text-[var(--color-text)]">{profile.officeRoom}</p>
              <p className="text-sm text-[var(--color-text-muted)]">{profile.department}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-[var(--color-teal)] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">Address</p>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">{profile.address}</p>
            </div>
          </div>
        </motion.div>

        {/* Academic profiles */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide mb-4">Academic Profiles</p>
          <div className="space-y-3">
            {profile.socialLinks.map(({ platform, label, url }) => (
              <ExternalLink
                key={platform}
                href={url}
                label={label}
                className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-colors"
              >
                <span className="text-[var(--color-teal)]">{platformIcons[platform]}</span>
                {label}
              </ExternalLink>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
