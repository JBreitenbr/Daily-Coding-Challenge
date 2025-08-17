/* Fibonacci Sequence
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.*/

function fibo(n,first,second) {
     if(n==0){
       return first;
      }
     if(n==1){
       return second;
      }
     if(n>1){
        return fibo(n-1,first,second)+fibo(n-2,first,second);
     }
}

function fibArr(n,first,second){
  let targ=[];
  for(let i=0;i<n;i++){
    targ.push(fibo(i,first,second));
  }
  return targ;
}

function fibonacciSequence(startSequence, length) {
  if(length==0)
  { return [];}
  else if(length==1){
    return startSequence.slice(0,1);
  }
  else if(length==2){
    return startSequence;
  }
  else return fibArr(length,startSequence[0],startSequence[1]);
}
