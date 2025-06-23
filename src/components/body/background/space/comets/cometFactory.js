const GenerateNewComet = (canvasWidth, canvasHeight) => {
  let comet = {}

  if (coinFlip() === 'top') {
    comet.start = 'top'
    comet.y = 0
    comet.x = getRandomIntInclusive(canvasWidth * 0.08, canvasWidth)
  } else {
    comet.start = 'right'
    comet.y = getRandomIntInclusive(0, canvasHeight)
    comet.x = canvasWidth
  }

  addVelocity(comet)
  comet.radius = getRandomIntInclusive(1, 5)
  let fillStyle = getRandomFillStyle()

  comet.draw = (ctx) => {
    ctx.beginPath()
    ctx.arc(comet.x, comet.y, comet.radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = fillStyle
    ctx.fill()
  }

  return comet
}

function getRandomFillStyle() {
  const colorList = [
    'rgb(255, 192, 99)', // white Orange
    'rgb(237, 216, 149)', // white yellow
    'rgb(255, 255, 255)', // white
    'rgb(195, 148, 91)', // brownish
  ]

  return colorList[getRandomIntInclusive(0, colorList.length - 1)]
}

function addVelocity(comet) {
  comet.vx = getRandomIntInclusive(1, 15)
  comet.vy = comet.vx + 1
}

function coinFlip() {
  return Math.floor(Math.random() * 2) === 0 ? 'top' : 'right'
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

export default GenerateNewComet
