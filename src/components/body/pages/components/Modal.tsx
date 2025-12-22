import {ReactNode} from 'react'
import Modal from 'react-bootstrap/Modal'
import '../Pages.scss'
import BluePanel from './BluePanel'
import './Components.scss'

interface iModal {
  open: boolean
  openClose: () => void
  children: ReactNode
  title: any
  title2?: string | null
  title2Small?: string | null
  size?: 'lg' | 'sm' | 'xl'
}

const ModalComponent = ({open, openClose, children, title, title2 = null, title2Small = null, size = 'lg'}: iModal) => {
  const close = () => {
    openClose()
  }

  return (
    <>
      <Modal show={open} onHide={close} size={size} className="mw-100">
        <BluePanel>
          <div className="hmb-modalHeader">
            <div className="hmb-titleContent">
              <div className="hmb-modalTitle">
                <span className="hmb-title">{title}</span>
                {title2Small && <span className="hmb-titleSmall">{`${title2Small}`}</span>}
                {title2 && <span className="hmb-title2">{`${title2}`}</span>}
              </div>
            </div>
            <div className="hmb-titleContent" style={{position: 'absolute', right: '0px', top: '1px'}}>
              <button type="button" aria-label="Close" className="hmb-closeBtn" onClick={close}>
                &times;
              </button>
            </div>
          </div>
          <div className="hmb-modalContent hmb-whiteText">{children}</div>
        </BluePanel>
      </Modal>
    </>
  )
}

export default ModalComponent
