/* 01-10-2025: Binary to Decimal
Given a string representing a binary number, return its decimal equivalent as a number.

A binary number uses only the digits 0 and 1 to represent any number. To convert binary to decimal, multiply each digit by a power of 2 and add them together. Start by multiplying the rightmost digit by 2^0, the next digit to the left by 2^1, and so on. Once all digits have been multiplied by a power of 2, add the result together.

For example, the binary number 101 equals 5 in decimal because:

1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 4 + 0 + 1 = 5
*/

function toDecimal(binary) {
  let dec=binary.split("").reverse().map((item,index)=>Number(item)*Math.pow(2,index)).reduce((a,b)=>a+b,0);
  return dec;
}
toDecimal("1010")

/* 02-10-2025: Decimal to Binary
Given a non-negative integer, return its binary representation as a string.
*/

function toBinary(decimal) {
  return decimal.toString(2);
}

/* 03-10-2025: P@ssw0rd Str3ngth!
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.
*/

function checkStrength(password) {
  let pw=password;
  let sp=["!","@","#","$","%","^","&","*"];
  let n="0123456789".split("");
  let u=pw.split("").filter((item)=>item.toUpperCase()==item && !n.includes(item) && !sp.includes(item)).length;
  let l=pw.split("").filter((item)=>item.toLowerCase()==item && !n.includes(item) && !sp.includes(item)).length;
  let c1=pw.length>=8;
  let c2=u>=1 && l>=1;
  let c3=pw.split("").filter((item)=>n.includes(item)).length>0;
  let c4=pw.split("").filter((item)=>sp.includes(item)).length>0;
  let arr=[c1,c2,c3,c4];
  let c=[c1,c2,c3,c4].filter((item)=>item).length;
  return c<2?"weak":c<4?"medium":"strong";
}
checkStrength("pass!!!");

/* 04-10-2025: Space Week Day 1: Stellar Classification
October 4th marks the beginning of World Space Week. The next seven days will bring you astronomy-themed coding challenges.

For today's challenge, you are given the surface temperature of a star in Kelvin (K) and need to determine its stellar classification based on the following ranges:

"O": 30,000 K or higher

"B": 10,000 K - 29,999 K

"A": 7,500 K - 9,999 K

"F": 6,000 K - 7,499 K

"G": 5,200 K - 5,999 K

"K": 3,700 K - 5,199 K

"M": 0 K - 3,699 K

Return the classification of the given star.
*/

function classification(temp) {
  return temp>=30000?"O":temp>=10000?"B":temp>=7500?"A":temp>=6000?"F":temp>=5200?"G":temp>=3700?"K":"M";
}

/* 05-10-2025: Space Week Day 2: Exoplanet Search
For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
Characters 0-9 correspond to luminosity levels 0-9.
Characters A-Z correspond to luminosity levels 10-35.
A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.
*/

function hasExoplanet(readings) {
  let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let arr=s.map((item,index)=>index);
  const res = {};
  s.forEach((key, index) => {
      res[key] = arr[index];
      });
  let avg=readings.split("").map((item)=>res[item]).reduce((a,b)=>a+b,0)/readings.length;
  let flt=readings.split("").filter((item)=>res[item]<=0.8*avg);
  return flt.length>0;
}
hasExoplanet("665544554")

/* 06-10-2025: Space Week Day 3: Phone Home
For day three of Space Week, you are given an array of numbers representing distances (in kilometers) between yourself, satellites, and your home planet in a communication route. Determine how long it will take a message sent through the route to reach its destination planet using the following constraints:

The first value in the array is the distance from your location to the first satellite.
Each subsequent value, except for the last, is the distance to the next satellite.
The last value in the array is the distance from the previous satellite to your home planet.
The message travels at 300,000 km/s.
Each satellite the message passes through adds a 0.5 second transmission delay.
Return a number rounded to 4 decimal places, with trailing zeros removed.
*/

function sendMessage(route) {
  let res=(route.length-1)*0.5;
  let d=route.reduce((a,b)=>a+b,0)/300000;
  let dur=Math.round(10000*(res+d));
  return dur/10000;
}
sendMessage([1000000, 500000000, 1000000]);

/* 07-10-2025: Space Week Day 4: Landing Spot
In day four of Space Week, you are given a matrix of numbers (an array of arrays), representing potential landing spots for your rover. Find the safest landing spot based on the following rules:

Each spot in the matrix will contain a number from 0-9, inclusive.
Any 0 represents a potential landing spot.
Any number other than 0 is too dangerous to land. The higher the number, the more dangerous.
The safest spot is defined as the 0 cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the lowest total danger.
Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
Return the indices of the safest landing spot. There will always only be one safest spot.
For instance, given:

[
  [1, 0],
  [2, 0]
]
Return [0, 1], the indices for the 0 in the first array.
*/

