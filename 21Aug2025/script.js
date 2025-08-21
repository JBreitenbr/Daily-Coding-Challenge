/* Mile Pace
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed. */

function milePace(miles, duration) {
  let min=duration.length<=5?duration.substring(0,2):duration.substring(0,3);
  let sec=duration.length<=5?duration.substring(3,5):duration.substring(4,6);
  let dur_m=(60*Number(min)+Number(sec))/miles;
  let min_m=Math.floor(dur_m/60);
  let sec_m=dur_m-60*min_m;
  min_m=min_m<10?"0"+min_m.toString():min_m.toString();
  sec_m=sec_m<10?"0"+sec_m.toString():sec_m.toString().substring(0,2);
  let pace_per_mile=min_m+":"+sec_m;
  return pace_per_mile;
}
