// res[0].products[0].image
fetch("http://localhost:3000/categories")
.then(res=>res.json())
.then(res=>
    res.forEach(categorie => {
        document.getElementById("CategoriesContainer").innerHTML += `
<div>
    <img src="./assets/images/Product/${categorie.products[0].image}">
</div>
`
    })

    
) 

// document.getElementById("test").innerHTML=`<img src="./assets/images/Product/${res[0].products[0].image}">`

