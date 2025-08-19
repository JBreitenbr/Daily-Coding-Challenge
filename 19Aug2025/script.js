/* Sum of Squares
Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number. */

function sumOfSquares(n) {
  let arr=Array.from(new Array(n+1).keys()).slice(1);
  return arr.map((item)=>item*item).reduce((a,b)=>a+b,0);
}

