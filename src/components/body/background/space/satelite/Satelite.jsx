import { useEffect, useLayoutEffect, useRef } from "react";
import SateliteFactory from "./sateliteFactory";

const Satelite = ({ height, widthOfScene }) => {
  const sateliteCanvas = useRef(null);

  let satelite = null;

  useEffect(() => {
    drawSatelite()
  }, [])

  useLayoutEffect(() => {
    generateSatellite();
  }, [])

  const generateSatellite = () => {
    satelite = SateliteFactory.generateSatellite(height)
  }

  const drawSatelite = () => {
    const sateliteTest = sateliteCanvas.current;
    if (sateliteTest) {
      const sateliteCtx = sateliteCanvas.current.getContext('2d')
      sateliteCtx.globalCompositeOperation = 'destination-over'
      sateliteCtx.clearRect(0, 0, widthOfScene, height)

      sateliteCtx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      sateliteCtx.fillRect(0, 0, widthOfScene, height)
      sateliteCtx.filter = 'none'

      satelite.x += satelite.speedX
      satelite.draw(sateliteCtx)
      if (satelite.x > widthOfScene) {
        generateSatellite()
      }
    }
    requestAnimationFrame(drawSatelite)
  }

  return (
    <canvas id="hmb-satellite" ref={ sateliteCanvas } width={ `${widthOfScene}` } height={ height } />
  )
}

export default Satelite;