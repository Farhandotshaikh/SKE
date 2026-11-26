import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronRight, ArrowUpRight, ArrowRight, Search, Menu, X } from 'lucide-react'
import { navItems, aboutMenu, instMenu, progMenu, img } from '../data/site'

/* ---------- Dropdown panels ---------- */

function AboutPanel() {
  const [hover, setHover] = useState(0)
  return (
    <div className="w-[320px] border-t-2 border-primary bg-white py-[10px] shadow-[0_24px_48px_-8px_rgba(0,0,0,0.18)]">
      {aboutMenu.map((m, i) => {
        const active = hover === i
        return (
          <div key={m.title}>
            {m.divider && <div className="mx-[22px] my-2 border-t border-[var(--color-line)]" />}
            <Link
              to={m.to}
              onMouseEnter={() => setHover(i)}
              className={`flex items-center justify-between border-l-2 py-[11px] pl-5 pr-[22px] transition-colors ${active ? 'border-primary bg-surface' : 'border-transparent'
                }`}
            >
              <span>
                <span className={`block font-display text-[15px] leading-tight ${active ? 'font-medium text-primary' : 'font-normal text-ink'}`}>
                  {m.title}
                </span>
                <span className="mt-[3px] block text-[12px] text-[#9a9ba3]">{m.sub}</span>
              </span>
              {m.external ? (
                <ArrowUpRight size={12} className="text-primary" />
              ) : (
                active && <ChevronRight size={14} className="text-primary" />
              )}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

function InstitutionsPanel() {
  return (
    <div className="border-t-2 border-primary bg-white p-10 shadow-[0_24px_48px_-8px_rgba(0,0,0,0.18)]">
      <div className="grid grid-cols-[464px_340px_1fr] gap-12">
        <div>
          <div className="eyebrow mb-3 text-primary">Colleges</div>
          {instMenu.colleges.map((c) => (
            <div key={c.title} className="border-b border-[var(--color-line)] py-[18px] first:pt-3">
              <Link to={c.to} className="group inline-flex items-center gap-2 font-display text-[20px] leading-tight text-primary">
                {c.title}
                <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {(c.links || []).map((l) => (
                  <Link
                    key={l}
                    to={`${c.to}/${l.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[12.5px] text-[#555] transition-colors hover:text-primary"
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="eyebrow mb-1 text-primary">Schools &amp; Institutes</div>
          {instMenu.schools.map((s) => (
            <Link
              key={s}
              to={s.to}
              className="group flex items-center justify-between gap-4 border-b border-[var(--color-line)] py-[13px] text-[14.5px] font-medium leading-[1.25] text-ink transition-colors hover:text-primary"
            >
              {s.title}
              <ChevronRight size={14} className="shrink-0 text-[#9a9ba3] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        <div className="flex min-h-[270px] flex-col bg-primary p-7">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">Not sure where to start?</div>
          <h3 className="mt-3 text-[22px] font-medium leading-[1.2] text-white">Explore all eight SKE institutions in one place.</h3>
          <Link to="/institutions" className="btn-white mt-auto w-full">
            View all institutions
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProgrammesPanel() {
  const Col = ({ label, items }) => (
    <div>
      <div className="eyebrow mb-5 text-primary">{label}</div>
      {items.map((p) => (
        <Link key={p.title} to="/programmes" className="group mb-[18px] block">
          <span className="block font-display text-[18px] font-medium leading-tight text-primary transition-colors group-hover:text-primary-dark">
            {p.title}
          </span>
          <span className="mt-[6px] block max-w-[220px] text-[12.5px] leading-[1.35] text-[#9a9ba3]">{p.sub}</span>
        </Link>
      ))}
    </div>
  )
  return (
    <div className="w-[820px] border-t-2 border-primary bg-white shadow-[0_24px_48px_-8px_rgba(0,0,0,0.18)]">
      <div className="grid grid-cols-3 gap-0 px-9 pb-3 pt-9">
        <Col label="Degree" items={progMenu.degree} />
        <Col label="Pre-University" items={progMenu.pu} />
        <Col label="Certificate Courses" items={progMenu.certificate} />
      </div>
      <div className="flex h-12 items-center justify-between border-t border-[var(--color-line)] bg-surface px-9">
        <span className="text-[12.5px] text-[#555]">Each programme links to the institution that offers it.</span>
        <Link to="/programmes" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
          View all programmes <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  )
}

const panelPos = {
  about: 'left-[-97px]',
  programmes: 'left-[-105px]',
  institutions: 'left-20 right-20',
}

/* ---------- Navbar ---------- */

export default function Navbar() {
  const [open, setOpen] = useState(null) // desktop dropdown key
  const [mobile, setMobile] = useState(false)
  const [mobileSub, setMobileSub] = useState(null)
  const { pathname } = useLocation()
  const closeTimer = useRef()

  useEffect(() => {
    setOpen(null)
    setMobile(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const enter = (k) => {
    clearTimeout(closeTimer.current)
    setOpen(k)
  }
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120)
  }

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/'))

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.05)]">
      <div className="flex h-[84px] items-center px-5 lg:h-[108px] lg:px-10">
        {/* Brand */}
        <Link to="/" className="flex shrink-0 items-center gap-[14px]" aria-label="SKE Society home">
          <img src={img.logo} alt="SKE Society emblem" className="h-[62px] w-auto lg:h-[86px]" />
          <span className="font-display text-[17px] font-semibold tracking-[0.005em] text-primary lg:text-[20px]">SKE SOCIETY</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden flex-1 justify-center lg:flex" aria-label="Primary">
          <ul className="m-0 flex list-none items-center gap-[23px] p-0">
            {navItems.map((n) => {
              const active = isActive(n.to) || open === n.menu
              const hasMenu = !!n.menu
              return (
                <li
                  key={n.label}
                  className={`flex h-[108px] items-center pt-[4px] ${n.menu === 'institutions' ? '' : 'relative'}`}
                  onMouseEnter={() => (hasMenu ? enter(n.menu) : setOpen(null))}
                  onMouseLeave={hasMenu ? leave : undefined}
                >
                  <NavLink
                    to={n.to}
                    onFocus={() => hasMenu && enter(n.menu)}
                    className={`flex items-center gap-1 border-b-2 pb-[6px] pt-[6px] text-[12px] font-semibold uppercase tracking-[0.04em] transition-colors ${active ? 'border-primary text-primary' : 'border-transparent text-ink hover:text-primary'
                      }`}
                  >
                    {n.label}
                    {hasMenu && (
                      <ChevronDown size={12} strokeWidth={2} className={`transition-transform duration-200 ${open === n.menu ? 'rotate-180' : ''}`} />
                    )}
                  </NavLink>

                  <AnimatePresence>
                    {hasMenu && open === n.menu && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className={`absolute top-full z-50 ${panelPos[n.menu]}`}
                        onMouseEnter={() => enter(n.menu)}
                        onMouseLeave={leave}
                      >
                        {n.menu === 'about' && <AboutPanel />}
                        {n.menu === 'institutions' && <InstitutionsPanel />}
                        {n.menu === 'programmes' && <ProgrammesPanel />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-6 lg:ml-0 lg:gap-8">
          <button type="button" aria-label="Search" className="hidden border-0 bg-transparent text-[#444] transition-colors hover:text-primary lg:block">
            <Search size={17} strokeWidth={1.6} />
          </button>
          <Link
            to="/programmes"
            className="hidden h-[38px] items-center gap-2.5 bg-primary px-[18px] text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary-dark sm:inline-flex"
          >
            Find a Programme <ArrowUpRight size={13} strokeWidth={2} />
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobile((v) => !v)}
            className="grid h-10 w-10 place-items-center border-0 bg-transparent text-primary lg:hidden"
          >
            {mobile ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--color-line)] bg-white lg:hidden"
          >
            <ul className="m-0 list-none p-5">
              {navItems.map((n) => (
                <li key={n.label} className="border-b border-[var(--color-line)]">
                  <div className="flex items-center justify-between">
                    <Link to={n.to} className="flex-1 py-3.5 text-[13px] font-semibold uppercase tracking-[0.05em] text-ink">
                      {n.label}
                    </Link>
                    {n.menu && (
                      <button
                        type="button"
                        aria-label={`Toggle ${n.label}`}
                        onClick={() => setMobileSub(mobileSub === n.menu ? null : n.menu)}
                        className="border-0 bg-transparent p-2 text-primary"
                      >
                        <ChevronDown size={16} className={mobileSub === n.menu ? 'rotate-180' : ''} />
                      </button>
                    )}
                  </div>
                  {n.menu === 'about' && mobileSub === 'about' && (
                    <div className="pb-3 pl-3">
                      {aboutMenu.map((m) => (
                        <Link key={m.title} to={m.to} className="block py-2 text-[14px] text-[#444]">{m.title}</Link>
                      ))}
                    </div>
                  )}
                  {n.menu === 'institutions' && mobileSub === 'institutions' && (
                    <div className="pb-3 pl-3">
                      {[...instMenu.colleges, ...instMenu.schools].map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setMobile(false)}
                          className="block py-2 text-[14px] text-[#444]"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                  {n.menu === 'programmes' && mobileSub === 'programmes' && (
                    <div className="pb-3 pl-3">
                      {[...progMenu.degree, ...progMenu.pu, ...progMenu.certificate].map((p) => (
                        <Link key={p.title} to="/programmes" className="block py-2 text-[14px] text-[#444]">
                          {p.title} <span className="text-[12px] text-[#9a9ba3]">· {p.sub}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="px-5 pb-5">
              <Link to="/programmes" className="btn-primary w-full">Find a Programme</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
