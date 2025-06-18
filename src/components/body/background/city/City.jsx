import Forground from './images/forgroundNEW3.png'

const City = ({ city }) => {
  return (
    <div ref={city} id="cityContainer">
      <div id="citWrapper">
        <img id="cityIMG" src={Forground} alt="Forground" />
        <div id="towerFlash" />
      </div>
    </div>
  )
}

export default City
