/* Targeted Sum
Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. 
Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.
The returned array should have the indices in ascending order. */

function findTarget(arr, target) {
  let res=[];
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]+arr[i+1]==target){
      res.push(i);
      res.push(i+1);
      return res;
    }
  }
  return "Target not found";
}
