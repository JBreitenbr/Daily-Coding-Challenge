/* Sentence Capitalizer
Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

All other characters should be preserved.
Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).
*/

function capitalize(paragraph) {
  let p=paragraph.split("");
  p[0]=p[0].toUpperCase();
  for(let i=1;i<p.length-1;i++){
    if([".","!","?"].includes(p[i])){
      p[i+1]=p[i+1].toUpperCase();
    }
    if([".","!","?"].includes(p[i]) && p[i+1]==" "){
     p[i+2]=p[i+2].toUpperCase();
    }
  }
  return p.join("");
}
capitalize("hello world. how are you?")
