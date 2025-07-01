import { ReactNode } from 'react'
import './Components.scss'

interface WrapperProps {
  children: ReactNode
  size?: string
  width?: string
  Bkey?: string
  className?: string
}

const BluePanel = ({ children, width, Bkey = '', className = '' }: WrapperProps) => {
  return (
    <div key={Bkey} style={width ? { width: width } : {}} className={`hmb-bluePanel ${className}`}>
      {children}
    </div>
  )
}

export default BluePanel
