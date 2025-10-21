import { useState } from 'react'
import '../Body.scss'
import BluePanel from './components/BluePanel'
import Data from './data/resume.json'
import './Pages.scss'
import ResumePanel from './ResumePanel'

const callBacks = []

const Resume = ({ appRef }) => {
  const [clicked, setClicked] = useState()
  const [onOff, setOnOff] = useState(false)

  // useEffect(() => {
  //   setOnOff(false)
  // }, [])

  const turnSwitch = (value) => { // function called by switch
    setOnOff(value)
  }

  const registerFunc = (func) => {
    if (callBacks.length < 10) {
      callBacks.push(func)
    }
  }

  const openPanel = (id) => { // function called by CollapsiblePanel
    console.log('openPanel = ', id)
    console.log('onOff = ', onOff)

    callBacks.forEach((func) => {
      func(id, onOff)
    })

    setClicked(id)
  }

  return (
    <div id="hmb-resume" key="resumeBody" className="hmb-flexContainer pages" style={ { letterSpacing: '1.5px' } }>
      <div key="resumeMain" className="hmb-column">
        <BluePanel Bkey="resBP1">
          <div className="hmb-sectionHeader-Line">PROFILE</div>
          <div className="hmb-whiteText">{ Data.Profile }</div>
        </BluePanel>
      </div>
      <div key="resumeData" className="hmb-row hmb-dataRows">
        <BluePanel Bkey="resBP2" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Industry Experience</div>
          <div className="hmb-whiteText">{ Data.IndustryExperience }</div>
        </BluePanel>
        <BluePanel Bkey="resBP3" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Competencies</div>
          <div className="hmb-whiteText">{ Data.Competencies }</div>
        </BluePanel>
        <BluePanel Bkey="resBP4" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Languages</div>
          <div>{ Data.Technologies.Languages }</div>
        </BluePanel>
        <BluePanel Bkey="resBP5" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Tools / Libraries</div>
          <div className="hmb-whiteText">{ Data.Technologies['Tools / Libraries'] }</div>
        </BluePanel>
        <BluePanel Bkey="resBP6" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Software</div>
          <div className="hmb-whiteText">{ Data.Technologies.Software }</div>
        </BluePanel>
        <BluePanel Bkey="resBP7" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Operating Systems</div>
          <div className="hmb-whiteText">{ Data.Technologies['Operating Systems'] }</div>
        </BluePanel>
        <div className="hmb-sectionTitle">
          <span className="hmb-sectionText">EXPERIENCE</span>
        </div>
        <BluePanel key="experience" className="hmb-row hmb-dataRows experienceContainer">
          <ResumePanel exp={ Data.Experience[0] } />
          <ResumePanel exp={ Data.Experience[1] } />
          <ResumePanel exp={ Data.Experience[2] } />
          <ResumePanel exp={ Data.Experience[3] } />
          <ResumePanel exp={ Data.Experience[4] } />
          <ResumePanel exp={ Data.Experience[5] } />
          <ResumePanel exp={ Data.Experience[6] } />
          <ResumePanel exp={ Data.Experience[7] } />
          <ResumePanel exp={ Data.Experience[8] } />
          <ResumePanel exp={ Data.Experience[9] } />
        </BluePanel>
      </div>
    </div>
  )
}

export default Resume
