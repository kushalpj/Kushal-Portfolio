import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaXmark, FaDownload } from 'react-icons/fa6'
import { navLinks, profile } from '../data/portfolioData.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 pl-6 transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-ink/70 shadow-[0_8px_40px_-12px_rgba(167,139,250,0.35)] backdrop-blur-xl'
            : 'border-white/5 bg-transparent'
        }`}
      >
        <a href="#home" onClick={(e) => go(e, 'home')} className="font-display text-lg font-bold tracking-tight">
          KUSHAL<span className="text-lime">.</span>PJ
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={active === id ? 'page' : undefined}
                className={`group relative block rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === id ? 'text-ink' : 'text-muted hover:text-fg'
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-lime"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {label}
                  {active !== id && (
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-violet transition-all duration-300 group-hover:w-full" />
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full border border-violet/40 px-4 py-2 text-sm font-medium text-violet transition hover:bg-violet hover:text-ink sm:inline-flex"
          >
            <FaDownload aria-hidden /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-fg lg:hidden"
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-[4.5rem] rounded-3xl border border-white/10 bg-panel/95 p-4 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => go(e, id)}
                    className={`flex min-h-12 items-center rounded-2xl px-4 font-display text-xl ${
                      active === id ? 'bg-lime text-ink' : 'text-fg'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.resume}
              download
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-violet/40 text-violet"
            >
              <FaDownload aria-hidden /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
