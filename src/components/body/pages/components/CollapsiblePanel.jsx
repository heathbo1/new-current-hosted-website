import { useEffect, useState } from 'react'

import './Components.scss'
import Arrow from './images/downArrow.svg'

// register = register is used to set runOpen as a function Resume will call
// opened is a callback function to set the id of the opened panel

const CollapsiblePanel = ({ children, width, className = '', header, id, opened, register }) => {
  const [open, setOpen] = useState(false)

  const runOpen = (passedId, switchOpen) => { // called by resume
    if (switchOpen) {
      if (passedId === id) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }
  }

  const openClose = (passedId) => { // runs when button clicked
    setOpen(!open)
    if (opened && id) {
      if (open === true) {  // if already open
        opened('')
      } else {
        opened(id)
      }
    }
  }

  useEffect(() => {
    if (register) {
      register(runOpen)
    }
  }, [])

  return (
    <div id={ id } style={ width ? { width: width } : {} } className={ ` hmb-collapsiblePanel ${className}` }>
      <button
        type="button"
        onClick={ () => {
          openClose(id)
        } }
        className="hmb-button"
      >
        <div className="hmb-headerGrid">
          <span className="hmb-info">
            <span>{ header }</span>
          </span>
          <span className="hmb-close">
            <img src={ Arrow } alt="downArrow" className="hmb-downArrow" style={ { rotate: open ? '180deg' : '0deg' } } />
          </span>
        </div>
      </button>
      <div className={ `${open ? 'hmb-collapsibleContainer' : 'hmb-collapsibleContainer--close'}` }>
        <div className="hmb-collapsibleBody">{ children }</div>
      </div>
    </div>
  )
}

export default CollapsiblePanel
