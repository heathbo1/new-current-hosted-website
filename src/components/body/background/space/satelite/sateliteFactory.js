class SateliteFactory {
  static generateSatellite(height) {
    let satellite = {}

    satellite.y = height * 0.25
    satellite.x = 0
    satellite.speedX = 0.25
    satellite.radius = 2
    let flashStatus = 0

    const getFlashState = () => {
      flashStatus++
      let flashWait = 40
      if (flashStatus > flashWait && flashStatus < flashWait + 4) {
        return 'rgba(255, 221, 0, 1)'
      } else {
        if (flashStatus > flashWait) {
          flashStatus = 0
        }
        return 'rgba(255,255,255, 1)'
      }
    }

    satellite.draw = (ctx) => {
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
