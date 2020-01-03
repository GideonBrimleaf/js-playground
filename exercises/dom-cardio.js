// Make a div

let kyloDiv = document.createElement('div')

// add a class of wrapper to it

kyloDiv.classList.add('wrapper')

// put it into the body

document.body.appendChild(kyloDiv)

// make an unordered list

let kyloList = document.createElement('ul')

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

let firstItem = document.createElement('li')
firstItem.textContent = "Filthy junk traders"

let secondItem = document.createElement('li')
secondItem.textContent = "I hate Luke Skywalker"

let thirdItem = document.createElement('li')
thirdItem.textContent = "Red lightsabers are cool"

kyloList.appendChild(firstItem)
kyloList.appendChild(secondItem)
kyloList.appendChild(thirdItem)

kyloDiv.appendChild(kyloList)

// create an image

let droidImg = document.createElement('img')

// set the source to an image
droidImg.src = `https://vignette.wikia.nocookie.net/starwars/images/a/ac/D-O_Visual_Dictionary.png`
// set the width to 250

droidImg.width = 250
// add a class of cute

droidImg.classList.add('cute')
// add an alt of Cute Puppy

droidImg.alt = 'Cute Droid'
// Append that image to the wrapper

kyloDiv.appendChild(droidImg)
// with HTML string, make a div, with two paragraphs inside of it

let starWarsHTML = `
  <div>
    <p>finn</p>
    <p>poe</p>
  </div>
`

// let starWarsFragment = document.createRange()
// .createContextualFragment(starWarsHTML)

// put this div before the unordered list from above

kyloDiv.insertAdjacentHTML('afterbegin', starWarsHTML)

// add a class to the second paragraph called warning

let starWarsFragment = document.createRange()
.createContextualFragment(starWarsHTML)

starWarsFragment.firstElementChild.lastElementChild.classList.add('warning')


// remove the first paragraph

starWarsFragment.firstElementChild.firstElementChild.remove()


// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 7
  let html =  `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
  </div>
  `
  return document.createRange()
  .createContextualFragment(html)
}

// make a new div with a class of cards

let cardsDiv = document.createElement('div')

cardsDiv.classList.add('cards')

// Have that function make 4 cards

const rey = generatePlayerCard('Rey', 26, '5ft 11')
const kylo = generatePlayerCard('Kylo', 32, '6ft 5')
const poe = generatePlayerCard('Poe', 41, '5ft 10')
const finn = generatePlayerCard('Finn', 25, '6ft 1')

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener