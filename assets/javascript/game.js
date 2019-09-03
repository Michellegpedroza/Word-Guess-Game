const words = [`astronomy`, `comet`, `stars`, ` space`, `planets`, `moon`, `sun`, `jupiter`, `mercury`, `mars`, `earth`, `nasa`, `neptune`, `venus`, `saturn`, `uranus`, `light year`, `orbit`, `telescope`, `sky`, `solar`, `satellite`, `supernova`, `solstice`, `orbit`, `interstellar`, `gravity`, `galaxy`, `asteroid`]


const getRandWord = function () {
  return words[Math.floor(Math.random() * words.length)]
}

let wins = 0
let loses = 0
let guesses = 5
const guessedLetters = []

let word = getRandWord()

const displayWord = function () {
  let wordStr = ` `
  word.split(` `).forEach(function (letter) {
    wordStr += `_ `
  })
  document.getElementById(`word`).textContent = wordStr
}

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90){

    }
}