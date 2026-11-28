// src/pages/institution/StudentCorner.jsx
import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import Crumbs from '../../components/institution/Crumbs'
import ApplyCTA from '../../components/ApplyCTA'
import Reveal from '../../components/Reveal'
import PageHero from '../../components/PageHero'
import EventList from '../../components/sections/EventList'
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

// Two link cards (Student Information, Guidance & Mentoring)
function Explore({ items, base }) {
  if (!items?.length) return null
  return (
    <section className="bg-surface py-14 lg:py-14">
      <div className="wrap grid gap-4 md:grid-cols-2">
        {items.map((it, i) => {
          const Icon = ICONS[it.icon] ?? ICONS.book
          const card = (
            <>
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#ecebf6] text-primary">
                <Icon size={17} strokeWidth={1.7} />
              </span>
              <span>
                <span className="block font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">
                  {it.title}
                </span>
                <span className="mt-3 block text-[13px] leading-[1.5] text-text2">{it.text}</span>
              </span>
            </>
          )
          const cls = 'flex gap-[18px] border border-line bg-white p-7'
          return (
            <Reveal key={`${it.title}-${i}`} delay={i * 0.07}>
              {it.page ? (
                <Link to={`${base}/${it.page}`} className={`${cls} transition-shadow hover:shadow-md`}>
                  {card}
                </Link>
              ) : (
                <div className={cls}>{card}</div>
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function UpcomingEvents({ events }) {
  if (!events?.length) return null
  return (
    <section id="events" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Upcoming" line2="Events." />
        </Reveal>
        <div className="mt-11">
          <EventList events={events} />
        </div>
      </div>
    </section>
  )
}

function NewsCard({ item, collegeName }) {
  const body = (
    <>
      <img
        src={item.image || img.arcade}
        alt={item.title}
        className="aspect-[403/260] w-full object-cover"
      />
      <div className="mt-4 flex items-center justify-between border-b border-line pb-3">
        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-primary">{collegeName}</span>
        <span className="text-[11px] italic text-muted">{item.date}</span>
      </div>
      <h3 className="mt-4 font-display text-[20px] font-medium leading-[1.45] text-primary">{item.title}</h3>
    </>
  )

  if (!item.link) return <div>{body}</div>
  if (/^https?:\/\//.test(item.link)) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
        {body}
      </a>
    )
  }
  return (
    <Link to={item.link} className="block">
      {body}
    </Link>
  )
}

function NewsActivities({ news, categories, collegeName }) {
  const [active, setActive] = useState('All')
  if (!news?.length) return null

  const chips = ['All', ...(categories ?? [])]
  const shown = active === 'All' ? news : news.filter((n) => n.category === active)

  return (
    <section id="news" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="News" line2="& Activities." />
        </Reveal>

        {chips.length > 1 && (
          <div className="mt-9 flex flex-wrap gap-3">
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
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((n, i) => (
              <Reveal key={`${n.title}-${i}`} delay={i * 0.06}>
                <NewsCard item={n} collegeName={collegeName.toUpperCase()} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-[14px] text-text2">Nothing here yet.</p>
        )}
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function StudentCorner() {
  const inst = useOutletContext()
  const sc = inst.studentCorner
  const base = `/institute/${inst.slug}`

  // Safety net if a data file has no `studentCorner` block yet
  if (!sc) return null

  const hero = inst.studentCornerHero

  return (
    <>
      <PageHero
        image={hero?.image || img.arcade}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1={hero?.line1 ?? 'Student'}
        line2={hero?.line2 ?? 'Corner'}
        className="min-h-[420px] lg:h-[441px]"
      >
        {hero?.text && (
          <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
            {hero.text}
          </p>
        )}
      </PageHero>

      <Crumbs inst={inst} current="Student Corner" />

      <Explore items={sc.explore} base={base} />
      <UpcomingEvents events={sc.events} />
      <NewsActivities news={sc.news} categories={sc.newsCategories} collegeName={inst.name} />

      <ApplyCTA />
    </>
  )
}