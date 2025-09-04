/* Vowel Repeater
Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
The original vowel should keeps its case.
Repeated vowels should be lowercase.
All non-vowel characters should keep their original case.
*/

function indices(source, find) {
  if (!source) {return [];}    let result = [];
  for (let i = 0; i < source.length; i++) {
  if (find.includes(source.substring(i, i+1))) {
  result.push(i);
    }
     }
     return result;
     }
function mult(ch,n){
  let stri="";
  for(let i=0;i<n;i++){
    stri+=ch;
  }
  return stri;
}
function repeatVowels(str) {
  let v=["a","e","i","o","u"];
  let ind=indices(str.toLowerCase(),v);
  console.log(ind);
  let stri=str.substring(0,ind[1]);
  for(let i=1;i<ind.length;i++){
    let a=mult(str.substring(ind[i],ind[i]+1),i);
    let b=str.substring(ind[i],ind[i+1]);
    stri+=a+b;
  }
  let pre=stri.split("");
  for(let i=0;i<pre.length;i++){
    if(["A","E","I","O","U"].includes(pre[i])){
      pre[i]=pre[i].toLowerCase();
    }
  }
  stri=pre.join("");
  let arr=stri.split("");
  for(let i=0;i<ind.length;i++){
    arr[ind[i]+i*(i+1)*0.5-i]=str[ind[i]];
  }
  let res=arr.join("")
  return res;
}
