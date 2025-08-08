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
  key: number
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

      tempExp.forEach((exp, i) => {
        const clients = exp.clients.length >= 1

        tempExpDom.push(
          <div key={i} className='collapsibleHolder'>
            <CollapsiblePanel
              header={
                <>
                  <div className="hmb-expRow">
                    <div className="hmb-expColumn hmb-expRole">
                      <span>{exp.position}</span>
                    </div>
                    <div className="hmb-whiteText">
                      <span id="dateSpacer">|</span> {exp.date}
                    </div>
                  </div>
                  <div className="hmb-expRow">
                    <div className="hmb-expColumn" style={{ textTransform: 'uppercase', fontWeight: '700' }}>
                      {exp.company}
                    </div>
                    <div className="hmb-expColumn hmb-whiteText">- {exp.location}</div>
                    <div style={{ display: exp.contract ? 'inline' : 'none', fontWeight: 'bold', fontStyle: 'italic' }}> - Contract</div>
                  </div>
                </>
              }
            >
              <div className="hmb-companies">
                <div className="hmb-whiteText">{exp.description}</div>
                <div style={{ padding: '10px', display: exp.details.length > 0 ? 'block' : 'none' }}>
                  {!clients &&
                    exp.details.map((det, i) => (
                      <div key={i} className="hmb-row hmb-whiteText">
                        &#x2022; {det}
                      </div>
                    ))}
                </div>
                {!clients && (
                  <div className="hmb-row hmb-whiteText" style={{ marginTop: '20px' }}>
                    Skills: {exp.used}
                  </div>
                )}
                <>
                  {exp.clients.map((c, i) => (
                    <div key={i} className="hmb-clients hmb-bottomLine">
                      <div className="hmb-row hmb-nameDescription">
                        <span style={{ fontWeight: '700', color: 'var(--HMB-orange)' }}>{c.company}</span>
                        <span style={{ paddingLeft: '10px' }}>{c.description}</span>
                      </div>
                      <div style={{ padding: '10px' }}>
                        {c.details.map((det, i) => (
                          <div key={i} className="hmb-row hmb-whiteText">
                            &#x2022; {det}
                          </div>
                        ))}
                      </div>
                      <div className="hmb-row hmb-whiteText" style={{ padding: '10px' }}>
                        Skills: {c.used}
                      </div>
                    </div>
                  ))}
                </>
              </div>
            </CollapsiblePanel>
          </div>
        )
      })
      setExpDOM(tempExpDom)
    }
  }, [])

  return (
    <div id="hmb-resume" key="resumeBody" className="hmb-flexContainer pages" style={{ letterSpacing: '1.5px' }}>
      <div key="resumeMain" className="hmb-column">
        <BluePanel Bkey="resBP1">
          <div className="hmb-sectionHeader-Line">PROFILE</div>
          <div className="hmb-whiteText">{Data.Profile}</div>
        </BluePanel>
      </div>
      <div key="resumeData" className="hmb-row hmb-dataRows">
        <BluePanel Bkey="resBP2" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Industry Experience</div>
          <div className="hmb-whiteText">{Data.IndustryExperience}</div>
        </BluePanel>
        <BluePanel Bkey="resBP3" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Competencies</div>
          <div className="hmb-whiteText">{Data.Competencies}</div>
        </BluePanel>
        <BluePanel Bkey="resBP4" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Languages</div>
          <div>{Data.Technologies.Languages}</div>
        </BluePanel>
        <BluePanel Bkey="resBP5" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Tools / Libraries</div>
          <div className="hmb-whiteText">{Data.Technologies['Tools / Libraries']}</div>
        </BluePanel>
        <BluePanel Bkey="resBP6" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Software</div>
          <div className="hmb-whiteText">{Data.Technologies.Software}</div>
        </BluePanel>
        <BluePanel Bkey="resBP7" className="hmb-panels">
          <div className="hmb-sectionHeader-Line">Operating Systems</div>
          <div className="hmb-whiteText">{Data.Technologies['Operating Systems']}</div>
        </BluePanel>
        <div className="hmb-sectionTitle">
          <span className="hmb-sectionText">EXPERIENCE</span>
        </div>
        <BluePanel key="experience" className="hmb-row hmb-dataRows experienceContainer">
          {expDOM}
        </BluePanel>
      </div>
    </div>
  )
}

export default Resume
