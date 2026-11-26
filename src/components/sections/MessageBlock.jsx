// src/components/sections/MessageBlock.jsx
import { Users } from 'lucide-react'
import Reveal from '../Reveal'

export default function MessageBlock({ quote, text, name, role, photo }) {
  return (
    <section id="message" className="scroll-mt-[108px] bg-white py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 md:px-10 lg:grid-cols-[394px_640px] lg:gap-24 lg:pl-[100px] lg:pr-0 xl:px-0 xl:pl-[100px]">
        <Reveal>
          <div className="grid aspect-[394/522] w-full max-w-[394px] place-items-center overflow-hidden bg-sand">
            {photo ? (
              <img src={photo} alt={name} className="h-full w-full object-cover" />
            ) : (
              <Users size={36} strokeWidth={1.3} className="text-[#a7a9ae]" />
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          {quote && (
            <h2 className="text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.2] text-primary lg:w-[680px]">
              “{quote}”
            </h2>
          )}
          <p className="mb-0 mt-7 border-l-[3px] border-accent pl-7 text-[15px] leading-[26px] text-text2">
            {text}
          </p>
          <div className="mt-7 font-display text-[16px] font-medium leading-tight text-[#0b0b1e]">{name}</div>
          <div className="mt-[6px] text-[9px] font-bold uppercase tracking-[0.12em] text-primary">{role}</div>
        </Reveal>
      </div>
    </section>
  )
}