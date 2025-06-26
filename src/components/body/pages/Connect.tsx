import '../body.scss'
import './Pages.scss'
import BluePanel from './components/BluePanel'

const Connect = () => {
  return (
    <div style={{ height: 'calc(100vh-96px' }} className="flexContainer pages connectPage">
      <div className="container">
        <BluePanel>This is the Connect page</BluePanel>
      </div>
    </div>
  )
}

export default Connect
