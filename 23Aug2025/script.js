/* Unnatural Prime
Given an integer, determine if that number is a prime number or a negative prime number.

A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
A negative prime number is the negative version of a positive prime number.
1 and 0 are not considered prime numbers.
*/

function isUnnaturalPrime(n) {
   if(n==0||n==1||n==-1){
     return false;
   }
   let s;
   if(n<0){
     s=-n;
   }
   else s=n;
   for(let i=2;i<Math.floor(Math.sqrt(s))+2;i++){
     if(s%i==0){
       return false;
     }
   }
   return true;
}
