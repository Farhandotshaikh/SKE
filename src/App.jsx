import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import SiteLayout from "./layouts/SiteLayout";
import InstitutionLayout from "./layouts/InstitutionLayout";

// import TopBar from './components/TopBar'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import ScrollTop from './components/ScrollTop'
import InstitutionPage from './pages/institution/InstitutionPage'
import Home from './pages/Home'
import Programmes from './pages/Programmes'
import Facilities from './pages/Facilities'
import ComingSoon from './pages/ComingSoon'
import About from './pages/About'
import Institutions from './pages/Institutions'
import Contact from './pages/Contact'
import Alumni from './pages/Alumni'
import NewsEvents from './pages/NewsEvents'
import School from './pages/School'
import GoverningCouncil from './pages/GoverningCouncil'

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
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Institutions" element={<Institutions />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Alumni" element={<Alumni />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/institutions/:slug" element={<School />} />
            <Route path="/about/governing-council" element={<GoverningCouncil />} />
          </Route>

          {/* Group 2: institute sub-sites (InstitutionNavbar, per-college logo and name) */}
          <Route path="institute/:institute" element={<InstitutionLayout />}>
            {/* /institute/gss-college -> Main page */}
            <Route index element={<InstitutionPage />} />
            {/* /institute/gss-college/admissions, /iqac, /placements ... */}
            <Route path=":page" element={<InstitutionPage />} />
          </Route>

          <Route path="*" element={<ComingSoon />} />

        </Routes>
      {/* </main>
      <Footer />
      <ScrollTop /> */}
    </>
  )
}
