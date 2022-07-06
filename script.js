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

let counter = 0
let firstSelection = ''
let secondSelection = ''

const cards = document.querySelectorAll('.grid .card')
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('clicked')

    if (counter === 0) {
      firstSelection = card.getAttribute('id')
      counter++
    } else {
      secondSelection = card.getAttribute('id')
      counter = 0

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[id='" + firstSelection + "']",
          (document.querySelector('#result').innerHTML =
            'You found both characters from different multiuniverse!')
        )

        correctCards[0].classList.add('checked')
        correctCards[0].classList.remove('clicked')
        correctCards[1].classList.add('checked')
        correctCards[1].classList.remove('clicked')
      } else {
        const incorrectCards = document.querySelectorAll('.card.clicked')
        document.querySelector('#result').innerHTML =
          "Pick another box!That's not the right character from a different multiuniverse."

        setTimeout(() => {
          incorrectCards[0].classList.remove('clicked')

          incorrectCards[1].classList.remove('clicked')
        }, 800)
      }
    }
  })
})
