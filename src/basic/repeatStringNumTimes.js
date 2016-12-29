export default function repeatStringNumTimes(str, num) {
  var newStr = ''
  if(num > 0) {
   for(var i = 0; i < num; i++) {
    newStr = newStr += str
    // console.log(newStr, 'newStr');
   }
  }
  return newStr
}
repeatStringNumTimes("abc", 3)

// Shorter example using .repeat
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str.repeat(num) : '';
// }
