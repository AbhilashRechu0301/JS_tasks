var user = {
    userName:"1",
    password: "name",
    getEmployee: function(a, b) {
      return this.userName + "\t " + this.password +"\t " + a + "\t " + b;
    }
}
  var user1 = {
    userName:"2",
    password: "name2",
  }

  var arr = [5,6];
  /*
    var arr = [5,6];
    var getEmployee = user.getEmployee.bind(user1);
  console.log(getEmployee());
  */
  console.log(user.getEmployee.call(user, 5, 6));
  console.log(user.getEmployee.apply(user, [5, 6]));
  console.log(user.getEmployee.bind(user, 5, 6)());
  console.log(user.getEmployee.bind(user).call(this, [5], [6]));
  console.log(user.getEmployee.bind(user).apply(this, [5, 6]));
  
  