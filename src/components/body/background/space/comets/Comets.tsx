import {useEffect, useLayoutEffect, useRef} from 'react'
import '../space.scss'
import {GenerateNewComet, getRandomFillStyle, getRandomIntInclusive} from './cometFactory'

interface iComet {
  height: number
  widthOfScene: number
}

interface iCometObject {
  start: string
  x: number
  y: number
  speedX: number
  speedY: number
  radius: number
  color: string
  tailLength: number
  tail: Array<any>
}

const Comets = ({height, widthOfScene}: iComet) => {
  const cometCanvas = useRef<HTMLCanvasElement>(null)

  const comets: Array<iCometObject> = []

  useEffect(() => {
    animateComet()
  }, [])

  useLayoutEffect(() => {
    for (let i = 0; i < 4; i++) {
      comets.push(GenerateNewComet(widthOfScene, height))
    }
  }, [])

  function animateComet() {
    if (cometCanvas.current) {
      const canvas = cometCanvas.current
      const ctx = canvas.getContext('2d')

      if (ctx) {
        comets.forEach((comet) => {
          const color = comet.color
          ctx.fillStyle = color

          // Clear comet head
          ctx.clearRect(comet.x - 3, comet.y - 3, comet.radius * 4, comet.radius * 4)
          // Clear comet tail
          for (let i = 0; i < comet.tail.length - 1; i++) {
            const radius = comet.radius
            ctx.clearRect(comet.tail[i].x - radius, comet.tail[i].y - radius, radius * 3, radius * 3)
          }

          comet.x -= comet.speedX
          comet.y += comet.speedY

          const currentPos = {x: comet.x, y: comet.y}
          comet.tail.push(currentPos)
          if (comet.tail.length > comet.tailLength) {
            comet.tail.shift() // Remove oldest position if tail is too long
          }

          // Draw the comet's tail
          for (let i = 0; i < comet.tail.length; i++) {
            const tailSegment = comet.tail[i]
            const opacity = i / comet.tail.length // Fade out older segments

            // earlier in the array are older
            ctx.fillStyle = `${color.slice(0, -1)}, ${opacity}}`
            ctx.beginPath()
            ctx.arc(tailSegment.x, tailSegment.y, comet.radius * (i / comet.tail.length), 0, Math.PI * 2) // Smaller segments at the end
            ctx.fill()
          }

          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(comet.x, comet.y, comet.radius, 0, Math.PI * 2)
          ctx.fill()

          // Handle comet going off-screen
          if (comet.y > height || comet.x > widthOfScene) {
            comet.x = getRandomIntInclusive(widthOfScene * 0.08, widthOfScene)
            comet.y = 0
            comet.tail = [] // Clear tail
            comet.speedX = getRandomIntInclusive(1, 3)
            comet.speedY = comet.speedX
            comet.color = getRandomFillStyle()
          }
        })
      }
    }
    requestAnimationFrame(animateComet)
  }

  return <canvas id="hmb-comets" ref={cometCanvas} width={widthOfScene} height={height} />
}

export default Comets
