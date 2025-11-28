import {useState} from 'react'

import './Components.scss'
import Arrow from './images/downArrow.svg'

interface iCollapsiblePanel {
  children: React.ReactNode
  width?: number
  className?: string
  header: React.ReactNode
}

const CollapsiblePanel = ({children, width, className = '', header}: iCollapsiblePanel) => {
  const [open, setOpen] = useState(false)

  const openClose = () => {
    setOpen(!open)
  }

  return (
    <div style={width ? {width: width} : {}} className={`hmb-collapsiblePanel ${className}`}>
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
