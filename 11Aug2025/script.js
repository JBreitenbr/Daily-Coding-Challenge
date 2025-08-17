/* Vowel Balance
Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character. */

function isBalanced(s) {
  let v="aeiou";
  let str=s.toLowerCase();
  let l=str.length;
  let s1=str.slice(0,Math.floor(l/2)).split("");
  let s2=str.slice(Math.ceil(l/2)).split("");
  let sum1=0;
  let sum2=0;
  for(let i=0;i<s1.length;i++){
    if(v.includes(s1[i])){
      sum1+=1;
    }
  }
  for(let i=0;i<s2.length;i++)
  {
    if(v.includes(s2[i])){
      sum2+=1;
    }
  }
  return sum1==sum2;
}
