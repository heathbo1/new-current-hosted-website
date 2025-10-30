
export const GenerateNewComet = (canvasWidth, canvasHeight) => {
  let comet = {}

  // Top or Right side of screen
  if (topOrRight() === 'top') {
    comet.start = 'top'
    comet.y = 0
    comet.x = getRandomIntInclusive(canvasWidth * 0.08, canvasWidth)
  } else {
    comet.start = 'right'
    comet.y = getRandomIntInclusive(0, canvasHeight)
    comet.x = canvasWidth
  }

  comet.speedX = getRandomDecimalInclusive(1, 3)
  comet.speedY = comet.speedX
  comet.radius = getRandomDecimalInclusive(0.75, 2)
  comet.color = getRandomFillStyle()
  comet.tailLength = getRandomIntInclusive(10, 10 * comet.speedX)
  comet.tail = []
  return comet
}

function topOrRight() {
  return Math.floor(Math.random() * 2) === 0 ? 'top' : 'right'
}

function getRandomFillStyle() {
  const colorList = [
    'rgba(162, 165, 206, 1)', // calcium
    'rgba(245, 228, 187, 1)', // iron
    'rgba(185, 235, 243, 1)', // magnesium
    'rgba(204, 145, 123, 1)', // sodium
  ]

  return colorList[getRandomIntInclusive(0, colorList.length - 1)]
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function getRandomDecimalInclusive(min, max) {
  // Ensure min and max are numbers
  min = Number(min);
  max = Number(max);

  // Handle cases where min might be greater than max
  if (min > max) {
    [min, max] = [max, min]; // Swap values
  }

  // Calculate the range
  const range = max - min;

  // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
  const randomFactor = Math.random();

  // Scale the random factor to the desired range and add the minimum offset
  return (randomFactor * range) + min;
}


export default GenerateNewComet