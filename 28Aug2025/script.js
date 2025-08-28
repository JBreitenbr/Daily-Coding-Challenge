/* Second Best
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.
*/

function getLaptopCost(laptops, budget) {
  let s=new Set(laptops);
  let arr=Array.from(s).sort(); 
  let sl=arr.slice(arr.length-2,arr.length-1);
  let flt=arr.filter((item)=>item<=budget);
  if(budget>=sl){
    return sl;
  } else {
    if(flt){
      return flt.slice(flt.length-1);
    } else return 0;
  }
}
// getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)
