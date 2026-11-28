// src/components/institution/InstitutionNavbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, Search, X, ChevronRight } from "lucide-react";

// Page keys must match ALL_PAGES in data/institutions/index.js
const NAV = [
  {
    label: "About",
    page: "about",                       // clicking "About" opens this page
    children: [
      { page: "organisational-structure", label: "Organisational Structure" },
    ],
  },
  {
    label: "Academics",
    page: "academics",
    children: [
      { page: "department", label: "Departments" },
      { page: "exam-prep", label: "Exam Preparation" },
    ],
  },
  {
    label: "Student Corner",
    page: "student-corner",
    children: [
      { page: "student-information", label: "Student Information" },
    ],
  },
  { page: "facilities", label: "Facilities" },
  { page: "placements", label: "Placements" },
  { page: "admissions", label: "Admissions" },
  { page: "iqac", label: "IQAC" },
];

function buildNav(inst) {
  const has = (p) => inst.pages.includes(p);
  return NAV.map((item) =>
    item.children
      ? {
        ...item,
        children: item.children.filter((c) => has(c.page)),
        linked: Boolean(item.page && has(item.page)),   // parent label is clickable
      }
      : item
  ).filter((item) =>
    item.children ? item.children.length > 0 || item.linked : has(item.page)
  );
}

const linkCls =
  "text-[13px] font-medium uppercase tracking-wide text-slate-900 transition hover:text-[#3a3187]";

export default function InstitutionNavbar({ inst }) {
  const [open, setOpen] = useState(false);
  const base = `/institute/${inst.slug}`;
  const items = buildNav(inst);
  const to = (page) => `${base}/${page}`;

  return (
    <>
      {/* Top strip */}
      <div className="bg-[#3a3187] text-[13px] text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2.5 lg:px-20">
          <p className="truncate">
            An institution of SKE Society, Belagavi
            <span className="mx-2 opacity-60">·</span>
            <Link to="/" className="hover:underline">Back to SKE Society</Link>
          </p>
          <div className="hidden items-center gap-6 md:flex">
            <span className="flex items-center gap-2">
              <Phone size={14} /> {inst.contact?.phone ?? "+91 00000 00000"}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> {inst.contact?.email ?? "info@yourdomain.org"}
            </span>
            <span className="flex items-center gap-1">
              English <ChevronDown size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-2 lg:px-20">
          {/* Logo + college name: both come from data */}
          <Link to={base} className="flex items-center gap-3">
            {/* {inst.logo ? (
              <img
                src={inst.logo}
                alt={`${inst.name} logo`}
                className="h-16 w-16 rounded-full object-contain lg:h-[88px] lg:w-[88px]"
              />
            ) : (
              <span className="h-16 w-16 rounded-full border border-dashed border-[#3a3187] bg-[#ecebf6] lg:h-[88px] lg:w-[88px]" />
            )} */}

            <span
              aria-hidden="true"
              className="h-12 w-12 shrink-0 rounded-full border-[1.5px] border-dashed border-[#3a3187] bg-[#ecebf6] lg:h-[88px] lg:w-[88px]"
            />
            <span className="font-[Poppins] text-xl font-semibold text-[#3a3187]">
              {inst.name}
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {items.map((item) =>
              item.children?.length ? (
                <div key={item.label} className="group relative">
                  {/* Parent label: chevron flips and an indigo underline slides in while open */}
                  {item.linked ? (
                    <NavLink to={to(item.page)} className={`${linkCls} relative flex items-center gap-1 py-6 group-hover:text-primary`}>
                      {item.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                      <span className="absolute inset-x-0 bottom-4 h-[2px] origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
                    </NavLink>
                  ) : (
                    <button className={`${linkCls} relative flex items-center gap-1 py-6 group-hover:text-primary`}>
                      {item.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                      <span className="absolute inset-x-0 bottom-4 h-[2px] origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
                    </button>
                  )}

                  {/* Panel */}
                  <div className="invisible absolute left-0 top-full z-50 w-[300px] border-t-2 border-primary bg-white opacity-0 shadow-[0_12px_30px_rgba(20,15,80,0.12)] transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.page}
                        to={to(c.page)}
                        className={({ isActive }) =>
                          `group/item flex items-center justify-between border-l-[3px] px-6 py-[18px] transition-colors hover:border-primary hover:bg-surface ${isActive ? "border-primary bg-surface" : "border-transparent"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={`font-[Poppins] text-[16px] leading-tight group-hover/item:text-primary ${isActive ? "font-medium text-primary" : "text-[#0b0b1e]"
                                }`}
                            >
                              {c.label}
                            </span>
                            <ChevronRight
                              size={16}
                              className={`shrink-0 text-primary transition-opacity group-hover/item:opacity-100 ${isActive ? "opacity-100" : "opacity-0"
                                }`}
                            />
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={item.label} to={to(item.page)} className={linkCls}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden text-slate-500 hover:text-[#3a3187] lg:block">
              <Search size={18} />
            </button>
            {inst.pages.includes("admissions") && (
              <Link
                to={to("admissions")}
                className="hidden items-center gap-2 bg-[#3a3187] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white hover:bg-[#2d2670] sm:flex"
              >
                Apply Now <ArrowUpRight size={14} />
              </Link>
            )}
            <button
              aria-label="Menu"
              className="lg:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
            {items.map((item) =>
              item.children?.length ? (
                <div key={item.label} className="py-2">
                  {item.linked ? (
                    <Link
                      to={to(item.page)}
                      onClick={() => setOpen(false)}
                      className="block text-xs font-semibold uppercase tracking-wide text-[#3a3187]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                  )}
                  {item.children.map((c) => (
                    <Link
                      key={c.page}
                      to={to(c.page)}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-3 text-sm text-slate-800"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={to(item.page)}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-slate-900"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        )}
      </header>
    </>
  );
}