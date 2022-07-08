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

var countDownDate = new Date('Jan 5, 2024 15:37:25').getTime()

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result in the element with id="demo"
  document.getElementById('demo').innerHTML = minutes + 'm ' + seconds + 's '

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    document.getElementById('demo').innerHTML = 'Time Up'
  }
}, 1000)

// function hourglass() {
//   var a
//   a = document.getElementById('div1')
//   a.innerHTML = '&#xf251;'
//   setTimeout(function () {
//     a.innerHTML = '&#xf252;'
//   }, 1000)
//   setTimeout(function () {
//     a.innerHTML = '&#xf253;'
//   }, 2000)
// }
// hourglass()
// setInterval(hourglass, 3000)
