import { useEffect, useState } from 'react'
import './../header.scss'
import FEdeveloper from './New Name Logo/Front-End-Developer.svg'
import HBIcon from './New Name Logo/HBIcon.svg'
import HeathBishop from './New Name Logo/HeathBishop.svg'

export const Logo = (scrollDist) => {
  const [min, setMin] = useState(false)
  console.log('scrollDist = ', scrollDist.scrollDist)

  //   const scroll = scrollDist.scrollDist >= 10 ? false : true
  //   console.log('test = ', scroll)

  useEffect(() => {
    if (scrollDist.scrollDist >= 10) {
      console.log('testing123 = ', true)
      setMin(true)
    } else {
      setMin(false)
    }
  }, [scrollDist])

  return (
    <div className="logoNameContainer" style={{ height: min ? '50px' : '' }}>
      <img id="logo" src={HBIcon} style={{ width: min ? '40px' : '65px' }} alt="HBIcon" />
      <div id="text">
        <img src={HeathBishop} alt="HeathBishop" />
        <img src={FEdeveloper} style={{ display: scrollDist.scrollDist >= 7 ? 'none' : 'inline' }} alt="FEdeveloper" />
      </div>
    </div>
  )
}
