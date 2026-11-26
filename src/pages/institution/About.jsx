import { useEffect } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom'
import { Home, ArrowRight, Users, Target, Compass } from 'lucide-react'
import Crumbs from '../../components/institution/Crumbs'
import ApplyCTA from '../../components/ApplyCTA'
import Reveal from '../../components/Reveal'          // fixed path
import PageHero from '../../components/PageHero'
import { img } from '../../data/site'

/* ---------- Small shared pieces (unchanged) ---------- */



function Heading({ line1, line2, dark = false }) {
  return (
    <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
      <b className={`block font-semibold ${dark ? 'text-white' : 'text-primary'}`}>{line1}</b>
      <i className={`block font-light italic ${dark ? 'text-accent' : 'text-slate'}`}>{line2}</i>
    </h2>
  )
}

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

/* ---------- Sections (now driven by props) ---------- */

function AboutCollege({ inst, about }) {
  return (
    <section id="about" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_600px] lg:gap-[60px]">
        <Reveal>
          <Heading line1="About" line2={`${inst.name}.`} />
          {about.intro.map((p, i) => (
            <p key={i} className={`mb-0 max-w-[600px] text-[16px] leading-[1.75] text-text2 ${i === 0 ? 'mt-8' : 'mt-6'}`}>
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <img
            src={about.introImage || img.gazebo}
            alt={`${inst.name} campus`}
            className="aspect-[600/560] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

function History({ milestones }) {
  if (!milestones?.length) return null
  return (
    <section id="history" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="History" line2="& Legacy." />
          <p className="mb-0 mt-4 text-[13.5px] text-text2">Key moments from our journey.</p>
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

function VisionMission({ vision, mission }) {
  const items = [
    { icon: Target, title: 'Our Vision', text: vision },
    { icon: Compass, title: 'Our Mission', text: mission },
  ].filter((x) => x.text)
  if (!items.length) return null

  return (
    <section id="vision-mission" className="scroll-mt-[108px] bg-primary py-16 text-white lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Vision" line2="& Mission." dark />
        </Reveal>
        <div className="mt-11 grid gap-6 md:grid-cols-2">
          {items.map(({ icon: I, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className="flex gap-[18px] border border-white/20 bg-white/10 p-7">
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

function LeadMessage({ message }) {
  if (!message) return null
  return (
    <section id="message" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 md:px-10 lg:grid-cols-[394px_640px] lg:gap-24 lg:pl-[100px] lg:pr-0 xl:px-0 xl:pl-[100px]">
        <Reveal>
          <Portrait photo={message.photo} alt={message.name} iconSize={36} className="aspect-[394/522] w-full max-w-[394px]" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.2] text-primary lg:w-[680px]">“{message.quote}”</h2>
          <p className="mb-0 mt-7 border-l-[3px] border-accent pl-7 text-[15px] leading-[26px] text-text2">{message.text}</p>
          <div className="mt-7 font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">{message.name}</div>
          <div className="mt-[6px] text-[9px] font-bold uppercase tracking-[0.12em] text-primary">{message.role}</div>
        </Reveal>
      </div>
    </section>
  )
}

function Leadership({ people, structureLink }) {
  if (!people?.length) return null
  return (
    <section id="leadership" className="scroll-mt-[108px] bg-surface py-16 lg:pb-[85px] lg:pt-24">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Heading line1="Governing" line2="Body." />
            <p className="mb-0 mt-4 text-[13.5px] text-text2">The people who guide the institution.</p>
          </div>
          {structureLink && (
            <Link
              to={structureLink}
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary"
            >
              View Organisational Structure
              <ArrowRight size={13} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>
        <div className="mt-[46px] grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((p, i) => (
            <Reveal key={`${p.role}-${i}`} delay={i * 0.07}>
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
  const inst = useOutletContext()
  const { hash } = useLocation()
  const about = inst.about
  const base = `/institute/${inst.slug}`
  const hasStructure = inst.pages.includes('organisational-structure')

  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 120)
    return () => clearTimeout(t)
  }, [hash])

  // Safety net if a data file has no `about` block yet
  if (!about) return null

  return (
    <>
      <PageHero
        image={about.hero?.image || img.arcade}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1={about.hero?.line1}
        line2={about.hero?.line2}
        className="min-h-[420px] lg:h-[441px]"
      >
        {about.hero?.text && (
          <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
            {about.hero.text}
          </p>
        )}
      </PageHero>
      <Crumbs inst={inst} current="About" />
      <AboutCollege inst={inst} about={about} />
      <History milestones={about.milestones} />
      <VisionMission vision={about.vision} mission={about.mission} />
      <LeadMessage message={about.message} />
      <Leadership
        people={inst.structure?.officeBearers}
        structureLink={hasStructure ? `${base}/organisational-structure` : null}
      />
      <ApplyCTA />
    </>
  )
}