interface iSatellite {
  y: number,
  x: number,
  speedX: number,
  radius: number,
  draw: (ctx: CanvasRenderingContext2D) => void
}

class SateliteFactory {
  static generateSatellite(height: number) {
    const satellite: iSatellite = { y: 0, x: 0, speedX: 0, radius: 0, draw: () => { } }

    satellite.y = height * 0.30 + 3
    satellite.x = 0
    satellite.speedX = 0.25
    satellite.radius = 2
    let flashStatus = 0
    const flashWait = 200
    const showFlash = 20

    const getFlashState = () => {
      flashStatus = flashStatus + 1

      // turns it on 10 steps after it's great than flashWait
      if (flashStatus > flashWait && flashStatus < flashWait + showFlash) {
        return 'rgba(255, 23, 23, 1)'
      } else {
        if (flashStatus > flashWait + showFlash) {
          flashStatus = 0
        }
        return 'rgba(255,255,255, 1)'
      }
    }

    satellite.draw = (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath()
      ctx.arc(satellite.x, satellite.y, satellite.radius, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fillStyle = getFlashState()
      ctx.fill()
      ctx.filter = "blur(0.5px)"
    }

    return satellite
  }
}

export default SateliteFactory
