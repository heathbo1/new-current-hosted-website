import {ReactNode} from 'react'
import Modal from 'react-bootstrap/Modal'
import '../Pages.scss'
import BluePanel from './BluePanel'
import './Components.scss'
import X from './images/close_btn.svg'

interface iModal {
  open: boolean
  openClose: () => void
  children: ReactNode
  title: any
  title2?: string | null
  title2Small?: string | null
  size?: 'lg' | 'sm' | 'xl'
}

function ModalComponent({open, openClose, children, title, title2 = null, title2Small = null, size = 'lg'}: iModal) {
  const close = () => {
    openClose()
  }

  return (
    <>
      <Modal show={open} onHide={close} size={size} className={`mw-100 ${window.innerWidth <= 525 ? 'hmb-fullScreen' : ''}`}>
        <BluePanel>
          <div className="hmb-modalHeader">
            <div className="hmb-titleContent">
              <div className="hmb-modalTitle">
                <span className="hmb-title1 hmb-titles">{title}</span>
                {title2Small && <span className="hmb-titleSmall">{`${title2Small}`}</span>}
                {title2 && <span className="hmb-title2 hmb-titles">{`${title2}`}</span>}
                <div className="hmb-modalButton">
                  <button type="button" aria-label="Close" className="hmb-closeBtn" onClick={close}>
                    <img src={X} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hmb-modalContent hmb-whiteText">{children}</div>
        </BluePanel>
      </Modal>
    </>
  )
}

export default ModalComponent
