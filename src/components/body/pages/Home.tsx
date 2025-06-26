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
    setTimeout(() => setOpacity1(100), 240)
    setTimeout(() => setOpacity2(100), 1240)
    setTimeout(() => setOpacity3(100), 2240)
    setTimeout(() => setOpacity4(100), 3240)
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
        <p className="aboutStyle" style={{ opacity: opacity4 }}>
          <BluePanel className="aboutContainer bluePanel75">
            Heath’s unique blend of artistic training and technical mastery allows him to bridge the gap between design and engineering, consistently delivering front-end experiences that are not only functional but intuitive and engaging.
          </BluePanel>
        </p>
      </div>
    </div>
  )
}

export default Home
