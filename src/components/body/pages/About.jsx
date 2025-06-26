import { useEffect } from 'react'
import '../Body.scss'
import './Pages.scss'
import BluePanel from './components/BluePanel'
import Data from './data/about.json'

const Testimonials = ({ Name }) => {
  return (
    <div>
      <div className="sectionHeader-Line">{Name.name}</div>
      <div>{Name.quote}</div>
      <br />
      <div>{Name.name}</div>
      <div>{Name.company}</div>
    </div>
  )
}

const About = ({ appRef }) => {
  useEffect(() => {
    appRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div key="aboutBody" id="about" className="flexContainer pages" style={{ letterSpacing: '1.5px' }}>
      <div key="aboutMain" className="hbColumn">
        <BluePanel>
          <div>
            {Data.About.Me.part1}
            <br />
            <br />
            {Data.About.Me.part2}
            <br />
            <br />
            {Data.About.Me.part3}
            <br />
            <br />
            {Data.About.Me.part4}
          </div>
        </BluePanel>
      </div>
      <div className="sectionTitle">
        <span className="sectionText">TESTIMONIALS</span>
      </div>
      <div key="abSide" className="hbRow dataRows">
        <BluePanel className="aboutPanels">
          <Testimonials Name={Data.Testimonials.ChandlerPrince} />
        </BluePanel>
        <BluePanel className="aboutPanels">
          <Testimonials Name={Data.Testimonials.StevenWilliams} />
        </BluePanel>
        <BluePanel className="aboutPanels">
          <Testimonials Name={Data.Testimonials.AmandaPozzo} />
        </BluePanel>
        <BluePanel className="aboutPanels">
          <Testimonials Name={Data.Testimonials.RobertWade} />
        </BluePanel>
        <BluePanel className="aboutPanels">
          <Testimonials Name={Data.Testimonials.JamesJervis} />
        </BluePanel>
      </div>
    </div>
  )
}

export default About
