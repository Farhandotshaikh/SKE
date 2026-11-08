import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

// Floating back-to-top button. Indigo on light sections, amber over the black footer.
export default function ScrollTop() {
  const [show, setShow] = useState(false)
  const [onDark, setOnDark] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return
    const io = new IntersectionObserver(
      ([e]) => setOnDark(e.isIntersecting),
      { rootMargin: '0px 0px -60px 0px', threshold: 0 },
    )
    io.observe(footer)
    return () => io.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -3 }}
          className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border-0 shadow-[0_8px_20px_rgba(0,0,0,0.22)] transition-colors md:bottom-9 md:right-10 ${
            onDark ? 'bg-accent text-ink' : 'bg-primary text-white'
          }`}
        >
          <ArrowUp size={18} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
