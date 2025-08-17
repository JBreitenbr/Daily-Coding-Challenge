/* Anagram Checker
Given two strings, determine if they are anagrams of each other (contain the same characters in any order).
Ignore casing and white space. */

function areAnagrams(str1, str2) {
  let stri1=str1.toLowerCase().split("").sort().join("");
  let stri2=str2.toLowerCase().split("").sort().join("");
  return stri1===stri2;
}
