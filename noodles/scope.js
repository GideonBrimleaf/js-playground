// const first = 'kylo'
// let second = 'ren'
// var age = 35 //This is available in window object

// function saySomething () {
//   console.log('filthy junk traders')
// }

// const age = 100

// function go() {
//   const hair = 'blonde'
// }

// console.log(age)
// console.log(hair)
function isCool(name) {
  let cool;
  if(name === 'kylo') {
    cool = true
  }
  console.log(cool)
  return cool
}

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// setting i to var here has problems with a leaky variable which is
// available globally

const dog = 'snickers'

function logDog() {
  console.log(dog)
}

function go() {
  const dog = 'sunny'
  logDog()
}

go()

// This will return snickers not sunny,  this is because
// the logDog method is defined above sunny and so needs 
// to look for a dog variable outside of the initial method
// definition (as there's not a dog variable definied inside
// the method)

