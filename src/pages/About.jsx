import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Users, Target, Compass } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import ApplyCTA from '../components/ApplyCTA'
import Reveal from '../components/Reveal'
import { img } from '../data/site'
import PageHero from '../components/PageHero'

/* ---------- Content (mirrors the design file, placeholders included) ---------- */

const milestones = [
  { year: '1944', title: 'Society formed', text: 'Registered on 23 August 1944.' },
  { year: '1945', title: 'First college', text: 'Started in Sawantwadi.' },
  { year: '1948', title: 'Move to Belagavi', text: 'Housed in the Tilakwadi palace.' },
  { year: '1966', title: 'GSS Science College', text: 'Bifurcated from RPD College.' },
  { year: '1993', title: 'Commerce wing', text: 'Self-financed degree section.' },
]

const visionMission = [
  { icon: Target, title: 'Our Vision', text: 'Placeholder — the Society’s vision statement, as approved by the Governing Council.' },
  { icon: Compass, title: 'Our Mission', text: 'Placeholder — the Society’s mission statement and the values that guide its institutions.' },
]

// Add a `photo` path to any entry once real portraits are available.
const governingBody = [
  { name: 'President Name', role: 'President', photo: null },
  { name: 'Vice President Name', role: 'Vice President', photo: null },
  { name: 'Secretary Name', role: 'Secretary', photo: null },
  { name: 'Treasurer Name', role: 'Treasurer', photo: null },
]

const chairman = {
  quote: 'Placeholder — a short statement from the Chairman.',
  message: 'Placeholder — the Chairman’s message on the Society’s purpose and direction.',
  name: 'Chairman Name',
  role: 'Chairman, SKE Society',
  photo: null,
}

/* ---------- Small shared pieces ---------- */

// Bold first line + light italic second line (slate on light sections, amber on indigo).
function Heading({ line1, line2, dark = false }) {
  return (
    <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
      <b className={`block font-semibold ${dark ? 'text-white' : 'text-primary'}`}>{line1}</b>
      <i className={`block font-light italic ${dark ? 'text-accent' : 'text-slate'}`}>{line2}</i>
    </h2>
  )
}

// Grey portrait placeholder with a people icon, or the real photo when provided.
function Portrait({ photo, alt, className = '', iconSize = 28 }) {
  return (
    <div className={`grid place-items-center overflow-hidden bg-sand ${className}`}>
      {photo ? (
        <img src={photo} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <Users size={iconSize} strokeWidth={1.3} className="text-[#a7a9ae]" />
      )}
    </div>
  )
}

/* ---------- Sections ---------- */

function AboutSociety() {
  return (
    <section id="about" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_600px] lg:gap-[60px]">
        <Reveal>
          <Heading line1="About" line2="the Society." />
          <p className="mb-0 mt-8 max-w-[600px] text-[16px] leading-[1.75] text-text2">
            A group of educated, socially motivated philanthropists formed the South Konkan Education Society in
            Sawantwadi in 1944. Its first college followed in 1945, under the patronage of Rani Parvati Devi.
          </p>
          <p className="mb-0 mt-6 max-w-[600px] text-[16px] leading-[1.75] text-text2">
            In 1948 the college moved to Belagavi, into the summer palace of Raja Patwardhan of Jamakhandi in
            Tilakwadi. Today the Society runs colleges and schools across Belagavi and Chandgad.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <img src={img.gazebo} alt="Heritage gazebo on the SKE campus" className="aspect-[600/560] w-full object-cover" />
        </Reveal>
      </div>
    </section>
  )
}

function History() {
  return (
    <section id="history" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="History" line2="& Legacy." />
          <p className="mb-0 mt-4 text-[13.5px] text-text2">Key moments from eight decades of the Society.</p>
        </Reveal>
        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.07} className="border-t-2 border-accent pt-6">
              <div className="font-display text-[32px] font-semibold leading-none text-primary">{m.year}</div>
              <h3 className="mt-[14px] text-[16px] font-medium leading-tight text-[#0b0b1e]">{m.title}</h3>
              <p className="mb-0 mt-[10px] text-[13px] leading-[1.5] text-text2">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function VisionMission() {
  return (
    <section id="vision-mission" className="scroll-mt-[108px] bg-primary py-16 text-white lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Vision" line2="& Mission." dark />
        </Reveal>
        <div className="mt-11 grid gap-6 md:grid-cols-2">
          {visionMission.map(({ icon: I, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 0.08}
              className="flex gap-[18px] border border-white/20 bg-white/10 p-7"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-accent text-primary">
                <I size={17} strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="text-[16px] font-medium leading-tight">{title}</h3>
                <p className="mb-0 mt-[10px] text-[13px] leading-[20px] text-white/80">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChairmanMessage() {
  return (
    <section id="message" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 md:px-10 lg:grid-cols-[394px_640px] lg:gap-24 lg:pl-[100px] lg:pr-0 xl:px-0 xl:pl-[100px]">
        <Reveal>
          <Portrait photo={chairman.photo} alt={chairman.name} iconSize={36} className="aspect-[394/522] w-full max-w-[394px]" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.2] text-primary lg:w-[680px]">“{chairman.quote}”</h2>
          <p className="mb-0 mt-7 border-l-[3px] border-accent pl-7 text-[15px] leading-[26px] text-text2">{chairman.message}</p>
          <div className="mt-7 font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">{chairman.name}</div>
          <div className="mt-[6px] text-[9px] font-bold uppercase tracking-[0.12em] text-primary">{chairman.role}</div>
        </Reveal>
      </div>
    </section>
  )
}

function GoverningBody() {
  return (
    <section id="governing-body" className="scroll-mt-[108px] bg-surface py-16 lg:pb-[85px] lg:pt-24">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Heading line1="Governing" line2="Body." />
            <p className="mb-0 mt-4 text-[13.5px] text-text2">The people who guide the Society.</p>
          </div>
          <Link
            to="/about/governing-council"
            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary"
          >
            View Governing Council
            <ArrowRight size={13} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <div className="mt-[46px] grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {governingBody.map((p, i) => (
            <Reveal key={p.role} delay={i * 0.07}>
              <Portrait photo={p.photo} alt={p.name} className="aspect-[296/320] w-full" />
              <h3 className="mt-7 text-[16px] font-medium leading-tight text-[#0b0b1e]">{p.name}</h3>
              <div className="mt-[7px] text-[9px] font-bold uppercase tracking-[0.12em] text-primary">{p.role}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function About() {
  const { hash } = useLocation()

  // Nav dropdown links like /about#history scroll to their section.
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 120)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <PageHero
        image={img.arcade}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1="A Legacy"
        line2="Since 1944"
        className="min-h-[520px] lg:h-[594px]"
      >
        <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
          The South Konkan Education Society has shaped generations of learners, from school to degree.
        </p>
      </PageHero>
      <Breadcrumb current="About SKE" />
      <AboutSociety />
      <History />
      <VisionMission />
      <ChairmanMessage />
      <GoverningBody />
      <ApplyCTA />
    </>
  )
}
