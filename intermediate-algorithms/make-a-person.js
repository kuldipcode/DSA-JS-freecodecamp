const Person = function(first, last) {
    let firstname = first;
    let lastname = last;
  
      this.getFirstName= function() {
        return firstname;
      };
      this.getLastName= function() {
        return lastname;
      };
      this.getFullName= function() {
        return firstname +" " +lastname;
      };
      this.setFirstName= function(newFirst) {
        firstname = newFirst;
      };
      this.setLastName= function(newLast) {
        lastname = newLast;
      };
      this.setFullName= function(newFirst, newLast) {
        firstname = newFirst;
        lastname = newLast;
      }
  };
  
  let p = new Person('Bob', 'Ross');
  console.log(p.getFirstName())