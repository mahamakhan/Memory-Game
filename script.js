let number = 0
let firstOption = ''
let secondOption = ''

// add class to check if options match
const box = document.querySelectorAll('.grid .card')
box.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('clicked')

    if (number === 0) {
      firstOption = card.getAttribute('id')
      number++
    } else {
      secondOption = card.getAttribute('id')
      number = 0
      //results
      if (firstOption === secondOption) {
        const correctBox = document.querySelectorAll(
          ".card[id='" + firstOption + "']",
          (document.querySelector('#result').innerHTML =
            'You found both characters from different multiuniverse!')
        )

        correctBox[0].classList.add('checked')
        correctBox[0].classList.remove('clicked')
        correctBox[1].classList.add('checked')
        correctBox[1].classList.remove('clicked')
      } else {
        const incorrectBox = document.querySelectorAll('.card.clicked')
        document.querySelector('#result').innerHTML =
          "Pick another box!That's not the right character."

        setTimeout(() => {
          incorrectBox[0].classList.remove('clicked')

          incorrectBox[1].classList.remove('clicked')
        }, 600)
      }
    }
  })
})
//dark mode
function darkMode() {
  let page = document.body
  page.classList.toggle('dark')
}
const button = document.querySelector('.mode')

button.addEventListener('click', darkMode)
