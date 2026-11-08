import { Quote } from 'lucide-react'
import Reveal from '../Reveal'
import { img } from '../../data/site'

export default function Intro() {
  return (
    <section className="bg-white py-14 lg:pb-[59px] lg:pt-[71px]">
      <div className="mx-auto grid w-full max-w-[1080px] items-start gap-10 px-5 md:px-10 lg:grid-cols-[396px_1fr] lg:gap-[144px] lg:px-0">
        <Reveal>
          <img src={img.gazebo} alt="Heritage gazebo on the SKE campus" className="aspect-[396/523] w-full max-w-[396px] object-cover" />
        </Reveal>
        <Reveal delay={0.1} className="lg:-mt-[31px] lg:max-w-[540px]">
          <Quote size={32} strokeWidth={1.6} className="text-accent" />
          <h2 className="mt-[28px] text-[clamp(30px,2.8vw,40px)] font-semibold leading-[1.1] text-primary">
            “Education begins with knowledge, but its true purpose is to teach us{' '}
            <i className="font-light italic">how to think.”</i>
          </h2>
          <p className="mb-0 ml-0 mt-[26px] max-w-[516px] border-l-[3px] border-accent py-[2px] pl-[30px] text-[16px] leading-[1.65] text-text2">
            For generations, SKE has been committed to making quality science education accessible and meaningful. More
            than a place to study, SKE is a space where curiosity is encouraged, ideas are explored and young minds are
            prepared to think beyond the classroom.
          </p>
          <div className="mt-[34px] flex max-w-[516px] gap-[120px] border-t border-line pt-[26px]">
            <div>
              <div className="font-display text-[32px] font-semibold leading-none text-primary">1990</div>
              <div className="mt-[10px] text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted">Established</div>
            </div>
            <div>
              <div className="font-display text-[32px] font-semibold leading-none text-primary">7k+</div>
              <div className="mt-[10px] text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted">Alumni Network</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
