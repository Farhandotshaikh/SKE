// src/pages/institution/StudentInformation.jsx
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, FileDown } from 'lucide-react'
import Crumbs from '../../components/institution/Crumbs'
import ApplyCTA from '../../components/ApplyCTA'
import Reveal from '../../components/Reveal'
import PageHero from '../../components/PageHero'
import { img } from '../../data/site'

/* ---------- Sections ---------- */

function DocumentList({ documents, categories }) {
  const [active, setActive] = useState('All')
  if (!documents?.length) return null

  const chips = ['All', ...(categories ?? [])]
  const shown = active === 'All' ? documents : documents.filter((d) => d.category === active)

  return (
    <section id="documents" className="scroll-mt-[108px] bg-white py-14 lg:py-16">
      <div className="wrap">
        {chips.length > 1 && (
          <div className="flex flex-wrap gap-3">
            {chips.map((c) => {
              const on = c === active
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={on}
                  className={`rounded-full border px-4 py-[9px] text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    on
                      ? 'border-primary bg-primary text-white'
                      : 'border-line bg-white text-[#0b0b1e] hover:border-primary hover:text-primary'
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>
        )}

        {shown.length ? (
          // key remounts the list on every filter change so the reveal animations replay
          <div key={active} className="mt-10">
            {shown.map((d, i) => (
              <Reveal
                key={`${d.title}-${i}`}
                delay={i * 0.05}
                className="flex items-center justify-between gap-4 border-b border-line py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#ecebf6] text-primary">
                    <FileDown size={17} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-medium leading-tight text-[#0b0b1e]">{d.title}</h3>
                    <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.12em] text-muted">
                      {d.type || 'PDF'}
                    </div>
                  </div>
                </div>

                {d.file && (
                  <a
                    href={d.file}
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
        ) : (
          <p className="mt-10 text-[14px] text-text2">Nothing here yet.</p>
        )}
      </div>
    </section>
  )
}

// Indigo banner with a white button that opens the university results portal
function ResultsBanner({ results }) {
  if (!results) return null
  return (
    <section id="results" className="scroll-mt-[108px] bg-primary py-14 text-white lg:py-[72px]">
      <div className="wrap flex flex-wrap items-center justify-between gap-8">
        <Reveal>
          <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
            <b className="block font-semibold text-white">Check your</b>
            <i className="block font-light italic text-accent">examination results.</i>
          </h2>
          {results.text && (
            <p className="mb-0 mt-4 text-[13.5px] text-white/80">{results.text}</p>
          )}
        </Reveal>

        {results.link && (
          <Reveal delay={0.1}>
            <a
              href={results.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white px-6 py-[15px] text-[10px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-accent"
            >
              {results.buttonLabel || 'View Results'}
              <ArrowUpRight size={13} strokeWidth={2.2} />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function StudentInformation() {
  const inst = useOutletContext()
  const si = inst.studentInformation

  // Safety net if a data file has no `studentInformation` block yet
  if (!si) return null

  const hero = inst.studentInformationHero

  return (
    <>
      <PageHero
        image={hero?.image || img.arcade}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1={hero?.line1 ?? 'Student'}
        line2={hero?.line2 ?? 'Information'}
        className="min-h-[420px] lg:h-[441px]"
      >
        {hero?.text && (
          <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
            {hero.text}
          </p>
        )}
      </PageHero>

      <Crumbs inst={inst} current="Student Information" />

      <DocumentList documents={si.documents} categories={si.categories} />
      <ResultsBanner results={si.results} />

      <ApplyCTA />
    </>
  )
}