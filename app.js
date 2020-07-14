const enterBtn = document.querySelector("#enter-game")
const welcomeScrn = document.querySelector("#welcome")
const instructionsScrn = document.querySelector("#instructions")
const categoryScrn = document.querySelector("#cateories")

enterBtn.addEventListener('click', (e) => {
  e.preventDefault()
  instructionsScrn.classList.add("raise-curtain")
})