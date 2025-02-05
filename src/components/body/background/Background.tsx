import { useRef } from 'react'
import './background.scss'
import Forground from './images/forgroundNEW3.png'

const Background = () => {
  const cityRef = useRef(null)
  return (
    <div id="background">
      <div ref={cityRef} id="cityContainer">
        <img id="city" src={Forground} alt="Forground" />
      </div>
    </div>
  )
}

export default Background
