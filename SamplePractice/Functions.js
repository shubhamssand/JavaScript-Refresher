function checkLength(str){
    if((str.length)>4){
        return true;
    }
    else{
        return false;
    }
    

}
var sortASCII=(str)=>{
    if(checkLength(str)){
        return str.split("").sort().join("");
    }
    else{
        return str;
    }
      
         
    
      
};

var inOrder=sortASCII("San Jose");
console.log(inOrder);

