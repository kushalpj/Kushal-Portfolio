import { motion } from 'framer-motion'
import AnimatedSection, { fadeUp, stagger } from './AnimatedSection.jsx'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <AnimatedSection id="experience" index="03" eyebrow="Experience" title={<>Where I&apos;ve <span className="text-violet">worked.</span></>}>
      <ol className="relative ml-3 border-l border-white/10 sm:ml-6">
        {experience.map((job) => (
          <motion.li
            key={job.role + job.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative pb-4 pl-8 sm:pl-12"
          >
            <span className="absolute -left-[9px] top-2 grid h-[18px] w-[18px] place-items-center rounded-full bg-ink ring-2 ring-lime">
              <motion.span
                animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="absolute h-full w-full rounded-full bg-lime"
              />
              <span className="h-2 w-2 rounded-full bg-lime" />
            </span>

            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{job.role}</h3>
                  <p className="mt-1 text-lg text-violet">{job.company}</p>
                </div>
                <span className="rounded-full border border-lime/40 px-4 py-1.5 font-mono text-sm text-lime">{job.year}</span>
              </div>

              <motion.ul
                variants={stagger(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-6 space-y-3"
              >
                {job.points.map((p) => (
                  <motion.li key={p} variants={fadeUp} className="flex gap-3 leading-relaxed text-muted">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </AnimatedSection>
  )
}
