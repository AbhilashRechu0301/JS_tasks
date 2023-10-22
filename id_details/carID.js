var car={
    name:"BMW",
    Model: "A5",
    color: "Red",
    cost:500000,
    time: 60,
    CarId:1375,
    start:function(seconds){
        if(seconds<car.time){
        car.time=car.time-seconds;
        }
        else{console.log("engine is broke")}

    },
    stop:function(seconds){
        car.time=car.time+seconds;
    },
    drive:function(){
        console.log("Engine is in motion")
    },
profile:function(){
    console.log(car.name+"\t"+car.Model+"\t"+car.CarId)
}
}
car.start(80);
console.log(car.time);
car.stop(45);
console.log(car.time);

