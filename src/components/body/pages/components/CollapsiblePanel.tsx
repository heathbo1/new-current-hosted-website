import { ReactNode, useState } from 'react'

import './Components.scss'
import Arrow from './images/downArrow.svg'

// import HBIcon from './New Name Logo/HBIcon.svg'

interface WrapperProps {
  children: ReactNode
  size?: string
  width?: string
  key?: string
  className?: string
  header: ReactNode
}

const CollapsiblePanel: React.FC<WrapperProps> = ({ children, width, key, className = '', header }) => {
  const [open, setOpen] = useState(false)

  // <img id="logo" src={HBIcon} style={{ width: min ? '40px' : '65px' }} alt="HBIcon" />

  console.log('open = ', open)

  return (
    <div key={key} style={width ? { width: width } : {}} className={`bluePanel collapsiblePanel ${className}`}>
      <button
        type="button"
        onClick={() => {
          setOpen(!open)
        }}
        style={{ width: '100%' }}
      >
        <div className="headerGrid">
          <span className="info">
            <span>{header}</span>
          </span>
          <span className="close">
            <img src={Arrow} alt="downArrow" className="downArrow" style={{ rotate: open ? '180deg' : '0deg' }} />
          </span>
        </div>
      </button>
      <div className={`${open ? 'collapsibleContainer' : 'collapsibleContainer--close'}`}>
        <div className="collapsibleBody">{children}</div>
      </div>
    </div>
  )
}

export default CollapsiblePanel
