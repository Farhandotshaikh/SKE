import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Globe, MapPin, Phone, Mail } from 'lucide-react'
import { img, contact } from '../data/site'
import FeedbackStrip from './FeedbackStrip'

const institutionLinks = ['GSS College', 'GSS PUC', 'RPD Degree', 'RPD PUC', 'BCA College, Chandgad', 'Schools & Institutes']
const quickLinks = [
  ['About SKE', '/about'],
  ['Programmes', '/programmes'],
  ['News & Events', '/news-events'],
  ['Facilities', '/facilities'],
  ['Alumni', '/alumni'],
  ['Feedback', '/feedback'],
  ['Gallery', '/gallery'],
]
const socials = [
  [Facebook, 'Facebook'],
  [Instagram, 'Instagram'],
  [Youtube, 'YouTube'],
  [Globe, 'Website'],
]

const Heading = ({ children }) => (
  <div className="mb-[19px]">
    <div className="text-[10px] font-bold uppercase leading-[12px] tracking-[0.16em] text-white">{children}</div>
    <div className="mt-2 h-px w-14 bg-white/30" />
  </div>
)

export default function Footer() {
  return (
    <>
      <FeedbackStrip />
      <footer id="site-footer" className="relative overflow-hidden bg-ink text-white">
        {/* Ghost wordmark */}
        <div aria-hidden className="ghost-word absolute left-[40px] top-[248px] hidden text-[244px] lg:block">
          SKE SOCIETY
        </div>

        <div className="wrap relative pt-14 lg:pt-[72px]">
          <div className="grid gap-12 lg:grid-cols-[508px_256px_256px_1fr] lg:gap-0">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3">
                <span className="grid h-14 w-14 place-items-center bg-white">
                  <img src={img.logo} alt="" className="h-[46px] w-auto" />
                </span>
                <span>
                  <span className="block font-display text-[20px] font-semibold leading-none">SKE SOCIETY.</span>
                  <span className="mt-[7px] block text-[9px] font-medium uppercase tracking-[0.18em] text-white/70">Belagavi · Est. 1944</span>
                </span>
              </Link>
              <p className="mb-0 mt-[26px] max-w-[360px] text-[14px] leading-[1.65] text-white/70">
                The South Konkan Education Society — nurturing learners in Belagavi from school to degree since 1944.
              </p>
              <div className="mt-[26px] flex gap-[10px]">
                {socials.map(([I, label]) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="grid h-[34px] w-[34px] place-items-center border border-white/25 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    <I size={14} strokeWidth={1.6} />
                  </a>
                ))}
              </div>
            </div>

            {/* Institutions */}
            <div>
              <Heading>Institutions</Heading>
              <ul className="m-0 list-none space-y-[11px] p-0 text-[13.5px] leading-5">
                {institutionLinks.map((l) => (
                  <li key={l}>
                    <Link to="/institutions" className="text-[13.5px] text-white/70 transition-colors hover:text-accent">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <Heading>Quick Links</Heading>
              <ul className="m-0 list-none space-y-[11px] p-0 text-[13.5px] leading-5">
                {quickLinks.map(([l, to]) => (
                  <li key={l}>
                    <Link to={to} className="text-[13.5px] text-white/70 transition-colors hover:text-accent">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <Heading>Get in Touch</Heading>
              <ul className="m-0 list-none space-y-[12px] p-0 text-[13.5px] leading-5">
                <li className="flex gap-3">
                  <MapPin size={15} strokeWidth={1.6} className="mt-[2px] shrink-0 text-accent" />
                  <span>
                    <span className="block font-medium">{contact.addressLine1}</span>
                    <span className="mt-1 block text-[12px] text-white/55">{contact.addressLine2}</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} strokeWidth={1.6} className="shrink-0 text-accent" />
                  <span className="font-medium">{contact.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={15} strokeWidth={1.6} className="shrink-0 text-accent" />
                  <span className="font-medium">{contact.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.08] py-[24px] text-[11.5px] leading-[14px] text-white/55 sm:flex-row sm:items-center lg:mt-[71px]">
            <span>© 2026 South Konkan Education Society, Belagavi. All rights reserved.</span>
            <span className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent">Terms &amp; Conditions</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
