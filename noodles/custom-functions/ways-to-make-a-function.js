// function doctorize(firstname) {
//   return `Dr. ${firstname}`
// }


// Anon function
// function (firstname) {
//   return `Dr. ${firstname}`
// }

// Function expression - cannot access function before the definition
// unlike normal functions (which are hoisted)
// const doctorize = function (firstname) {
//   return `Dr. ${firstname}`
// }

const inchestoCM = inches => inches * 2.54

const add = (a, b = 3) => a + b

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 })

// IIFE
// Immeditaely Invoked Function Expression

// (function() {
//   console.log('Running the anon function')
//   return 'You are cool'
// })()

// Methods - functions inside of objects

const kylo = {
  name: 'Kylo Ren',
  saySomething: function() {
    console.log('filthy junk traders')
    return 'filthy junk traders'
  },
  saySomethingElse() {
    return `you're nothing`
  },
  sayAnotherthing: () => {
    'no'
  }
}

// Callback Functions
// Click Callback
const button = document.querySelector('.ClickMe')
button.addEventListener('click', function() {
  console.log('The force will be with you')
})

//Timer Callback
setTimeout(() => {
  console.log('Everything you just said was totally wrong')
}, '1000')