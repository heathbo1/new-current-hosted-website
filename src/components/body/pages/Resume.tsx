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
  const [expDOM, setExpDOM] = useState<JSX.Element[]>([])

  useEffect(() => {
    const tempExp: iExperience[] = []
    const tempExpDom: JSX.Element[] = []

    if (Data.Experience.length > 0) {
      Data.Experience.forEach((ext) => {
        tempExp.push(ext)
      })

      tempExp.forEach((exp) => {
        const clients = exp.clients.length >= 1

        console.log('clients = ', clients)

        tempExpDom.push(
          <BluePanel key={exp.company} className="bluePanelExper">
            <div className="expRow">
              <div className="expColumn" style={{ color: '#ffaf19', textTransform: 'uppercase', fontWeight: '700' }}>
                {exp.position}
              </div>
              <div className="expColumn" style={{ textAlign: 'right', color: '#ffaf19', textTransform: 'uppercase', fontWeight: '700' }}>
                {exp.company}
              </div>
            </div>
            <div className="expRow" style={{ marginBottom: '20px', borderBottom: '1px solid #ffffff' }}>
              <div className="expColumn">{exp.date}</div>
              <div className="expColumn" style={{ textAlign: 'right' }}>
                {exp.location}
              </div>
            </div>
            <div>{exp.description}</div>
            <div style={{ padding: '10px' }}>{!clients && exp.details.map((det) => <div className="hbRow">&#x2022; {det}</div>)}</div>
            {!clients && (
              <div className="hbRow" style={{ marginTop: '20px' }}>
                Skills: {exp.used}
              </div>
            )}
            {exp.clients.map((c) => (
              <div style={{ marginBottom: '20px' }} className="clients">
                <div className="hbRow nameDescription">
                  <span style={{ fontWeight: '700', color: '#ffaf19' }}>{c.company}</span>
                  <span style={{ paddingLeft: '10px' }}>{c.description}</span>
                </div>
                <div style={{ padding: '10px' }}>
                  {c.details.map((det) => (
                    <div className="hbRow">&#x2022; {det}</div>
                  ))}
                </div>
                <div className="hbRow" style={{ marginTop: '20px' }}>
                  Skills: {c.used}
                </div>
              </div>
            ))}
          </BluePanel>
        )
      })
      setExpDOM(tempExpDom)
    }
  }, [])

  return (
    <div id="resume" key="resumeBody" className="flexContainer pages" style={{ letterSpacing: '1.5px' }}>
      <div key="resumeMain" className="hbColumn">
        <BluePanel key="resBP1">
          <div className="sectionHeader-Line">PROFILE</div>
          <div>{Data.Profile}</div>
        </BluePanel>
      </div>
      <div key="resumeData" className="hbRow dataRows">
        <BluePanel key="resBP2" className="panels" width="30%">
          <div className="sectionHeader-Line">Industry Experience</div>
          <div>{Data.IndustryExperience}</div>
        </BluePanel>
        <BluePanel key="resBP3" className="panels" width="30%">
          <div className="sectionHeader-Line">Competencies</div>
          <div>{Data.Competencies}</div>
        </BluePanel>
        <BluePanel key="resBP4" className="panels" width="30%">
          <div className="sectionHeader-Line">Languages</div>
          <div>{Data.Technologies.Languages}</div>
        </BluePanel>
        <BluePanel key="resBP5" className="panels" width="30%">
          <div className="sectionHeader-Line">Tools / Libraries</div>
          <div>{Data.Technologies['Tools / Libraries']}</div>
        </BluePanel>
        <BluePanel key="resBP6" className="panels" width="30%">
          <div className="sectionHeader-Line">Software</div>
          <div>{Data.Technologies.Software}</div>
        </BluePanel>
        <BluePanel key="resBP7" className="panels" width="30%">
          <div className="sectionHeader-Line">Operating Systems</div>
          <div>{Data.Technologies['Operating Systems']}</div>
        </BluePanel>
        <BluePanel key="resBP8" width="98%">
          <div className="sectionHeader-Line">Competencies</div>
          <div>{Data.Competencies}</div>
        </BluePanel>
        <div className="sectionTitle">
          <span className="sectionText">EXPERIENCE</span>
        </div>
        <div key="experience" className="hbRow dataRows">
          {expDOM}
        </div>
      </div>
    </div>
  )
}

export default Resume
