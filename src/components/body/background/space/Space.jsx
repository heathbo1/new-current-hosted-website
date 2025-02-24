import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Comet from './comets/Comet'
// import SateliteFactory from './sateliteFactory'
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

    // setInterval(drawSatelite, 75)
  }, [])

  let satelite = null

  const generateStars = () => {
    const hmTimes = Math.round((width + height) * 1.5)
    const newStars = []
    for (let i = 0; i < hmTimes; i++) {
      const newStar = GenerateNewStar(width, height)
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
    // satelite = SateliteFactory.generateSatellite()
  }

  const drawSatelite = () => {
    // const sateliteCtx = sateliteCanvas.current.getContext('2d')
    // sateliteCtx.globalCompositeOperation = 'destination-over'
    // sateliteCtx.clearRect(0, 0, width, height)
    // sateliteCtx.fillStyle = 'rgba(0, 0, 0, 0.15)'
    // sateliteCtx.fillRect(0, 0, width, height)
    // sateliteCtx.filter = 'none'
    // satelite.x += satelite.vx
    // satelite.draw(sateliteCtx)
    // if (satelite.x > width + width * 0.25) {
    //   generateSatellite()
    // }
  }

  return (
    <div id="space">
      <Comet cometNumber={1} width={width} height={height} />
      <Comet cometNumber={2} width={width} height={height} />
      <Comet cometNumber={3} width={width} height={height} />
      <Comet cometNumber={4} width={width} height={height} />
      <Comet cometNumber={5} width={width} height={height} />
      <Comet cometNumber={6} width={width} height={height} />
      <Comet cometNumber={7} width={width} height={height} />
      <canvas id="satellite" ref={sateliteCanvas} width={width} height={height} style={{ width: '100vw', minWidth: '1102px', position: 'absolute', maxWidth: '1782px' }} />
      <canvas id="starsCanvas" ref={starsCanvas} width={width} height={height} style={{ width: '100vw', minWidth: '1102px', position: 'absolute', maxWidth: '1782px' }} />
    </div>
  )
}

export default Space
