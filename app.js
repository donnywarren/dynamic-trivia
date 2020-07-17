
// ============  set up global variables ===================

const instructionsScrn = document.querySelector("#instructions")
const categoryScrn = document.querySelector("#categories")
const categoryChoice = document.querySelector(".cubespinner")
const difficultyBtn = document.querySelector("#button-box")
const gameScrn = document.querySelector("#game")
const enterBtn = document.querySelector("#enter-game")

let category = ''
let difficulty = ''
let categoryClicked = false
let difficultyClicked = false
let questionPool = []
let shuffleArray = []


// ==================== API CALL =========================

const getData = async () => {
  let dataSet = await axios.get(`https://opentdb.com/api.php?amount=30&category=${category}&difficulty=${difficulty}&type=multiple`)

  questionPool = dataSet.data.results

  buildShuffleArray()
  // placeData()
}
getData()


// =========== build shuffle array ====================

const buildShuffleArray = () => {
  let i = questionPool.length - 1
  let correctAnswer = [questionPool[i].correct_answer, '0, 128, 0, 0.8']
  let wrongAnswer1 = [questionPool[i].incorrect_answers[0], '196, 00, 00, 0.9']
  let wrongAnswer2 = [questionPool[i].incorrect_answers[1], '196, 00, 00, 0.9']
  let wrongAnswer3 = [questionPool[i].incorrect_answers[2], '196, 00, 00, 0.9']

  shuffleArray.push(correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3)
  questionPool.pop()
  shuffle()
}


// ============== shuffle answer array ==============

const shuffle = () => {
  for (let i = shuffleArray.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * i)
    const temp = shuffleArray[i]
    shuffleArray[i] = shuffleArray[k]
    shuffleArray[k] = temp
  }
  // console.log(shuffleArray)
  placeData()
}
setTimeout(function () { shuffle(); }, 1000);

// =========== place data on DOM =============

const placeData = () => {
  let guestionWindow = document.querySelector("#question")
  let answerOne = document.querySelector("#answer-one")
  let answerTwo = document.querySelector("#answer-two")
  let answerThree = document.querySelector("#answer-three")
  let answerFour = document.querySelector("#answer-four")
  let i = questionPool.length - 1

  guestionWindow.innerHTML = questionPool[i].question
  answerOne.innerHTML = shuffleArray[0][0]
  answerTwo.innerHTML = shuffleArray[1][0]
  answerThree.innerHTML = shuffleArray[2][0]
  answerFour.innerHTML = shuffleArray[3][0]

  answerOne.name = shuffleArray[0][1]
  answerTwo.name = shuffleArray[1][1]
  answerThree.name = shuffleArray[2][1]
  answerFour.name = shuffleArray[3][1]

  // console.log(answerOne.name)
}




// ==================== game play ===========================

const foregroundScrn = document.querySelector(".foreground-screen")
const answerBox = document.querySelector("#answer-box")

// console.log(foregroundScrn)
// console.log(answerBox)

function checkAnswer(e) {
  showCorrect(e)
  let playerChoice = e.target
  // buildShuffleArray()
  console.log(playerChoice.name)
}
const playGame = () => {

  answerBox.addEventListener('click', checkAnswer)
}
playGame()

// ================== change answer box colors ============

const showCorrect = (e) => {
  const answerOne = document.querySelector('#answer-one')
  const answerTwo = document.querySelector('#answer-two')
  const answerThree = document.querySelector('#answer-three')
  const answerFour = document.querySelector('#answer-four')

  answerOne.style.boxShadow = `inset 0 0 30px rgba(${answerOne.name})`
  answerTwo.style.boxShadow = `inset 0 0 30px rgba(${answerTwo.name})`
  answerThree.style.boxShadow = `inset 0 0 30px rgba(${answerThree.name})`
  answerFour.style.boxShadow = `inset 0 0 30px rgba(${answerFour.name})`

}


// ============== end of game click blocker ================

const blockClick = () => {

  answerBox.removeEventListener('click', checkAnswer)

}





// ====================== close screens =========================

const switchScreen = (location, locationTwo) => {
  locationTwo.classList.add("raise-curtain")
  location.classList.add("black-out")
}

// ============ "enter button" on instructions screen ============

enterBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let location = document.querySelector(".two")
  switchScreen(location, instructionsScrn)
})


// ============= category/difficulty selection =============

categoryChoice.addEventListener('click', (e) => {
  let catName = e.target.innerHTML
  let catTitle = document.querySelector('#cat-header')
  let location = document.querySelector(".three")

  categoryClicked = true
  catTitle.innerHTML = catName
  catTitle.classList.add('cat-selected')
  category = e.target.className
  closeCat(location, categoryScrn)
})

difficultyBtn.addEventListener('click', (e) => {
  let diffName = e.target.className
  let diffTitle = document.querySelector('#diff-header')
  let location = document.querySelector(".three")
  let color = e.target.getAttribute("color")
  diffTitle.innerHTML = diffName
  diffTitle.style.color = color

  difficulty = e.target.className.toLowerCase()
  if (difficulty !== '') {
    difficultyClicked = true
    closeCat(location, categoryScrn)
  }
})

const closeCat = (location) => {
  if (categoryClicked && difficultyClicked) {
    getData()
    switchScreen(location, categoryScrn)
  }
}


// ================ CLOCK ====================

const button = document.querySelector('#start')
const progressBar = document.querySelector('.progress-color-bar')
const progressBarColor = document.querySelector('.progress-color-bar')
const startBtn = document.querySelector('#start')
let intervalCounter


button.addEventListener('click', () => {
  let intervalCounter = setInterval(readyGo, 1000)
  progressBarColor.classList.add('change-color')
  startBtn.style.display = "none"
  // playGame()
})

function readyGo() {
  let countDisplay = document.querySelector('.numeric')
  let currentCount = Number(countDisplay.textContent)

  if (currentCount === 0) {
    // blockClick()
    let stop = clearInterval(intervalCounter)
  } else {
    countDisplay.textContent = currentCount -= 1
  }
}
