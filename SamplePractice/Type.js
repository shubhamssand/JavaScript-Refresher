function computeSimpleInterest(p,r,t){
    let principal=Number(p);   
    let rate=Number(r);
    let time=Number(t);           //Explicit conversion from string to number

    let si=(principal*rate*time)/100;

    return si;


}

var si=computeSimpleInterest(1000,10,"5"); //typeof si=Number

/// Implicit conversion from number to string
console.log("The Simple interest to be paid is"+" "+si); 