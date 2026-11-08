import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const roles = ['Student', 'Alumni', 'Employer', 'Teacher']

export default function FeedbackStrip() {
  return (
    <section className="border-b border-white/10 bg-ink">
      <div className="wrap flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center md:py-[75px]">
        <Reveal>
          <h2 className="text-[28px] font-semibold leading-tight text-white md:text-[32px]">
            Share your <i className="font-light italic text-accent">feedback.</i>
          </h2>
          <p className="mb-0 mt-2 text-[14px] text-white/65">
            Help us improve — short forms for students, alumni, employers and teachers.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-wrap gap-3">
          {roles.map((r) => (
            <Link
              key={r}
              to={`/feedback/${r.toLowerCase()}`}
              className="inline-flex h-11 items-center gap-2.5 border border-white/40 px-[22px] text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-accent hover:bg-accent hover:text-ink"
            >
              {r} <ArrowUpRight size={13} strokeWidth={2} />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
