// Using the split(), reverse(), and join() methods:

function reverseString(str) {
    return str.split('').reverse().join('')
}

const originalString = 'Hello, world!'
const reversedString = reverseString(originalString)

console.log(reversedString)

// str.split('').reverse().join('')

/*
.split('') splits a string into an array of substrings
.reverse() reverses the order of the elements in an array
.join('') returns an array as a string
*/

/* -------------------------------- */


// Using ES6 spread operator:

function reverseString(str) {
    return [...str].reverse().join('')
}

const originalString = 'Hello, world!'
const reversedString = reverseString(originalString)

console.log(reversedString)

/* -------------------------------- */


// Using a loop:

function reverseString(str) {
    let reversed = ''
    for (let i = str.length -1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

const originalString = 'Hello, world!'
const reversedString = reverseString(originalString)

console.log(reversedString)


// iterates backwards through a string