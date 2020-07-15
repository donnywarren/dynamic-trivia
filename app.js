const enterBtn = document.querySelector("#enter-game")
// const welcomeScrn = document.querySelector("#welcome")
// const instructionsScrn = document.querySelector("#instructions")
const categoryScrn = document.querySelector("#cateories")
const categoryChoice = document.querySelector(".cubespinner")
const gameScrn = document.querySelector("#game")

enterBtn.addEventListener('click', (e) => {
  e.preventDefault()
  instructionsScrn.classList.add("raise-curtain")
})

categoryChoice.addEventListener('click', (e) => {
  console.log(e.target.className)
})