export default function chunkArrayInGroups(arr, size) {
  var newArr = arr.reduce(function(accumulator, curr, i){
    if(i % size === 0) {
      accumulator.push(arr.slice(i, i + size))
    }
    return accumulator
  }, [])
  return newArr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
