import { useRef } from 'react'
import './background.scss'
import Forground from './images/forgroundNEW3.png'
import Space from './space/Space'

const Background = () => {
  const cityRef = useRef(null)
  return (
    <div id="background">
      <Space city={cityRef} />
      <div ref={cityRef} id="cityContainer">
        <img id="city" src={Forground} alt="Forground" />
      </div>
    </div>
  )
}

export default Background
