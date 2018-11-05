function checkVehicleNumber(str){
    var res= /[A-Z]{2} \d{2} [A-Z]{2} \d{4}$/.test(str);
    return res;
}


if(checkVehicleNumber("MH 20 CX 9098dfdf")){
    console.log("Vehicle number is correct");
}else{
    console.log("Vehicle number is incorrect");
}