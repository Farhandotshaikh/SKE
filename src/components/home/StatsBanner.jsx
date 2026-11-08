import { img } from '../../data/site'
import Reveal from '../Reveal'

const stats = [
  ['1944', 'Founded'],
  ['12', 'Institutions'],
  ['10,000+', 'Students'],
  ['50,000+', 'Alumni'],
]

export default function StatsBanner() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden text-white lg:h-[620px]">
      <img src={img.crowd} alt="Students gathered on campus" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: 'rgba(109,78,1,0.53)' }} />
      <Reveal className="relative px-5 pt-1 text-center">
        <h2 className="text-[clamp(40px,3.9vw,56px)] font-semibold leading-[1.1]">
          Eighty Years
          <br />
          of Learning
        </h2>
        <div className="mx-auto mt-6 h-px w-full max-w-[560px] bg-white/35" />
        <div className="mt-[30px] flex flex-wrap items-start justify-center gap-x-[58px] gap-y-6">
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-[28px] font-semibold leading-none">{n}</div>
              <div className="mt-2 text-[8.5px] font-medium uppercase tracking-[0.16em] text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
