import { Mail } from 'lucide-react'

interface ProspectiveStudentsProps {
  email: string
}

export default function ProspectiveStudents({ email }: ProspectiveStudentsProps) {
  return (
    <section
      aria-labelledby="prospective-heading"
      className="mt-12 rounded-2xl border border-[var(--color-teal)]/30 bg-[var(--color-teal-light)] p-8"
    >
      <h2 id="prospective-heading" className="font-serif text-2xl text-[var(--color-text)]">
        For Prospective Students &amp; Researchers
      </h2>
      <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
        I am always looking for motivated Ph.D. students, interns, Research Associates, Research
        Assistants, and BTP/MTP students interested in blockchain security, cryptographic protocols,
        payment channel networks, and related areas. If you are interested in working with me, please
        send an email with the following information:
      </p>
      <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
        <li className="flex gap-2">
          <span className="text-[var(--color-teal)] shrink-0">1.</span>
          Your curriculum vitae (CV)
        </li>
        <li className="flex gap-2">
          <span className="text-[var(--color-teal)] shrink-0">2.</span>
          A brief research statement describing your interests and background
        </li>
        <li className="flex gap-2">
          <span className="text-[var(--color-teal)] shrink-0">3.</span>
          Academic transcripts and relevant publications (if any)
        </li>
        <li className="flex gap-2">
          <span className="text-[var(--color-teal)] shrink-0">4.</span>
          Why you want to work on the specific research areas listed on this site
        </li>
      </ul>
      <p className="mt-4 text-xs text-[var(--color-text-muted)]">
        I typically respond within 3–5 business days. Generic emails without the above details may not receive a reply.
      </p>
      <a
        href={`mailto:${email}?subject=Research Inquiry`}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--color-teal)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-hover)] transition-colors"
      >
        <Mail size={15} aria-hidden="true" /> Send Inquiry
      </a>
    </section>
  )
}
