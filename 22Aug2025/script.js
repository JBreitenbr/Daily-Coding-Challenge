/* Message Decoder
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.
*/

function isAlpha(ch) {
let cd=ch.charCodeAt(0);  
let arr1=Array.from(new Array(26).keys()).map((item)=>item+65);
let arr2=Array.from(new Array(26).keys()).map((item)=>item+97);
let arr=[...arr1,...arr2];
return arr.includes(cd);
}

function isUpper(ch){
  return ch.toUpperCase()===ch;
}

function isLower(ch){
  return ch.toLowerCase()===ch;
}

function decode(message, shift) {
  let shi=shift<0?shift+26:shift;
  let m=message;
  let stri="";
  for(let i=0;i<m.length;i++){
    let ch=m.charCodeAt(i);
    if(isAlpha(m[i])){
      if(isUpper(m[i])){
        if(ch+26-shi<91){
stri+=String.fromCharCode(ch+26-shi); }
        else stri+=String.fromCharCode(ch-shi);
      }
      if(isLower(m[i])){
        if(ch+26-shi<123){
          stri+=String.fromCharCode(ch+26-shi);}
          else stri+=String.fromCharCode(ch-shi);
        }
      }
     else stri+=m[i];
    }
    return stri;
}
