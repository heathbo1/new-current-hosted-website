import { ReactNode, useState } from 'react'

import './Components.scss'
import Arrow from './images/downArrow.svg'

interface WrapperProps {
  children: ReactNode
  size?: string
  width?: string
  className?: string
  header: ReactNode
}

const CollapsiblePanel: React.FC<WrapperProps> = ({ children, width, className = '', header }) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={width ? { width: width } : {}} className={` hmb-collapsiblePanel ${className}`}>
      <button
        type="button"
        onClick={() => {
          setOpen(!open)
        }}
        className='hmb-button'
        style={{ background: `${open ? 'rgb(27 27 27 / 25%)' : 'none'}` }}
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
