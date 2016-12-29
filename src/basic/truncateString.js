export default function truncateString(str, num) {
  var newStr = str
  if(num < str.length) {
  var slice = (num > 3) ? num - 3 : num
  newStr = str.slice(0, slice).concat('...')

  }
  return newStr
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
console.log(truncateString("A-", 1), 'test')
