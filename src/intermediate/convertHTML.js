export default function convertHTML(str) {
  // &colon;&rpar;
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  };
  
  return str.replace(/[&<>"']/g, function(c) { console.log(c); return map[c]; });
  //var result = str.replace('&', '&amp;').replace(/</g, '&lt;').replace('>', '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  
  
  //return result;return str;
}
