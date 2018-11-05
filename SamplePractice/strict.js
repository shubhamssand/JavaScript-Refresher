'use strict';

var x=20;

function checkIfDiscountApplicable(obj1,obj1,obj2){
    if(obj1.university=="SJSU" && obj1.degree=="graduate"){
            if(obj2.year>2017){
                console.log("discount is applicable");
            }
            else{
                console.log("discount is not applicable");
            }
    }
    else{
        console.log("discount is not applicable");
    }

}

ComputeMultiply({university:"SJSU",city:"San Jose"},{degree:graduate},{year:2018});