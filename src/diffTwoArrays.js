/**
 * Diff Two Arrays
 * Compare two arrays and return a new array
 * with any items only found in one of the two given arrays,
 * but not both.
 * In other words, return the symmetric difference of the two arrays.
 *
 * For detail, refer to https://www.freecodecamp.com/challenges/diff-two-arrays
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array} newArr
 */
export default function diffArray(arr1, arr2) {
  const newArr = [];
  // Same, same; but different.
  if (!arr1 || !arr2) {
    return [];
  }
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length || index2 < arr2.length) {
    if (index1 === arr1.length) {
      newArr.push(arr2[index2]);
      index2 += 1;
    } else if (index2 === arr2.length) {
      newArr.push(arr1[index1]);
      index1 += 1;
    } else if (arr1[index1] !== arr2[index2]) {
      let foundIndex1InArr1 = false;
      const tempArr = [arr2[index2]];
      for (let i = index2 + 1; !foundIndex1InArr1 && i < arr2.length; i += 1) {
        if (arr1[index1] === arr2[i]) {
          newArr.push(...tempArr);
          foundIndex1InArr1 = true;
          index2 = i;
        } else {
          tempArr.push(arr2[i]);
        }
      }
      if (!foundIndex1InArr1) {
        newArr.push(arr1[index1]);
        index1 += 1;
      }
    } else if (arr1[index1] === arr2[index2]) {
      index1 += 1;
      index2 += 1;
    }
  }
  return newArr;
}
