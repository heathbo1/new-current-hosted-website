import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Comet from './comets/Comet'
import SateliteFactory from './sateliteFactory'
import './space.scss'
import GenerateNewStar from './starFactory'

const Space = ({ city }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight - 98) // 170 = header and city height
  const [stars, setStars] = useState([])

  const sateliteCanvas = useRef(null)
  const starsCanvas = useRef(null)

  useEffect(() => {
    const cityTimeOut = setTimeout(() => {
      const spaceUnder = window.innerHeight - (98 + city.current.offsetHeight)
      setHeight(window.innerHeight - (98 + spaceUnder))

      drawStars()
      clearTimeout(cityTimeOut)
    }, 0)
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
    <div id="space">
      <Comet cometNumber={1} width={1782} height={height} />
      <Comet cometNumber={2} width={1782} height={height} />
      <Comet cometNumber={3} width={1782} height={height} />
      <Comet cometNumber={4} width={1782} height={height} />
      <Comet cometNumber={5} width={1782} height={height} />
      <Comet cometNumber={6} width={1782} height={height} />
      <Comet cometNumber={7} width={1782} height={height} />
      <canvas id="satellite" ref={sateliteCanvas} width="1782px" height={height} />
      <canvas id="starsCanvas" ref={starsCanvas} width="1782px" height={height} />
    </div>
  )
}

export default Space
