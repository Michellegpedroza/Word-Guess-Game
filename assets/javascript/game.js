const words = [`astronomy`, `comet`, `stars`, ` space`, `planets`, `moon`, `sun`, `jupiter`, `mercury`, `mars`, `earth`, `nasa`, `neptune`, `venus`, `saturn`, `uranus`, `light year`, `orbit`, `telescope`, `sky`, `shooting star`, `solar`, `satellite`, `solar system`, `supernova`, `solstice`, `orbit`, `interstellar`, `gravity`, `galaxy`, `black hole`, `asteroid`]

let wins = 0
let loses = 0
let guesses = 5
const guessedLetters = []

const getRandWord = function () {
  return words[Math.floor(Math.random() * words.length)]
}

const displayWord = function () {
  const word = getRandWord()
  let wordStr = ` `
  word.split(` `).forEach(function (letter) {
    wordStr += `_ `
  })
  document.getElementById(`word`).textContent = wordStr

}


