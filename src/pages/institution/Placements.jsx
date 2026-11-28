// src/pages/institution/Placements.jsx
import { useOutletContext } from 'react-router-dom'
import Crumbs from '../../components/institution/Crumbs'
import ApplyCTA from '../../components/ApplyCTA'
import Reveal from '../../components/Reveal'
import PageHero from '../../components/PageHero'
import { ICONS } from '../../components/sections/icons'
import { img } from '../../data/site'

/* ---------- Shared pieces ---------- */

function Heading({ line1, line2 }) {
  return (
    <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
      <b className="block font-semibold text-primary">{line1}</b>
      {line2 && <i className="block font-light italic text-slate">{line2}</i>}
    </h2>
  )
}

/* ---------- Sections ---------- */

function AboutPlacement({ about }) {
  if (!about?.text) return null
  return (
    <section id="about" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_600px] lg:gap-[80px]">
        <Reveal>
          <Heading line1="About the" line2="Placement Cell." />
          <p className="mb-0 mt-6 max-w-[560px] text-[16px] leading-[1.75] text-text2">{about.text}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <img
            src={about.image || img.arcade}
            alt="Placement cell"
            className="aspect-[600/400] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

// Indigo strip: big white value over a small amber label
function Stats({ stats }) {
  if (!stats?.length) return null
  return (
    <section className="bg-primary py-10 lg:py-12">
      <div className="wrap flex flex-wrap items-start justify-between gap-x-10 gap-y-8">
        {stats.map((s, i) => (
          <Reveal key={`${s.label}-${i}`} delay={i * 0.07} className="min-w-[120px]">
            <div className="font-display text-[32px] font-semibold leading-none text-white">{s.value}</div>
            <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Companies({ companies }) {
  if (!companies?.length) return null
  return (
    <section id="companies" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Companies" line2="That Visit." />
        </Reveal>

        <Reveal delay={0.08} className="mt-11 border border-line">
          <div className="grid grid-cols-2 gap-y-6 px-4 py-8 sm:grid-cols-3 lg:grid-cols-5">
            {companies.map((c, i) => (
              <div key={`${c.name}-${i}`} className="flex items-center justify-center px-4">
                {c.logo ? (
                  <img src={c.logo} alt={c.name} className="max-h-10 w-auto object-contain" />
                ) : (
                  <span className="font-display text-[15px] text-[#9a9aa6]">{c.name}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Numbered steps with an amber top rule; 01, 02... come from the order
function CampusRecruitment({ process }) {
  if (!process?.length) return null
  return (
    <section id="recruitment" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Campus" line2="Recruitment." />
        </Reveal>

        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={`${p.title}-${i}`} delay={i * 0.07} className="border-t-2 border-accent pt-6">
              <div className="font-display text-[32px] font-semibold leading-none text-primary">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-4 font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">
                {p.title}
              </h3>
              <p className="mb-0 mt-2 text-[13px] leading-[1.5] text-text2">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CareerPreparation({ preparation }) {
  if (!preparation?.length) return null
  return (
    <section id="preparation" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Career" line2="Preparation." />
        </Reveal>

        <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preparation.map((p, i) => {
            const Icon = ICONS[p.icon] ?? ICONS.briefcase
            return (
              <Reveal
                key={`${p.title}-${i}`}
                delay={i * 0.07}
                className="flex gap-[18px] border border-line bg-white p-7"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#ecebf6] text-primary">
                  <Icon size={17} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">
                    {p.title}
                  </h3>
                  <p className="mb-0 mt-3 text-[13px] leading-[20px] text-text2">{p.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function Placements() {
  const inst = useOutletContext()
  const pl = inst.placements

  // Safety net if a data file has no `placements` block yet
  if (!pl) return null

  const hero = inst.placementsHero

  return (
    <>
      <PageHero
        image={hero?.image || img.arcade}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1={hero?.line1 ?? 'Career'}
        line2={hero?.line2 ?? 'Placements'}
        className="min-h-[420px] lg:h-[441px]"
      >
        {hero?.text && (
          <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
            {hero.text}
          </p>
        )}
      </PageHero>

      <Crumbs inst={inst} current="Placements" />

      <AboutPlacement about={pl.about} />
      <Stats stats={pl.stats} />
      <Companies companies={pl.companies} />
      <CampusRecruitment process={pl.process} />
      <CareerPreparation preparation={pl.preparation} />

      <ApplyCTA />
    </>
  )
}