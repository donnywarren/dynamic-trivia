const enterBtn = document.querySelector("#enter-game")
// const welcomeScrn = document.querySelector("#welcome")
const instructionsScrn = document.querySelector("#instructions")
const categoryScrn = document.querySelector("#categories")
const categoryChoice = document.querySelector(".cubespinner")
const difficultyBtn = document.querySelector("#button-box")
const gameScrn = document.querySelector("#game")

let category = ''
let difficulty = ''
let categoryClicked = false
let difficultyClicked = false

const getData = (location) => {
  if (categoryClicked && difficultyClicked) {
    switchScreen(location, categoryScrn)
  }
}

const switchScreen = (location, locationTwo) => {
  locationTwo.classList.add("raise-curtain")
  location.classList.add("black-out")
}

enterBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let location = document.querySelector(".two")
  switchScreen(location, instructionsScrn)
})

categoryChoice.addEventListener('click', (e) => {
  let catName = e.target.innerHTML
  let catTitle = document.querySelector('#cat-header')
  let location = document.querySelector(".three")

  categoryClicked = true
  catTitle.innerHTML = catName
  catTitle.classList.add('cat-selected')
  category = e.target.className
  getData(location)
  // console.log(`category is ${category}`)
  // console.log(catName)
  // console.log(categoryClicked)
})

difficultyBtn.addEventListener('click', (e) => {
  difficulty = e.target.className
  if (difficulty !== '') {
    difficultyClicked = true
    getData(e)
    // console.log(`difficulty is ${difficulty}`)
    // console.log(difficultyClicked)
  }
})


