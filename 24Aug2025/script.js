/* Character Battle
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.
*/

function mkDict() {
  let s1="abcdefghijklmnopqrstuvwxyz";let s2=s1.toUpperCase();
  let d={};
  for(let i=0;i<s1.length;i++){
   d[s1.slice(i,i+1)]=s1.charCodeAt(i)-96;
   d[s2.slice(i,i+1)]=s2.charCodeAt(i)-38;
  }
  let n="0123456789";
  for(let i=0;i<10;i++){
    d[n.slice(i,i+1)]=Number(n[i]);
  }
  return d;
}


function battle(myArmy, opposingArmy) {
  let d=mkDict();
  if(myArmy.length>opposingArmy.length){
    return "Opponent retreated";
  }
  else if(myArmy.length<opposingArmy.length){
    return "We retreated";
  } else {
    let a1=myArmy;
    let a2=opposingArmy;
    let s1=0; let s2=0;
    for(let i=0;i<a1.length;i++){
if(d[a1[i]]==undefined){d[a1[i]]=0;}
if(d[a2[i]]==undefined){
  d[a2[i]]=0;
}
       if(d[a1[i]]>d[a2[i]]){s1+=1;}
      
       if(d[a2[i]]>d[a1[i]]){s2+=1;};
    } if(s1>s2){
return "We won";} else if(s1<s2) {
return "We lost";}
    return "It was a tie";
  }
}
// battle("C@T5", "D0G$");
