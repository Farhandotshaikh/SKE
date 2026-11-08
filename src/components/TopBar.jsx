import { Phone, Mail, ChevronDown } from 'lucide-react'
import { contact } from '../data/site'

export default function TopBar() {
  return (
    <div className="bg-primary text-white">
      <div className="wrap flex h-[38px] items-center justify-between text-[12.5px]">
        <p className="m-0 hidden sm:block">
          Welcome to <strong className="font-bold">SKE Society, Belagavi</strong>
        </p>
        <div className="flex w-full items-center justify-between gap-6 sm:w-auto sm:justify-end sm:gap-7">
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={13} strokeWidth={1.6} /> {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="hidden items-center gap-2 transition-colors hover:text-accent md:flex">
            <Mail size={13} strokeWidth={1.6} /> {contact.email}
          </a>
          <button type="button" className="flex items-center gap-1.5 bg-transparent text-white hover:text-accent transition-colors">
            English <ChevronDown size={13} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </div>
  )
}
