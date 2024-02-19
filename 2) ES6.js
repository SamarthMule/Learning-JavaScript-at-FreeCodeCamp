// Compare Scopes of the var and let Keywords
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// Prevent Object Mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();

// Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

// Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

// Use the Rest Parameter with Function Parameters
const sum = (...args) => args.reduce((a, b) => a + b, 0);

// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1];
})();
console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES0 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Use Destructuring Assignment to Assign Variables from Objects
const {today: highToday4, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
(() => {
  "use strict";
  [a, b] = [b, a];
})();
console.log(a);

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
"use strict";
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0;
console.log(half(stats));

// Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr){
"use strict";
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

// Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) =>{
  return {
    
  }
}

// Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

// Use class Syntax to Define a Constructor Function
class Vegetable {
  constructor(name){
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);

// Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit){
    this.fahrenheit = fahrenheit;
  }
  get temperature(){
    return 5/9 * (this.fahrenheit - 32);
  }
  set temperature(celsius){
    this.fahrenheit = celsius * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

// Create a Module Script
<html>
  <body>
<script type="module" src="index.js"></script>

  </body>
</html>

// Use export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };

// Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

// Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

// Import a Default Export
import subtract from "./math_functions.js";
subtract(7,4);

// Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {});

// Complete a Promise with resolve and reject
const makeServerRequest8 = new Promise((resolve, reject) => {
  let responseFromServer = true;
  if(responseFromServer){
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

// Handle a Fulfilled Promise with then
const makeServerRequest4 = new Promise((resolve, reject) => {
  let responseFromServer = true;
  if(responseFromServer){
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});

// Handle a Rejected Promise with catch
const makeServerRequest2 = new Promise((resolve, reject) => {
  let responseFromServer = false;
  if(responseFromServer){
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});

