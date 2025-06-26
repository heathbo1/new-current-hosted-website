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
  console.log('about')
  useEffect(() => {
    console.log('AR = ', appRef.current)
    appRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div key="aboutBody" id="about" className="flexContainer pages" style={{ letterSpacing: '1.5px' }}>
      <div key="aboutMain" className="hbColumn">
        <BluePanel key="abBP1">
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
        <BluePanel className="aboutPanels" key="abBP2">
          <Testimonials Name={Data.Testimonials.ChandlerPrince} />
        </BluePanel>
        <BluePanel className="aboutPanels" key="abBP4">
          <Testimonials Name={Data.Testimonials.StevenWilliams} />
        </BluePanel>
        <BluePanel className="aboutPanels" key="abBP3">
          <Testimonials Name={Data.Testimonials.AmandaPozzo} />
        </BluePanel>
        <BluePanel className="aboutPanels" key="abBP4">
          <Testimonials Name={Data.Testimonials.RobertWade} />
        </BluePanel>
        <BluePanel className="aboutPanels" key="abBP5">
          <Testimonials Name={Data.Testimonials.JamesJervis} />
        </BluePanel>
      </div>
    </div>
  )
}

export default About
