
fetch("http://localhost:3000/1")
.then(res=>res.json())
.then(res=>document.getElementById("test").innerHTML = `<img src="${res.products[0].image}">`)    