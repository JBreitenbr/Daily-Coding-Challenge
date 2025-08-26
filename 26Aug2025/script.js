/* Reverse Parenthesis
Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

All characters inside each pair of parentheses should be reversed.
Parentheses should be removed from the final result.
If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
Assume all parentheses are evenly balanced and correctly nested.
*/

/* not my own clue, found it on 'https://stackoverflow.com/questions/42254365/reverseparentheses-codefights'
*/

function reverseOnce(s){
      var regexp = /\(([^()]*)\)/i;
          var subStr = regexp.exec(s)[1];
              subStr = subStr.split('').reverse().join('');
                  return s.replace(regexp, subStr)
                  }

function decode(s) {
if (s.includes('(')){
        return decode(reverseOnce(s));
            } else {     
    return s;
    }
}
