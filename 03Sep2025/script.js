/* Pangram
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.
*/

function isPangram(sentence, letters) {
  let s=sentence.toLowerCase().replaceAll(" ","").replaceAll(".","").replaceAll("!","").split(""); 
let l=letters.toLowerCase().split("");
  for(let i=0;i<s.length;i++){ if(!l.includes(s[i])){
    return false;
  }}
  for(let i=0;i<l.length;i++){
    if(!s.includes(l[i])){
      return false;
    }
  }
  return true;
}
