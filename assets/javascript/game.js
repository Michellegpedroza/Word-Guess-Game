const words = [`astronomy`, `comet`, `stars`, ` space`, `planets`, `moon`, `sun`, `jupiter`, `mercury`, `mars`, `earth`, `nasa`, `neptune`, `venus`, `saturn`, `uranus`, `light year`, `orbit`, `telescope`, `sky`, `solar`, `satellite`, `supernova`, `solstice`, `orbit`, `interstellar`, `gravity`, `galaxy`, `asteroid`]

const getRandWord = function () {
  return words[Math.floor(Math.random() * words.length)]
}

let wins = 0
let losses = 0
let guesses = 5
const lettersGuessed = []
let word = getRandWord()

const displayWord = function () {
  let wordstr = ``
  let winStatus = true
  word.split(``).forEach(function (letter) {
    if (lettersGuessed.indexOf(letter) !== -1) {
      wordstr += `${letter} `
    } else {
      wordstr += `_ `
      winStatus = false
    }
  })
  if (winStatus) {
    alert(`You Won!`)
  }
  document.getElementById(`word`).textContent = wordstr
}

document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (lettersGuessed.indexOf(event.key) === -1) {
      lettersGuessed.push(event.key)
      document.getElementById(`letters`).textContent = lettersGuessed.join(`, `)
      if (word.includes(event.key)) {
        displayWord()
      } else {
        guesses--
        if (guesses <= 0) {
          alert(`You Lost!`)
        }
      }
    }
  }
}

displayWord()
