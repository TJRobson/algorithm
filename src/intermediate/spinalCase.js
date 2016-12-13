export default function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.replace(/(\s|_|-)?([A-Z])/g, '-$2').replace(/(^-)/, '').toLowerCase();
}
