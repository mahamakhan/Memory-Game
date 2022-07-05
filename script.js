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

// characterList.sort(() => 0.5 - Math.random())
// const grid = document.querySelector('#grid')
// let allpictures = []
// let picturesarr = []
// let chosenpic = []
// function startgame() {
//   for (let i = 0; i < characterList.length; i++) {
//     let picture = document.createElement('img')
//     picture.setAttribute('src', 'images/poster.jpg')
//     picture.setAttribute('data-id', i)
//     picture.addEventListener('click', changePicture)
//     grid.appendChild(picture)
//   }
// }

// function checkformatch() {
//   let pictures = document.querySelectorAll('img')
//   const option1 = allpictures[0]
//   const option2 = allpictures[1]
//   if (allpictures[0] === allpictures[1]) {
//     console.log('found a match')
//     pictures[option1].setAttribute('src', images / marvel.jpg)
//     pictures[option2].setAttribute('src', images / marvel / jpg)
//     choosenpic.push(allpictures)
//   } else {
//     pictures[option1].setAttribute('src', images / marvel.jpg)
//     pictures[option2].setAttribute('src', images / marvel.jpg)
//     console.log('wrong')
//   }
//   let allpictures = []
//   let picturesarr = []
// }

// function changePicture() {
//   let picnumber = this.getAttribute('data-id')
//   picturesarr.push(characterList[picnumber].name)
//   allpictures.push(picnumber)
//   this.setAttribute('src', characterList[picnumber].img)

//   if (picturesarr.length === 2) {
//     setTimeout(checkformatch, 500)
//   }
// }
// startgame()

let counter = 0
let firstOption = ''
let secondOption = ''
const cards = document.querySelectorAll('.grid .card')
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('choosen')

    if (counter === 0) {
      firstOption = card.getAttribute('id')
      counter++
    } else {
      secondOption = card.getAttribute('id')
      counter = 0
    }
    console.log(firstOption)
    console.log(secondOption)
  })
})
