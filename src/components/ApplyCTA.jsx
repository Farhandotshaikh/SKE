import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { img } from '../data/site'

const options = [
  ['gss-college', 'GSS College'],
  ['gss-puc', 'GSS PUC'],
  ['rpd-degree', 'RPD Degree'],
  ['rpd-puc', 'RPD PUC'],
  ['bca-chandgad', 'BCA College, Chandgad'],
  ['schools', 'Schools & Institutes'],
]

export default function ApplyCTA() {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const go = () => {
    if (!value) return document.getElementById('apply-select')?.focus()
    navigate(`/institutions/${value}/admissions`)
  }

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="wrap">
        <Reveal>
          <div
            className="grid items-center gap-8 rounded-lg px-6 py-10 text-white md:px-[48px] md:py-[41px] lg:grid-cols-2 lg:gap-16"
            style={{
              background: 'linear-gradient(90deg, #393185 0%, #261e73 100%)',
              boxShadow: '0 28px 56px -12px rgba(38,30,115,0.35), 0 18px 40px rgba(0,0,0,0.12)',
            }}
          >
            <div>
              <h2 className="text-[28px] font-medium leading-[1.1] md:text-[30px]">
                Apply for <i className="font-light italic text-accent">admission?</i>
              </h2>
              <p className="mb-0 mt-4 max-w-[560px] text-[15px] leading-[1.6] text-white/85">
                Admissions are handled by each institution. Choose where you’d like to study and we’ll take you to
                eligibility, documents, process and fees.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex">
                  {img.avatars.map((a, i) => (
                    <img
                      key={a}
                      src={a}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-primary object-cover"
                      style={{ marginLeft: i ? -10 : 0 }}
                    />
                  ))}
                </div>
                <div>
                  <div className="font-display text-[13px] font-semibold leading-none">2026–27</div>
                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/60">Admissions now open</div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative flex items-center rounded-[4px] border border-white/20 bg-white/[0.07] pl-[18px]">
                <select
                  id="apply-select"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className={`ske-select h-[54px] w-full flex-1 pr-10 text-[13.5px] ${value ? 'text-white' : 'text-white/70'}`}
                  aria-label="Select an institution"
                >
                  <option value="">Select an institution</option>
                  {options.map(([k, l]) => (
                    <option key={k} value={k}>{l}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-[148px] text-white/70" />
                <button
                  type="button"
                  onClick={go}
                  className="m-[5px] flex h-11 shrink-0 items-center gap-2 border-0 bg-white px-6 text-[11px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-accent"
                >
                  Enquire <ArrowUpRight size={13} strokeWidth={2} />
                </button>
              </div>
              <p className="mb-0 mt-3 text-[11px] text-white/60">You’ll be taken to that institution’s admissions page.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
