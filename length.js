function findLongestWordLength(str) {
    let arr = str.split(" ");
    let result=[];
   for(let i =0; i<arr.length;i++){
    result.push(arr[i].length);
   }
   console.log(result);
   return Math.max(...result);
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));