import Comet from './comets/Comet'
import Satelite from './satelite/Satelite'
import './space.scss'
import Stars from './stars/Stars'

const Space = ({ city }) => {
  const height = window.innerHeight;

  const widthOfScene = 1782

  return (
    <div id="hmb-spaceContainer">
      <div id="space-align">
        <Comet cometNumber={ 1 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 2 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 3 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 4 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 5 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 6 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 7 } widthOfScene={ widthOfScene } height={ height } />
        <Satelite height={ height } widthOfScene={ widthOfScene } />
        <Stars height={ height } widthOfScene={ widthOfScene } />
      </div>
    </div>
  )
}

export default Space
