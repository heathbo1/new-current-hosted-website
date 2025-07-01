import { useEffect, useState } from 'react'
import '../body.scss'
import './Pages.scss'
import BluePanel from './components/BluePanel'

const Home = () => {
  const [opacity1, setOpacity1] = useState(0)
  const [opacity2, setOpacity2] = useState(0)
  const [opacity3, setOpacity3] = useState(0)
  const [opacity4, setOpacity4] = useState(0)

  useEffect(() => {
    setTimeout(() => setOpacity1(100), 70)
    setTimeout(() => setOpacity2(100), 280)
    setTimeout(() => setOpacity3(100), 490)
    setTimeout(() => setOpacity4(100), 700)
  }, [])

  return (
    <div id="homePage" className="pages">
      <div className="homeTextStyle">
        <p className="titleStyle" style={{ opacity: opacity1 }}>
          <span className="boldText">BROAD</span>
          <span className="titleText">Technical</span>
          <span className="titleText"> Skills</span>
        </p>
        <p className="titleStyle" style={{ opacity: opacity2 }}>
          <span className="boldText">LIMITLESS</span>
          <span className="titleText">Creativity</span>
        </p>
        <p className="titleStyle" style={{ opacity: opacity3 }}>
          <span className="boldText">VAST</span>
          <span className="titleText">Imagination</span>
        </p>
      </div>
      <div className="aboutStyle" style={{ opacity: opacity4 }}>
        <BluePanel className="aboutContainer--small hmb-whiteText">I've been building front-end user interfaces for over 20 years. Including 10 years of experience with React.js.</BluePanel>
        <BluePanel className="aboutContainer--small hmb-whiteText">I’m not afraid to think outside the box to invent solutions that match exactly what your clients need.</BluePanel>
        <BluePanel className="aboutContainer hmb-whiteText">
          I possess extensive knowledge and expertise in the core technologies that form the foundation of every UI library and framework (JavaScript, HTML, CSS). I can overwrite, push, and customize most UI libraries without relying on
          their built-in customization methods. Bootstrap, for example.
        </BluePanel>
      </div>
    </div>
  )
}

export default Home
