class surfaceArea{
    constructor(side){
        this.side=side;
    }

    get sArea(){   // getter method to get surface area 
        return 4*this.side;
    }
}

var s1=new surfaceArea(4);
//call to getter
console.log("The surface area of the square is"+" "+ s1.sArea);