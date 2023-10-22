var date = new Date(2022, 0, 2, 6, 10, 5)
    var currentDate = new Date(); 
     var yearDifference = currentDate.getFullYear() - date.getFullYear();
     var monthDifference = currentDate.getMonth() - date.getMonth();
     var dateDifference = currentDate.getDate() - date.getDate();
     var dayDifference = dateDifference/(1000 * 3600 * 24);
     var hourDifference = currentDate.getHours() - date.getHours();
     var hoursDifference = hourDifference/(3600);

     var minutesDifference = currentDate.getMinutes() - date.getMinutes();
     var secondsDifference = currentDate.getSeconds() - date.getSeconds();

    console.log(date);
    console.log(currentDate);
    console.log(yearDifference +" " + "years ago");
    console.log(monthDifference +" " + "months ago");
    console.log(dayDifference.toExponential(0) + " " + +"days ago");
    console.log(hoursDifference + " " + "hours ago");
    console.log(minutesDifference +" " + "minutes ago");
    console.log(secondsDifference +" " + "seconds ago");