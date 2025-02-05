import React, { ReactNode } from 'react'
import './BluePanel.scss'

interface WrapperProps {
  children: ReactNode
  size?: string
  width?: string
  id?: string
  className?: string
}

const BluePanel: React.FC<WrapperProps> = ({ children, width, id, className }) => {
  return (
    <div id={id} style={width ? { width: width } : {}} className={`bluePanel bluePanelScroll ${className}`}>
      {children}
    </div>
  )
}

export default BluePanel
