/* Array Duplicates
Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.
*/

function findDuplicates(arr) {
  let s=Array.from(new Set(arr.sort((a,b)=>a-b).filter((item,index)=>arr.indexOf(item)<index)));
  return s;
} 
