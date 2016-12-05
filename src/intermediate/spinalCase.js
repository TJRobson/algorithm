export default function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  console.log(str.replace(/(\s|_|-|A-Z)?(\w+)/g, '$2-'));
  return str.replace(/(\s|_|-|A-Z)?(\w+)/g, '$2-');
}
