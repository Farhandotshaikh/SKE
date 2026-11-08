import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { img } from '../../data/site'

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] overflow-hidden text-white lg:h-[807px]">
      <img src={img.hero} alt="SKE heritage building, Belagavi" className="absolute inset-0 h-full w-full object-cover object-center" fetchpriority="high" />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(65,51,60,0.64) 0%, rgba(93,81,66,0.64) 100%)' }}
      />
      <div className="wrap relative flex flex-col justify-center pb-10 pt-16 lg:pb-[30px] lg:pt-[60px]">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[560px] text-[clamp(48px,5.7vw,82px)] font-semibold uppercase leading-[1.075] tracking-[-0.005em]"
        >
          Rooted in Legacy.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-0 mt-9 max-w-[400px] font-display text-[16px] font-light italic leading-[1.6] text-white/95"
        >
          “From school to degree, the South Konkan Education Society has shaped generations of learners in Belagavi
          since 1944.”
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link to="/institutions" className="btn-primary px-[22px]">Explore Institutions</Link>
          <Link to="/admissions" className="btn-white px-[22px]">Admissions</Link>
        </motion.div>
      </div>
    </section>
  )
}
