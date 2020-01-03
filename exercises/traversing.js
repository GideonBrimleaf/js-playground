const wes = document.querySelector('.wes')

console.log(wes.children) //gives you all the child html elements
console.log(wes.childNodes) //gives you all the child nodes (including text)
console.log(wes.firstElementChild)
console.log(wes.lastElementChild)


const removal = document.createElement('p')

removal.textContent = 'See ya later'

document.body.appendChild(removal)

removal.remove()
