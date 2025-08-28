/* Unorder of Operations
Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

Valid operators are +, -, *, /, and %.
*/

function evaluate(numbers, operators) {
  let op=Array(numbers.length).fill(operators).flat().slice(0,numbers.length-1);
  let n=numbers;
  let stri=n[0]+op[0]+n[1];
  let val=eval(stri);
  for(let i=1;i<op.length;i++){
    let ex=val.toString()+op[i]+n[i+1];
    val=eval(ex);
  }
  return val;
}
