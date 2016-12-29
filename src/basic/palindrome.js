export default function palindrome(str) {
  var newStr = str.replace(/[^a-z0-9]/gi,'').toLowerCase()
  var reverseStr = newStr.split('').reverse().join('')

  return newStr === reverseStr ? true: false

}

palindrome("eye")
