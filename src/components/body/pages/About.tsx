import '../Body.scss'
import './Pages.scss'
import BluePanel from './compnents/BluePanel'
import Data from './data/about.json'

interface TestInt {
  Name: {
    name: string
    quote: string
    company: string
  }
}

const Testimonials = ({ Name }: TestInt) => {
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

const About = () => {
  return (
    <div id="aboutBody" className="flexContainer pages" style={{ letterSpacing: '1.5px' }}>
      <div id="aboutMain" className="hbColumn">
        <BluePanel id="abBP1">
          <div>
            {Data.About.Me.part1}
            <br />
            <br />
            {Data.About.Me.part2}
            <br />
            <br />
            {Data.About.Me.part3}
          </div>
        </BluePanel>
      </div>
      <div className="sectionTitle">
        <span className="sectionText">TESTIMONIALS</span>
      </div>
      <div id="abSide" className="hbRow dataRows">
        <BluePanel className="panels" id="abBP2">
          <Testimonials Name={Data.Testimonials.ChandlerPrince} />
        </BluePanel>
        <BluePanel className="panels" id="abBP4">
          <Testimonials Name={Data.Testimonials.StevenWilliams} />
        </BluePanel>
        <BluePanel className="panels" id="abBP3">
          <Testimonials Name={Data.Testimonials.AmandaPozzo} />
        </BluePanel>
        <BluePanel className="panels" id="abBP4">
          <Testimonials Name={Data.Testimonials.RobertWade} />
        </BluePanel>
        <BluePanel className="panels" id="abBP5">
          <Testimonials Name={Data.Testimonials.JamesJervis} />
        </BluePanel>
      </div>
    </div>
  )
}

export default About
