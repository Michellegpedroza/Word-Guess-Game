// Array of Words
const words = [`astronomy`, `comet`, `stars`, ` space`, `planets`, `moon`, `sun`, `jupiter`, `mercury`, `mars`, `earth`, `nasa`, `neptune`, `venus`, `saturn`, `uranus`, `light year`, `orbit`, `telescope`, `sky`, `solar`, `satellite`, `supernova`, `solstice`, `orbit`, `interstellar`, `gravity`, `galaxy`, `asteroid`]

//Gets the Random Word 
const getRandWord = function () {
  return words[Math.floor(Math.random() * words.length)]
}

//Starting Values
let wins = 0
let losses = 0
let guesses = 7
let lettersGuessed = []
let word = getRandWord()

//Resets Game after win or lose
const reset = function () {
  word = getRandWord()
  lettersGuessed = []
  guesses = 7
  displayWord()
  document.getElementById(`guessesLeft`).textContent = guesses
  document.getElementById(`wins`).textContent = wins
  document.getElementById(`losses`).textContent = losses
  document.getElementById(`letters`).textContent = lettersGuessed.join(`, `)
}

//Displays the word with _ 
const displayWord = function () {
  let wordstr = `` 

  // Tracks if the user has guess right
  let winStatus = true

  //Loops to build string
  word.split(``).forEach(function (letter) {
    if (lettersGuessed.indexOf(letter) !== -1) {
      wordstr += `${letter} `
    } else {
      //If letter guess incorrect display _
      wordstr += `_ `
      winStatus = false
    }
  })
  document.getElementById(`word`).textContent = wordstr

//If word guess Right - Win alert and game Resets
  if (winStatus) {
    alert(`You Won! The word was ${word}!`)
    wins++
    reset()
  }
}

//
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (lettersGuessed.indexOf(event.key) === -1) {
      lettersGuessed.push(event.key)
      document.getElementById(`letters`).textContent = lettersGuessed.join(`, `)
      if (word.includes(event.key)) {
        displayWord()
      } else {
        guesses--
        document.getElementById(`guessesLeft`).textContent = guesses
        if (guesses <= 0) {
          alert(`You Lost! The word wasy ${word}`)
          losses++
          reset()
        }
      }
    }
  }
}

displayWord()
