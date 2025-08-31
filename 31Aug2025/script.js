/* Hex Generator
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.
Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"
*/

function genRand(){
  let c1=Math.floor(Math.random()*255);
  let c2=Math.floor(Math.random()*255);
  let maxi=Math.max(c1,c2);
  let c3=Math.floor(Math.random()*(255-maxi))+maxi+1;
  let arr=[c1,c2,c3];
  return arr;
}

function generateHex(color) {
  let rCol;
  let hCol;
  if(color!=="red"&&color!=="green"&&color!=="blue"){
  return "Invalid color";
  }
  if(color=="red"){
    rCol=genRand();
  hCol=rCol[2].toString(16)+rCol[0].toString(16)+rCol[1].toString(16);}
  if(color=="green"){
    rCol=genRand();
    hCol=rCol[0].toString(16)+rCol[2].toString(16)+rCol[1].toString(16);
  }
  if(color=="blue"){
    rCol=genRand();
    hCol=rCol[1].toString(16)+
 rCol[0].toString(16)+rCol[2].toString(16);}
  return hCol;
}
