function checkCity(cities,searchCity){
var i;

    if(typeof(searchCity)=="string"){  //Checking the type==string

        if(cities.includes(searchCity)){ //check if city is present in array
            
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

if(checkCity(["San Jose","Modesto","Santa Cruz"],"Modesto")){
    console.log("The city is available in the list of cities");
}else{
    console.log("City is not present");
}