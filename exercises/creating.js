const kyloParagraph = document.createElement('p')
kyloParagraph.textContent = 'filthy junk traders'
kyloParagraph.classList.add('filthy')

console.log(kyloParagraph)

const kyloImage = document.createElement('img')
kyloImage.src = 'https://image.fnbr.co/outfit/5dfd608c1eab6836131711e4/icon.png'
kyloImage.alt = 'kylo'

const kyloDiv = document.createElement('div')
kyloDiv.classList.add('wrapper')

console.log(kyloDiv)


kyloDiv.appendChild(kyloParagraph)
kyloDiv.appendChild(kyloImage)
document.body.appendChild(kyloDiv)

// adding a header after the fact

const kyloHeader = document.createElement('h2')
kyloHeader.textContent = 'Get a free Kylo judgement on us!'

kyloDiv.insertAdjacentElement('afterbegin', kyloHeader)

//adding a list

const kyloList = document.createElement('ul')
const kyloItem1 = document.createElement('li')
kyloItem1.textContent = 'I love my red lightsaber'

kyloList.appendChild(kyloItem1)

const kyloItem2 = document.createElement('li')
kyloItem2.textContent = 'I hate Luke Skywalker'

kyloList.appendChild(kyloItem2)

const kyloItem3 = kyloItem2.cloneNode(true)
kyloList.insertAdjacentElement('afterbegin', kyloItem3)

kyloDiv.appendChild(kyloList)