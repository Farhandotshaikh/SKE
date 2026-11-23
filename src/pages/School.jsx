import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Home, ChevronRight, Users, BookOpen, MapPin } from 'lucide-react'
import ApplyCTA from '../components/ApplyCTA'
import Reveal from '../components/Reveal'
import ComingSoon from './ComingSoon'
import { getSchool } from '../data/schools'

/* ---------- Small shared pieces ---------- */

// Bold first line + light italic second line.
function Heading({ line1, line2 }) {
  return (
    <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
      <b className="block font-semibold text-primary">{line1}</b>
      <i className="block font-light italic text-slate">{line2}</i>
    </h2>
  )
}

// Home › Institutions › School name
function Crumbs({ name }) {
  return (
    <div className="border-b border-line bg-white">
      <div className="wrap flex h-[45px] items-center gap-2 overflow-hidden text-[10px] font-bold uppercase tracking-[0.14em]">
        <Link to="/" className="flex shrink-0 items-center gap-2 text-muted transition-colors hover:text-primary">
          <Home size={13} strokeWidth={1.6} /> Home
        </Link>
        <ChevronRight size={12} className="shrink-0 text-muted" />
        <Link to="/institutions" className="shrink-0 text-muted transition-colors hover:text-primary">Institutions</Link>
        <ChevronRight size={12} className="shrink-0 text-muted" />
        <span className="truncate text-primary">{name}</span>
      </div>
    </div>
  )
}

/* ---------- Sections ---------- */

function SchoolHero({ school }) {
  return (
    <section className="relative flex min-h-[260px] overflow-hidden text-white lg:h-[320px]">
      <img src={school.image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" fetchpriority="high" />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(57,49,133,0.92) 0%, rgba(57,49,133,0.79) 50%, rgba(38,31,115,0.58) 100%)' }}
      />
      <div className="wrap relative flex flex-col justify-center py-12">
        <Link to="/institutions#schools" className="self-start text-[10px] font-bold uppercase tracking-[0.16em] text-accent hover:underline">
          Schools &amp; Institutes
        </Link>
        <h1 className="mt-4 max-w-[900px] text-[clamp(30px,3.6vw,52px)] font-semibold leading-[1.1]">{school.name}</h1>
      </div>
    </section>
  )
}

function AboutSchool({ school }) {
  return (
    <section id="about" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_600px] lg:gap-20">
        <Reveal>
          <Heading line1="About" line2="the School." />
          <p className="mb-0 mt-6 max-w-[600px] text-[16px] leading-[26px] text-text2">{school.about}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <img src={school.image} alt={school.name} className="aspect-[600/420] w-full object-cover" />
        </Reveal>
      </div>
    </section>
  )
}

function HeadmasterMessage({ school }) {
  const h = school.headmaster
  return (
    <section id="message" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 md:px-10 lg:grid-cols-[394px_640px] lg:gap-24 lg:pl-[100px] lg:pr-0 xl:px-0 xl:pl-[100px]">
        <Reveal>
          <div className="grid aspect-[394/522] w-full max-w-[394px] place-items-center overflow-hidden bg-sand">
            {h.photo ? (
              <img src={h.photo} alt={h.name} className="h-full w-full object-cover" />
            ) : (
              <Users size={36} strokeWidth={1.3} className="text-[#a7a9ae]" />
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.2] text-primary">“{h.quote}”</h2>
          <p className="mb-0 mt-7 border-l-[3px] border-accent pl-7 text-[15px] leading-[26px] text-text2">{h.message}</p>
          <div className="mt-7 font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">{h.name}</div>
          <div className="mt-[6px] text-[9px] font-bold uppercase tracking-[0.12em] text-primary">{h.role}</div>
        </Reveal>
      </div>
    </section>
  )
}

function FacilitiesContact({ school }) {
  const { address, phone, email } = school.contact
  const hasContact = address || phone || email

  const cards = [
    { icon: BookOpen, title: 'Facilities', body: school.facilities },
    { icon: Users, title: 'Activities', body: school.activities },
    {
      icon: MapPin,
      title: 'Contact',
      body: hasContact ? (
        <span className="block space-y-1">
          {address && <span className="block">{address}</span>}
          {phone && (
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="block transition-colors hover:text-primary">{phone}</a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="block break-all transition-colors hover:text-primary">{email}</a>
          )}
        </span>
      ) : (
        'Address, phone and email.'
      ),
    },
  ]

  return (
    <section id="facilities" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Facilities" line2="& Contact." />
        </Reveal>
        <div className="mt-11 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: I, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex h-full gap-[18px] border border-line bg-white p-7">
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#eeecf7] text-primary">
                  <I size={16} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-[16px] font-medium leading-[24px] text-[#0b0b1e]">{title}</h3>
                  <div className="mb-0 mt-[10px] text-[13px] leading-[20px] text-text2">{body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Page template (route: /institutions/:slug) ---------- */

export default function School() {
  const { slug } = useParams()
  const school = getSchool(slug)

  useEffect(() => {
    if (school) document.title = `${school.name} — SKE Society`
    return () => {
      document.title = 'SKE Society, Belagavi'
    }
  }, [school])

  // Not a school (e.g. a college slug that has no page yet) → the generic "coming soon" page.
  if (!school) return <ComingSoon />

  return (
    <>
      <SchoolHero school={school} />
      <Crumbs name={school.name} />
      <AboutSchool school={school} />
      <HeadmasterMessage school={school} />
      <FacilitiesContact school={school} />
      <ApplyCTA />
    </>
  )
}
