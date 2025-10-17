var one = 0
var two = 0
var three = 0
var four = 0
var five = 0

const GenerateNewStar = (canvasWidth, canvasHeight) => {
  let star = {}
  star.randomX = Math.floor(Math.random() * canvasWidth + 1)
  star.randomY = Math.floor(Math.random() * canvasHeight + 1)
  star.randomSize = getRandomSize()
  return star
}

const getRandomSize = () => {
  const ran = getRandomIntInclusive(1, 50)
  let randomSize = 0
  if (ran === 50) {
    randomSize = 2
  } else {
    randomSize = getRandomDecimalInclusive(0.25, 1)
  }
  return randomSize
}

export const getRandomIntInclusive = (min, max) => {
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

export default GenerateNewStar
