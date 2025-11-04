interface iSatellite{
  y: number,
  x: number,
  speedX: number,
  radius: number,
  draw: (ctx:CanvasRenderingContext2D)=>void
}

class SateliteFactory {
  static generateSatellite(height:number) {
    const satellite: iSatellite = {y:0, x:0, speedX:0, radius:0, draw: ()=>{}}

    satellite.y = height * 0.30 + 3
    satellite.x = 0
    satellite.speedX = 0.25
    satellite.radius = 2
    let flashStatus = 0

    const getFlashState = () => {
      flashStatus++
      const flashWait:number = 100

      if (flashStatus > flashWait && flashStatus < flashWait + 10) {
        return 'rgb(254, 175, 59)'
      } else {
        if (flashStatus > flashWait + 10) {
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
