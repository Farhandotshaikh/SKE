import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { homeProgrammes } from '../../data/site'

const filters = [
  ['all', 'All'],
  ['degree', 'Degree'],
  ['pu', 'Pre-University'],
  ['certificate', 'Certificate Courses'],
]

export default function FindProgramme() {
  const [f, setF] = useState('all')
  // "All" shows the six featured programmes; Certificate has its own card.
  const list = f === 'all' ? homeProgrammes.filter((p) => p.cat !== 'certificate') : homeProgrammes.filter((p) => p.cat === f)

  return (
    <section className="bg-primary py-16 text-white lg:pb-[100px] lg:pt-[100px]">
      <div className="wrap">
        <h2 className="border-b border-white/20 pb-7 text-[clamp(34px,3.2vw,46px)] font-light leading-[1.2]">
          Find Your <i className="font-light italic text-accent">Programme</i>
        </h2>

        <div className="mt-[27px] flex flex-wrap gap-[10px]">
          {filters.map(([k, l]) => (
            <button
              key={k}
              type="button"
              onClick={() => setF(k)}
              className={`pill border ${f === k ? 'border-white bg-white text-primary' : 'border-white/40 bg-transparent text-white hover:border-white'}`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="mt-[38px] grid gap-x-6 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  to="/programmes"
                  className="group flex h-full flex-col rounded-md border border-white/[0.18] bg-white/[0.06] p-[28px] transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.11]"
                >
                  <span className="self-start rounded-full border border-white/45 px-[10px] py-[3px] text-[9px] font-bold uppercase tracking-[0.1em]">
                    {p.tag}
                  </span>
                  <div className="mb-[30px] mt-[40px]">
                    <h3 className="text-[22px] font-normal leading-[1.25]">{p.title}</h3>
                    <p className="mb-0 mt-[3px] text-[12px] text-white/60">{p.sub}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-white/[0.15] pt-[18px] text-[10px] font-medium uppercase tracking-[0.1em] text-white/70">
                    <span>{p.inst}</span>
                    <ArrowUpRight size={14} className="shrink-0 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Link to="/programmes" className="link-line mt-[44px]">View all programmes</Link>
      </div>
    </section>
  )
}
