// Sum All Numbers in a Range
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

// Diff Two Arrays
function diffArray(arr1, arr2) {
    return arr1
        .filter((item) => !arr2.includes(item))
        .concat(arr2.filter((item) => !arr1.includes(item)));
}

// Seek and Destroy
function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  return arr.filter((item) => !args.includes(item));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);
  return collection.filter((obj) => {
    return srcKeys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio",], { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Spinal Tap Case
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
spinalCase('This Is Spinal Tap');

// Pig Latin
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}
translatePigLatin("consonant");

// Search and Replace
function myReplace(str, before, after) {
    const strArr = str.split(" ");
    const [wordToReplace] = strArr.filter(item => item === before);
    const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
  }
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// DNA Pairing
function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  return str.split("").map(item => [item, pairs[item]]);
}
pairElement("GCG");

// Missing letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
fearNotLetter("abce");

// Sorted Union
function uniteUnique(arr) {
    let args = Array.from(arguments);
    let result = [];
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
        if (!result.includes(args[i][j])) {
            result.push(args[i][j]);
        }
        }
    }
    return result;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;"
  };
  return str
    .split("")
    .map(item => htmlEntities[item] || item)
    .join("");
}
convertHTML("Dolce & Gabbana");

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let result = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) {
      result += curr;
    }
    curr += prev;
    prev = curr - prev;
  }
  return result;
}
sumFibs(4);

// Sum All Primes
function sumPrimes(num) {
  let result = 0;
  function isPrime(number) {
    for (let i = 2; i <= number; i++) {
      if (number % i === 0 && number != i) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }
  return result;
}
sumPrimes(10);

// Smallest Common Multiple
function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = max;
  for (let i = max - 1; i >= min; i--) {
    if (result % i) {
      result += max;
      i = max;
    }
  }
  return result;
}
smallestCommons([1, 5]);

// Drop it
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

// Steamroller
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
steamrollArray([1, [2], [3, [[4]]]]);

// Binary Agents
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(item => parseInt(item, 2))
  );
}
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

// Everything Be True
function truthCheck(collection, pre) {
  return collection.every(item => item[pre]);
}
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

// Arguments Optional
function addTogether(){
    const [first, second] = arguments;

  function addSecond(second) {
    if (typeof (second) === "number") return first + second;
  }

  if (typeof (first) === "number") {
    if (arguments.length === 1) return addSecond;
    if (arguments.length === 2) return addSecond(second);
  }
}
addTogether(2,3);

// Make a Person
const Person = function(first, last) {
    let firstName = first;
    let lastName  = last;
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
  
    this.getFullName = function() {
      return this.getFirstName() + " " + this.getLastName();
    };
  
    this.setFirstName = function(first) {
      return firstName = first;
    };
  
    this.setLastName = function(last) {
      return lastName = last;
    };
  
    this.setFullName = function(first, last) {
      this.setFirstName(first);
      this.setLastName(last);
      return this.getFullName();
    };
  };
  
  const bob = new Person("Bob", "Ross");
  console.log(bob.getFullName());

// Map the Debris
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
      const earth = earthRadius + avgAlt;
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));
      return { name, orbitalPeriod };
    });
  }
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);