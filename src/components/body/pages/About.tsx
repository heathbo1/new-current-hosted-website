import {useContext, useEffect} from 'react'
import '../Body.scss'
import {ScrollContext} from '../ScrollProvider'
import './Pages.scss'
import BluePanel from './components/BluePanel'
import Data from './data/about.json'

interface iName {
  Name: {
    name: string
    quote: string
    company: string
  }
}

const Testimonials = ({Name}: iName) => {
  return (
    <div>
      <div className="hmb-sectionHeader-Line">{Name.name}</div>
      <div className="hmb-whiteText">{Name.quote}</div>
      <br />
      <div className="hmb-whiteText">{Name.name}</div>
      <div className="hmb-whiteText">{Name.company}</div>
    </div>
  )
}

const About = () => {
  //@ts-ignore
  const {setScrollDist} = useContext(ScrollContext)

  useEffect(() => {
    setScrollDist(0)
  }, [])

  return (
    <div key="aboutBody" id="about" className="hmb-flexContainer pages hmb-aboutPage">
      <div key="aboutMain" className="hmb-column">
        <BluePanel>
          <div className="hmb-whiteText">
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
      <div className="hmb-sectionTitle">
        <span className="hmb-sectionText">TESTIMONIALS</span>
      </div>
      <div key="abSide" className="hmb-row hmb-dataRows">
        <BluePanel className="hmb-aboutPanels">
          <Testimonials Name={Data.Testimonials.ChandlerPrince} />
        </BluePanel>
        <BluePanel className="hmb-aboutPanels">
          <Testimonials Name={Data.Testimonials.StevenWilliams} />
        </BluePanel>
        <BluePanel className="hmb-aboutPanels">
          <Testimonials Name={Data.Testimonials.AmandaPozzo} />
        </BluePanel>
        <BluePanel className="hmb-aboutPanels">
          <Testimonials Name={Data.Testimonials.RobertWade} />
        </BluePanel>
        <BluePanel className="hmb-aboutPanels">
          <Testimonials Name={Data.Testimonials.JamesJervis} />
        </BluePanel>
      </div>
    </div>
  )
}

export default About
