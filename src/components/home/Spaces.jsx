import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import { img, homeSpaces } from '../../data/site'

export default function Spaces() {
  return (
    <section className="bg-white py-16 lg:pb-[107px] lg:pt-[112px]">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[432px_1fr] lg:gap-8">
        <Reveal>
          <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.1] text-primary">
            <b className="font-semibold">Spaces That</b>
            <br />
            <i className="font-light italic text-slate">Shape Learners</i>
          </h2>
          <p className="mb-0 mt-[20px] max-w-[392px] text-[14px] leading-[1.65] text-text2">
            Libraries, laboratories, sports grounds and halls across SKE campuses. Filter by institution on the
            Facilities page to see what each campus offers.
          </p>
          <div className="mt-8 space-y-[18px]">
            {homeSpaces.map((s) => (
              <Link key={s.title} to="/facilities" className="group flex items-center gap-[14px]">
                <img src={s.image} alt="" className="h-10 w-[58px] object-cover" />
                <span>
                  <span className="block font-display text-[15px] font-medium leading-tight text-primary transition-colors group-hover:text-primary-dark">
                    {s.title}
                  </span>
                  <span className="mt-[5px] block text-[8.5px] font-bold uppercase tracking-[0.12em] text-muted">{s.sub}</span>
                </span>
              </Link>
            ))}
          </div>
          <Link to="/facilities" className="group mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            Explore all facilities <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <img src={img.libraryBuilding} alt="Library building on the SKE campus" className="aspect-[816/605] w-full object-cover" />
        </Reveal>
      </div>
    </section>
  )
}
