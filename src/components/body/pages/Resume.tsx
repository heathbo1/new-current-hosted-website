import '../body.scss'
import './Pages.scss'
import BluePanel from './compnents/BluePanel'
import Data from './data/resume.json'

const Resume = () => {
  return (
    <div id="resumeBody" className="flexContainer">
      <div id="resumeMain" className="hbColumn">
        <BluePanel id="resBP1">
          <div className="sectionHeader">PROFILE</div>
          <div>{Data.Profile}</div>
        </BluePanel>
      </div>
      <div id="resumeData" className="hbRow dataRows">
        <BluePanel id="resBP2" className="panels" width="30%">
          <div className="sectionHeader">Industry Experience</div>
          <div>{Data.IndustryExperience}</div>
        </BluePanel>
        <BluePanel id="resBP3" className="panels" width="30%">
          <div className="sectionHeader">Competencies</div>
          <div>{Data.Competencies}</div>
        </BluePanel>
        <BluePanel id="resBP4" className="panels" width="30%">
          <div className="sectionHeader">Languages</div>
          <div>{Data.Technologies.Languages}</div>
        </BluePanel>
        <BluePanel id="resBP5" className="panels" width="30%">
          <div className="sectionHeader">Tools / Libraries</div>
          <div>{Data.Technologies['Tools / Libraries']}</div>
        </BluePanel>
        <BluePanel id="resBP6" className="panels" width="30%">
          <div className="sectionHeader">Software</div>
          <div>{Data.Technologies.Software}</div>
        </BluePanel>
        <BluePanel id="resBP7" className="panels" width="30%">
          <div className="sectionHeader">Operating Systems</div>
          <div>{Data.Technologies['Operating Systems']}</div>
        </BluePanel>
        <BluePanel id="resBP8" width="98%">
          <div className="sectionHeader">Experience</div>
          <div>{Data.Competencies}</div>
        </BluePanel>
      </div>
    </div>
  )
}

export default Resume
