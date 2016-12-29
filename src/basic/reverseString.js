export default function reverseString(str) {
  var newStr = str.split('').reverse().join('')
  console.log('string', str.split('').reverse().join(''))
  return newStr
}
