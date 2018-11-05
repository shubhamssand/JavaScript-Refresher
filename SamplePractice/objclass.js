class miles{
    constructor(mile,rate,discount){   //class constructor
        this.mile=mile;
        this.rate=rate;
        this.discount=discount;
    }

    calculateAmt(){                       //class method
        return (this.mile*this.rate)-this.discount;
    }
}

let m1 = new miles(100,16,200);         //class instantiation
console.log(m1.calculateAmt());