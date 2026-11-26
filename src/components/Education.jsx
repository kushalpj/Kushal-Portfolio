import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa6'
import AnimatedSection from './AnimatedSection.jsx'
import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <AnimatedSection id="education" index="05" eyebrow="Education" title={<>My academic <span className="text-violet">path.</span></>}>
      <div className="relative">
        {/* Vertical line draws itself on scroll into view */}
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{ originY: 0 }}
          className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-lime via-violet to-transparent md:left-1/2"
        />
        <ol className="space-y-10">
          {education.map((e, i) => {
            const right = i % 2 === 0
            return (
              <motion.li
                key={e.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid md:grid-cols-2"
              >
                <span className="absolute left-4 top-6 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-ink ring-2 ring-lime md:left-1/2">
                  <FaGraduationCap className="text-sm text-lime" aria-hidden />
                </span>
                <div
                  className={`ml-12 md:ml-0 ${
                    right ? 'md:col-start-2 md:pl-14' : 'md:col-start-1 md:row-start-1 md:pr-14 md:text-right'
                  }`}
                >
                  <div className="glass rounded-3xl p-6 transition-colors hover:border-violet/40">
                    <p className="font-mono text-sm text-lime">{e.years}</p>
                    <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">{e.title}</h3>
                    <p className="mt-1 text-muted">{e.school}</p>
                    <p className="mt-4 inline-block rounded-full border border-violet/40 px-4 py-1 text-sm text-violet">{e.score}</p>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </AnimatedSection>
  )
}
