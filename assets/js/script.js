// res[0].products[0].image
fetch("http://localhost:3000/categories")
.then(res=>res.json())
.then(res=>document.getElementById("test").innerHTML=`<img src="${res[0].products[0].image}">`)    
