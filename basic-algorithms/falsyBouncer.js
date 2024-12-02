function bouncer(arr) {
    let result = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i] == false){
      result.push(arr[i]);
    }
    }
    return result;
  }
  
  console.log(bouncer([0, "ate", " ", false, 9]));