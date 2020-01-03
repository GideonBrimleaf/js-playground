const item = document.querySelector('.item')

const width = 500
const src = `https://picsum.photos/${width}`
const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`
const someHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`

// item.innerHTML = someHTML

// const itemImage = document.querySelector('.wrapper img')

// itemImage.classList.add('round')

// console.log(itemImage)

//turn string into a DOM element

const myFragment = document.createRange()
.createContextualFragment(someHTML)

document.body.appendChild(myFragment)