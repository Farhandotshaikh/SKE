import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import ApplyCTA from '../components/ApplyCTA'
import Reveal from '../components/Reveal'
import { img } from '../data/site'
import PageHero from '../components/PageHero'

/* ---------- Content (mirrors the design file, placeholders included) ---------- */

const PAGE_SIZE = 6

// `filter` ties each story to a pill. Society-wide stories only appear under "All".
const filters = [
  ['all', 'All'],
  ['gss-college', 'GSS College'],
  ['gss-puc', 'GSS PUC'],
  ['rpd-degree', 'RPD Degree'],
  ['rpd-puc', 'RPD PUC'],
  ['bca', 'BCA Chandgad'],
  ['schools', 'Schools'],
]

const news = [
  { slug: 'meraki-day-of-talent', filter: 'gss-puc', tag: 'GSS PUC', date: 'Oct 12', title: 'Meraki Brings Schools Together for a Day of Talent', image: img.exhibition },
  { slug: 'srujan-2026', filter: 'gss-college', tag: 'GSS Degree', date: 'Oct 08', title: 'Srujan 2026: Where Student Talent Takes the Spotlight', image: img.seminar },
  { slug: 'milan-celebration', filter: 'society', tag: 'SKE Society', date: 'Sep 29', title: 'Milan Unites the SKE Family in Celebration', image: img.planting },
  { slug: 'news-4', filter: 'rpd-degree', tag: 'RPD Degree', date: 'Sep 21', title: 'News headline goes here', image: img.libraryBuilding },
  { slug: 'news-5', filter: 'rpd-puc', tag: 'RPD PUC', date: 'Sep 14', title: 'News headline goes here', image: img.lab },
  { slug: 'news-6', filter: 'bca', tag: 'BCA Chandgad', date: 'Sep 02', title: 'News headline goes here', image: img.courtyard },
  // Revealed by "Load more"
  { slug: 'news-7', filter: 'gss-college', tag: 'GSS Degree', date: 'Aug 28', title: 'News headline goes here', image: img.sports },
  { slug: 'news-8', filter: 'gss-puc', tag: 'GSS PUC', date: 'Aug 19', title: 'News headline goes here', image: img.library },
  { slug: 'news-9', filter: 'rpd-puc', tag: 'RPD PUC', date: 'Aug 07', title: 'News headline goes here', image: img.auditorium },
]

const events = [
  { slug: 'event-1', day: '12', month: 'Oct', title: 'Event title goes here', where: 'GSS College · Auditorium' },
  { slug: 'event-2', day: '18', month: 'Oct', title: 'Event title goes here', where: 'RPD Degree · Seminar Hall' },
  { slug: 'event-3', day: '25', month: 'Oct', title: 'Event title goes here', where: 'GSS PUC · Campus' },
  { slug: 'event-4', day: '02', month: 'Nov', title: 'Event title goes here', where: 'SKE Society · Tilakwadi' },
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

function LatestNews() {
  const [filter, setFilter] = useState('all')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const list = news.filter((n) => filter === 'all' || n.filter === filter)
  const shown = list.slice(0, visible)

  const pick = (k) => {
    setFilter(k)
    setVisible(PAGE_SIZE)
  }

  return (
    <section id="news" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Latest" line2="News." />
        </Reveal>

        <div className="mt-11 flex flex-wrap gap-[10px]">
          {filters.map(([k, l]) => (
            <button
              key={k}
              type="button"
              onClick={() => pick(k)}
              className={`pill h-[32px] border ${
                filter === k ? 'border-primary bg-primary text-white' : 'border-[#d6d4d1] bg-white text-ink hover:border-primary'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="mt-[45px] grid gap-x-9 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((n) => (
              <motion.article
                key={n.slug}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={`/news-events/${n.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={n.image}
                      alt=""
                      loading="lazy"
                      className="aspect-[403/260] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between border-b border-line py-[14px]">
                    <span className="text-[8.5px] font-bold uppercase leading-[12px] tracking-[0.14em] text-primary">{n.tag}</span>
                    <span className="font-display text-[11px] italic leading-[12px] text-muted">{n.date}</span>
                  </div>
                  <h3 className="mb-0 mt-[15px] text-[19px] font-normal leading-[29px] text-primary transition-colors group-hover:text-primary-dark">
                    {n.title}
                  </h3>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {list.length === 0 && (
          <p className="mt-16 text-center text-[15px] text-text2">No news for this filter yet.</p>
        )}

        {list.length > visible && (
          <div className="mt-11 text-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="h-[46px] w-[124px] border border-[#d6d4d1] bg-white text-[10px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function UpcomingEvents() {
  return (
    <section id="events" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Upcoming" line2="Events." />
        </Reveal>
        <div className="mt-11 grid gap-5 md:grid-cols-2">
          {events.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.07}>
              <Link
                to={`/news-events/${e.slug}`}
                className="group flex items-center gap-5 border border-line bg-white p-4 transition-colors duration-200 hover:border-primary"
              >
                <div className="grid h-[72px] w-[72px] shrink-0 place-content-center bg-primary text-center text-white">
                  <div className="font-display text-[32px] font-medium leading-none">{e.day}</div>
                  <div className="mt-[6px] text-[10px] font-bold uppercase leading-none tracking-[0.12em] text-accent">{e.month}</div>
                </div>
                <div>
                  <h3 className="text-[16px] font-medium leading-[24px] text-[#0b0b1e] transition-colors group-hover:text-primary">{e.title}</h3>
                  <div className="mt-[3px] text-[10px] font-medium uppercase tracking-[0.12em] text-muted">{e.where}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function NewsEvents() {
  return (
    <>
      <PageHero
        image={img.planting}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1="News"
        line2="& Events."
        className="min-h-[420px] lg:h-[441px]"
      >
        <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
          What’s happening across every SKE institution. Filter by institution to follow your campus.
        </p>
      </PageHero>
      <Breadcrumb current="News & Events" />
      <LatestNews />
      <UpcomingEvents />
      <ApplyCTA />
    </>
  )
}
