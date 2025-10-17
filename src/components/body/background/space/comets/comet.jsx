import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../space.scss'
import { GenerateNewComet, getRandomIntInclusive } from './cometFactory'

const Comet = ({ height, widthOfScene, cometNumber }) => {
  const [cometNumb, setCometNumb] = useState(null)

  const cometCanvas = useRef(null)

  let comet = null

  useEffect(() => {
    animateComet()
  }, [])

  useLayoutEffect(() => {
    comet = GenerateNewComet(widthOfScene, height)
    setCometNumb(`cometCanvas${cometNumber.toString()}`)
  }, [])

  function animateComet() {
    if (cometCanvas.current) {
      const canvas = cometCanvas.current
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = comet.color

      const color = comet.color;

      // Clear the canvas for the next frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update comet position
      comet.x -= comet.speedX;
      comet.y += comet.speedY;

      // Add current position to tail end of array
      comet.tail.push({ x: comet.x, y: comet.y });
      if (comet.tail.length > comet.tailLength) {
        comet.tail.shift(); // Remove oldest position if tail is too long
      }

      // Draw the comet's tail
      for (let i = 0;i < comet.tail.length;i++) {
        const tailSegment = comet.tail[i];
        const opacity = i / comet.tail.length; // Fade out older segments

        // earlier in the array are older
        ctx.fillStyle = `${color.slice(0, -1)}, ${opacity}}`;
        ctx.beginPath();
        ctx.arc(tailSegment.x, tailSegment.y, comet.radius * (i / comet.tail.length), 0, Math.PI * 2); // Smaller segments at the end
        ctx.fill();
        ctx.filter = "blur(0.5px)"
      }

      // Draw the comet's head
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(comet.x, comet.y, comet.radius, 0, Math.PI * 2);
      ctx.fill();

      // Handle comet going off-screen
      if (comet.y > height || comet.x > widthOfScene) {
        comet.x = getRandomIntInclusive(widthOfScene * 0.08, widthOfScene);
        comet.y = 0;
        comet.tail = []; // Clear tail
      }
    }
    requestAnimationFrame(animateComet);
  }

  return <canvas className="hmb-comets" id={ cometNumb } ref={ cometCanvas } width={ widthOfScene } height={ height } />
}

export default Comet
