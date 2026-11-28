// src/pages/institution/Facilities.jsx
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Crumbs from '../../components/institution/Crumbs'
import ApplyCTA from '../../components/ApplyCTA'
import Reveal from '../../components/Reveal'
import PageHero from '../../components/PageHero'
import { ICONS } from '../../components/sections/icons'
import { img } from '../../data/site'

/* ---------- Sections ---------- */

function FacilityGrid({ items, categories }) {
  const [active, setActive] = useState('All')
  if (!items?.length) return null

  const chips = ['All', ...(categories ?? [])]
  const shown = active === 'All' ? items : items.filter((f) => f.category === active)

  return (
    <section className="bg-surface py-14 lg:py-16">
      <div className="wrap">
        {chips.length > 1 && (
          <div className="flex flex-wrap gap-3">
            {chips.map((c) => {
              const on = c === active
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={on}
                  className={`rounded-full border px-4 py-[9px] text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    on
                      ? 'border-primary bg-primary text-white'
                      : 'border-line bg-white text-[#0b0b1e] hover:border-primary hover:text-primary'
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>
        )}

        {shown.length ? (
          // key remounts the grid on every filter change so the reveal animations replay
          <div key={active} className="mt-10 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((f, i) => {
              const Icon = ICONS[f.icon] ?? ICONS.book
              return (
                <Reveal
                  key={`${f.title}-${i}`}
                  delay={i * 0.05}
                  className="relative h-[280px] overflow-hidden"
                >
                  <img src={f.image || img.arcade} alt={f.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1450]/90 via-[#1a1450]/20 to-transparent" />
                  <div className="absolute bottom-6 left-7">
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                      <Icon size={18} />
                    </span>
                    <p className="font-display text-[22px] leading-tight text-white">{f.title}</p>
                    {f.category && (
                      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                        {f.category}
                      </p>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        ) : (
          <p className="mt-10 text-[14px] text-text2">Nothing here yet.</p>
        )}
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function Facilities() {
  const inst = useOutletContext()
  const fac = inst.facilities

  // Safety net if a data file has no `facilities` block yet
  if (!fac) return null

  const hero = inst.facilitiesHero

  return (
    <>
      <PageHero
        image={hero?.image || img.arcade}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1={hero?.line1 ?? 'Campus'}
        line2={hero?.line2 ?? 'Facilities'}
        className="min-h-[420px] lg:h-[441px]"
      >
        {hero?.text && (
          <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
            {hero.text}
          </p>
        )}
      </PageHero>

      <Crumbs inst={inst} current="Facilities" />

      <FacilityGrid items={fac.items} categories={fac.categories} />

      <ApplyCTA />
    </>
  )
}