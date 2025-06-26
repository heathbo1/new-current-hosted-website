import { ReactNode } from 'react'
import Modal from 'react-bootstrap/Modal'
import BluePanel from './BluePanel'
import './Components.scss'

interface iModal {
  open: boolean
  openClose: () => void
  children: ReactNode
  title: any
  size: 'lg' | 'sm' | 'xl'
}

const ModalComponent = ({ open, openClose, children, title, size = 'lg' }: iModal) => {
  //fsd
  const close = () => {
    openClose()
  }

  return (
    <>
      <Modal show={open} onHide={close} size={size} className="mw-100">
        <BluePanel className="modalContent">
          <div className="modalHeader">
            <div className="titleContent">
              <div className="modalTitle h5">{title}</div>
            </div>
            <div className="titleContent" style={{ position: 'absolute', right: '0px', top: '1px' }}>
              <button type="button" aria-label="Close" className="closeBtn" onClick={close}>
                &times;
              </button>
            </div>
          </div>
          <Modal.Body>{children}</Modal.Body>
        </BluePanel>
      </Modal>
    </>
  )
}

export default ModalComponent
