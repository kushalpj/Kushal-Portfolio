import { motion } from 'framer-motion'
import {
  SiPython, SiJavascript, SiHtml5, SiReact, SiTailwindcss, SiDjango, SiMysql,
  SiScikitlearn, SiGit, SiGithub, SiAxios, SiJson, SiAnthropic, SiGooglegemini,
  SiGithubcopilot, SiCursor, SiPerplexity,
} from 'react-icons/si'
import {
  FaCss3Alt, FaCode, FaLaptopCode, FaServer, FaDatabase, FaBrain, FaScrewdriverWrench, FaLock,
  FaRobot, FaWandMagicSparkles,
} from 'react-icons/fa6'
import AnimatedSection, { fadeUp, stagger } from './AnimatedSection.jsx'
import { skillCategories } from '../data/portfolioData.js'

const icons = {
  python: SiPython, javascript: SiJavascript, html: SiHtml5, css: FaCss3Alt, react: SiReact,
  tailwind: SiTailwindcss, django: SiDjango, mysql: SiMysql, sklearn: SiScikitlearn, git: SiGit,
  github: SiGithub, axios: SiAxios, json: SiJson, code: FaCode, frontend: FaLaptopCode,
  server: FaServer, database: FaDatabase, brain: FaBrain, tools: FaScrewdriverWrench, lock: FaLock,
  claude: SiAnthropic, chatgpt: FaRobot, gemini: SiGooglegemini, copilot: SiGithubcopilot,
  cursor: SiCursor, perplexity: SiPerplexity, antigravity: FaWandMagicSparkles,
}

const iconColors = {
  python: 'text-[#3776AB]', javascript: 'text-[#F7DF1E]', html: 'text-[#E34F26]',
  css: 'text-[#1572B6]', react: 'text-[#61DAFB]', tailwind: 'text-[#06B6D4]',
  django: 'text-[#092E20]', mysql: 'text-[#4479A1]', sklearn: 'text-[#F7931E]',
  git: 'text-[#F05032]', github: 'text-fg', axios: 'text-[#5A29E4]', json: 'text-[#F5C518]',
  code: 'text-violet', frontend: 'text-[#61DAFB]', server: 'text-lime',
  database: 'text-[#4479A1]', brain: 'text-[#A78BFA]', tools: 'text-[#F5A623]',
  lock: 'text-[#38BDF8]', claude: 'text-[#D97757]', chatgpt: 'text-[#74AA9C]',
  gemini: 'text-[#8E75FF]', copilot: 'text-[#D8B4FE]', cursor: 'text-fg',
  perplexity: 'text-[#20B8CD]', antigravity: 'text-[#4285F4]',
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
                      <Icon className={`${iconColors[s.icon] || 'text-muted'} transition-transform duration-300 group-hover/skill:scale-125`} aria-hidden />
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
