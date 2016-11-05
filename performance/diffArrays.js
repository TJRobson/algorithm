import diffTwoArrays from '../src/diffTwoArrays';
import diffArrays from '../src/diffArrays';
import diffArrays0 from '../src/diffArrays0';

const arr1 = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'];
const arr2 = ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub', 'trail'];
const iterations = 1000000;
console.time('Mine #1');
for (let i = 0; i < iterations; i += 1) {
  diffTwoArrays(arr1, arr2);
}
console.timeEnd('Mine #1');

console.time('Mine #2');
for (let i = 0; i < iterations; i += 1) {
  diffArrays0(arr1, arr2);
}
console.timeEnd('Mine #2');

console.time('Other\'s #2');
for (let i = 0; i < iterations; i += 1) {
  diffArrays(arr1, arr2);
}
console.timeEnd('Other\'s #2');
