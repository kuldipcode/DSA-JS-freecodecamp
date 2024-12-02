function frankenSplice(arr1, arr2, n) {
    arr2.splice(n,0,...arr1)
    return arr2;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));