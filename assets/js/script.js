// res[0].products[0].image


//document.getElementById("test").innerHTML=`<img src="./assets/images/Product/${res[0].products[0].image}">`



let currentPage = 1;
const itemsPerPage = 6;

function displayProducts() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

  
fetch("http://localhost:3000/categories")
.then(res=>res.json())
.then(res =>{
   
      for (let i = 0; i < 2; i++) {
        const productElement = document.createElement('div');
        productElement.classList.add('border', 'p-4', 'rounded-lg', 'shadow-md');
        productElement.innerHTML += `
         <img src="../assets/images/Product/${res[i].products[0].image}" alt="${res[i].products[0].image}" class="mb-4">
            <h2 class="text-xl font-bold">${res[i].products[0].title}</h2>
            <p class="text-gray-700">$${res[i].products[0].price}</p>
            <p class="text-gray-500 mb-4">${res[i].products[0].description}</p>
            <a href="product.html?id=${res[i].products[0].id}" class="text-orange-500 hover:underline">View Details</a>
        
        `;
        productContainer.appendChild(productElement);
       
    console.log(res[i].products[0].image)
    
        
      }

    }
)


// cat.products[0].image
    // Update pagination controls visibility
    // document.getElementById('prev-page').style.visibility = currentPage > 1 ? 'visible' : 'hidden';
    // document.getElementById('next-page').style.visibility = (currentPage * itemsPerPage) < filteredProducts.length ? 'visible' : 'hidden';
}
function filterProducts(number) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    // productContainer.innerHTML = '';
    fetch("http://localhost:3000/categories")
    .then(res=>res.json())
    .then(res =>
       
        res[number].products.forEach(products => {
            const productElement = document.createElement('div');
        productElement.classList.add('border', 'p-4', 'rounded-lg', 'shadow-md');
        productElement.innerHTML += `
         <img src="../assets/images/Product/${products.image}" alt="${products.image}" class="mb-4">
            <h2 class="text-xl font-bold">${products.title}</h2>
            <p class="text-gray-700">$${products.price}</p>
            <p class="text-gray-500 mb-4">${products.description}</p>
            <a href="product.html?id=${products.id}" class="text-orange-500 hover:underline">View Details</a>
        
        `;
        productContainer.appendChild(productElement);
    
})
 

          
           
        
    
    
    )
    



   
}



displayProducts()
filterProducts(1)