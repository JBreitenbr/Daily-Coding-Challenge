/* Roman Numeral Parser
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted.
Otherwise, values are added.
*/

function parseRomanNumeral(numeral) {
const values = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
          ]);
    let result = 0,
        current, previous = 0;
          for (const char of numeral.split("").reverse()) {
current = values.get(char);
if (current >= previous) {result += current; } else {
result -= current;}
previous = current;}
return result;
}
