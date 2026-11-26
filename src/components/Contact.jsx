import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLocationDot, FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa6'
import AnimatedSection, { Reveal } from './AnimatedSection.jsx'
import { profile } from '../data/portfolioData.js'

// EmailJS is configured through env vars (see .env.example).
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}
const isConfigured = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey)

const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please add a short subject.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 text-sm text-[#fda4af]"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputCls =
  'w-full rounded-2xl border border-white/10 bg-ink/70 px-4 py-3.5 text-fg placeholder:text-muted/60 outline-none transition focus:border-lime focus:shadow-[0_0_0_4px_rgba(196,245,106,0.12)] aria-[invalid=true]:border-[#fda4af]'

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  // idle | sending | success | error | unconfigured
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const mailtoHref = () =>
    `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`,
    )}`

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) return

    if (!isConfigured) {
      // Be honest: nothing is sent when no email service is configured.
      setStatus('unconfigured')
      return
    }

    setStatus('sending')
    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: values.name,
          reply_to: values.email,
          subject: values.subject,
          message: values.message,
          to_email: profile.email,
        },
        { publicKey: EMAILJS.publicKey },
      )
      setStatus('success')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  const info = [
    { Icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: FaPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { Icon: FaLocationDot, label: 'Location', value: profile.location },
  ]

  return (
    <AnimatedSection
      id="contact"
      index="06"
      eyebrow="Contact"
      title={<>Let&apos;s build something <span className="text-lime">great</span> together.</>}
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal as="p" className="max-w-md text-lg leading-relaxed text-muted">
            Have an idea, opportunity, or interesting project? I&apos;d love to connect.
          </Reveal>

          <ul className="mt-10 space-y-4">
            {info.map(({ Icon, label, value, href }, i) => (
              <Reveal as="li" key={label} delay={i * 0.08}>
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-panel/60 p-4 transition hover:border-violet/40">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet/15 text-violet transition group-hover:bg-lime group-hover:text-ink">
                    <Icon aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{label}</p>
                    {href ? (
                      <a href={href} className="block break-all text-fg hover:text-lime">
                        {value}
                      </a>
                    ) : (
                      <p className="text-fg">{value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            {[
              { href: profile.github, label: 'GitHub', Icon: FaGithub },
              { href: profile.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:border-lime hover:text-lime"
              >
                <Icon aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <Reveal>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input id="name" name="name" autoComplete="name" value={values.name} onChange={onChange}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Your name" className={inputCls} />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="you@example.com" className={inputCls} />
              </Field>
            </div>
            <Field id="subject" label="Subject" error={errors.subject}>
              <input id="subject" name="subject" value={values.subject} onChange={onChange}
                aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined}
                placeholder="What's this about?" className={inputCls} />
            </Field>
            <Field id="message" label="Message" error={errors.message}>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
                placeholder="Tell me about your idea…" className={`${inputCls} resize-y`} />
            </Field>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-lime px-7 font-medium text-ink transition hover:shadow-[0_0_40px_-8px_#C4F56A] disabled:opacity-60 sm:w-auto"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
              <FaArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
            </motion.button>

            <div aria-live="polite">
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p key="s" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="rounded-2xl border border-lime/40 bg-lime/10 p-4 text-sm text-lime">
                    Thanks! Your message was sent. I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p key="e" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="rounded-2xl border border-[#fda4af]/40 bg-[#fda4af]/10 p-4 text-sm text-[#fda4af]">
                    Something went wrong and your message was not sent. Please try again, or email me directly at{' '}
                    <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.
                  </motion.p>
                )}
                {status === 'unconfigured' && (
                  <motion.div key="u" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="rounded-2xl border border-violet/40 bg-violet/10 p-4 text-sm text-fg">
                    <p>
                      Your details look good, but this site&apos;s email service isn&apos;t configured yet, so
                      <strong> nothing has been sent</strong>.
                    </p>
                    <a href={mailtoHref()} className="mt-2 inline-block text-lime underline">
                      Open in your email app instead →
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </AnimatedSection>
  )
}
