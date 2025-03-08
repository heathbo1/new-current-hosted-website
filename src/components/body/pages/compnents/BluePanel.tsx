import React, { ReactNode } from 'react'
import './BluePanel.scss'

interface WrapperProps {
  children: ReactNode
  size?: string
  width?: string
  key?: string
  className?: string
}

const BluePanel: React.FC<WrapperProps> = ({ children, width, key, className }) => {
  return (
    <div key={key} style={width ? { width: width } : {}} className={`bluePanel bluePanelScroll ${className}`}>
      {children}
    </div>
  )
}

export default BluePanel
