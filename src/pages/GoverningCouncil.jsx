import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Users, Home, ChevronRight } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import ApplyCTA from '../components/ApplyCTA'
import Reveal from '../components/Reveal'
import { img } from '../data/site'
import PageHero from '../components/PageHero'

const officeBearers = [
    { name: 'President Name', role: 'President', photo: null },
    { name: 'Vice President Name', role: 'Vice President', photo: null },
    { name: 'Secretary Name', role: 'Secretary', photo: null },
    { name: 'Treasurer Name', role: 'Treasurer', photo: null },
]

const council = [
    { name: "Member Name", role: "Council Member", photo: "" },
    { name: "Member Name", role: "Council Member", photo: "" },
    { name: "Member Name", role: "Council Member", photo: "" },
    { name: "Member Name", role: "Council Member", photo: "" },
    { name: "Member Name", role: "Council Member", photo: "" },
    { name: "Member Name", role: "Council Member", photo: "" },
    { name: "Member Name", role: "Council Member", photo: "" },
    { name: "Member Name", role: "Council Member", photo: "" },
]

function Crumbs({ name }) {
  return (
    <div className="border-b border-line bg-white">
      <div className="wrap flex h-[45px] items-center gap-2 overflow-hidden text-[10px] font-bold uppercase tracking-[0.14em]">
        <Link to="/" className="flex shrink-0 items-center gap-2 text-muted transition-colors hover:text-primary">
          <Home size={13} strokeWidth={1.6} /> Home
        </Link>
        <ChevronRight size={12} className="shrink-0 text-muted" />
        <Link to="/about" className="shrink-0 text-muted transition-colors hover:text-primary">About SKE</Link>
        <ChevronRight size={12} className="shrink-0 text-muted" />
        <span className="truncate text-primary">{name}</span>
      </div>
    </div>
  )
}

function Office() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
                <h2 className="mb-10 font-[Poppins] text-4xl leading-tight lg:text-5xl">
                    <span className="block font-semibold text-[#3a3187]">Office</span>
                    <span className="block font-light italic text-slate-500">Bearers.</span>
                </h2>

                <Reveal>

                    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {officeBearers.map((p, i) => (
                            <div key={`${p.name}-${i}`}>
                                <div className="flex aspect-[37/40] w-full items-center justify-center overflow-hidden bg-[#e5e3df]">
                                    {p.photo ? (
                                        <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
                                    ) : (
                                        <Users size={30} strokeWidth={1.5} className="text-slate-400" />
                                    )}
                                </div>
                                <p className="mt-5 font-[Poppins] text-lg font-medium text-slate-900">{p.name}</p>
                                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3a3187]">
                                    {p.role}
                                </p>
                                <p className="mt-2 text-sm text-slate-500">{p.detail}</p>
                            </div>
                        ))}
                    </div>

                </Reveal>
            </div>
        </section>

    )
}

function CouncilMem() {
    return (
        <section className="bg-[#f7f6f4] py-16 lg:py-24">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
                <h2 className="mb-10 font-[Poppins] text-4xl leading-tight lg:text-5xl">
                    <span className="block font-semibold text-[#3a3187]">Council</span>
                    <span className="block font-light italic text-slate-500">Members.</span>
                </h2>

                <Reveal>

                    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {council.map((p, i) => (
                            <div key={`${p.name}-${i}`}>
                                <div className="flex aspect-[37/40] w-full items-center justify-center overflow-hidden bg-[#e5e3df]">
                                    {p.photo ? (
                                        <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
                                    ) : (
                                        <Users size={30} strokeWidth={1.5} className="text-slate-400" />
                                    )}
                                </div>
                                <p className="mt-5 font-[Poppins] text-lg font-medium text-slate-900">{p.name}</p>
                                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3a3187]">
                                    {p.role}
                                </p>
                            </div>
                        ))}
                    </div>

                </Reveal>
            </div>
        </section>
    )
}

export default function GoverningCouncil() {
    const { hash } = useLocation()

    // Nav dropdown links like /about#history scroll to their section.
    useEffect(() => {
        if (!hash) return
        const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 120)
        return () => clearTimeout(t)
    }, [hash])

    return (
        <>
            <PageHero
                image={img.arcade}
                overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
                line1="Governing"
                line2="Council"
                className="min-h-[420px] lg:h-[441px]"
            >
                <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
                    The members who guide the Society’s direction, institutions and growth.
                </p>
            </PageHero>
            <Crumbs name="Governing Council" />
            <Office />
            <CouncilMem />
            <ApplyCTA />
        </>
    )
}