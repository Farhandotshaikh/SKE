import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import { stagger, rise } from './Reveal'
import { whyStudy } from '../data/site'

export default function WhyStudy() {
  return (
    <section className="bg-primary py-16 text-white lg:py-[108px]">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_768px] lg:gap-[80px]">
        <div>
          <h2 className="text-[clamp(34px,3.1vw,44px)] leading-[1.12]">
            <b className="block font-semibold">Why Study</b>
            <i className="block font-light italic text-accent">at SKE?</i>
          </h2>
          <p className="mb-0 mt-6 max-w-[430px] text-[16px] leading-[1.65] text-white/80">
            For over eighty years the Society has prepared students for higher studies and careers — with experienced
            faculty, guidance at every stage and a campus rooted in Belagavi’s history.
          </p>
          <a href="#" className="mt-9 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-accent">
            Download prospectus <ArrowUpRight size={13} strokeWidth={2} />
          </a>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {whyStudy.map((w) => (
            <motion.div
              key={w.title}
              variants={rise}
              className="flex gap-4 border border-white/[0.18] bg-white/[0.08] px-[28px] py-[27px]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-accent text-primary">
                <Icon name={w.icon} size={18} strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="text-[16px] font-medium leading-tight">{w.title}</h3>
                <p className="mb-0 mt-[10px] text-[13px] leading-[1.55] text-white/75">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
