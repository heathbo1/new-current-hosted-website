import React, { ReactNode } from 'react'
import './BluePanel.scss'

interface WrapperProps {
  children: ReactNode
  size?: string
  width?: string
  id?: string
  collapsible?: boolean
  className?: string
}

const BluePanel: React.FC<WrapperProps> = ({ children, width, id, collapsible = false, className }) => {
  console.log(`collapsible = ${collapsible} ${id}`)
  console.log('test = ', width ? { width: width } : {})

  return (
    <div id={id} style={width ? { width: width } : {}} className={`bluePanel bluePanelScroll ${className}`}>
      {children}
    </div>
  )
}

export default BluePanel
