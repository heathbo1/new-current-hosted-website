import { useEffect, useLayoutEffect, useRef } from 'react'
import '../space.scss'
import { GenerateNewComet, getRandomFillStyle, getRandomIntInclusive, getRandomDecimalInclusive } from './cometFactory'


const Comets = ({ height, widthOfScene }) => {
  const cometCanvas = useRef(null)

  let comet = { start: '', x: 0, y: 0, speedX: 0, speedY: 0, radius: 0, color: '', tailLength: 0, tailColor: '', tail: [] }

  useEffect(() => {
    animateComet()
  }, [])

  useLayoutEffect(() => {
    comet = GenerateNewComet(widthOfScene, height)
  }, [])

  function animateComet() {
    if (cometCanvas.current) {
      const canvas = cometCanvas.current
      const ctx = canvas.getContext('2d')

      if (ctx) {
        const color = comet.color
        ctx.fillStyle = color

        // Clear comet
        ctx.clearRect(0, 0, widthOfScene, height)

        comet.x -= comet.speedX
        comet.y += comet.speedY

        let cometX = comet.x
        let cometY = comet.y
        if (comet.speedX > 3 || comet.speedY > 3) {
          cometX = comet.x - 1
          cometY = comet.y - 1
        }
        const currentPos = { x: cometX, y: cometY }
        comet.tail.push(currentPos)
        if (comet.tail.length > comet.tailLength) {
          comet.tail.shift() // Remove oldest position if tail is too long
        }

        // Draw the comet's tail
        for (let i = 0;i < comet.tail.length;i++) {
          const tailSegment = comet.tail[i]
          const opacity = i / comet.tail.length // Fade out older segments

          // earlier in the array are older
          ctx.fillStyle = `${comet.tailColor}, ${opacity}}`
          ctx.beginPath()
          ctx.arc(tailSegment.x, tailSegment.y, comet.radius * (i / comet.tail.length), 0, Math.PI * 2) // Smaller segments at the end
          ctx.fill()
        }

        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(comet.x, comet.y, comet.radius, 0, Math.PI * 2)
        ctx.fill()

        // Handle comet going off-screen
        if (comet.y > height - 325 || comet.x > widthOfScene) {
          const newCom = GenerateNewComet(widthOfScene, height)
          comet.x = newCom.x
          comet.y = newCom.y
          comet.tail = [] // Clear tail
          comet.speedX = newCom.speedX
          comet.speedY = newCom.speedX
          comet.color = newCom.color
          comet.tailColor = getRandomFillStyle()
          comet.radius = getRandomDecimalInclusive(1, 2)
        }
      }
    }
    requestAnimationFrame(animateComet)
  }

  return <canvas className="hmb-comets" ref={ cometCanvas } width={ widthOfScene } height={ height } />
}

export default Comets
