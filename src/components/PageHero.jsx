import { motion } from 'framer-motion'

// Inner-page hero: photo + indigo gradient, bold/italic headline pair, optional stats.
export default function PageHero({ image, overlay, line1, line2, children, stats, className = '' }) {
  return (
    <section className={`relative flex overflow-hidden text-white ${className}`}>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" fetchpriority="high" />
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div className="wrap relative flex flex-col justify-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(46px,5vw,72px)] leading-[1.05]"
        >
          <b className="block font-semibold">{line1}</b>
          <i className="block font-light italic text-accent">{line2}</i>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
      {stats}
    </section>
  )
}
