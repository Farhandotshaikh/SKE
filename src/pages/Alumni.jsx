import { Link } from 'react-router-dom'
import { ArrowUpRight, Users, Compass, Briefcase } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import ApplyCTA from '../components/ApplyCTA'
import Reveal from '../components/Reveal'
import { img } from '../data/site'
import PageHero from '../components/PageHero'

/* ---------- Content (mirrors the design file, placeholders included) ---------- */

const testimonials = [
  { avatar: img.alumni[0], text: 'Alumni testimonial placeholder — one or two lines about their time at SKE.', name: 'Alumni Name ’YY', role: 'Profession' },
  { avatar: img.alumni[1], text: 'Alumni testimonial placeholder — one or two lines about their time at SKE.', name: 'Alumni Name ’YY', role: 'Profession' },
  { avatar: img.alumni[2], text: 'Alumni testimonial placeholder — one or two lines about their time at SKE.', name: 'Alumni Name ’YY', role: 'Profession' },
]

const benefits = [
  { icon: Users, title: 'Reunions', text: 'Meet your batch at Society and college events.' },
  { icon: Compass, title: 'Mentoring', text: 'Guide current students with your experience.' },
  { icon: Briefcase, title: 'Opportunities', text: 'Share internships and openings with SKE students.' },
]

/* ---------- Small shared piece ---------- */

// Bold first line + light italic second line.
function Heading({ line1, line2 }) {
  return (
    <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
      <b className="block font-semibold text-primary">{line1}</b>
      <i className="block font-light italic text-slate">{line2}</i>
    </h2>
  )
}

/* ---------- Sections ---------- */

function AboutNetwork() {
  return (
    <section id="network" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_600px] lg:gap-20">
        <Reveal>
          <Heading line1="Join the" line2="Alumni Network." />
          <p className="mb-0 mt-[22px] max-w-[600px] text-[16px] leading-[26px] text-text2">
            Whichever SKE institution you studied at, you are part of the network. Add your details through a short
            form to hear about reunions, mentoring and news from your campus.
          </p>
          <Link to="/alumni/join" className="btn-primary mt-8 h-11 px-6">
            Join the Alumni Network <ArrowUpRight size={12} strokeWidth={2.2} />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <img
            src={img.planting}
            alt="Students, staff and alumni planting a tree on the SKE campus"
            className="aspect-[600/480] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

function AlumniVoices() {
  return (
    <section id="voices" className="scroll-mt-[108px] bg-sand py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Alumni" line2="Voices." />
        </Reveal>
        <div className="mt-11 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="m-0 h-full bg-white p-[26px]">
                <div className="flex items-start justify-between">
                  <img src={t.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
                  <span aria-hidden className="font-serif text-[64px] font-bold leading-[0.75] text-[#cfcfcf]">“</span>
                </div>
                <blockquote className="m-0 mt-[18px] font-display text-[14px] leading-[22px] text-ink">{t.text}</blockquote>
                <figcaption className="mt-[18px] border-t border-line pt-[18px]">
                  <div className="text-[10px] font-bold uppercase leading-[12px] tracking-[0.14em] text-ink">{t.name}</div>
                  <div className="mt-1 text-[9px] font-bold uppercase leading-[11px] tracking-[0.14em] text-primary">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyStayConnected() {
  return (
    <section id="connected" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Why Stay" line2="Connected." />
        </Reveal>
        <div className="mt-11 grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon: I, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex h-full gap-[18px] border border-line bg-white p-7">
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#eeecf7] text-primary">
                  <I size={16} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-[16px] font-medium leading-[24px] text-[#0b0b1e]">{title}</h3>
                  <p className="mb-0 mt-[10px] text-[13px] leading-[20px] text-text2">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function Alumni() {
  return (
    <>
      <PageHero
        image={img.crowd}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1="Once SKE,"
        line2="Always SKE."
        className="min-h-[420px] lg:h-[441px]"
      >
        <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
          Thousands of alumni, each with a story that began at SKE. Stay connected with the family.
        </p>
      </PageHero>
      <Breadcrumb current="Alumni" />
      <AboutNetwork />
      <AlumniVoices />
      <WhyStayConnected />
      <ApplyCTA />
    </>
  )
}
