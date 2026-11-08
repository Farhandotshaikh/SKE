import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Home from './pages/Home'
import Programmes from './pages/Programmes'
import Facilities from './pages/Facilities'
import ComingSoon from './pages/ComingSoon'
import About from './pages/About'
import Institutions from './pages/Institutions'

function ScrollToTopOnRoute() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTopOnRoute />
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Institutions" element={<Institutions />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
