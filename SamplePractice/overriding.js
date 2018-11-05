function Area(side1,side2){ //constructor function
    this.side1=side1;
    this.side2=side2;
}

Area.prototype.calArea=function(){  //area of rectangle
    return this.side1*this.side2;

}

Area.prototype.calArea=function(){ //overided method area of asquare
    return this.side1*this.side1;

}

var a1=new Area(10,20);

console.log("The area of square is"+ " "+a1.calArea());