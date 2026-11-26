import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import AnimatedSection from './AnimatedSection.jsx'
import { projects } from '../data/portfolioData.js'

/* Abstract illustrations drawn in SVG — original artwork, no screenshots or fake metrics. */
function Visual({ kind }) {
  const common = 'h-full w-full transition-transform duration-700 ease-out group-hover:scale-110'
  const stroke = { stroke: '#A78BFA', strokeWidth: 1.5, fill: 'none' }
  const lime = '#C4F56A'
  switch (kind) {
    case 'waste':
      return (
        <svg viewBox="0 0 400 240" className={common} role="img" aria-label="Neural network layers feeding a map with pins">
          {[60, 110, 160].map((x, c) =>
            [50, 90, 130, 170].slice(0, c === 1 ? 3 : 4).map((y, r) => (
              <circle key={`${c}-${r}`} cx={x} cy={y + (c === 1 ? 20 : 0)} r="9" fill="#171522" {...stroke} />
            )),
          )}
          <path d="M69 50L101 70M69 90L101 90M69 130L101 110M119 70L151 50M119 90L151 90M119 110L151 130" {...stroke} opacity=".5" />
          <path d="M215 70h110l25 30-20 80H225l-25-70z" fill="#171522" {...stroke} />
          <path d="M235 100l40 18 30-30M245 150l50-20" {...stroke} opacity=".4" />
          {[[260, 110], [305, 88], [290, 150]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="14" fill={lime} opacity=".18" />
              <circle cx={x} cy={y} r="5" fill={lime} />
            </g>
          ))}
        </svg>
      )
    case 'shop':
      return (
        <svg viewBox="0 0 400 240" className={common} role="img" aria-label="Product grid and shopping cart">
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={40 + i * 92} y="50" width="80" height="100" rx="12" fill="#171522" {...stroke} />
              <rect x={50 + i * 92} y="60" width="60" height="44" rx="8" fill="#A78BFA" opacity={0.15 + i * 0.1} />
              <rect x={50 + i * 92} y="114" width="44" height="6" rx="3" fill="#A1A1AA" opacity=".6" />
              <rect x={50 + i * 92} y="128" width="26" height="8" rx="4" fill={lime} />
            </g>
          ))}
          <path d="M70 185h20l10 24h60l10-30H98" {...stroke} stroke={lime} />
          <circle cx="112" cy="218" r="5" fill={lime} />
          <circle cx="150" cy="218" r="5" fill={lime} />
        </svg>
      )
    case 'blood':
      return (
        <svg viewBox="0 0 400 240" className={common} role="img" aria-label="Blood drop connected to hospital and donor nodes">
          <path d="M200 40c30 42 52 66 52 94a52 52 0 01-104 0c0-28 22-52 52-94z" fill="#A78BFA" opacity=".2" {...stroke} />
          <path d="M200 100v50M175 125h50" stroke={lime} strokeWidth="6" strokeLinecap="round" />
          {[[70, 70], [330, 70], [70, 180], [330, 180]].map(([x, y], i) => (
            <g key={i}>
              <path d={`M${x} ${y}L200 125`} {...stroke} strokeDasharray="4 6" opacity=".6" />
              <circle cx={x} cy={y} r="18" fill="#171522" {...stroke} />
              <circle cx={x} cy={y} r="5" fill={i % 2 ? lime : '#A78BFA'} />
            </g>
          ))}
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 400 240" className={common} role="img" aria-label="Decision tree and bar comparison chart">
          <g {...stroke}>
            <circle cx="110" cy="50" r="11" fill="#171522" />
            <circle cx="65" cy="115" r="11" fill="#171522" />
            <circle cx="155" cy="115" r="11" fill="#171522" />
            <circle cx="40" cy="180" r="9" fill="#171522" />
            <circle cx="90" cy="180" r="9" fill="#171522" />
            <path d="M104 60L70 105M116 60L150 105M60 125L44 172M70 125L86 172" />
          </g>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={225 + i * 36} y={170 - [70, 110, 85, 120][i]} width="24" height={[70, 110, 85, 120][i]} rx="6" fill={i === 3 ? lime : '#A78BFA'} opacity={i === 3 ? 0.9 : 0.35} />
          ))}
          <path d="M215 172h160" stroke="#A1A1AA" opacity=".4" />
        </svg>
      )
  }
}

function ProjectCard({ p, i }) {
  const ref = useRef(null)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  // Cursor-following spotlight on the card surface
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, rgb(196 245 106 / 0.10), transparent 70%)`
  // Animated gradient border follows the cursor too
  const border = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, #C4F56A, #A78BFA 45%, transparent 75%)`

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set(e.clientX - r.left)
    y.set(e.clientY - r.top)
  }

  const offset = i % 2 === 1 ? 'md:mt-16' : ''

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={`group relative rounded-[2rem] p-px ${offset}`}
    >
      <motion.div
        aria-hidden
        style={{ background: border }}
        className="absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="absolute inset-0 rounded-[2rem] border border-white/10 group-hover:border-transparent" aria-hidden />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(2rem-1px)] bg-panel">
        <motion.div aria-hidden style={{ background: spotlight }} className="pointer-events-none absolute inset-0 z-10" />

        <div className="relative aspect-[5/3] overflow-hidden bg-gradient-to-br from-violet/10 via-panel to-ink">
          <div aria-hidden className="grid-pattern absolute inset-0 opacity-60" />
          <div className="relative h-full w-full p-6">
            <Visual kind={p.visual} />
          </div>
          <span className="absolute left-5 top-5 font-mono text-xs text-lime">0{i + 1}</span>
        </div>

        <div className="relative z-20 flex flex-1 flex-col p-6 sm:p-8">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">{p.kicker}</p>
          <h3 className="font-display text-2xl font-bold leading-tight sm:text-[1.7rem]">{p.title}</h3>

          <div className="mt-4 space-y-3 leading-relaxed text-muted">
            {p.description.map((d, k) => (
              <p key={k}>{d}</p>
            ))}
          </div>

          {p.features.length > 0 && (
            <ul className="mt-5 grid gap-x-4 gap-y-2 text-sm text-fg/85 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {p.tech.map((t) => (
              <li key={t} className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs text-violet">
                {t}
              </li>
            ))}
          </ul>

          {(p.github || p.live) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm transition hover:border-lime hover:text-lime"
                >
                  <FaGithub aria-hidden /> GitHub
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-lime px-5 text-sm font-medium text-ink"
                >
                  <FaArrowUpRightFromSquare aria-hidden /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <AnimatedSection id="projects" index="04" eyebrow="Selected work" title={<>Projects that <span className="text-lime">ship.</span></>}>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
      </div>
    </AnimatedSection>
  )
}
