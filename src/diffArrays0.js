export default function diffArray(arr1, arr2) {
  const newArr = [];
  const set = new Set([...arr1, ...arr2]);

  set.forEach((item) => {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      newArr.push(item);
    }
  });

  return newArr;
}
