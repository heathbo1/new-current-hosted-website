import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import GenerateNewComet from './cometFactory'

const Comet = ({ height, width, cometNumber }) => {
  const [cometNumb, setCometNumb] = useState(null)

  const cometCanvas = useRef(null)

  useEffect(() => {
    const delay = Math.random() * 4000

    setTimeout(() => {
      setInterval(drawComets, 15)
    }, delay)
  }, [])

  useLayoutEffect(() => {
    generateComet()
    setCometNumb(`cometCanvas${cometNumber.toString()}`)
  }, [])

  let comet = null

  const generateComet = () => {
    const newComet = GenerateNewComet(width, height)
    comet = newComet
  }

  const drawComets = () => {
    if (cometCanvas.current) {
      const cometsCtx = cometCanvas.current.getContext('2d')
      cometsCtx.clearRect(comet.x - 5, comet.y - 10, 50, 10)
      cometsCtx.filter = 'blur(.5px)'
      comet.x -= comet.vx
      comet.y += comet.vy
      comet.draw(cometsCtx)
      if (comet.y > height || comet.x > width) {
        let cometDelay = setTimeout(
          () => {
            cometsCtx.clearRect(0, 0, width, height)
            generateComet()
            clearTimeout(cometDelay)
          },
          500 // delay after below city
        )
      }
    }
  }

  return <canvas id={cometNumb} ref={cometCanvas} width={width} height={height} style={{ width: '100vw', minWidth: '1102px', position: 'absolute' }} />
}

export default Comet
