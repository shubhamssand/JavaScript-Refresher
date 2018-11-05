class Car{
constructor(name,make){
    this.name=name;
    this.make=make;
}
    break(){
        console.log("Car is braking");
    }
    drive(){
        console.log("Car is moving");
    }
}
class LMV extends Car{  //LMV extends car-->inheritance
    constructor(name,make){
        super(name,make);
    }

    sportsMode(){
        console.log("Car is in sports mode");
    }
}

let c=new LMV("Accord","Honda");
c.drive();
c.sportsMode();