import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn, FaEnvelope, FaChevronDown } from 'react-icons/fa6'
import { profile } from '../data/portfolioData.js'

const ease = [0.22, 1, 0.36, 1]

const lines = [
  [{ t: 'Building ' }, { t: 'Digital', c: 'text-lime' }],
  [{ t: 'Experiences ', c: 'text-outline' }, { t: 'That' }],
  [{ t: 'Make An ' }, { t: 'Impact.', c: 'text-violet' }],
]

export default function Hero() {
  // Subtle mouse parallax (disabled automatically for reduced motion via MotionConfig + no pointer on touch)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  const ringX = useTransform(sx, (v) => v * 22)
  const ringY = useTransform(sy, (v) => v * 22)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section
      id="home"
      onPointerMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      {/* Background: grid + orbs */}
      <div aria-hidden className="grid-pattern absolute inset-0" />
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-violet/25 blur-[110px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-lime/10 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-lime sm:text-sm"
          >
            <span className="h-px w-10 bg-lime/60" />
            Hello, I&apos;m Kushal P J
          </motion.p>

          <h1 className="font-display text-[2.6rem] font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.5rem]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.55 + i * 0.14, ease }}
                  className="block"
                >
                  {line.map((w, j) => (
                    <span key={j} className={w.c || ''}>
                      {w.t}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.heroText}
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 1.25 } } }}
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Roles"
          >
            {profile.roles.map((r) => (
              <motion.li
                key={r}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-fg/90 sm:text-sm"
              >
                {r}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-lime px-7 font-medium text-ink transition hover:shadow-[0_0_40px_-8px_#C4F56A]"
            >
              Explore My Work
              <FaArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-violet/50 px-7 font-medium text-violet transition hover:bg-violet hover:text-ink"
            >
              <FaDownload aria-hidden /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-10 flex items-center gap-3"
          >
            {[
              { href: profile.github, label: 'GitHub', Icon: FaGithub, ext: true },
              { href: profile.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn, ext: true },
              { href: `mailto:${profile.email}`, label: 'Email', Icon: FaEnvelope },
            ].map(({ href, label, Icon, ext }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-fg transition hover:-translate-y-1 hover:border-lime hover:text-lime"
              >
                <Icon aria-hidden />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Composition: geometric rings + floating code card */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-md md:block">
          <motion.div style={{ x: ringX, y: ringY }} className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border border-dashed border-violet/40"
              aria-hidden
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-16 rounded-[38%] border border-lime/30"
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.25, ease }}
              className="absolute inset-[18%] z-10"
            >
              <div className="absolute inset-0 rounded-[2.25rem] rotate-3 border border-lime/40 bg-lime/10" aria-hidden />
              <div className="glass relative h-full w-full overflow-hidden rounded-[2.25rem] shadow-[0_24px_80px_-24px_rgba(167,139,250,0.55)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(167,139,250,0.18),transparent_58%)]" aria-hidden />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 300"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  <path d="M75 76C112 46 186 45 226 91C269 140 225 220 165 234C108 247 47 211 57 153" stroke="rgba(196,245,106,0.24)" strokeDasharray="4 7" />
                  <path d="M78 77C113 106 124 185 164 232" stroke="rgba(167,139,250,0.38)" />
                  <path d="M78 77C128 91 179 78 226 91" stroke="rgba(167,139,250,0.38)" />
                  <path d="M226 91C204 134 185 189 164 232" stroke="rgba(167,139,250,0.38)" />
                </svg>

                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-violet/40 bg-gradient-to-br from-violet/30 via-panel to-lime/10 shadow-[0_0_55px_-12px_rgba(167,139,250,0.75)]"
                >
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-ink/60">
                    <span className="font-display text-4xl font-bold text-lime" aria-hidden>✦</span>
                  </div>
                </motion.div>

                {[
                  { label: 'DESIGN', className: 'left-4 top-5', delay: 0 },
                  { label: 'BUILD', className: 'right-4 top-8', delay: 0.5 },
                  { label: 'LEARN', className: 'bottom-5 left-1/2 -translate-x-1/2', delay: 1 },
                ].map(({ label, className, delay }) => (
                  <motion.div
                    key={label}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5, delay, repeat: Infinity, ease: 'easeInOut' }}
                    className={`absolute ${className} rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-fg/80`}
                  >
                    {label}
                  </motion.div>
                ))}

                <motion.span
                  animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  className="absolute left-[27%] top-[48%] h-2 w-2 rounded-full bg-lime shadow-[0_0_14px_#C4F56A]"
                  aria-hidden
                />
                <motion.span
                  animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.4, delay: 1, repeat: Infinity }}
                  className="absolute right-[25%] top-[56%] h-2 w-2 rounded-full bg-violet shadow-[0_0_14px_#A78BFA]"
                  aria-hidden
                />
              </div>
            </motion.div>
            <motion.span
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-6 top-10 h-5 w-5 rotate-45 bg-lime"
              aria-hidden
            />
            <motion.span
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-12 left-2 h-8 w-8 rounded-full border-2 border-violet"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted sm:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <FaChevronDown aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  )
}
