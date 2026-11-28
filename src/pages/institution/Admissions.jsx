// src/pages/institution/Admissions.jsx
import { useOutletContext } from 'react-router-dom'
import { ArrowRight, FileDown } from 'lucide-react'
import Crumbs from '../../components/institution/Crumbs'
import ApplyCTA from '../../components/ApplyCTA'
import Reveal from '../../components/Reveal'
import PageHero from '../../components/PageHero'
import { ICONS } from '../../components/sections/icons'
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

// Indigo header row + white body rows; scrolls sideways on small screens
function DataTable({ columns, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="bg-primary">
            {columns.map((c) => (
              <th
                key={c.key}
                className="px-5 py-[15px] text-[10px] font-bold uppercase tracking-[0.12em] text-white"
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={`${r[columns[0].key]}-${i}`} className="border-b border-line bg-white">
              {columns.map((c) => (
                <td key={c.key} className="px-5 py-[17px] text-[14px] text-[#0b0b1e]">
                  {r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------- Sections ---------- */

function WhyCollege({ why, name }) {
  if (!why?.length) return null
  return (
    <section id="why" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Why" line2={`${name}?`} />
        </Reveal>

        <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => {
            const Icon = ICONS[w.icon] ?? ICONS.award
            return (
              <Reveal
                key={`${w.title}-${i}`}
                delay={i * 0.07}
                className="flex gap-[18px] border border-line bg-white p-7"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#ecebf6] text-primary">
                  <Icon size={17} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">
                    {w.title}
                  </h3>
                  <p className="mb-0 mt-3 text-[13px] leading-[20px] text-text2">{w.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Eligibility({ rows, note }) {
  if (!rows?.length) return null
  return (
    <section id="eligibility" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Eligibility." />
          {note && <p className="mb-0 mt-4 text-[13.5px] text-text2">{note}</p>}
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <DataTable
            columns={[
              { key: 'programme', label: 'Programme' },
              { key: 'qualification', label: 'Minimum Qualification' },
              { key: 'criteria', label: 'Criteria' },
              { key: 'intake', label: 'Intake' },
            ]}
            rows={rows}
          />
        </Reveal>
      </div>
    </section>
  )
}

function DocumentsRequired({ documents }) {
  if (!documents?.length) return null
  return (
    <section id="documents" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Documents" line2="Required." />
        </Reveal>

        <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((d, i) => (
            <Reveal
              key={`${d.title}-${i}`}
              delay={i * 0.06}
              className="flex gap-[18px] border border-line bg-white p-7"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#ecebf6] text-primary">
                <FileDown size={17} strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">
                  {d.title}
                </h3>
                <p className="mb-0 mt-3 text-[13px] leading-[20px] text-text2">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Numbered steps with an amber top rule; 01, 02... come from the order
function AdmissionProcess({ process }) {
  if (!process?.length) return null
  return (
    <section id="process" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Admission" line2="Process." />
        </Reveal>

        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={`${p.title}-${i}`} delay={i * 0.07} className="border-t-2 border-accent pt-6">
              <div className="font-display text-[32px] font-semibold leading-none text-primary">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-4 font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">
                {p.title}
              </h3>
              <p className="mb-0 mt-2 text-[13px] leading-[1.5] text-text2">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Fees({ fees, note, file }) {
  if (!fees?.length) return null
  return (
    <section id="fees" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="wrap">
        <Reveal>
          <Heading line1="Fees" line2="Information." />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            {note ? <p className="m-0 text-[13.5px] text-text2">{note}</p> : <span />}
            {file && (
              <a
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary"
              >
                Download fee structure
                <ArrowRight size={13} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <DataTable
            columns={[
              { key: 'programme', label: 'Programme' },
              { key: 'tuition', label: 'Tuition' },
              { key: 'other', label: 'Other Fees' },
              { key: 'total', label: 'Total' },
            ]}
            rows={fees}
          />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Page ---------- */

export default function Admissions() {
  const inst = useOutletContext()
  const ad = inst.admissions

  // Safety net if a data file has no `admissions` block yet
  if (!ad) return null

  const hero = inst.admissionsHero

  return (
    <>
      <PageHero
        image={hero?.image || img.arcade}
        overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
        line1={hero?.line1 ?? 'Admissions'}
        line2={hero?.line2}
        className="min-h-[420px] lg:h-[441px]"
      >
        {hero?.text && (
          <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
            {hero.text}
          </p>
        )}
      </PageHero>

      <Crumbs inst={inst} current="Admissions" />

      <WhyCollege why={ad.why} name={inst.name} />
      <Eligibility rows={ad.eligibility} note={ad.eligibilityNote} />
      <DocumentsRequired documents={ad.documents} />
      <AdmissionProcess process={ad.process} />
      <Fees fees={ad.fees} note={ad.feesNote} file={ad.feeFile} />

      <ApplyCTA />
    </>
  )
}