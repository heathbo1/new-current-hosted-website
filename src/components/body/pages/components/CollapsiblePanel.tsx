import { ReactNode, useState } from 'react'

import './Components.scss'
import Arrow from './images/downArrow.svg'

// import HBIcon from './New Name Logo/HBIcon.svg'

interface WrapperProps {
  children: ReactNode
  size?: string
  width?: string
  Ckey?: string
  className?: string
  header: ReactNode
}

const CollapsiblePanel: React.FC<WrapperProps> = ({ children, width, Ckey, className = '', header }) => {
  const [open, setOpen] = useState(false)

  return (
    <div key={Ckey} style={width ? { width: width } : {}} className={`hmb-bluePanel hmb-collapsiblePanel ${className}`}>
      <button
        type="button"
        onClick={() => {
          setOpen(!open)
        }}
        style={{ width: '100%' }}
      >
        <div className="hmb-headerGrid">
          <span className="hmb-info">
            <span>{header}</span>
          </span>
          <span className="hmb-close">
            <img src={Arrow} alt="downArrow" className="hmb-downArrow" style={{ rotate: open ? '180deg' : '0deg' }} />
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
