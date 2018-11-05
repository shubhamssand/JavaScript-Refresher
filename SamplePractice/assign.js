function mergeObjects(obj1,obj2,obj3){

    //merge voter information into one object
    var voterInformation=Object.assign({},obj1,obj2,obj3); 

    return voterInformation;
}


var obj=mergeObjects({firstname:'Shubham',lName:'sand', city: 'San Jose'},{voterNum:123065,county:'Santa Clara'},{state:"CA"});

console.log(obj);