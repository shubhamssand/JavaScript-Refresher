var a;
fetch('http://www.colr.org/json/colors/random/7')
  .then(response => response.json())
  .then(json => {
      console.log(json.colors);
    //   a=JSON.parse(json); 
      document.getElementById("demo").innerHTML=json.colors.map(col => col.hex);
    });

  