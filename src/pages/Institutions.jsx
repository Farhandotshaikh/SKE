import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import ApplyCTA from '../components/ApplyCTA'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { img, instMenu } from '../data/site'
import PageHero from '../components/PageHero'

/* ---------- Content (mirrors the design file, placeholders included) ---------- */

const colleges = [
    { slug: 'gss-college', title: 'GSS College', meta: 'Degree · Tilakwadi', icon: 'FlaskConical', image: img.arcade },
    { slug: 'gss-puc', title: 'GSS PUC', meta: 'Pre-University · Tilakwadi', icon: 'Target', image: img.lab },
    { slug: 'rpd-degree', title: 'RPD Degree', meta: 'Degree · Tilakwadi', icon: 'BookOpen', image: img.libraryBuilding },
    { slug: 'rpd-puc', title: 'RPD PUC', meta: 'Pre-University · Tilakwadi', icon: 'Calculator', image: img.seminar },
    { slug: 'bca-chandgad', title: 'BCA College, Chandgad', meta: 'Degree · Chandgad', icon: 'Monitor', image: img.courtyard },
]

// Names come from the nav data so the menu and this page never drift apart.
// Generate school pages from navigation data.
const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const schools = instMenu.schools.map((school) => ({
  slug: slugify(school.title),
  name: school.title,
  to: school.to,
  text: 'Placeholder — one line about this institution.',
}));

const filters = [
    ['all', 'All'],
    ['colleges', 'Colleges'],
    ['schools', 'Schools'],
]

const cardShade = 'linear-gradient(to top, rgba(14,8,44,0.92) 0%, rgba(14,8,44,0.55) 38%, rgba(14,8,44,0) 72%)'

/* ---------- Small shared piece ---------- */

// Bold first line + light italic second line.
function Heading({ line1, line2 }) {
    return (
        <h2 className="text-[clamp(32px,2.8vw,40px)] leading-[1.2]">
            <b className="block font-semibold text-primary">{line1}</b>
            <i className="block font-light italic text-slate">{line2}</i>
        </h2>
    )
}

/* ---------- Sections ---------- */

function Colleges({ filter, setFilter }) {
    const showGrid = filter !== 'schools'
    return (
        <section id="colleges" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
            <div className="wrap">
                {showGrid && (
                    <Reveal className="mb-11">
                        <Heading line1="Our" line2="Colleges." />
                    </Reveal>
                )}

                <div className="flex flex-wrap gap-[10px]">
                    {filters.map(([k, l]) => (
                        <button
                            key={k}
                            type="button"
                            onClick={() => setFilter(k)}
                            className={`pill h-[32px] border ${filter === k ? 'border-primary bg-primary text-white' : 'border-[#d6d4d1] bg-white text-ink hover:border-primary'
                                }`}
                        >
                            {l}
                        </button>
                    ))}
                </div>

                <AnimatePresence initial={false}>
                    {showGrid && (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                        >
                            <div className="grid gap-6 pt-11 sm:grid-cols-2 lg:grid-cols-3">
                                {colleges.map((c, i) => (
                                    <Reveal key={c.slug} delay={i * 0.06}>
                                        <Link
                                            to={`/institutions/${c.slug}`}
                                            className="group relative block h-[280px] overflow-hidden bg-primary-dark"
                                        >
                                            <img
                                                src={c.image}
                                                alt=""
                                                loading="lazy"
                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0" style={{ background: cardShade }} />
                                            <div className="absolute inset-x-0 bottom-0 px-7 pb-[30px]">
                                                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary">
                                                    <Icon name={c.icon} size={16} strokeWidth={1.6} />
                                                </span>
                                                <h3 className="mt-[10px] text-[22px] font-normal leading-[1.2] text-white">{c.title}</h3>
                                                <div className="mt-[9px] text-[10px] font-bold uppercase tracking-[0.12em] text-accent">{c.meta}</div>
                                            </div>
                                        </Link>
                                    </Reveal>
                                ))}

                                {/* Help-me-choose card */}
                                <Reveal delay={colleges.length * 0.06}>
                                    <div className="flex h-[280px] flex-col justify-between bg-primary p-7 text-white">
                                        <h3 className="max-w-[330px] text-[22px] font-normal leading-[1.3]">
                                            Not sure which institution is right for you?
                                        </h3>
                                        <Link
                                            to="/programmes"
                                            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors hover:text-accent"
                                        >
                                            Find a programme
                                            <ArrowRight size={13} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </Reveal>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

function Schools() {
    return (
        <section id="schools" className="scroll-mt-[108px] bg-surface py-16 lg:py-24">
            <div className="wrap">
                <Reveal>
                    <Heading line1="Schools" line2="& Institutes." />
                </Reveal>
                <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {schools.map((s, i) => (
                        <Reveal key={s.slug} delay={i * 0.06}>
                            <Link
                                to={`/institutions/${s.slug}`}
                                className="group flex h-full gap-[18px] border border-line bg-white p-7 transition-shadow duration-300 hover:shadow-[0_14px_30px_-12px_rgba(57,49,133,0.25)]"
                            >
                                <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#eeecf7] text-primary">
                                    <Icon name="Landmark" size={17} strokeWidth={1.6} />
                                </span>
                                <div>
                                    <h3 className="text-[16px] font-medium leading-[24px] text-[#0b0b1e] transition-colors group-hover:text-primary">
                                        {s.name}
                                    </h3>
                                    <p className="mb-0 mt-3 text-[12px] leading-[1.4] text-text2">{s.text}</p>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ---------- Page ---------- */

export default function Institutions() {
    const [filter, setFilter] = useState('all')
    const { hash } = useLocation()

    // Links like /institutions#schools (from the nav mega menu) scroll to that section.
    useEffect(() => {
        if (!hash) return
        if (hash === '#colleges' && filter === 'schools') setFilter('all')
        if (hash === '#schools' && filter === 'colleges') setFilter('all')
        const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 120)
        return () => clearTimeout(t)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hash])

    return (
        <>
            <PageHero
                image={img.libraryBuilding}
                overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
                line1="One Society,"
                line2="Many Campuses."
                className="min-h-[420px] lg:h-[441px]"
            >
                <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
                    Colleges and schools across Belagavi and Chandgad. Choose an institution to visit its own pages.
                </p>
            </PageHero>
            <Breadcrumb current="Institutions" />
            {filter !== 'schools' || true ? <Colleges filter={filter} setFilter={setFilter} /> : null}
            {filter !== 'colleges' && <Schools />}
            <ApplyCTA />
        </>
    )
}