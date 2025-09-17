/* Slug Generator
Given a string, return a URL-friendly version of the string using the following constraints:

All letters should be lowercase.
All characters that are not letters, numbers, or spaces should be removed.
All spaces should be replaced with the URL-encoded space code %20.
Consecutive spaces should be replaced with a single %20.
The returned string should not have leading or trailing %20.
*/

function generateSlug(str) {
  let low="abcdefghijklmnopqrstuvwxyz".split("");
  let up="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let nums="0123456789".split("");
  let s=str.trim().replace("  "," ").split("");
  for(let i=0;i<s.length;i++){
    if(s[i]==" "){
      s[i]="Y";
    }
    if(!low.includes(s[i])&&!up.includes(s[i])&&!nums.includes(s[i])){
      s[i]="X";
    }
  }
  let flt=s.filter((item)=>item!="X").join("").toLowerCase();
  return flt.replace("y","%20");
}
