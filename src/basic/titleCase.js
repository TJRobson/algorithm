export default function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    console.log(word.slice(1), 'slice')
    return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}

titleCase("I'm a little tea pot");
