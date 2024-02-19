// Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
console.log(convertToF(30));

// Reverse a String
function reverseString(str) {
    let reverseStr = str.split("").reverse().join("");
    return reverseStr;
}
console.log(reverseString("hello"));

// Factorialize a Number
function factorialize(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialize(5));

// Find the Longest Word in a String
function findLongestWordLength(str) {
    let longestWord = 0;
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
        }
    }
    return longestWord;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let largestNum = [];
    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        largestNum[i] = largest;
    }
    return largestNum;
}
console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));

// Confirm the Ending
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("Bastian", "n"));

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let repeatStr = "";
    for (let i = 0; i < num; i++) {
        repeatStr += str;
    }
    return repeatStr;
}
console.log(repeatStringNumTimes("abc", 3));

// Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// Finders Keepers
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// Boo who
function booWho(bool) {
    return typeof bool === "boolean";
}
console.log(booWho(null));

// Title Case a Sentence
function titleCase(str) {
    let title = str.toLowerCase().split(" ");
    for (let i = 0; i < title.length; i++) {
        title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    }
    return title.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
    return newArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// Falsy Bouncer
function bouncer(arr) {
    return arr.filter(Boolean);
}
console.log(bouncer([7, "ate", "", false, 9]));

// Where do I Belong
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num);
}
console.log(getIndexToIns([40, 60], 50));

// Mutations
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) {
            return false;
        }
    }
    return true;
}
console.log(mutation(["hello", "hey"]));

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));