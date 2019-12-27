const name = 'Gideon';
const middle = 'Jole';
const last = 'Brimleaf';

const sentence = "she's so 'cool'";
const sentence2 = `she's so "cool"`;

const multiline = `Ohhh
Yea

Use

The Force Frodeo!`;

const interpol = `Hello, my name is ${name} nice to meet you

I am ${12*3} years old`

const html = `
  <div>
    <h2>${name}</h2>
    <p>${interpol}</p>
  </div>
`;

document.body.innerHTML = html;

const smarties = 20;
const kids = 3;
const dadGets = smarties % kids

const eachKidGets = Math.floor(smarties/kids);

console.log(`each kid gets ${eachKidGets} smarties
dad gets ${dadGets} smarties`)

const person = {
  name: `Gideon`,
  surname:`Brimleaf`,
  age:100
};

let undefinedAreJustNotSet;

let nullHasToBeExplicit = null;

let typeChecker = 10 === 10;
let nonTypeChecker = '10' ==10;