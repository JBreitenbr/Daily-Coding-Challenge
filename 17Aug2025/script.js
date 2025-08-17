function findTarget(arr, target) {
  let res=[];
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]+arr[i+1]==target){
      res.push(i);
      res.push(i+1);
      return res;
    }
  }
  return "Target not found";
}
