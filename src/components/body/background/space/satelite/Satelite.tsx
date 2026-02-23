import {useEffect, useLayoutEffect, useRef} from 'react'
import SateliteFactory from './sateliteFactory'

interface iSatelite {
  height: number
  widthOfScene: number
}

interface iSatelliteObject {
  y: number
  x: number
  speedX: number
  radius: number
  draw: (ctx: CanvasRenderingContext2D) => void
}

const Satelite = ({height, widthOfScene}: iSatelite) => {
  const sateliteCanvas = useRef<HTMLCanvasElement>(null)

  let satelite: iSatelliteObject = {y: 0, x: 0, speedX: 0, radius: 0, draw: () => {}}

  useEffect(() => {
    drawSatelite()
  }, [])

  useLayoutEffect(() => {
    generateSatellite()
  }, [])

  const generateSatellite = () => {
    satelite = SateliteFactory.generateSatellite(height)
  }

  const drawSatelite = () => {
    if (sateliteCanvas.current) {
      const sateliteCanv = sateliteCanvas.current
      const sateliteCtx = sateliteCanv.getContext('2d')
      if (sateliteCtx) {
        sateliteCtx.globalCompositeOperation = 'destination-over'
        sateliteCtx.clearRect(0, 0, widthOfScene, height)

        sateliteCtx.filter = 'none'

        satelite.x += satelite.speedX
        satelite.draw(sateliteCtx)
        if (satelite.x > widthOfScene) {
          generateSatellite()
        }
      }
    }
    requestAnimationFrame(drawSatelite)
  }

  return <canvas id="hmb-satellite" ref={sateliteCanvas} width={`${widthOfScene}`} height={height} />
}

export default Satelite
