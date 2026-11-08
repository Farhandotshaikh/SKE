import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { stagger, rise } from '../Reveal'
import { testimonials } from '../../data/site'

function Card({ avatar }) {
  return (
    <motion.div variants={rise} className="bg-white p-[24px]">
      <div className="flex items-start justify-between">
        <img src={avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
        <span aria-hidden className="font-body text-[64px] font-bold leading-[0.75] text-[#cfcfcf]">“</span>
      </div>
      <p className="mb-0 mt-[17px] text-[15px] leading-[1.6] text-ink">
        Alumni testimonial placeholder — one or two lines about their time at SKE.
      </p>
      <div className="mt-[17px] border-t border-line pt-[14px]">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink">Alumni Name ’YY</div>
        <div className="mt-[3px] text-[9px] font-bold uppercase tracking-[0.14em] text-primary">Profession</div>
      </div>
    </motion.div>
  )
}

export default function Alumni() {
  return (
    <section className="relative overflow-hidden bg-sand py-16 lg:py-[104px]">
      {/* Oversized decorative quote mark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[34px] top-[-118px] hidden select-none font-body text-[400px] font-bold leading-none text-accent/60 lg:block"
      >
        “
      </span>
      <div className="wrap relative grid items-start gap-10 lg:grid-cols-[400px_1fr] lg:gap-12">
        <div>
          <h2 className="text-[clamp(30px,2.5vw,36px)] leading-[1.2] text-primary">
            <b className="block font-semibold">Thousands of alumni,</b>
            <i className="block max-w-[420px] font-light italic text-slate">each with a story that began at SKE.</i>
          </h2>
          <p className="mb-0 mt-[26px] max-w-[400px] text-[15px] leading-[1.6] text-text2">
            “Placeholder — a line from a well-known alumnus about what SKE gave them.”
          </p>
          <div className="mt-5 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.16em] text-text2">
            <span className="h-px w-10 bg-text2/60" /> 00,000+ Alumni
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t, i) => (
            <Card key={i} avatar={t.avatar} />
          ))}
          <motion.div variants={rise} className="flex flex-col items-center justify-center bg-primary p-[30px] text-center text-white">
            <h3 className="text-[20px] font-medium">Join the Alumni Network</h3>
            <p className="mb-0 mt-3 text-[11.5px] text-white/85">Stay connected with the SKE family.</p>
            <Link to="/alumni" className="btn-white mt-[22px] h-[43px] w-full">Join now</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
