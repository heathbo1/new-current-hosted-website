import Comets from './comets/Comets'
import Satelite from './satelite/Satelite'
import './space.scss'
import Stars from './stars/Stars'

const Space = () => {
  const height = window.innerHeight
  const widthOfScene: number = 1782

  return (
    <div id="hmb-spaceContainer">
      <div id="space-align">
        <Comets widthOfScene={widthOfScene} height={height} />
        <Comets widthOfScene={widthOfScene} height={height} />
        <Comets widthOfScene={widthOfScene} height={height} />
        <Comets widthOfScene={widthOfScene} height={height} />
        <Comets widthOfScene={widthOfScene} height={height} />
        <Satelite height={height} widthOfScene={widthOfScene} />
        <Stars height={height} widthOfScene={widthOfScene} />
      </div>
    </div>
  )
}

export default Space
