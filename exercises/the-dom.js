// const p = document.querySelector('p')
// const div = document.querySelectorAll('div')
// const wes = document.querySelector('.wes')
// const wesImg = wes.querySelectorAll('img')
// const heading = document.querySelector('h2')

// CUSTOM DATA ATTRIBUTES!!
// document.querySelector('.playerCard').dataset.name

// // heading.textContent = ('filthy junk traders')
// console.dir(heading.outerHTML)  

// const pizzaList = document.querySelector('.pizza')
// pizzaList.insertAdjacentText('beforeend', `🍕`)

// Classes

const pic = document.querySelector('.nice')
pic.classList.add('open')
pic.classList.remove('cool')
console.log(pic.classList)

function rounder() {
  pic.classList.toggle('round')
}

pic.addEventListener('click', rounder)

pic.alt = 'twisty image'
pic.width = 200

pic.addEventListener('load', function() {
  console.log(pic.naturalWidth)
})

const custom = document.querySelector('.custom')
console.log(custom.dataset)