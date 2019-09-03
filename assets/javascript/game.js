const words = [`astronomy`, `comet`, `stars`, ` space`, `planets`, `moon`, `sun`, `jupiter`, `mercury`, `mars`, `earth`, `nasa`, `neptune`, `venus`, `saturn`, `uranus`, `light year`, `orbit`, `telescope`, `sky`, `solar`, `satellite`, `supernova`, `solstice`, `orbit`, `interstellar`, `gravity`, `galaxy`, `asteroid`]


const getRandWord = function () {
  return words[Math.floor(Math.random() * words.length)]
}

let wins = 0
let loses = 0
let guesses = 5
const guessedLetters = []

let word = getRandWord()

const displayWord = function (letterPicked) {
  let wordStr = ` `
  word.split(` `).forEach(function (letter) {
    if (letter === letterPicked || guessedLetters.indexOf(letter) !== -1) {
      wordStr += `${letterPicked} ` 
    } else {
      wordStr += `_ `
    }
  })
  document.getElementById(`word`).textContent = wordStr
}

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90){
      if (word.includes(event.key)) {
        guessedLetters.push(event.key)
        displayWord(event.key)
      }
    }
}