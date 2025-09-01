/* Tribonacci Sequence
The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.
*/

function tribo(n,first,second,third) {
if(n==0){return first;}
if(n==1){return second;}
if(n==2){return third;}
if(n>2){
return tribo(n-1,first,second,third)+tribo(n-2,first,second,third)+tribo(n-3,first,second,third);}
}
function tribArr(n,first,second,third){
let targ=[];
for(let i=0;i<n;i++){
targ.push(tribo(i,first,second,third));}
return targ;
}

function tribonacciSequence(startSequence, length) {
    if(length==0){ return [];}
    else if(length==1){
      return startSequence.slice(0,1);
    }
    else if(length==2){
      return startSequence.slice(0,2);
    }
    else if(length==3){
      return startSequence;
    }
    else return tribArr(length,startSequence[0],startSequence[1],startSequence[2]);
}
