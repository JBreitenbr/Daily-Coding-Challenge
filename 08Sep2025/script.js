/* Acronym Builder
Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in order they are given.
The acronym should not contain any spaces.
*/

function buildAcronym(str) {
  let s=str.replace("a ","").replace("for ","").replace("an ","").replace("and ","").replace("by ","").replace("of ","");
  let spl=s.split(" ");
  let ac=spl.map((item)=>item.substring(0,1).toUpperCase()).join("");
  return ac;
}
