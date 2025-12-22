import {useEffect, useState} from 'react'

import './Components.scss'
import Arrow from './images/downArrow.svg'

interface iCollapsiblePanel {
  children: React.ReactNode
  width?: number
  className?: string
  header: React.ReactNode
  id?: string
  update?(open: boolean, id: string): void
  isOpen?: {id?: string; open: boolean}
}

const CollapsiblePanel = ({children, width, className = '', header, id, update, isOpen}: iCollapsiblePanel) => {
  const [open, setOpen] = useState(false)

  const openClose = () => {
    setOpen(!open)
    if (update && id) {
      update(!open, id)
    }
  }

  useEffect(() => {
    if (isOpen) {
      if (isOpen.id !== id && open === true) {
        setOpen(false)
      }
    }
  }, [isOpen])

  return (
    <div style={width ? {width: width} : {}} className={`hmb-collapsiblePanel ${className} ${open ? 'hmb-collapsiblePanel-selected' : ''}`}>
      <button
        type="button"
        onClick={() => {
          openClose()
        }}
        className={`hmb-Buttons hmb-button`}
      >
        <div className="hmb-headerGrid">
          <span className="hmb-info">{header}</span>
          <span className="hmb-close">
            <img src={Arrow} alt="downArrow" className="hmb-downArrow" style={{rotate: open ? '180deg' : '0deg'}} />
          </span>
        </div>
      </button>
      <div className={`${open ? 'hmb-collapsibleContainer' : 'hmb-collapsibleContainer--close'}`}>
        <div className="hmb-collapsibleBody">{children}</div>
      </div>
    </div>
  )
}

export default CollapsiblePanel
