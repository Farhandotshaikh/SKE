import { Link, useLocation } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Reveal from '../components/Reveal'

export default function ComingSoon() {
  const { pathname } = useLocation()
  const last = pathname.split('/').filter(Boolean).pop() || 'page'
  const title = last.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <>
      <Breadcrumb current={title} />
      <section className="bg-surface py-28">
        <Reveal className="wrap text-center">
          <div className="eyebrow text-primary">Coming soon</div>
          <h1 className="mt-4 text-[clamp(40px,5vw,64px)] leading-[1.05] text-primary">
            <b className="font-semibold">{title}</b>
            <br />
            <i className="font-light italic text-accent">is on its way.</i>
          </h1>
          <p className="mx-auto mb-0 mt-6 max-w-[460px] text-[16px] leading-[1.65] text-text2">
            This page hasn’t been designed yet. In the meantime, explore programmes and facilities across SKE.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">Back to home</Link>
            <Link to="/programmes" className="btn border border-primary text-primary hover:bg-primary hover:text-white">View programmes</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
