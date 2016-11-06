
export default function convertToRoman(num) {
  const m = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];

  const romanNumeral = [];
  let n = num;
  for (let i = 0; i < m.length && n > 0;) {
    if (m[i][1] <= n) {
      romanNumeral.push(m[i][0]);
      n -= m[i][1];
    } else {
      i += 1;
    }
  }
  return romanNumeral.join('');
}
