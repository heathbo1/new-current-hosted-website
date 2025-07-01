import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Comet from './comets/Comet'
import SateliteFactory from './sateliteFactory'
import './space.scss'
import GenerateNewStar from './starFactory'

// =============================================================================
// NEED TO GENERATE THE BACKGROUND BASED ON THE SIZE OF THE SCREEN
// Height of stars and comets are based on the size of the screen

const Space = ({ city }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight) // 170 = header and city height
  const [stars, setStars] = useState([])

  const sateliteCanvas = useRef(null)
  const starsCanvas = useRef(null)

  useEffect(() => {
    drawStars()
  }, [stars])

  useLayoutEffect(() => {
    generateStars()
    generateSatellite()
    setInterval(drawSatelite, 75)
  }, [])

  let satelite = null

  const generateStars = () => {
    const hmTimes = Math.round((1782 + height) * 1.5)
    const newStars = []
    for (let i = 0; i < hmTimes; i++) {
      const newStar = GenerateNewStar(1782, height)
      newStars.push(newStar)
    }
    setStars(newStars)
  }

  const drawStars = () => {
    const newStarsCtx = starsCanvas.current.getContext('2d')
    stars.forEach((star) => {
      if (star.randomSize > 1) {
        newStarsCtx.shadowBlur = Math.floor(Math.random())
        newStarsCtx.shadowColor = 'white'
      }
      newStarsCtx.fillStyle = 'hsla(' + star.randomHue + ', 50%, ' + star.randomLightness + '%, ' + star.randomAlpha + ')'
      newStarsCtx.fillRect(star.randomX, star.randomY, star.randomSize, star.randomSize)
    })
  }

  const generateSatellite = () => {
    satelite = SateliteFactory.generateSatellite()
  }

  const drawSatelite = () => {
    const sateliteCtx = sateliteCanvas.current.getContext('2d')

    sateliteCtx.globalCompositeOperation = 'destination-over'
    sateliteCtx.clearRect(0, 0, 1782, height)

    sateliteCtx.fillStyle = 'rgba(0, 0, 0, 0.15)'
    sateliteCtx.fillRect(0, 0, 1782, height)
    sateliteCtx.filter = 'none'

    satelite.x += satelite.vx
    satelite.draw(sateliteCtx)
    if (satelite.x > 1782 + 1782 * 0.25) {
      generateSatellite()
    }
  }

  return (
    <div id="hmb-spaceContainer">
      <div id="space-align">
        <Comet cometNumber={1} width={1782} height={height} />
        <Comet cometNumber={2} width={1782} height={height} />
        <Comet cometNumber={3} width={1782} height={height} />
        <Comet cometNumber={4} width={1782} height={height} />
        <Comet cometNumber={5} width={1782} height={height} />
        <Comet cometNumber={6} width={1782} height={height} />
        <Comet cometNumber={7} width={1782} height={height} />
        <canvas id="hmb-satellite" ref={sateliteCanvas} width="1782px" height={height} />
        <canvas id="hmb-starsCanvas" ref={starsCanvas} width="1782px" height={height} />
      </div>
    </div>
  )
}

export default Space
