import { motion } from 'framer-motion'
import AnimatedSection, { Reveal, fadeUp, stagger } from './AnimatedSection.jsx'
import { about, profile } from '../data/portfolioData.js'

export default function About() {
  return (
    <AnimatedSection id="about" index="01" eyebrow="About" title={<>A little about <span className="text-violet">me.</span></>}>
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
        {/* Portrait */}
        <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <motion.div
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-[2.5rem] border border-lime/30"
          />
          <div className="glass absolute inset-3 flex flex-col justify-between overflow-hidden rounded-[2rem] p-6">
            <div aria-hidden className="grid-pattern absolute inset-0 opacity-70" />
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-violet/30 blur-3xl"
            />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/95 to-transparent" aria-hidden />
            <p className="relative z-10 mt-auto font-mono text-xs uppercase tracking-[0.25em] text-lime">Software Developer</p>
          </div>
        </Reveal>

        <div>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.08}>
                {p}
              </Reveal>
            ))}
          </div>

          <motion.dl
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2"
          >
            {about.facts.map((f, i) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                className={`bg-ink p-5 ${i === 0 ? 'sm:col-span-2' : ''}`}
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">{f.label}</dt>
                <dd className="mt-1 font-display text-lg text-fg">{f.value}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <motion.ul
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {about.stats.map((s) => (
              <motion.li key={s.label} variants={fadeUp} className="rounded-2xl bg-panel p-4">
                <p className="font-display text-4xl font-bold text-lime">{s.value}</p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </AnimatedSection>
  )
}
