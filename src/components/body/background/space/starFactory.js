const GenerateNewStar = (canvasWidth, canvasHeight) => {
  let star = {}
  star.randomX = Math.floor(Math.random() * canvasWidth + 1)
  star.randomY = Math.floor(Math.random() * canvasHeight + 1)
  star.randomSize = Math.floor(Math.random() * 2.25 + 0.55)
  star.randomHue = Math.floor(Math.random() * 360 + 1)
  star.randomLightness = getRandomIntInclusive(10, 90)
  star.randomAlpha = '.' + getRandomIntInclusive(1, 85)
  return star
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

export default GenerateNewStar
