function getUserDetails(userId) {
    var users = [{
        userId: 101,
        name: "kiran"
    },
    {
        userId: 102,
        name: "kumar"
    },
    {
        userId: 103,
        name: "Anil"
    }]
    for (var i =0; i < users.length; i++){
        if (users[i].userId==userId)
        return userId=users[i].name;
        
        
    }
}
console.log(getUserDetails(103));


