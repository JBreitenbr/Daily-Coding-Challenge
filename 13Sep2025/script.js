/* Missing Numbers
Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

The given array may be unsorted and may contain duplicates.
The returned array should be in ascending order.
If no integers are missing, return an empty array.
*/

function findMissingNumbers(arr) {
  let s=Array.from(new Set(arr)).sort((a,b)=>a-b);
  let b1=s[0];
  let b2=s[s.length-1];
  let r=[...Array(b2-b1+1).keys().map((i)=>i+b1)];
  console.log(r);
  let res=[];
  for(let i=0;i<r.length;i++)
  {
    if(!s.includes(r[i])){
      res.push(r[i]);
    }
  } 
    return res;
}
