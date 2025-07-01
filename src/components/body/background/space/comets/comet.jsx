import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../space.scss'
import GenerateNewComet from './cometFactory'

const Comet = ({ height, width, cometNumber }) => {
  const [cometNumb, setCometNumb] = useState(null)

  const cometCanvas = useRef(null)

  let comet = null

  useEffect(() => {
    setInterval(drawComets, 25)
    // const delay = Math.random() * 1000

    // setTimeout(() => {
    //   setInterval(drawComets, 50)
    // }, delay)
  }, [])

  useLayoutEffect(() => {
    generateComet()
    setCometNumb(`cometCanvas${cometNumber.toString()}`)
  }, [])

  const generateComet = () => {
    comet = GenerateNewComet(width, height)
  }

  const drawComets = () => {
    if (cometCanvas.current) {
      const current = cometCanvas.current
      const cometsCtx = current.getContext('2d')

      //   cometsCtx.filter = 'blur(2px)'
      comet.x -= comet.vx
      comet.y += comet.vy

      cometsCtx.clearRect(1, 10, current.width, current.height)
      comet.draw(cometsCtx)

      if (comet.y > height || comet.x > width) {
        // If below city
        let cometDelay = setTimeout(
          () => {
            cometsCtx.clearRect(0, 0, width, height)
            generateComet()
            clearTimeout(cometDelay)
          },
          100 // delay after below city
        )
      }
    }
  }

  return <canvas className="hmb-comets" id={cometNumb} ref={cometCanvas} width={width} height={height} />
}

export default Comet
