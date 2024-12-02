function titleCase(str) {
    let arr = str.split(" ");
    //console.log(arr)
    for (let i=0; i < arr.length; i++){
      //console.log(arr[i])
      arr[i]=arr[i].charAt(0).toUpperCase()+arr.slice(1)
  
    }
    return arr.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));