import Forground from './images/forgroundNEW3.png'

const City = ({ city }) => {
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
