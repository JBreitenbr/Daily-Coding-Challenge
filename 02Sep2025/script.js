/* RGB to Hex
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
Make any letters lowercase.
Return a # followed by six characters. Don't use any shorthand values.
*/

function rgbToHex(rgb) {
  let spl=rgb.split(",");
  let r=Number(spl[0].substring(4)).toString(16);
  if(r.length<2){r="0"+r;};
  let g=Number(spl[1]).toString(16);
  if(g.length<2){g="0"+g;};
  let b=Number(spl[2].replace(")","")).toString(16);
  if(b.length<2){b="0"+b;};
  let stri="#"+r+g+b;
  return stri;
}
