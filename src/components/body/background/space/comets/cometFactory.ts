
// interface iTailColor {
//   color: string,
//   red: number,
//   green: number,
//   blue: number
// }

export interface iComet {
  start: string,
  y: number,
  x: number,
  speedX: number,
  speedY: number,
  radius: number,
  color: string,
  tailLength: number,
  tailColor: '',
  tail: Array<any>
}

export const GenerateNewComet = (canvasWidth: number, canvasHeight: number) => {
  const comet: iComet = { start: '', y: 0, x: 0, speedX: 0, speedY: 0, radius: 0, color: '', tailLength: 0, tailColor: '', tail: [] }

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

  comet.speedX = getRandomDecimalInclusive(1, 2)
  comet.speedY = comet.speedX
  comet.radius = getRandomDecimalInclusive(1, 2)
  const tailC = getRandomFillStyle()

  //@ts-ignore
  comet.tailColor = `rgba(${tailC.red}, ${tailC.green}, ${tailC.blue}, 1)`
  comet.color = `rgba(${tailC.red + 50}, ${tailC.green + 50}, ${tailC.blue + 50}, 1)`//'rgba(255, 255, 255, 0.75)'//getRandomFillStyle()
  comet.tailLength = getRandomIntInclusive(5, 10 * comet.speedX)
  comet.tail = []
  return comet
}

function topOrRight() {
  return Math.floor(Math.random() * 2) === 0 ? 'top' : 'right'
}

export function getRandomFillStyle() {
  const colorList = [
    { color: 'rgba(155, 109, 204, 1)', red: 155, green: 109, blue: 204 }, // calcium
    { color: 'rgba(216, 181, 112, 1)', red: 216, green: 181, blue: 112 }, // iron
    { color: 'rgba(94, 181, 207, 1)', red: 94, green: 181, blue: 207 }, // magnesium
    // 'rgb(236, 247, 247)'
  ]

  return colorList[getRandomIntInclusive(0, colorList.length - 1)]
}

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

export function getRandomDecimalInclusive(min: number, max: number) {
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