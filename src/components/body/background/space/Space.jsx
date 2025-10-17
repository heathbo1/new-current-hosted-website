import Comet from './comets/Comet'
import Satelite from './satelite/Satelite'
import './space.scss'
import Stars from './stars/Stars'

// =============================================================================
// NEED TO GENERATE THE BACKGROUND BASED ON THE SIZE OF THE SCREEN
// Height of stars and comets are based on the size of the screen

const Space = ({ city }) => {
  const height = window.innerHeight;
  // const [stars, setStars] = useState([])

  // const starsCanvas = useRef(null)

  // useEffect(() => {
  //   // drawStars()
  // }, [stars])

  // useLayoutEffect(() => {
  //   // generateStars()
  // }, [])

  // const generateStars = () => {
  //   const hmTimes = Math.round((1782 + height) * 1.5)
  //   const newStars = []
  //   for (let i = 0;i < hmTimes;i++) {
  //     const newStar = GenerateNewStar(1782, height)
  //     newStars.push(newStar)
  //   }
  //   setStars(newStars)
  // }

  // const drawStars = () => {
  //   const newStarsCtx = starsCanvas.current.getContext('2d')
  //   stars.forEach((star) => {
  //     if (star.randomSize > 1) {
  //       newStarsCtx.shadowBlur = Math.floor(Math.random())
  //       newStarsCtx.shadowColor = 'white'
  //     }

  //     newStarsCtx.fillStyle = 'hsla(' + 0 + ', 0%, ' + '75%, ' + star.randomAlpha + ')'
  //     newStarsCtx.fillRect(star.randomX, star.randomY, star.randomSize, star.randomSize)
  //   })
  // }

  const widthOfScene = 1782

  return (
    <div id="hmb-spaceContainer">
      <div id="space-align">
        <Comet cometNumber={ 1 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 2 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 3 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 4 } widthOfScene={ widthOfScene } height={ height } />
        <Comet cometNumber={ 5 } widthOfScene={ widthOfScene } height={ height } />
        <Satelite height={ height } widthOfScene={ widthOfScene } />
        <Stars height={ height } widthOfScene={ widthOfScene } />
        {/* <canvas id="hmb-starsCanvas" ref={ starsCanvas } width={ `${widthOfScene}` } height={ height } /> */ }
      </div>
    </div>
  )
}

export default Space
