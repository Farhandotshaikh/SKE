import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { stagger, rise } from '../Reveal'
import { news } from '../../data/site'

export default function News() {
  return (
    <section className="bg-white py-16 lg:py-[106px]">
      <div className="wrap">
        <div className="mb-[45px] flex items-end justify-between">
          <h2 className="text-[clamp(32px,2.8vw,40px)] font-semibold leading-none text-primary">Latest News</h2>
          <Link to="/news-events" className="mb-1 flex items-center gap-2 border-b border-ink pb-[3px] text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
            View all <ArrowRight size={12} />
          </Link>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-9 md:grid-cols-3"
        >
          {news.map((n) => (
            <motion.article key={n.title} variants={rise}>
              <Link to="/news-events" className="group block">
                <div className="overflow-hidden">
                  <img src={n.image} alt="" className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between border-b border-line py-3">
                  <span className="text-[9px] font-bold tracking-[0.14em] text-primary">{n.tag}</span>
                  <span className="font-display text-[11px] italic text-muted">{n.date}</span>
                </div>
                <h3 className="mb-0 mt-4 text-[18px] font-medium leading-[1.55] text-[#0b0b1e] transition-colors group-hover:text-primary">{n.title}</h3>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
