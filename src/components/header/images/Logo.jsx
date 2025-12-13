import { useEffect, useState } from 'react'
import './../header.scss'
import FEdeveloper from './New Name Logo/Front-End-Developer.svg'
import HBIcon from './New Name Logo/HBIcon.svg'
import HeathBishop from './New Name Logo/HeathBishop.svg'

export const Logo = (scrollDist) => {
  const [min, setMin] = useState(false)

  useEffect(() => {
    if (scrollDist.scrollDist >= 25) {
      setMin(true)
    } else {
      setMin(false)
    }
  }, [scrollDist])

  return (
    <div className="hmb-logoNameContainer" style={ { height: min ? '50px' : '' } }>
      <img id="hmb-logo" src={ HBIcon } style={ { width: min ? '40px' : '20%' } } alt="HBIcon" />
      <div id="hmb-text">
        <img id="hmb-name" src={ HeathBishop } alt="HeathBishop" />
        <img id="hmb-position" src={ FEdeveloper } style={ { display: scrollDist.scrollDist >= 25 ? 'none' : 'inline' } } alt="FEdeveloper" />
      </div>
    </div>
  )
}
