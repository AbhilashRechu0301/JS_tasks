function timeZero(min){
    return min <= 9 ? '0' + min : min;
}
function time(){
var date = new Date();

var d = timeZero(date.getDate()) + "/" + timeZero((date.getMonth()) + 1) + "/" + date.getFullYear();
var t = timeZero(date.getHours()) + ":" + timeZero(date.getMinutes()) +":"+ timeZero(date.getSeconds());
return d + " " + t;
}

console.log(time());
