/* Jbelmud Text
Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase. */

function jbelmu(text) {
  let spli=text.split(" ");
  let targ=[];
  for(let i=0;i<spli.length;i++){ 
      let f=spli[i][0];
      let l=spli[i][spli[i].length-1];
      let m=spli[i].slice(1,spli[i].length-1).split("").sort().join("");
      let c;
      if(spli[i].length==1){
        c=f;
      }  else {c=f+m+l} ;
      targ.push(c);
  }
  return targ.join(" ");
}
