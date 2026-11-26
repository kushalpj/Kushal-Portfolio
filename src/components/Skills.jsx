import { motion } from 'framer-motion'
import {
  SiPython, SiJavascript, SiHtml5, SiReact, SiTailwindcss, SiDjango, SiMysql,
  SiScikitlearn, SiGit, SiGithub, SiAxios, SiJson,
} from 'react-icons/si'
import {
  FaCss3Alt, FaCode, FaLaptopCode, FaServer, FaDatabase, FaBrain, FaScrewdriverWrench, FaLock,
} from 'react-icons/fa6'
import AnimatedSection, { fadeUp, stagger } from './AnimatedSection.jsx'
import { skillCategories } from '../data/portfolioData.js'

const icons = {
  python: SiPython, javascript: SiJavascript, html: SiHtml5, css: FaCss3Alt, react: SiReact,
  tailwind: SiTailwindcss, django: SiDjango, mysql: SiMysql, sklearn: SiScikitlearn, git: SiGit,
  github: SiGithub, axios: SiAxios, json: SiJson, code: FaCode, frontend: FaLaptopCode,
  server: FaServer, database: FaDatabase, brain: FaBrain, tools: FaScrewdriverWrench, lock: FaLock,
}

export default function Skills() {
  return (
    <AnimatedSection id="skills" index="02" eyebrow="Technical skills" title={<>Tools I <span className="text-lime">build</span> with.</>}>
      <motion.ul
        variants={stagger(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((cat, i) => {
          const CatIcon = icons[cat.icon] || FaCode
          const wide = cat.skills.length > 6
          return (
            <motion.li
              key={cat.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className={`group glass relative overflow-hidden rounded-3xl p-6 transition-colors hover:border-violet/40 ${
                wide ? 'lg:col-span-2' : ''
              }`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 font-display text-8xl font-bold text-white/[0.03]"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet/15 text-violet transition-all duration-300 group-hover:rotate-6 group-hover:bg-lime group-hover:text-ink">
                  <CatIcon aria-hidden />
                </span>
                <h3 className="font-display text-xl font-semibold">{cat.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((s) => {
                  const Icon = icons[s.icon] || FaCode
                  return (
                    <li
                      key={s.name}
                      className="group/skill flex items-center gap-2 rounded-full border border-white/10 bg-ink/60 px-3.5 py-2 text-sm text-fg/90 transition-colors hover:border-lime/60 hover:text-lime"
                    >
                      <Icon className="text-muted transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:text-lime" aria-hidden />
                      {s.name}
                    </li>
                  )
                })}
              </ul>
            </motion.li>
          )
        })}
      </motion.ul>
    </AnimatedSection>
  )
}
