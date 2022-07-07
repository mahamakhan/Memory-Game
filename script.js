const characterList = [
  {
    name: 'bpanther',
    image: 'images/blackpanther.jpg'
  },
  {
    name: 'bwidow',
    image: 'images/bwidow.jpg'
  },
  {
    name: 'captain',
    image: 'images/captain.jpg'
  },
  {
    name: 'drstrange',
    image: 'images/drstrange.jpg'
  },
  {
    name: 'hulk',
    image: 'images/hulk.jpg'
  },
  {
    name: 'ironman',
    image: 'images/ironman.jpg'
  },
  {
    name: 'spiderman',
    image: 'images/spiderman.jpg'
  },
  {
    name: 'thor',
    image: 'images/thorrr.jpg'
  }
]

let number = 0
let firstOption = ''
let secondOption = ''

const box = document.querySelectorAll('.grid .card')
box.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('clicked')

    if (counter === 0) {
      firstOption = card.getAttribute('id')
      number++
    } else {
      secondOption = card.getAttribute('id')
      number = 0

      if (firstOption === secondOption) {
        const correctBox = document.querySelectorAll(
          ".card[id='" + firstSelection + "']",
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
          "Pick another box!That's not the right character from a different multiuniverse."

        setTimeout(() => {
          incorrectBox[0].classList.remove('clicked')

          incorrectBox[1].classList.remove('clicked')
        }, 600)
      }
    }
  })
})
function darkMode() {
  let page = document.body
  page.classList.toggle('dark')
}
const button = document.querySelector('.mode')

button.addEventListener('click', darkMode)
