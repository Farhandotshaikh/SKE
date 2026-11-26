// src/components/institution/Crumbs.jsx
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

// Home › GSS College › About
export default function Crumbs({ inst, current }) {
  return (
    <div className="border-b border-line bg-white">
      <div className="wrap flex h-[45px] items-center gap-2 overflow-hidden text-[10px] font-bold uppercase tracking-[0.14em]">
        <Link to="/" className="flex shrink-0 items-center gap-2 text-muted transition-colors hover:text-primary">
          <Home size={13} strokeWidth={1.6} /> Home
        </Link>
        <ChevronRight size={12} className="shrink-0 text-muted" />
        <Link
          to={`/institute/${inst.slug}`}
          className="shrink-0 text-muted transition-colors hover:text-primary"
        >
          {inst.name}
        </Link>
        <ChevronRight size={12} className="shrink-0 text-muted" />
        <span className="truncate text-primary">{current}</span>
      </div>
    </div>
  )
}