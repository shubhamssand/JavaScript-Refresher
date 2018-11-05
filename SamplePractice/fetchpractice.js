
fetch('https://api.myjson.com/bins/wdqb0')
  .then(res => res.json())
  .then(json => {
     //   a=JSON.parse(json); 
     let str="";
     for(ele of json){
         str=str+","+ele.illness;
     }
      document.getElementById("demo").innerHTML="People at Metro hospital are having following illness "+str;
    });

  