import { Eye, Target, Clock } from 'lucide-react'
import Reveal from '../Reveal'

const items = [
  { icon: Eye, title: 'Our Vision', text: 'Placeholder — the Society’s vision statement, as approved by the Governing Council.' },
  { icon: Target, title: 'Our Mission', text: 'Placeholder — the Society’s mission statement and the values that guide its institutions.' },
  { icon: Clock, title: 'Milestones', text: '1944 founded in Sawantwadi · 1948 moved to Belagavi · 1966 GSS Science College · 1993 Commerce wing.' },
]

export default function VisionMission() {
  return (
    <section className="bg-primary text-white">
      <div className="grid lg:grid-cols-[476px_442px_1fr]">
        {items.map(({ icon: I, title, text }, i) => (
          <Reveal
            key={title}
            delay={i * 0.08}
            className={`px-5 py-12 md:px-10 lg:h-[272px] lg:py-0 lg:pt-[52px] ${
              i === 0 ? 'lg:pl-20 lg:pr-[60px]' : 'border-t border-white/[0.12] lg:border-l lg:border-t-0 lg:pl-[45px] lg:pr-[60px]'
            }`}
          >
            <I size={22} strokeWidth={1.4} className="text-accent" />
            <h3 className="mt-[34px] text-[22px] font-normal leading-tight">{title}</h3>
            <p className="mb-0 mt-[14px] max-w-[372px] text-[13.5px] leading-[1.6] text-white/75">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
