
function upload(){


    var date = new Date(2013, 0, 2, 11, 10, 5)
    var currentDate = new Date();

    if (currentDate > date){
        uploadedDate= currentDate-date;
        return uploadedDate;
    }

}
console.log(upload());

if (currentDate && date){
    timeDifference = currentDate - date;
    dayDifference = timeDifference/(1000 * 3600 * 24);
    if (dayDifference <= 1){
       return dayDifference = dayDifference + "" + "few minutes ago";
    }
    else {
       return dayDifference = dayDifference + "" + "few hours ago";
    }
    
}
}
console.log(upload());
}
if (currentDate.getMonth() && date.getMonth()){
   monthDifference = currentDate.getMonth() - date.getMonth();
   return monthDifference;
   }

   if (currentDate && date){
    timeDifference = currentDate - date;
    dayDifference = timeDifference/(1000 * 3600 * 24);
    return dayDifference;
   
   if (dayDifference < 1) {
       return dayDifference = dayDifference + "" + "few minutes ago";
   }
    use this keyword and try it later