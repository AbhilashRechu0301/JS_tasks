
    function upload(){
    var date = new Date(2022, 5, 9, 11, 10, 5)
    var currentDate = new Date();   
     var timeDifference = currentDate - date;
     var dayDifference = timeDifference/(1000 * 3600 * 24);
     return dayDifference
     }
     console.log(upload());



