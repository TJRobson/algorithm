export default function slasher(arr, howMany) {
  var newArr = [];
  return howMany > arr.length ? newArr : arr.slice(howMany);
}
 
slasher([1, 2, 3], 2);
console.log(slasher([1, 2, 3], 9));
