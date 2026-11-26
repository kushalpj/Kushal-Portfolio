import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const stagger = (delay = 0.1, start = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: start } },
})

/** Section wrapper: semantic <section> with consistent spacing + viewport reveal. */
export default function AnimatedSection({ id, index, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-32 ${className}`}>
      <motion.header
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-14 md:mb-20"
      >
        <motion.p variants={fadeUp} className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-lime">
          <span>{index}</span>
          <span className="h-px w-10 bg-lime/50" />
          <span>{eyebrow}</span>
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="max-w-4xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-fg sm:text-6xl md:text-7xl"
        >
          {title}
        </motion.h2>
      </motion.header>
      {children}
    </section>
  )
}

/** Generic viewport reveal for any block. */
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Tag>
  )
}
