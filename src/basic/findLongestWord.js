export default function findLongestWord(str) {
  var newArr = str.split(' ')

  var longestWord = newArr.reduce(function (longest, currentWord) {

    return currentWord.length > longest.length ? currentWord : longest

  }, '')

  return longestWord.length
}

findLongestWord("The quick brown fox jumped over the lazy dog")
