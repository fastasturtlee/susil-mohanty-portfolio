import { motion } from 'motion/react'

interface Counter {
  value: number
  label: string
}

interface ImpactCountersProps {
  counters: Counter[]
}

export default function ImpactCounters({ counters }: ImpactCountersProps) {
  return (
    <section aria-label="Research impact" className="bg-[var(--color-teal)] py-10">
      <div className="mx-auto max-w-[1100px] px-4">
        <dl className="flex flex-wrap justify-center gap-8 md:gap-16">
          {counters.map(({ value, label }) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <dt className="font-serif text-4xl font-normal text-white">{value}</dt>
              <dd className="mt-1 text-sm text-white/80">{label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
