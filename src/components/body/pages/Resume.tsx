import { useEffect, useState } from 'react'
import '../Body.scss'
import BluePanel from './components/BluePanel'
import CollapsiblePanel from './components/CollapsiblePanel'
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
  contract: boolean
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

        tempExpDom.push(
          <CollapsiblePanel
            key={exp.company}
            header={
              <>
                <div className="expRow">
                  <div className="expColumn expRole">
                    <span>{exp.position}</span>
                  </div>
                  <div className="whiteText">| {exp.date}</div>
                </div>
                <div className="expRow">
                  <div className="expColumn" style={{ textAlign: 'right', textTransform: 'uppercase', fontWeight: '700' }}>
                    {exp.company}
                  </div>
                  <div className="expColumn whiteText" style={{ textAlign: 'right' }}>
                    - {exp.location}
                  </div>
                  <div style={{ display: exp.contract ? 'inline' : 'none', fontWeight: 'bold', fontStyle: 'italic' }}> - Contract</div>
                </div>
              </>
            }
          >
            <div className="clients">
              <div className="whiteText">{exp.description}</div>
              <div style={{ padding: '10px', display: exp.details.length > 0 ? 'block' : 'none' }}>
                {!clients &&
                  exp.details.map((det, i) => (
                    <div key={i} className="hbRow whiteText">
                      &#x2022; {det}
                    </div>
                  ))}
              </div>
              {!clients && (
                <div className="hbRow whiteText" style={{ marginTop: '20px' }}>
                  Skills: {exp.used}
                </div>
              )}
            </div>
            {exp.clients.map((c) => (
              <div className="clients bottomLine">
                <div className="hbRow nameDescription">
                  <span style={{ fontWeight: '700', color: '#ffaf19' }}>{c.company}</span>
                  <span style={{ paddingLeft: '10px' }}>{c.description}</span>
                </div>
                <div style={{ padding: '10px' }}>
                  {c.details.map((det, i) => (
                    <div key={i} className="hbRow whiteText">
                      &#x2022; {det}
                    </div>
                  ))}
                </div>
                <div className="hbRow whiteText" style={{ marginTop: '20px' }}>
                  Skills: {c.used}
                </div>
              </div>
            ))}
          </CollapsiblePanel>
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
          <div className="whiteText">{Data.Profile}</div>
        </BluePanel>
      </div>
      <div key="resumeData" className="hbRow dataRows">
        <BluePanel key="resBP2" className="panels">
          <div className="sectionHeader-Line">Industry Experience</div>
          <div className="whiteText">{Data.IndustryExperience}</div>
        </BluePanel>
        <BluePanel key="resBP3" className="panels">
          <div className="sectionHeader-Line">Competencies</div>
          <div className="whiteText">{Data.Competencies}</div>
        </BluePanel>
        <BluePanel key="resBP4" className="panels">
          <div className="sectionHeader-Line">Languages</div>
          <div>{Data.Technologies.Languages}</div>
        </BluePanel>
        <BluePanel key="resBP5" className="panels">
          <div className="sectionHeader-Line">Tools / Libraries</div>
          <div className="whiteText">{Data.Technologies['Tools / Libraries']}</div>
        </BluePanel>
        <BluePanel key="resBP6" className="panels">
          <div className="sectionHeader-Line">Software</div>
          <div className="whiteText">{Data.Technologies.Software}</div>
        </BluePanel>
        <BluePanel key="resBP7" className="panels">
          <div className="sectionHeader-Line">Operating Systems</div>
          <div className="whiteText">{Data.Technologies['Operating Systems']}</div>
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
