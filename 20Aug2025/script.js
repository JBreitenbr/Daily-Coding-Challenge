/* 3 Strikes
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
*/

function squaresWithThree(n) {
  let r=Array.from(new Array(n).keys()).slice(1);
  let m=r.map((item)=>(item*item).toString()).filter((item)=>item.includes('3'));
  return m.length;
}
