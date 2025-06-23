import { ReactNode } from 'react'
import BluePanel from '../compnents/BluePanel'
import './Portfolio'

interface iModal {
  open: boolean
  openClose: () => void
  children: ReactNode
  title: any
}

const Modal = ({ open, openClose, children, title }: iModal) => {
  //fsd
  const close = () => {
    console.log('open close')
    openClose()
  }

  return (
    <>
      <div className="modalBackdrop" style={{ display: `${open ? 'block' : 'none'}` }} onClick={close} />
      <div role="dialog" className="fade customModal show" tabIndex={-1} style={{ display: `${open ? 'flex' : 'none'}` }}>
        <div className="clickBackdrop" onClick={close} />
        <div className="modalDialog">
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
            {children}
          </BluePanel>
        </div>
      </div>
    </>
  )
}

export default Modal
