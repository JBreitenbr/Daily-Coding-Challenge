/* camelCase
Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.
*/

function propCase(stri){
  let prop = stri.slice(0,1).toUpperCase()+stri.slice(1).toLowerCase();
  return prop;
}

function toCamelCase(s) {
  let spli=s.toLowerCase().split(/[ -_]/);
  console.log(spli);
  let mp=spli.slice(1).map((item)=>propCase(item)).join("");
  return spli[0]+mp;
}
