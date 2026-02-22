import {useEffect, useState} from 'react'
import '../body.scss'
import BluePanel from './components/BluePanel'
import './Pages.scss'

function Home() {
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
        <p className="hmb-titleStyle" style={{opacity: opacity1}}>
          <span className="hmb-boldText">Broad</span>
          <span className="hmb-titleText">Technical</span>
          <span className="hmb-titleText"> Skills</span>
        </p>
        <p className="hmb-titleStyle" style={{opacity: opacity2}}>
          <span className="hmb-boldText">Extensive</span>
          <span className="hmb-titleText">Knowledge</span>
        </p>
        <p className="hmb-titleStyle" style={{opacity: opacity3}}>
          <span className="hmb-boldText">Innovative</span>
          <span className="hmb-titleText">&</span>
          <span className="hmb-titleText">Creative</span>
        </p>
      </div>
      <div id="hmb-aboutStyle" style={{opacity: opacity4}}>
        <div id="hmb-aboutLeft">
          <BluePanel className="hmb-aboutContainer hmb-whiteText">
            <p>I've been building front-end user interfaces for 15+ years. Including 10 years of experience with React.js.</p>
          </BluePanel>
        </div>
        <div id="hmb-aboutRight">
          <BluePanel className="hmb-aboutContainer hmb-whiteText">
            <p>I possess extensive knowledge and expertise in JavaScript, HTML, CSS, and a long list of other UI technologies.</p>
          </BluePanel>
        </div>
      </div>
    </div>
  )
}

export default Home
