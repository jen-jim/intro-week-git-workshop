const wordList = require('./word_list.js')

// DO NOT CHANGE ANY CODE ABOVE THIS LINE

console.log(wordList)

const firstThreeWords = [wordList[0], wordList[1], wordList[2]]
console.log({ firstThreeWords })

const lastThreeWords = wordList.filter((_, i) => i >= wordList.length - 3)
console.log({ lastThreeWords })

const wordCount = wordList.length
console.log({ wordCount })

const twoLetterWords = wordList.filter((word) => word.length === 2)
console.log({ twoLetterWords })

const longestWord = wordList.toSorted((a, b) => b.length - a.length)[0]
console.log({ longestWord })

const containsC = wordList.filter((word) => word.includes('c'))
console.log({ containsC })

const reversedWords = wordList.toReversed()
console.log({ reversedWords })

const noVowels = wordList.filter((word) => /^[^aeiou]+$/.test(word))
console.log({ noVowels })

const repeatedLetters = wordList.filter((word) => /([a-z])\w*\1/.test(word))
console.log({ repeatedLetters })

// Run this file by typing 'node advanced.js' in your terminal.
