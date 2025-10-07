import { useState } from 'react'
import '../Body.scss'
import BluePanel from './components/BluePanel'
import Switch from './components/Switch'
import Data from './data/resume.json'
import './Pages.scss'
import ResumePanel from './ResumePanel'

const callBacks = []

const Resume = ({ appRef }) => {
  const [clicked, setClicked] = useState()
  const [onOff, setOnOff] = useState()

  const turnSwitch = (value) => { // function called by switch
    setOnOff(value)
  }

  const registerFunc = (func) => {
    if (callBacks.length < 10) {
      callBacks.push(func)
    }
  }

  const openPanel = (id) => { // function called by CollapsiblePanel
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
          <label id='hmb-resume-switch'><Switch passedIn={ onOff } onOff={ turnSwitch } /><span>Open One At A Time </span></label>
          <ResumePanel exp={ Data.Experience[0] } id={ 1 } opened={ openPanel } register={ registerFunc } />
          <ResumePanel exp={ Data.Experience[1] } id={ 2 } opened={ openPanel } register={ registerFunc } />
          <ResumePanel exp={ Data.Experience[2] } id={ 3 } opened={ openPanel } register={ registerFunc } />
          <ResumePanel exp={ Data.Experience[3] } id={ 4 } opened={ openPanel } register={ registerFunc } />
          <ResumePanel exp={ Data.Experience[4] } id={ 5 } opened={ openPanel } register={ registerFunc } />
          <ResumePanel exp={ Data.Experience[5] } id={ 6 } opened={ openPanel } register={ registerFunc } />
          <ResumePanel exp={ Data.Experience[6] } id={ 7 } opened={ openPanel } register={ registerFunc } />
          <ResumePanel exp={ Data.Experience[7] } id={ 8 } opened={ openPanel } register={ registerFunc } />
          <ResumePanel exp={ Data.Experience[8] } id={ 9 } opened={ openPanel } register={ registerFunc } />
          <ResumePanel exp={ Data.Experience[9] } id={ 10 } opened={ openPanel } register={ registerFunc } />
        </BluePanel>
      </div>
    </div>
  )
}

export default Resume
