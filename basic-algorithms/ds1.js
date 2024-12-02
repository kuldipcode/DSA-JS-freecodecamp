let users = {
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if ('Alan','Jeff','Sarah','Ryan' in userObj){
      return true
    }
   return false;
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));