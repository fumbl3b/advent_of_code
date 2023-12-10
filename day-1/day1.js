'use strict'

import { data } from './input.js'

let actualData = [ ...data ]

let numbers = []

const wordToNumber1 = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}


  
function replaceWordsWithNumbers(text) {

    const wordToNumber = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
      };

    // Create a regular expression pattern that matches any word in the wordToNumber object
    const regex = new RegExp('\\b(' + Object.keys(wordToNumber).join('|') + ')\\b', 'gi');
  
    // Replace the matched words with their corresponding numeric values
    return text.replace(regex, function(match) {
      return wordToNumber[match.toLowerCase()];
    });
}

// iterate through each


const regex = new RegExp(Object.keys(wordToNumber1).join("|"), "gi");
console.log(regex)

actualData.forEach(string => {
    let newString = ""
    string.forEach(char => {
        if char in Object.keys(wordToNumber1)
    }).join
    console.log(string)
    console.log(newString)
    numbers.push(newString.replace(/[^0-9]/g, ''))
})

let final = numbers.map(num => { return (num.charAt(0) + num.charAt(num.length - 1)) })

final.reduce((a,b) => a+b)
// final.forEach(d => console.log(d))
console.log(final.reduce((a,b) => parseInt(a) + parseInt(b) ))

