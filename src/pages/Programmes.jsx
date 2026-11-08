import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import PageHero from '../components/PageHero'
import Breadcrumb from '../components/Breadcrumb'
import WhyStudy from '../components/WhyStudy'
import ApplyCTA from '../components/ApplyCTA'
import Icon from '../components/Icon'
import { programmes, img } from '../data/site'

const filters = [
  ['all', 'All'],
  ['degree', 'Degree'],
  ['pu', 'Pre-University'],
  ['certificate', 'Certificate'],
]
const institutions = [
  ['all', 'All'],
  ['GSS', 'GSS Colleges'],
  ['RPD', 'RPD Colleges'],
  ['BCA', 'BCA College, Chandgad'],
]

export default function Programmes() {
  const [cat, setCat] = useState('all')
  const [inst, setInst] = useState('all')

  const list = useMemo(
    () =>
      programmes.filter(
        (p) =>
          (cat === 'all' || p.cat === cat) &&
          (inst === 'all' || p.instKey === inst || (p.instKey === 'BOTH' && (inst === 'GSS' || inst === 'RPD'))),
      ),
    [cat, inst],
  )
  const instLabel = institutions.find(([k]) => k === inst)[1]

  return (
    <>
      <PageHero
        image={img.seminar}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.92) 0%, rgba(57,49,133,0.79) 50%, rgba(38,31,115,0.58) 100%)"
        line1="Programmes"
        line2="at SKE."
        className="min-h-[420px] lg:h-[441px]"
      >
        <p className="mb-0 mt-6 max-w-[640px] text-[18px] leading-[1.6] text-white/90">
          Pre-university, degree and certificate programmes across SKE’s colleges in Belagavi and Chandgad. Choose a
          programme to visit the institution that offers it.
        </p>
      </PageHero>
      <Breadcrumb current="Programmes" />

      <section className="bg-white pb-20 pt-[66px] lg:pb-[88px]">
        <div className="wrap">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-[26px]">
            <div className="flex flex-wrap gap-[10px]">
              {filters.map(([k, l]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setCat(k)}
                  className={`pill h-[32px] border ${cat === k ? 'border-primary bg-primary text-white' : 'border-[#d6d4d1] bg-white text-ink hover:border-primary'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                {list.length} {list.length === 1 ? 'Programme' : 'Programmes'}
              </span>
              <label className="relative flex h-[33px] items-center rounded-full border border-[#d6d4d1] bg-white pl-4 pr-9 text-[10px] font-bold uppercase tracking-[0.12em]">
                <span className="font-medium text-muted">Institution:&nbsp;</span>
                <span className="text-primary">{instLabel.replace(' Colleges', '')}</span>
                <select
                  value={inst}
                  onChange={(e) => setInst(e.target.value)}
                  aria-label="Filter by institution"
                  className="ske-select absolute inset-0 cursor-pointer opacity-0"
                >
                  {institutions.map(([k, l]) => (
                    <option key={k} value={k}>{l}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="pointer-events-none absolute right-3 text-primary" />
              </label>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-11 grid gap-x-8 gap-y-[54px] md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <Link to="/institutions" className="group flex h-full flex-col lg:min-h-[472px]">
                    <div className="relative aspect-[405/272] overflow-hidden bg-sand">
                      <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      <span className="absolute left-0 top-0 grid h-11 w-11 place-items-center bg-white text-primary">
                        <Icon name={p.icon} size={16} strokeWidth={1.6} />
                      </span>
                    </div>
                    <div className="mt-[18px] flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                      <span className="h-px w-[14px] bg-accent" /> {p.tag}
                    </div>
                    <h3 className="mt-[10px] text-[22px] font-medium leading-[1.25] text-[#0b0b1e]">{p.title}</h3>
                    <p className="mb-0 mt-3 max-w-[380px] text-[14px] leading-[1.55] text-text2">{p.desc}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-line pt-[18px]">
                      <span className="text-[9.5px] font-medium uppercase tracking-[0.1em] text-muted">{p.inst}</span>
                      <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                        Details <ArrowRight size={13} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
          {list.length === 0 && (
            <p className="mt-16 text-center text-[15px] text-text2">No programmes match these filters yet.</p>
          )}
        </div>
      </section>

      <WhyStudy />
      <ApplyCTA />
    </>
  )
}
