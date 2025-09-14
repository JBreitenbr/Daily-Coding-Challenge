/* Word Frequency
Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
The returned array should have all lowercase words.
The returned array should be in descending order with the most frequently occurring word first.
*/

function getWords(paragraph) {
  let obj={};
  let p=paragraph.replace(".","").replace(",","").replace("!","");
  let spl=p.split(" ").map((item)=>item.toLowerCase().replace(",",""));
  for(let i=0;i<spl.length;i++){
    if(spl[i] in obj){
      obj[spl[i]]+=1;
    } else {obj[spl[i]]=1;}
  }
  let s = Object.entries(obj).sort((x,y)=>y[1]-x[1]).slice(0,3).map((item)=>item[0]);
  return s;
}

