export default function factorialize(num) {
  if (num < 0) {
      return
  }
  // If the number is 0, its factorial is 1.
  else if (num === 0) {
      return 1
  }
  // Otherwise, call this recursive procedure again.
  else {
      return (num * factorialize(num - 1))
  }
}

var num = factorialize(5)

console.log(num, 'num')
