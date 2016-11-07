export default function whatIsInAName(collection, source) {
  // What's in a name?
  const arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  collection.forEach((c) => {
    let hasAllKeys = true;
    keys.forEach((k) => {
      if (!({}.hasOwnProperty.call(c, k) && c[k] === source[k])) {
        hasAllKeys = false;
      }
    });
    if (hasAllKeys) {
      arr.push(c);
    }
  });

  // Only change code above this line
  return arr;
}
