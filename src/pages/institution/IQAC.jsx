// src/pages/institution/IQAC.jsx
import { useOutletContext } from 'react-router-dom'
import { ArrowRight, FileDown, Users } from 'lucide-react'
import Crumbs from '../../components/institution/Crumbs'
import ApplyCTA from '../../components/ApplyCTA'
import Reveal from '../../components/Reveal'
import PageHero from '../../components/PageHero'
import { img } from '../../data/site'

/* ---------- Shared pieces ---------- */

function Heading({ line1, line2 }) {
  return (
    <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
      <b className="block font-semibold text-primary">{line1}</b>
      {line2 && <i className="block font-light italic text-slate">{line2}</i>}
    </h2>
  )
}

/* ---------- Sections ---------- */

// Indented further than the other sections (about 180px from the edge in the design)
function AboutIQAC({ about }) {
  if (!about?.text) return null
  return (
    <section id="about" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal className="lg:pl-[100px]">
          <Heading line1="About" line2="the IQAC." />
          <p className="mb-0 mt-6 max-w-[700px] text-[16px] leading-[1.75] text-text2">{about.text}</p>
        </Reveal>
      </div>
    </section>
  )
}

function Composition({ people }) {
  if (!people?.length) return null
  return (
    <section id="composition" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="IQAC" line2="Composition." />
        </Reveal>

        <div className="mt-11 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((p, i) => (
            <Reveal key={`${p.name}-${i}`} delay={i * 0.07}>
              <div className="flex aspect-[37/40] w-full items-center justify-center overflow-hidden bg-[#e5e3df]">
                {p.photo ? (
                  <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
                ) : (
                  <Users size={30} strokeWidth={1.5} className="text-slate-400" />
                )}
              </div>
              <p className="mt-5 font-display text-lg font-medium text-[#0b0b1e]">{p.name}</p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                {p.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReportsDocuments({ reports }) {
  if (!reports?.length) return null
  return (
    <section id="reports" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Reports" line2="& Documents." />
        </Reveal>

        <div className="mt-11">
          {reports.map((r, i) => (
            <Reveal
              key={`${r.title}-${i}`}
              delay={i * 0.06}
              className="flex items-center justify-between gap-4 border-b border-line py-4"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#ecebf6] text-primary">
                  <FileDown size={17} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-[16px] font-medium leading-tight text-[#0b0b1e]">{r.title}</h3>
                  <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.12em] text-muted">
                    {r.type || 'PDF'}
                  </div>
                </div>
              </div>

              {r.file && (
                <a
                  href={r.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="group flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary"
                >
                  Download
                  <ArrowRight size={13} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function IQAC() {
  const inst = useOutletContext()
  const iq = inst.iqac

  // Safety net if a data file has no `iqac` block yet
  if (!iq) return null

  const hero = inst.iqacHero

  return (
    <>
      <PageHero
        image={hero?.image || img.arcade}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1={hero?.line1 ?? 'Internal Quality'}
        line2={hero?.line2 ?? 'Assurance Cell'}
        className="min-h-[420px] lg:h-[441px]"
      >
        {hero?.text && (
          <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
            {hero.text}
          </p>
        )}
      </PageHero>

      <Crumbs inst={inst} current="IQAC" />

      <AboutIQAC about={iq.about} />
      <Composition people={iq.composition} />
      <ReportsDocuments reports={iq.reports} />

      <ApplyCTA />
    </>
  )
}