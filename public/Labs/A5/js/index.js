// Commented out so alert doesn't repeat
// alert('Hello World!');

console.log('Hello World!');

//Variables and Constants
console.log('Variables and Constants');
var global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped -
    blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

//Variable Types
console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

//Boolean Variables
console.log('Boolean Variables');
let true1 = true;
console.log(true1);
let false1 = false;
console.log(false1);
let false2 = true1 && false1;
console.log(false2);
let true2 = true1 || false1;
console.log(true2);
let true3 = !false2;
console.log(true3);
let true4 = numberVariable === 123;
console.log(true4);
let true5 = floatingPointNumber !== 321.432;
console.log(true5);
let false3 = numberVariable < 100;
console.log(false3);

//Conditionals
console.log('If else');
if(true1) {
    console.log(true);
}
if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

//Ternary
console.log("Ternary conditional operator");
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);

//Functions
console.log("Legacy ES5 Functions");
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

//ES6 Functions
console.log("New ES6 Functions");
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

//Implied Return
console.log("Implied Return");
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

//Parenthesis
console.log("Parenthesis and Parameters");
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

//Arrays
console.log("Arrays");
let numberArray1 = [1, 2, 3, 4, 5];
console.log(numberArray1);
let stringArray1 = ['string1', 'string2'];
console.log(stringArray1);
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(variableArray1);
variableArray1.forEach(function(each){
    console.log(each);
});


//Array Indices
console.log("Array index and length");
const length1 = numberArray1.length;
console.log(length1);
const index1 = numberArray1.indexOf(3);
console.log(index1);

//Changing the Array
console.log("Add and remove data to arrays");
// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

//Console Loop
console.log("For loops");
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

//map function
console.log("Map function");
console.log(numberArray1);
const squares = numberArray1.map(square);
console.log(squares);
const cubes = numberArray1.map(a => a * a * a);
console.log(cubes);

//Find Function
console.log("Find function");
const four = numberArray1.find(a => a === 4);
console.log(four);
const string3 = stringArray1.find(a => a === 'string3');
console.log(string3);

//find Index function
console.log("Find index function");
const fourIndex = numberArray1
    .findIndex(a => a === 4);
console.log(fourIndex);
const string3Index = stringArray1
    .findIndex(a => a === 'string3')
console.log(string3Index);

//filter function
console.log("Filter function");
console.log(numberArray1);
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
console.log(numbersGreaterThan2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log(oddNumbers);

//Template Strings
console.log("Template Strings");





