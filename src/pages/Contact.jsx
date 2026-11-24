import { useState } from 'react'
import { MapPin, Compass, Map, ChevronDown, CheckCircle2 } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import ApplyCTA from '../components/ApplyCTA'
import Reveal from '../components/Reveal'
import { contact, instMenu, img } from '../data/site'
import PageHero from '../components/PageHero'

/* ---------- Content (mirrors the design file, placeholders included) ---------- */

// Paste a Google Maps "Embed a map" src URL here to replace the grey placeholder.
const MAP_EMBED_URL = ''

const institutionOptions = [
  ...instMenu.colleges,
  ...instMenu.schools,
].map((item) => item.title)

const directory = [
  { name: 'GSS College', phone: '+91 00000 00000', email: 'email@domain.org', address: 'To be confirmed' },
  { name: 'GSS PUC', phone: '+91 00000 00000', email: 'email@domain.org', address: 'To be confirmed' },
  { name: 'RPD Degree', phone: '+91 00000 00000', email: 'email@domain.org', address: 'To be confirmed' },
  { name: 'RPD PUC', phone: '+91 00000 00000', email: 'email@domain.org', address: 'To be confirmed' },
  { name: 'BCA College, Chandgad', phone: '+91 00000 00000', email: 'email@domain.org', address: 'To be confirmed' },
]

const field =
  'block w-full border border-line bg-white px-[17px] text-[14px] text-ink placeholder:text-[#9a9ca3] transition-colors focus:border-primary focus:outline-none'

/* ---------- Small shared pieces ---------- */

function Heading({ line1, line2 }) {
  return (
    <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
      <b className="block font-semibold text-primary">{line1}</b>
      <i className="block font-light italic text-slate">{line2}</i>
    </h2>
  )
}

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-[10px] block text-[10px] font-bold uppercase leading-[12px] tracking-[0.14em] text-ink">
      {children}
    </label>
  )
}

function InfoCard({ icon: I, title, text }) {
  return (
    <div className="flex gap-[18px] border border-line bg-white p-7 lg:min-h-[110px]">
      <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#eeecf7] text-primary">
        <I size={16} strokeWidth={1.7} />
      </span>
      <div>
        <h3 className="text-[16px] font-medium leading-[24px] text-[#0b0b1e]">{title}</h3>
        <p className="mb-0 mt-[10px] text-[12.5px] leading-[1.4] text-text2">{text}</p>
      </div>
    </div>
  )
}

/* ---------- Sections ---------- */

function ContactSection() {
  const [values, setValues] = useState({ name: '', phone: '', email: '', institution: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: send `values` to your backend / form service (Formspree, Netlify Forms, an API route…).
    setSent(true)
  }

  const reset = () => {
    setValues({ name: '', phone: '', email: '', institution: '', message: '' })
    setSent(false)
  }

  return (
    <section id="contact" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap grid items-start gap-14 lg:grid-cols-[680px_1fr] lg:gap-20">
        {/* Form */}
        <Reveal>
          <Heading line1="Send Us" line2="a Message." />

          {sent ? (
            <div role="status" className="mt-8 border-l-[3px] border-accent bg-surface p-7">
              <CheckCircle2 size={26} strokeWidth={1.5} className="text-primary" />
              <h3 className="mt-4 text-[20px] font-medium text-primary">Thank you{values.name ? `, ${values.name.split(' ')[0]}` : ''}.</h3>
              <p className="mb-0 mt-2 max-w-[460px] text-[14px] leading-[1.6] text-text2">
                Your message has been received. The team will get back to you as soon as possible.
              </p>
              <button type="button" onClick={reset} className="btn-primary mt-6 h-11">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <input id="name" name="name" required autoComplete="name" value={values.name} onChange={onChange} placeholder="Your name" className={`${field} h-[50px]`} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onChange} placeholder="+91" className={`${field} h-[50px]`} />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <input id="email" name="email" type="email" required autoComplete="email" value={values.email} onChange={onChange} placeholder="you@example.com" className={`${field} h-[50px]`} />
              </div>

              <div>
                <Label htmlFor="institution">Institution</Label>
                <div className="relative">
                  <select
                    id="institution"
                    name="institution"
                    value={values.institution}
                    onChange={onChange}
                    className={`ske-select ${field} h-[50px] cursor-pointer pr-11 ${values.institution ? 'text-ink' : 'text-[#9a9ca3]'}`}
                  >
                    <option value="">Select an institution</option>
                    {institutionOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8a8d96]" />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={1}
                  value={values.message}
                  onChange={onChange}
                  placeholder="How can we help?"
                  className={`${field} min-h-[50px] resize-y py-[14px] leading-[20px]`}
                />
              </div>

              <button type="submit" className="btn-primary mt-[22px] h-11 px-6">
                Send message
              </button>
            </form>
          )}
        </Reveal>

        {/* Info column */}
        <Reveal delay={0.1} className="space-y-5">
          <InfoCard icon={MapPin} title="Society Office" text={`${contact.addressLine1}, ${contact.addressLine2}`} />
          <InfoCard icon={Compass} title="Phone & Email" text={`${contact.phone} · ${contact.email}`} />
          <div className="grid h-[260px] place-items-center overflow-hidden bg-sand">
            {MAP_EMBED_URL ? (
              <iframe title="Society office on the map" src={MAP_EMBED_URL} loading="lazy" className="h-full w-full border-0" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <Map size={22} strokeWidth={1.6} className="text-primary" aria-label="Map placeholder" />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Directory() {
  return (
    <section id="directory" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Institution" line2="Directory." />
        </Reveal>
        <Reveal delay={0.08} className="mt-11 overflow-x-auto">
          <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
            <colgroup>
              <col className="w-[316px]" />
              <col className="w-[316px]" />
              <col className="w-[316px]" />
              <col />
            </colgroup>
            <thead>
              <tr className="h-[44px] bg-primary text-white">
                {['Institution', 'Phone', 'Email', 'Address'].map((h) => (
                  <th key={h} scope="col" className="px-5 text-[10px] font-bold uppercase tracking-[0.14em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {directory.map((r) => (
                <tr key={r.name} className="h-[51px] border-b border-line bg-white text-[14px] text-ink">
                  <td className="px-5">{r.name}</td>
                  <td className="px-5">
                    <a href={`tel:${r.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-primary">{r.phone}</a>
                  </td>
                  <td className="px-5">
                    <a href={`mailto:${r.email}`} className="transition-colors hover:text-primary">{r.email}</a>
                  </td>
                  <td className="px-5">{r.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function Contact() {
  return (
    <>
      <PageHero
        image={img.hero}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1="Get In"
        line2="Touch."
        className="min-h-[420px] lg:h-[441px]"
      >
        <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
          Reach the Society office, or contact an institution directly.
        </p>
      </PageHero>
      <Breadcrumb current="Contact" />
      <ContactSection />
      <Directory />
      <ApplyCTA />
    </>
  )
}
