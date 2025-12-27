import '../body.scss'
import './Pages.scss'
import BluePanel from './components/BluePanel'

const Connect = () => {
  return (
    <div style={{height: 'calc(100vh-96px'}} className="hmb-flexContainer hmb-connectPage">
      <div className="hmb-container">
        <BluePanel className="hmb-blue" id="hmb-blue-connect">
          <div className="hmb-sectionHeader-Line" style={{fontSize: '2em', textAlign: 'center', paddingBottom: '10px'}}>
            HEATH BISHOP
          </div>
          <div className="hmb-connect">
            <div className="hmb-whiteText">
              <b>Phone: </b>(314) 609-9176
            </div>
            <div className="hmb-whiteText">
              <b>Email: </b>
              <a href="mailto:hbishop@heathbishop.com" className="hmb-whiteText, hmb-link">
                hbishop@heathbishop.com
              </a>
            </div>
            <div className="hmb-whiteText">
              <b>LinkedIn: </b>
              <a target="_blank" href="https://www.linkedin.com/in/heath-bishop-757a3b5/" className="hmb-whiteText, hmb-link">
                Profile
              </a>
            </div>
            <div className="hmb-whiteText">
              <b>Location: </b>St. Louis, Mo, USA
            </div>
          </div>
        </BluePanel>
      </div>
    </div>
  )
}

export default Connect
