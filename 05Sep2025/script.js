/* IPv4 Validator
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.
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

function isValidIPv4(ipv4) {
  let ind=indices(ipv4,".");
  let spl=ipv4.split(".").map((i)=>Number(i));
  let flt=ipv4.split(".").filter((i)=>i!="");
  let lz=ipv4.split(".").filter((i)=>i!="0" && i.substring(0,1)=="0");
  if(ind.length!=3 || flt.length!=4 || lz.length){
    return false;
  } else {
    let ch=spl.filter((i)=>i>=0 && i<256);
    if(ch.length!=4){
      return false;
    }
  }
  return true;
}
