import { useEffect, useState } from 'react'
import '../body.scss'
import './Pages.scss'

const Home = () => {
  const [opacity1, setOpacity1] = useState(0)
  const [opacity2, setOpacity2] = useState(0)
  const [opacity3, setOpacity3] = useState(0)

  useEffect(() => {
    setTimeout(() => setOpacity1(100), 250)
    setTimeout(() => setOpacity2(100), 1250)
    setTimeout(() => setOpacity3(100), 2250)
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
    </div>
  )
}

export default Home
