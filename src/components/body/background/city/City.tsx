import {Ref} from 'react'
import Forground from './images/forgroundNEW3.png'

interface iCity {
  city: Ref<HTMLDivElement>
}

const City = ({city}: iCity) => {
  return (
    <div ref={city} id="hmb-cityContainer">
      <div id="hmb-citWrapper">
        <img id="hmb-cityIMG" src={Forground} alt="Forground" />
        <div id="hmb-towerFlash" />
      </div>
    </div>
  )
}

export default City
