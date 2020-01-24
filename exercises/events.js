const butts = document.querySelector('.butts')
const coolButton = document.querySelector('.coolButton')

function handleClick() {
  console.log('filthy junk traders')
}

butts.addEventListener('click', handleClick) //function is bound to element

butts.removeEventListener('click', handleClick)
//Remove event listeners won't work with anonymous functions

const luke = () => console.log('Everything you just said is wrong')

coolButton.addEventListener('click', luke)

const buyButtons = document.querySelectorAll('button.buy')
// console.log(buyButtons)

function buyItem() {
  console.log('Buying a lightsaber')
}

function handleBuyButtonClick(pink_thing) {
  console.log('Binding the buy button')
  pink_thing.addEventListener('click', buyItem)
}

buyButtons.forEach(handleBuyButtonClick)



