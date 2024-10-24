function mutation(arr) {
    let target = arr[0].toLowerCase();
    let test = arr[1].toLowerCase();

           for(let j = 0;j<test.length;j++){
            if (target.indexOf(test[j])== -1){
                return false;
            }
        }
            return true;

        


  }
  
  console.log(mutation(["hello", "he"]));