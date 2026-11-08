import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import Breadcrumb from '../components/Breadcrumb'
import ApplyCTA from '../components/ApplyCTA'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { facilities, facilityFilters, beyondClass, landmarks, img } from '../data/site'

const tileShade = 'linear-gradient(to top, rgba(14,8,44,0.92) 0%, rgba(14,8,44,0.5) 42%, rgba(14,8,44,0) 78%)'
const landmarkShade = 'linear-gradient(to top, rgba(8,4,32,0.94) 0%, rgba(8,4,32,0.6) 40%, rgba(8,4,32,0) 72%)'
const placeholderBg = 'linear-gradient(160deg, #4b4660 0%, #2b2642 45%, #07001d 100%)'

function HeroStats() {
  const stats = [
    ['08', 'Institutions'],
    ['00+', 'Laboratories'],
    ['00', 'Libraries'],
  ]
  return (
    <div className="wrap absolute inset-x-0 bottom-[52px] hidden justify-end gap-12 lg:flex">
      {stats.map(([n, l]) => (
        <div key={l} className="text-center">
          <div className="font-display text-[32px] font-semibold leading-none">{n}</div>
          <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-accent">{l}</div>
        </div>
      ))}
    </div>
  )
}

export default function Facilities() {
  const [f, setF] = useState('all')
  const list = useMemo(() => facilities.filter((x) => f === 'all' || x.campuses.includes(f)), [f])

  return (
    <>
      <PageHero
        image={img.corridor}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1="Spaces That"
        line2="Shape Learners."
        className="min-h-[520px] lg:h-[594px]"
        stats={<HeroStats />}
      >
        <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
          “Heritage buildings, modern laboratories and open grounds — the spaces where SKE students learn, play and grow.”
        </p>
      </PageHero>
      <Breadcrumb current="Facilities" />

      {/* Palace campus */}
      <section className="overflow-hidden bg-white py-16 lg:pb-[129px] lg:pt-[140px]">
        <div className="wrap grid items-center gap-16 lg:grid-cols-[1fr_560px] lg:gap-[60px]">
          <Reveal>
            <h2 className="text-[clamp(34px,3.1vw,44px)] leading-[1.15] text-primary">
              <b className="block font-semibold">A Palace Campus,</b>
              <i className="block font-light italic text-slate">Built for Learning.</i>
            </h2>
            <p className="mb-0 mt-8 max-w-[600px] text-[16px] leading-[1.7] text-[#4b4f58]">
              In 1948 the Society’s first college moved to Belagavi and was housed in the summer palace of Raja
              Patwardhan of Jamakhandi in Tilakwadi. Today the campus pairs those heritage buildings with laboratories,
              libraries and sports grounds shared across SKE institutions.
            </p>
            <p className="mb-0 mt-6 max-w-[600px] text-[14px] leading-[1.6] text-[#9a9ca3]">
              Facilities differ by institution — use the filters below to see what each campus offers, and open any
              facility for details.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-9 gap-y-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              <Link to="/campus-map" className="group flex items-center gap-2">
                Request campus map <ArrowRight size={13} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/virtual-tour" className="group flex items-center gap-2">
                Virtual tour <ArrowUpRight size={13} strokeWidth={2.2} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative mb-12 lg:mb-0">
            <img src={img.courtyard} alt="The Patwardhan Palace campus" className="aspect-[560/639] w-full object-cover" />
            <div
              className="absolute -bottom-10 left-4 w-[280px] border-l-[3px] border-accent bg-primary p-[26px] text-white lg:-left-12 lg:w-[300px]"
              style={{ boxShadow: '0 24px 40px -8px rgba(38,30,115,0.35)' }}
            >
              <p className="m-0 font-display text-[18px] font-light italic leading-[1.55]">
                “Placeholder — a student’s line about studying on the heritage campus.”
              </p>
              <div className="my-[18px] h-px w-5 bg-accent" />
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">Student Name, Programme</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facilities grid */}
      <section className="bg-surface pb-16 pt-16 lg:pb-[117px] lg:pt-[100px]">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[clamp(34px,3.1vw,44px)] leading-[1.1] text-primary">
                <b className="block font-semibold">Facilities Across</b>
                <i className="block font-light italic text-slate">Our Campuses.</i>
              </h2>
              <p className="mb-0 mt-5 text-[14px] text-text2">
                Every facility is listed with the institution it belongs to. Select a campus to filter.
              </p>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
              {list.length} {list.length === 1 ? 'Facility' : 'Facilities'}
            </span>
          </div>

          <div className="mt-[30px] flex flex-wrap gap-[10px] border-b border-line pb-6">
            {facilityFilters.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setF(key)}
                className={`pill h-[31px] border ${f === key ? 'border-primary bg-primary text-white' : 'border-[#d6d4d1] bg-white text-ink hover:border-primary'}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-9 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((x) => (
                <motion.div
                  key={x.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    to="/facilities"
                    className="group relative block h-[280px] overflow-hidden"
                    style={x.image ? undefined : { background: '#cdcac8' }}
                  >
                    {x.image && (
                      <img src={x.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    )}
                    <div className="absolute inset-0" style={{ background: tileShade }} />
                    <div className="absolute inset-x-0 bottom-0 p-[27px]">
                      <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white text-primary">
                        <Icon name={x.icon} size={16} strokeWidth={1.6} />
                      </span>
                      <h3 className="mt-3 text-[20px] font-normal leading-tight text-white">{x.title}</h3>
                      <div className="mt-2 text-[9.5px] font-bold uppercase tracking-[0.12em] text-accent">{x.inst}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Life beyond the classroom */}
      <section className="grid lg:min-h-[564px] lg:grid-cols-2">
        <div className="flex items-center bg-primary px-5 py-16 text-white md:px-10 lg:pl-20 lg:pr-12">
          <Reveal className="w-full max-w-[560px]">
            <h2 className="text-[clamp(34px,3.1vw,44px)] leading-[1.1]">
              <b className="block font-semibold">Life Beyond</b>
              <i className="block font-light italic text-accent">the Classroom.</i>
            </h2>
            <p className="mb-0 mt-8 max-w-[540px] font-display text-[18px] font-light italic leading-[1.6] text-white/85">
              “Clubs, cultural events and everyday spaces where friendships and confidence are built alongside the
              syllabus.”
            </p>
            <div className="mt-8 grid gap-y-5 border-y border-white/20 py-6 sm:grid-cols-2">
              {beyondClass.map((b) => (
                <div key={b.label} className="flex items-center gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/30 text-accent">
                    <Icon name={b.icon} size={15} strokeWidth={1.6} />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em]">{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[360px]">
          <img src={img.planting} alt="Students and staff planting a tree on campus" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Campus landmarks */}
      <section className="bg-white pb-16 pt-16 lg:pb-[112px] lg:pt-[100px]">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-[27px]">
            <div>
              <h2 className="text-[clamp(34px,3.1vw,44px)] leading-[1.1] text-primary">
                <b className="block font-semibold">Campus</b>
                <i className="block font-light italic text-slate">Landmarks.</i>
              </h2>
              <p className="mb-0 mt-5 text-[14px] text-text2">Places with a story — cherished by generations of SKE students.</p>
            </div>
            <Link to="/campus-map" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              Explore on map <ArrowUpRight size={13} strokeWidth={2.2} />
            </Link>
          </div>

          <div className="mt-[44px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {landmarks.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.08}>
                <div className="group relative h-[399px] overflow-hidden" style={l.image ? undefined : { background: placeholderBg }}>
                  {l.image && (
                    <img src={l.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  )}
                  <div className="absolute inset-0" style={{ background: landmarkShade }} />
                  <div className="absolute inset-x-0 bottom-0 p-6 pb-7">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
                      <MapPin size={11} strokeWidth={2} /> {l.campus}
                    </div>
                    <h3 className="mt-2 text-[20px] font-medium leading-tight text-white">{l.title}</h3>
                    <p className="mb-0 mt-2 text-[13px] leading-[1.5] text-white/75">{l.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ApplyCTA />
    </>
  )
}