function findLandingSpot(matrix) {
  let m=matrix;
  let l=m.length;
  let p=[];
  for(let i=0;i<l;i++){
    for(let j=0;j<l;j++){
      if(m[i][j]==0){
        p.push([i,j]);
      }
    }
  }
  for(let k=0;k<p.length;k++){ let sm=0;
    if(p[k][0]>0){
        sm+=m[p[k][0]-1][p[k][1]];
     } 
    if(p[k][0]<l-1){
        sm+=m[p[k][0]+1][p[k][1]];
      }
    if(p[k][1]>0){
      sm+=m[p[k][0]][p[k][1]-1];
    }
    if(p[k][1]<l-1){
      sm+=m[p[k][0]][p[k][1]+1];
    }
    p[k].push(sm);
  }
  let q=p.sort((a,b)=>a[2]-b[2]);
  let r= q[0];
  let res=[];
  res.push(r[0]);
  res.push(r[1]);
  return res;
}
findLandingSpot([[1,0],[2,0]]);
//findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]);

/* 08-10-2025: Space Week Day 5: Goldilocks Zone
For the fifth day of Space Week, you will calculate the "Goldilocks zone" of a star - the region around a star where conditions are "just right" for liquid water to exist.

Given the mass of a star, return an array with the start and end distances of its Goldilocks Zone in Astronomical Units.

To calculate the Goldilocks Zone:

Find the luminosity of the star by raising its mass to the power of 3.5.
The start of the zone is 0.95 times the square root of its luminosity.
The end of the zone is 1.37 times the square root of its luminosity.
Return the distances rounded to two decimal places.
For example, given 1 as a mass, return [0.95, 1.37].
*/

function goldilocksZone(mass) {
  let lum=Math.pow(mass,3.5);
  let low=0.95*Math.sqrt(lum);
  let high=1.37*Math.sqrt(lum); 
  let zone=[Math.round(100*low)/100,Math.round(100*high)/100];
  return zone;
}
goldilocksZone(0.5);

/* 09-10-2025: Space Week Day 6: Moon Phase
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

"New": days 1 - 7
"Waxing": days 8 - 14
"Full": days 15 - 21
"Waning": days 22 - 28
After day 28, the cycle repeats with day 1, a new moon.

Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
You will not be given any dates before the reference date.
Return the correct phase as a string.
*/

function calculateDays(startDate, endDate) {
   let start = new Date(startDate);
   let end = new Date(endDate);
   let timeDifference = end - start;
   let daysDifference = timeDifference / (1000 * 3600 * 24);
   return daysDifference;
  }

function moonPhase(dateString){
  let diff=calculateDays("2000-01-06",dateString);
  let s=(diff+1)%28;
  return s<8?"New":s<15?"Waxing":s<22?"Full":"Waning";
}
moonPhase("2000-01-13");

/* 10-10-2025: Space Week Day 7: Launch Fuel
For the final day of Space Week, you will be given the mass in kilograms (kg) of a payload you want to send to orbit. Determine the amount of fuel needed to send your payload to orbit using the following rules:

Rockets require 1 kg of fuel per 5 kg of mass they must lift.
Fuel itself has mass. So when you add fuel, the mass to lift goes up, which requires more fuel, which increases the mass, and so on.
To calculate the total fuel needed: start with the payload mass, calculate the fuel needed for that, add that fuel to the total mass, and calculate again. Repeat this process until the additional fuel required is less than 1 kg, then stop.
Ignore the mass of the rocket itself. Only compute fuel needed to lift the payload and its own fuel.
For example, given a payload mass of 50 kg, you would need 10 kg of fuel to lift it (payload / 5), which increases the total mass to 60 kg, which needs 12 kg to lift (2 additional kg), which increases the total mass to 62 kg, which needs 12.4 kg to lift - 0.4 additional kg - which is less 1 additional kg, so we stop here. The total mass to lift is 62.4 kg, 50 of which is the initial payload and 12.4 of fuel.

Return the amount of fuel needed rounded to one decimal place.
*/

function launchFuel(payload) {
  let pl=[payload];
  let fuel=[pl[0]/5];
  pl.push(fuel[0]+pl[0]);
  fuel.push(pl[1]/5);
  for(let i=1;i<5;i++){
    pl.push(fuel[i]+pl[0]);
    fuel.push(pl[i+1]/5);
  }
  for(let i=0;i<fuel.length;i++){
    if(fuel[i+1]-fuel[i]<1){
      return Math.round(10*fuel[i+1])/10;
    }
  }
  return payload;
}
launchFuel(243);

/* 11-10-2025: Hex to Decimal
Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.

Hexadecimal is a number system that uses 16 digits:

0-9 represent values 0 through 9.
A-F represent values 10 through 15.
Here's a partial conversion table:

Hexadecimal	Decimal
0	0
1	1
...	...
9	9
A	10
...	...
F	15
10	16
...	...
9F	159
A0	160
...	...
FF	255
100	256
The string will only contain characters 0–9 and A–F.
*/

function hexToDecimal(hex) {
   let d={"A":10,"B":11,"C":12,"D":13,"E":14,"F":15,"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9};
   let h=hex.split("").reverse().map((item)=>d[item]);
   let c=h.map((item,index)=>Math.pow(16,index)*item).reduce((a,b)=>a+b,0);
   return c;
}
hexToDecimal("2E");
