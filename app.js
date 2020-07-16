
// const welcomeScrn = document.querySelector("#welcome")
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


// ======= API CALL ========

const getData = async () => {
  let dataSet = await axios.get(`https://opentdb.com/api.php?amount=30&category=${category}&difficulty=${difficulty}&type=multiple`)

  questionPool = dataSet.data.results
  console.log(questionPool[22].question)
  console.log(questionPool[22].correct_answer)
  console.log(questionPool[22].incorrect_answers[0])
  console.log(questionPool[22].incorrect_answers[1])
  console.log(questionPool[22].incorrect_answers[2])

  placeData()
}

const placeData = () => {
  let guestionWindow = document.querySelector("#question")
  let answerOne = document.querySelector("#answer-one")
  let answerTwo = document.querySelector("#answer-two")
  let answerThree = document.querySelector("#answer-three")
  let answerFour = document.querySelector("#answer-four")

  guestionWindow.innerHTML = questionPool[22].question
  answerOne.innerHTML = questionPool[22].correct_answer
  answerTwo.innerHTML = questionPool[22].incorrect_answers[0]
  answerThree.innerHTML = questionPool[22].incorrect_answers[1]
  answerFour.innerHTML = questionPool[22].incorrect_answers[2]
}

// ============== shuffle locations ==============

let answerDivArray = ["answerOne", "answerTwo", "answerThree", "answerFour"]

const shuffle = () => {
  for (let i = answerDivArray.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * i)
    const temp = answerDivArray[i]
    answerDivArray[i] = answerDivArray[k]
    answerDivArray[k] = temp
  }
  console.log(answerDivArray)
}



// ===============================================




// ====================== close screens =========================

const switchScreen = (location, locationTwo) => {
  locationTwo.classList.add("raise-curtain")
  location.classList.add("black-out")
}

// ============ enter button on instructions screen ============

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


// ========== CLOCK ==============

const button = document.querySelector('#start')
const progressBar = document.querySelector('.progress-color-bar')
const progressBarColor = document.querySelector('.progress-color-bar')
const startBtn = document.querySelector('#start')
let intervalCounter


button.addEventListener('click', () => {
  let intervalCounter = setInterval(readyGo, 1000)
  progressBarColor.classList.add('change-color')
  startBtn.style.display = "none"
})

function readyGo() {
  let countDisplay = document.querySelector('.numeric')
  let currentCount = Number(countDisplay.textContent)

  if (currentCount === 0) {
    clearInterval(intervalCounter)
  } else {
    countDisplay.textContent = currentCount -= 1
  }
}
