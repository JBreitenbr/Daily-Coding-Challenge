/* Screen Time
Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

If any single day has 10 hours or more, it's too much.
If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
If the average of the seven days is greater than or equal to 6 hours, it's too much.
*/

function tooMuchScreenTime(hours) {
  let av=[];
  let h=hours;
  for(let i=0;i<h.length-2;i++){
   av.push(1/3*(h[i]+h[i+1]+h[i+2]));
  }
  let r=h.reduce((a,b)=>a+b,0)/h.length;
  if(h.filter((i)=>i>=10).length>0||av.filter((i)=>i>=8).length>0||r>=6){return true;}
  return false;
}
