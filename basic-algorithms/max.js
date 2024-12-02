function largestOfFour(arr) {
    let maxArr = []
    for (let i=0;i<arr.length;i++){
      let maxNums = Math.max(...arr[i])
         maxArr.push(maxNums);
    }
    let maxOfAll = Math.max(...maxArr);
    let res;
    for (let j=0;j<arr.length;j++){
       if (arr[j].includes(maxOfAll)){
       res = arr[j];
       }
  }
   return res;
   
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));