/* Reverse Parenthesis
Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

All characters inside each pair of parentheses should be reversed.
Parentheses should be removed from the final result.
If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
Assume all parentheses are evenly balanced and correctly nested.
*/

function indices(source, find) {
if (!source) {return [];}    let result = [];
for (let i = 0; i < source.length; i++) {
if (source.substring(i, i + find.length) == find) {
result.push(i);
  }
 }
return result;
}

function hlp(s){
  let ind1=indices(s,"(");
  let ind2=indices(s,")");
  let ind=[...ind1,...ind2].sort((a,b)=>a-b);
  let d=[];
  for(let i=0;i<ind.length;i++){ 
   if(ind1.includes(ind[i])&&ind2.includes(ind[i+1])){
   d.push([ind[i],ind[i+1]]);
   }
  }
  let ob={};
for(let i=0;i<d.length;i++){
  ob[i]=s.substring(d[i][0]+1,d[i][1]).split("").reverse().join("");
}
 
 let m=s.substring(0,d[0][0])+ob[0];
 for(let i=0;i<d.length-1;i++){
   m+=s.substring(d[i][1]+1,d[i+1][0])+ob[i+1];
 }
 m+=s.substring(d[d.length-1][1]+1);
  return m;
}

function decode(s) {
if (s.includes('(')){
  console.log(hlp(s));
  return decode(hlp(s));
  } else {return s;}
} 
