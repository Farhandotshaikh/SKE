import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { institutions } from '../../data/site'

const all = [...institutions.colleges, ...institutions.schools]

function Row({ item, active, big, onActivate }) {
  return (
    <Link
      to="/institutions"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`flex items-center justify-between font-display transition-all duration-200 ${
        active
          ? 'border-l-[3px] border-accent bg-white py-[21px] pl-[23px] pr-[26px] text-[24px] text-primary'
          : 'border-b border-line py-[16px] text-[20px] text-[#7a7a7a] hover:text-primary'
      }`}
    >
      <span className={active ? 'leading-[1.2]' : 'leading-[1.4]'}>{item.name}</span>
      {active && <ArrowUpRight size={14} strokeWidth={2} />}
    </Link>
  )
}

export default function Institutions() {
  const [current, setCurrent] = useState(all[0].name)
  const active = all.find((i) => i.name === current)

  return (
    <section className="grid lg:min-h-[930px] lg:grid-cols-2">
      {/* Image side */}
      <div className="relative min-h-[420px] overflow-hidden bg-primary lg:min-h-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={active.image + active.name}
            src={active.image}
            alt={active.name}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0" style={{ background: 'rgba(82,40,12,0.45)' }} />
        <div className="absolute bottom-6 left-5 right-5 border border-white/50 px-[26px] py-6 md:bottom-[54px] md:left-[50px] md:right-[51px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={active.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="m-0 font-display text-[21.5px] leading-[1.35] text-white"
            >
              {active.caption}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* List side */}
      <div className="bg-surface px-5 py-14 md:px-10 lg:pb-[54px] lg:pl-16 lg:pr-20 lg:pt-[136px]">
        <div className="eyebrow mb-[8px] leading-none text-primary">Colleges</div>
        <div>
          {institutions.colleges.map((c) => (
            <Row key={c.name} item={c} active={current === c.name} onActivate={() => setCurrent(c.name)} />
          ))}
        </div>
        <div className="eyebrow mb-[6px] mt-[22px] leading-none text-primary">Schools &amp; Institutes</div>
        <div>
          {institutions.schools.map((c) => (
            <Row key={c.name} item={c} active={current === c.name} onActivate={() => setCurrent(c.name)} />
          ))}
        </div>
        <Link to="/institutions" className="btn-primary mt-[30px]">View all institutions</Link>
      </div>
    </section>
  )
}
