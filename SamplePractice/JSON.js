var updateAmount=(str)=>{

    //convert JSON string to JavaScript OBject
    var obj=JSON.parse(str); 
   obj.amountDue=10000;
    //console.log(obj);

    //convert JavascriptObject to JSON string
    var JSONstr=JSON.stringify(obj);
    return JSONstr;
};

console.log(updateAmount('{"name":"Alex","admittedOn":"2018-08-31T23:29:58.163Z","amountDue":1000}'));