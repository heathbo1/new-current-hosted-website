import { useEffect, useState } from 'react'
import '../Body.scss'
import BluePanel from './compnents/BluePanel'
import Data from './data/resume.json'
import './Pages.scss'

interface iClients {
  company: string
  description: string
  details: string[]
  used: string
}

interface iExperience {
  company: string
  position: string
  location: string
  date: string
  description: string
  details: string[]
  used: string
  clients: iClients[]
}

const Resume = () => {
  const [experience, setExperience] = useState<iExperience[]>([])

  useEffect(() => {
    if (Data.Experience.length > 0) {
      const tempExp: iExperience[] = []
      Data.Experience.forEach((ext) => {
        tempExp.push(ext)
      })
      setExperience(tempExp)
    }
  }, [])

  return (
    <div id="resumeBody" className="flexContainer pages" style={{ letterSpacing: '1.5px' }}>
      <div id="resumeMain" className="hbColumn">
        <BluePanel id="resBP1">
          <div className="sectionHeader-Line">PROFILE</div>
          <div>{Data.Profile}</div>
        </BluePanel>
      </div>
      <div id="resumeData" className="hbRow dataRows">
        <BluePanel id="resBP2" className="panels" width="30%">
          <div className="sectionHeader-Line">Industry Experience</div>
          <div>{Data.IndustryExperience}</div>
        </BluePanel>
        <BluePanel id="resBP3" className="panels" width="30%">
          <div className="sectionHeader-Line">Competencies</div>
          <div>{Data.Competencies}</div>
        </BluePanel>
        <BluePanel id="resBP4" className="panels" width="30%">
          <div className="sectionHeader-Line">Languages</div>
          <div>{Data.Technologies.Languages}</div>
        </BluePanel>
        <BluePanel id="resBP5" className="panels" width="30%">
          <div className="sectionHeader-Line">Tools / Libraries</div>
          <div>{Data.Technologies['Tools / Libraries']}</div>
        </BluePanel>
        <BluePanel id="resBP6" className="panels" width="30%">
          <div className="sectionHeader-Line">Software</div>
          <div>{Data.Technologies.Software}</div>
        </BluePanel>
        <BluePanel id="resBP7" className="panels" width="30%">
          <div className="sectionHeader-Line">Operating Systems</div>
          <div>{Data.Technologies['Operating Systems']}</div>
        </BluePanel>
        <BluePanel id="resBP8" width="98%">
          <div className="sectionHeader-Line">Competencies</div>
          <div>{Data.Competencies}</div>
        </BluePanel>
        <div className="sectionTitle">
          <span className="sectionText">EXPERIENCE</span>
        </div>
        <div id="experience" className="hbRow dataRows">
          {experience.map((exp) => {
            const clients = exp.clients.length >= 1
            return (
              <BluePanel id={exp.company} className="bluePanelExper">
                <div className="hbRow">
                  <div className="expColumn" style={{ color: '#ffaf19', textTransform: 'uppercase', fontWeight: '700' }}>
                    {exp.position}
                  </div>
                  <div className="expColumn" style={{ textAlign: 'right', color: '#ffaf19', textTransform: 'uppercase', fontWeight: '700' }}>
                    {exp.company}
                  </div>
                </div>
                <div className="hbRow" style={{ marginBottom: '20px', borderBottom: '1px solid #ffffff' }}>
                  <div className="expColumn">{exp.date}</div>
                  <div className="expColumn" style={{ textAlign: 'right' }}>
                    {exp.location}
                  </div>
                </div>
                <div style={{ padding: '10px' }}>{!clients && exp.details.map((det) => <div className="hbRow">&#x2022; {det}</div>)}</div>
                {!clients && (
                  <div className="hbRow" style={{ marginTop: '20px' }}>
                    Skills:{exp.used}
                  </div>
                )}
              </BluePanel>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Resume
