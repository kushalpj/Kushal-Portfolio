import { motion } from 'framer-motion'
import { FaArrowUp, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { profile } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-5 pb-10 pt-16 sm:px-8">
      <p
        aria-hidden
        className="pointer-events-none select-none text-center font-display text-[18vw] font-bold leading-none text-outline opacity-40"
      >
        KUSHAL
      </p>
      <div className="relative mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built with React, Tailwind CSS and Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 hover:border-lime hover:text-lime">
            <FaGithub aria-hidden />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 hover:border-lime hover:text-lime">
            <FaLinkedinIn aria-hidden />
          </a>
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-lime text-ink"
          >
            <FaArrowUp aria-hidden />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
