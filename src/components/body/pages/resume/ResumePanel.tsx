import CollapsiblePanel from '../components/CollapsiblePanel'

interface iClients {
  company: string
  description: string
  details: Array<string>
  used: string
}

interface iExp {
  exp: {
    company: string
    contract: boolean
    position: string
    location: string
    date: string
    description: string
    details: Array<string>
    clients: Array<iClients>
    key: number
    used: string
  }
  id?: string
  update?(open: boolean, id: string): void
  isOpen?: {id?: string; open: boolean}
}

const ResumePanel = ({exp, id, update, isOpen}: iExp) => {
  const clients = exp.clients.length >= 1
  return (
    <CollapsiblePanel
      id={id}
      update={update}
      isOpen={isOpen}
      header={
        <>
          <div className="hmb-expRow">
            <div className="hmb-expColumn hmb-sectionHeader">
              <span>{exp.position}</span>
            </div>
            <div className="hmb-whiteText">
              <span id="dateSpacer">|</span> {exp.date}
            </div>
          </div>
          <div className="hmb-expRow">
            <div className="hmb-expColumn hmb-whiteText" style={{textTransform: 'uppercase', fontWeight: '700'}}>
              {exp.company}
            </div>
            <div className="hmb-expColumn hmb-whiteText">- {exp.location}</div>
            <div className="hmb-whiteText" style={{display: exp.contract ? 'inline' : 'none', fontWeight: 'bold', fontStyle: 'italic'}}>
              {' '}
              - Contract
            </div>
          </div>
        </>
      }
      children={
        <div className="hmb-companies">
          <div className="hmb-whiteText">{exp.description}</div>
          <ul className="hmb-unorderedList" style={{display: exp.details.length > 0 ? 'block' : 'none'}}>
            {!clients &&
              exp.details.map((det, i) => (
                <li key={`det-${i}`} className="hmb-list hmb-whiteText">
                  {det}
                </li>
              ))}
          </ul>
          {!clients && <p className="hmb-row hmb-whiteText">Skills: {exp.used}</p>}
          <>
            {exp.clients.map((c, i) => (
              <div key={`c-${i}`} className="hmb-clients hmb-topLine">
                <div className="hmb-row hmb-nameDescription">
                  <span className="hmb-companyName">{c.company}</span>
                  <span className="hmb-companyDescription">{c.description}</span>
                </div>
                <ul className="hmb-unorderedList">
                  {c.details.map((det, i) => (
                    <li key={`det2-${i}`} className="hmb-list hmb-whiteText">
                      {det}
                    </li>
                  ))}
                </ul>
                <p className="hmb-row hmb-whiteText">Skills: {c.used}</p>
              </div>
            ))}
          </>
        </div>
      }
    />
  )
}

export default ResumePanel
