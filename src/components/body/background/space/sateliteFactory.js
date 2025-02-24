class SateliteFactory {
  static generateSatellite() {
    let satellite = {}

    satellite.y = window.innerHeight / 3
    satellite.x = 0
    satellite.vx = 0.9
    satellite.radius = 1.75
    let flashStatus = 0

    const getFlashState = () => {
      flashStatus++
      let flashWait = 25
      if (flashStatus > flashWait && flashStatus < flashWait + 3) {
        return 'rgba(255,0,0, 1)'
      } else {
        if (flashStatus > flashWait + 3) {
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
    }

    return satellite
  }
}

export default SateliteFactory
