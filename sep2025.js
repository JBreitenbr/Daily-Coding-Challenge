/* 19-09-2025: Photo Storage
Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

1 gigabyte equals 1000 megabytes.
Return the number of whole photos the drive can store.
*/

function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {

  return Math.floor(hardDriveSizeGb*1000/photoSizeMb);
}

/* 20-09-2025: File Storage
Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:

The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
Return the number of whole files the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.
*/

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  let uObj={"B":1,"KB":1000,"MB":1000000,"GB":1000000000};
  let fS=fileSize*uObj[fileUnit];
  let dS=driveSizeGb*uObj["GB"];
  return Math.floor(dS/fS);
}

/* 21-09-2025: Video Storage
Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:

The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
If not given one of the video units above, return "Invalid video unit".
The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
If not given one of the hard drive units above, return "Invalid drive unit".
Return the number of whole videos the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
1 TB	1000 GB
For example, given 500, "MB", 100, and "GB" as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.
*/

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
 let uObj={"B":1,"KB":1000,"MB":1000000,"GB":1000000000,"TB":1000000000000};
 let vS=videoSize*uObj[videoUnit];
 let dS=driveSize*uObj[driveUnit];
 if(!["KB","MB","GB"].includes(videoUnit)){
   return "Invalid video unit";
 };
if(!["GB","TB"].includes(driveUnit)){
  return "Invalid drive unit";
}
  return Math.floor(dS/vS);
}

/* 22-09-2025: Digits vs Letters
Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.
*/

function digitsOrLetters(str) {
  let low="abcdefghojklmnopqrstuvwxyz";
  let up=low.toUpperCase();
  let alph=(low+up).split("");
  let digs="0123456789".split("");
  let c1=0;
  let c2=0;
  let a=str.split("");
  for(let i=0;i<a.length;i++){
    if(alph.includes(a[i])){
      c1+=1;
    } if(digs.includes(a[i])){
      c2+=1;
    }
  }
  return c1>c2?"letters":c1<c2?"digits":"tie";
}

/* 23-09-2025: String Mirror
Given two strings, determine if the second string is a mirror of the first.

A string is considered a mirror if it contains the same letters in reverse order.
Treat uppercase and lowercase letters as distinct.
Ignore all non-alphabetical characters.
*/

function isMirror(str1, str2) {
  let spl1=str1.split(/[" ",-]/).map((item)=>item.replace("!",""));
  let spl2=str2.split(/[" ",-]/).map((item)=>item.replace("!",""));
  let p=[];
  for(let i=spl2.length-1;i>=0;i--){
    p.push(spl2[i].split("").reverse().join(""));
  }
  return p.join(" ")==str1;
}

/* 24-09-2025: Perfect Square
Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.
*/

function isPerfectSquare(n) {
  let r=Math.sqrt(n);
  let f=Math.floor(r);
  return r==f;
}

/* 25-09-2025: 2nd Largest
Given an array, return the second largest distinct number.
*/

function secondLargest(arr) {
  let s=Array.from(new Set(arr)).sort((a,b)=>a-b);
  console.log(s);
  return s[s.length-2];
}

/* 26-09-2025: Caught Speeding
Given an array of numbers representing the speed at which vehicles were observed traveling, and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, followed by the average amount beyond the speed limit of those vehicles.

If there were no vehicles speeding, return [0, 0].
*/

function speeding(speeds, limit) {
  let flt=speeds.filter((item)=>item > limit);
  let av=flt.reduce((a,b)=>(a+b)-limit,0)/flt.length;
  if(flt.length>0){
  return [flt.length,av];
  } else {
    return [0,0];
  }
}

/* 27-09-2025: Spam Detector
Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:

A represents the country code and can be any number of digits.
BBB represents the area code and will always be three digits.
CCC and DDDD represent the local number and will always be three and four digits long, respectively.
Determine if it's a spam number based on the following criteria:

The country code is greater than 2 digits long or doesn't begin with a zero (0).
The area code is greater than 900 or less than 200.
The sum of first three digits of the local number appears within last four digits of the local number.
The number has the same digit four or more times in a row (ignoring the formatting characters).
*/

function isSpam(number) {
  let p="123456789".split("");
  let nstr=number.split("").filter((item)=>p.includes(item)).join("");
  for(let i=0;i<p.length;i++)
  {
    let cnt=nstr.split(p[i]).length-1;
    if(cnt>3){
      return true;
    }
  }
  let spl=number.split(" ");
  if(spl[0].slice(0,2)!="+0" || spl[0].length>3){
    return true;
  }
  let ac=spl[1].slice(1,4);
  if(Number(ac)<200 || Number(ac)>900) {
    return true;
  }

  let ln1=spl[2].split("-")[0];
  let ln2=spl[2].split("-")[1];
  let sm=ln1.split("").map((item)=>Number(item)).reduce((a,b)=>a+b,0).toString();
  if(ln2.split("").includes(sm)){
    return true;
  }
  return false;
}
isSpam("+0 (200) 234-0182");

