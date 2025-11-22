import {ReactNode} from 'react'
import './Components.scss'

interface WrapperProps {
  children: ReactNode
  size?: string
  width?: string
  Bkey?: string
  className?: string
  id?: string
}

const BluePanel = ({children, width, Bkey = '', className = '', id}: WrapperProps) => {
  return (
    <div key={Bkey} id={id} style={width ? {width: width} : {}} className={`hmb-bluePanel ${className}`}>
      {children}
    </div>
  )
}

export default BluePanel
