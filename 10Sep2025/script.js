/* Array Diff
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.
*/

function arrayDiff(arr1, arr2) {
  let arr=[];
  for(let i=0;i<arr1.length;i++){
    if(!arr2.includes(arr1[i])){
      arr.push(arr1[i]);
    }
  }
  for(let i=0;i<arr2.length;i++){
    if(!arr1.includes(arr2[i])){
      arr.push(arr2[i]);
    }
  }
  return arr.sort();
}
