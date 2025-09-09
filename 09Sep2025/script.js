/* Unique Characters
Given a string, determine if all the characters in the string are unique.

Uppercase and lowercase letters should be considered different characters.
*/

function allUnique(str) {
let s=Array.from(new Set(str.split("")));

  return str.length==s.length;
}
