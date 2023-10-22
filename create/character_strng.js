
var year="happy new year 2023";

function findOccurance(year, character){
    var counter = 0;
    
    for (var i=0; i< year.length; i++){
        
    if (year[i] == character){
        counter++;
    }
    
}
return counter;
}
console.log(findOccurance(year, "p"));