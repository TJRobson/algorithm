export default function confirmEnding(str, target) {
  var newStr = str.substring(str.length -target.length)
  // console.log(newStr, 'newStr')
  return newStr === target ? true : false
}

confirmEnding("Bastian", "n")
