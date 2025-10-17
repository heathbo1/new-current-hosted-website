import { useEffect, useLayoutEffect, useRef, useState } from "react"
import GenerateNewStar, { getRandomIntInclusive } from "./starFactory"

const Stars = ({ widthOfScene, height }) => {
  const [stars, setStars] = useState([])

  const starsCanvas = useRef(null)

  let starCtx = null

  useEffect(() => {
    starCtx = starsCanvas.current.getContext('2d')
    drawStars()
  }, [stars])

  useLayoutEffect(() => {
    generateStars()
  }, [])

  const generateStars = () => {
    const hmTimes = Math.round((1782 + height) * 1.5)
    const newStars = []
    for (let i = 0;i < hmTimes;i++) {
      const newStar = GenerateNewStar(1782, height)
      newStars.push(newStar)
    }
    setStars(newStars)
  }

  const drawStars = () => {
    starCtx.clearRect(0, 0, starCtx.canvas.width, starCtx.canvas.height);
    stars.forEach((star) => {
      if (star.randomSize > 1) {
        starCtx.shadowBlur = Math.floor(Math.random())
        starCtx.shadowColor = 'white'
      }

      // const alpha = getRandomIntInclusive(1, 85)
      const fill = `rgba(255, 255, 255, .${getRandomIntInclusive(1, 85)})`

      starCtx.fillStyle = fill;
      starCtx.beginPath();
      starCtx.arc(star.randomX, star.randomY, star.randomSize, 0, Math.PI * 2);
      starCtx.fill();

    })
  }

  return (
    <canvas id="hmb-starsCanvas" ref={ starsCanvas } width={ `${widthOfScene}` } height={ height } />
  )

}

export default Stars