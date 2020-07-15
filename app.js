const enterBtn = document.querySelector("#enter-game")
// const welcomeScrn = document.querySelector("#welcome")
// const instructionsScrn = document.querySelector("#instructions")
const categoryScrn = document.querySelector("#cateories")
const categoryChoice = document.querySelector(".cubespinner")
const difficultyBtn = document.querySelector("#button-box")
const gameScrn = document.querySelector("#game")

let category = ''
let difficulty = ''

enterBtn.addEventListener('click', (e) => {
  e.preventDefault()
  instructionsScrn.classList.add("raise-curtain")
})

categoryChoice.addEventListener('click', (e) => {
  category = e.target.className
  console.log(`category is ${category}`)
})

difficultyBtn.addEventListener('click', (e) => {
  difficulty = e.target.className
  if (difficulty !== '') {
    console.log(`difficulty is ${difficulty}`)
  }
})
