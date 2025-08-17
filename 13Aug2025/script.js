/* S P A C E J A M
Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

Non-alphabetical characters should remain unchanged (except for spaces). */

function spaceJam(s) {
  let cap=s.toUpperCase().split("").filter((item)=>item!=" ").join("");
  let targ="";
  for(let i=0;i<cap.length;i++){
    targ+=cap[i];
    targ+="  ";
  }
  let res=targ.split("").slice(0,targ.length-2).join("");
  return res;
}
