function mergeWithPattern(str1,str2){
    var str3=str1+" "+str2;
    let arr=str3.split(" ");

    arr.shift();
    var patternString=arr.join("*");
    return patternString;
}


console.log(mergeWithPattern("Apple is sweet","and red in colour"));