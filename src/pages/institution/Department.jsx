// src/pages/institution/Department.jsx
import { useEffect, useState } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import Crumbs from '../../components/institution/Crumbs'
import ApplyCTA from '../../components/ApplyCTA'
import Reveal from '../../components/Reveal'
import PageHero from '../../components/PageHero'
import { ICONS } from '../../components/sections/icons'
import { Users } from 'lucide-react'
import { img } from '../../data/site'

/* ---------- Shared pieces ---------- */

// Bold first line + light italic second line; line2 is optional (Faculty. is one line)
function Heading({ line1, line2, dark = false }) {
  return (
    <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
      <b className={`block font-semibold ${dark ? 'text-white' : 'text-primary'}`}>{line1}</b>
      {line2 && (
        <i className={`block font-light italic ${dark ? 'text-accent' : 'text-slate'}`}>{line2}</i>
      )}
    </h2>
  )
}

/* ---------- Sections ---------- */

// Filter chips: one per department
function DepartmentFilter({ departments, active, onSelect }) {
  return (
    <section className="bg-white pb-2 pt-10">
      <div className="wrap flex flex-wrap gap-3">
        {departments.map((d) => {
          const on = d.slug === active
          return (
            <button
              key={d.slug}
              type="button"
              onClick={() => onSelect(d.slug)}
              aria-pressed={on}
              className={`rounded-full border px-4 py-[9px] text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                on
                  ? 'border-primary bg-primary text-white'
                  : 'border-line bg-white text-[#0b0b1e] hover:border-primary hover:text-primary'
              }`}
            >
              {d.name}
            </button>
          )
        })}
      </div>
    </section>
  )
}

function Overview({ dept }) {
  return (
    <section id="overview" className="scroll-mt-[108px] bg-white py-12 lg:py-16">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_600px] lg:gap-[80px]">
        <Reveal>
          <h2 className="font-display text-[clamp(32px,2.8vw,40px)] font-semibold leading-[1.2] text-primary">
            {dept.name}
          </h2>
          <p className="mb-0 mt-6 max-w-[560px] text-[16px] leading-[1.75] text-text2">{dept.overview}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <img
            src={dept.image || img.arcade}
            alt={`${dept.name} department`}
            className="aspect-[600/380] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

function DepartmentFacilities({ facilities }) {
  if (!facilities?.length) return null
  return (
    <section id="facilities" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Department" line2="Facilities." />
        </Reveal>

        <div className="mt-11 grid gap-1 md:grid-cols-3">
          {facilities.map((f, i) => {
            const Icon = ICONS[f.icon] ?? ICONS.book
            return (
              <Reveal key={`${f.title}-${i}`} delay={i * 0.07} className="relative h-[280px] overflow-hidden">
                <img src={f.image || img.arcade} alt={f.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1450]/90 via-[#1a1450]/20 to-transparent" />
                <div className="absolute bottom-6 left-7">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                    <Icon size={18} />
                  </span>
                  <p className="font-display text-xl text-white">{f.title}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                    Department
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Faculty({ faculty }) {
  if (!faculty?.length) return null
  return (
    <section id="faculty" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Faculty." />
        </Reveal>

        <div className="mt-11 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((p, i) => (
            <Reveal key={`${p.name}-${i}`} delay={i * 0.07}>
              <div className="flex aspect-[37/40] w-full items-center justify-center overflow-hidden bg-[#e5e3df]">
                {p.photo ? (
                  <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
                ) : (
                  <Users size={30} strokeWidth={1.5} className="text-slate-400" />
                )}
              </div>
              <p className="mt-5 font-display text-lg font-medium text-[#0b0b1e]">{p.name}</p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                {p.role}
              </p>
              {p.detail && <p className="mt-2 text-sm text-slate-500">{p.detail}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActivitiesAchievements({ activities }) {
  if (!activities?.length) return null
  return (
    <section id="activities" className="scroll-mt-[108px] bg-primary py-16 text-white lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Activities" line2="& Achievements." dark />
        </Reveal>

        <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => {
            const Icon = ICONS[a.icon] ?? ICONS.award
            return (
              <Reveal
                key={`${a.title}-${i}`}
                delay={i * 0.07}
                className="flex gap-[18px] border border-white/20 bg-white/10 p-7"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-accent text-primary">
                  <Icon size={17} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-[16px] font-medium leading-tight">{a.title}</h3>
                  <p className="mb-0 mt-[10px] text-[13px] leading-[20px] text-white/80">{a.text}</p>
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

export default function Department() {
  const inst = useOutletContext()
  const { hash } = useLocation()
  const departments = inst.departments

  // Active department: from the URL hash (#department-2) when valid, else the first one
  const fromHash = departments?.find((d) => d.slug === hash.slice(1))?.slug
  const [active, setActive] = useState(fromHash ?? departments?.[0]?.slug)

  useEffect(() => {
    if (fromHash) setActive(fromHash)
  }, [fromHash])

  // Safety net if a data file has no `departments` yet
  if (!departments?.length) return null

  const dept = departments.find((d) => d.slug === active) ?? departments[0]

  const select = (slug) => {
    setActive(slug)
    window.history.replaceState(null, '', `#${slug}`) // keeps the chosen department shareable
  }

  return (
    <>
      <PageHero
        image={inst.departmentsHero?.image || img.arcade}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1={inst.departmentsHero?.line1 ?? 'Our'}
        line2={inst.departmentsHero?.line2 ?? 'Departments'}
        className="min-h-[420px] lg:h-[441px]"
      >
        {inst.departmentsHero?.text && (
          <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
            {inst.departmentsHero.text}
          </p>
        )}
      </PageHero>

      <Crumbs inst={inst} current="Departments" />

      <DepartmentFilter departments={departments} active={dept.slug} onSelect={select} />

      {/* key remounts the sections on every switch so the reveal animations replay */}
      <div key={dept.slug}>
        <Overview dept={dept} />
        <DepartmentFacilities facilities={dept.facilities} />
        <Faculty faculty={dept.faculty} />
        <ActivitiesAchievements activities={dept.activities} />
      </div>

      <ApplyCTA />
    </>
  )
}