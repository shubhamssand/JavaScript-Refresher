function checkIfValid(str) {
    var regex1 = /^[a-zA-Z]/,regex2 = /[^@][a-zA-Z]/,regex3 = /[a-zA-Z][^@]/;
    try{
    if (regex1.test(str)) {
      throw new Error("Invalid String");
    } else if (regex2.test(str)) {
        throw new Error("Invalid String");
    } else if (regex3.test(str)) {
        throw new Error("Invalid String");

    } else {
      console.log("The string matched successfully");
    }
    }catch(e){
        console.log("In catch.."+e.message);
    }
    finally{
        console.log("Code executed successfully");
    }
  
  
           
  }
     

  checkIfValid("@e@T@/U");                                                                      
  