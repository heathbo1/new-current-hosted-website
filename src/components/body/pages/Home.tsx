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
    <div id="hmb-homePage" className="pages">
      <div className="hmb-homeTextStyle">
        <p className="hmb-titleStyle" style={{ opacity: opacity1 }}>
          <span className="hmb-boldText">Broad</span>
          <span className="hmb-titleText">Technical</span>
          <span className="hmb-titleText"> Skills</span>
        </p>
        <p className="hmb-titleStyle" style={{ opacity: opacity2 }}>
          <span className="hmb-boldText">Extensive</span>
          <span className="hmb-titleText">Knowledge</span>
        </p>
        <p className="hmb-titleStyle" style={{ opacity: opacity3 }}>
          <span className="hmb-boldText">Innovative</span>
          <span className="hmb-titleText">&</span>
          <span className="hmb-titleText">Creative</span>
        </p>
      </div>
      <div className="hmb-aboutStyle" style={{ opacity: opacity4 }}>
        <BluePanel className="hmb-aboutContainer--small hmb-whiteText">I've been building front-end user interfaces for over 20 years. Including 10 years of experience with React.js.</BluePanel>
        <BluePanel className="hmb-aboutContainer--small hmb-whiteText">I’m not afraid to think outside the box to invent solutions that match exactly what your clients need.</BluePanel>
        <BluePanel className="hmb-aboutContainer hmb-whiteText">
          I possess extensive knowledge and expertise in the core technologies that form the foundation of every UI library and framework. I can overwrite, and customize most UI libraries without relying on their built-in customization
          methods. Bootstrap, for example.
        </BluePanel>
      </div>
    </div>
  )
}

export default Home
