import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import VisionMission from '../components/home/VisionMission'
import Institutions from '../components/home/Institutions'
import FindProgramme from '../components/home/FindProgramme'
import Spaces from '../components/home/Spaces'
import Partners from '../components/home/Partners'
import News from '../components/home/News'
import Alumni from '../components/home/Alumni'
import StatsBanner from '../components/home/StatsBanner'
import ApplyCTA from '../components/ApplyCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <VisionMission />
      <Institutions />
      <FindProgramme />
      <Spaces />
      <Partners />
      <News />
      <Alumni />
      <StatsBanner />
      <ApplyCTA />
    </>
  )
}
