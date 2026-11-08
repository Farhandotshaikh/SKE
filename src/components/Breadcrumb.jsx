import { Link } from 'react-router-dom'
import { Home, ChevronRight } from 'lucide-react'

export default function Breadcrumb({ current }) {
  return (
    <div className="border-b border-[var(--color-line)] bg-white">
      <div className="wrap flex h-[45px] items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em]">
        <Link to="/" className="flex items-center gap-2 text-muted transition-colors hover:text-primary">
          <Home size={13} strokeWidth={1.6} /> Home
        </Link>
        <ChevronRight size={12} className="text-muted" />
        <span className="text-primary">{current}</span>
      </div>
    </div>
  )
}
