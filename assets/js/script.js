// Burger menu
document.getElementById('menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Toggle the visibility of the filter menu when the burger icon is clicked
document.getElementById('filter-menu-btn').addEventListener('click', function () {
    const filterMenu = document.getElementById('filter-menu');
    filterMenu.classList.toggle('hidden');
});

function fermepanier(){
    if(document.getElementById('panierid').classList.contains('hidden')){
        document.getElementById('panierid').classList.remove("hidden");
        document.getElementById('panierid').classList.add("flex");
    }
    else {
        
        document.getElementById('panierid').classList.remove("flex");
        document.getElementById('panierid').classList.add("hidden");
  
    }
  }
  
var panairid =document.getElementById("panier1");
var page =document.getElementById("page1");
// Pagination and Product Display
let currentPage = 1;
const itemsPerPage = 6;

function displayProducts() {
    const productContainer = document.getElementById('product-list');
    const productContainer2 = document.getElementById('product-list2');
    productContainer.innerHTML = '';

    fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json")
    .then(res => res.json())
    .then(res => {
        let i = 0;
        res.categories.forEach(element => {
            const productElement = document.createElement('div');
            const productElement2 = document.createElement('div');
            if (i < 6) {
                productElement.classList.add('border', 'p-4', 'rounded-lg', 'shadow-md');
                productElement.innerHTML += `
                    <img src="../assets/images/Product/${element.products[0].image}" alt="${element.products[0].image}" class="mb-4">
                    <h2 class="text-xl font-bold">${element.products[0].title}</h2>
                    <p class="text-gray-700">$${element.products[0].price}</p>
                    <p class="text-gray-500 mb-4">${element.products[0].description}</p>
                    <a href="../views/details.html?=${element.products[0].id}" class="text-orange-500 hover:underline">View Details</a>
                `;
                productContainer.appendChild(productElement);
                // Apply hover animation
                addHoverAnimation(productElement);
                i++;
            } else {
                productElement2.classList.add('border', 'p-4', 'rounded-lg', 'shadow-md');
                productElement2.innerHTML += `
                    <img src="../assets/images/Product/${element.products[0].image}" alt="${element.products[0].image}" class="mb-4">
                    <h2 class="text-xl font-bold">${element.products[0].title}</h2>
                    <p class="text-gray-700">$${element.products[0].price}</p>
                    <p class="text-gray-500 mb-4">${element.products[0].description}</p>
                    <a href="../views/details.html?=${element.products[0].id}" class="text-orange-500 hover:underline">View Details</a>
                `;
                productContainer2.appendChild(productElement2);
                // Apply hover animation
                addHoverAnimation(productElement2);
                i++;
            }
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
}

function addHoverAnimation(element) {
    // Add hover effect on the product card
    element.addEventListener('mouseenter', function() {
        // Scale up the card when mouse enters
        element.style.transform = 'scale(1.05)';
        element.style.transition = 'transform 0.3s ease';
    });

    element.addEventListener('mouseleave', function() {
        // Scale back to original size when mouse leaves
        element.style.transform = 'scale(1)';
        element.style.transition = 'transform 0.3s ease';
    });
}

function prevPage() {
    const productContainer = document.getElementById('product-list');
    const productContainer2 = document.getElementById('product-list2');
    productContainer.classList.remove("hidden");
    productContainer2.classList.add("hidden");
}

function nextPage() {
    const productContainer = document.getElementById('product-list');
    const productContainer2 = document.getElementById('product-list2');
    productContainer2.classList.remove("hidden");
    productContainer.classList.add("hidden");
}

function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json")
    .then(res => res.json())
    .then(res => {
        let filteredProducts = [];
        
        res.categories.forEach(element => {
            const matchedProducts = element.products.filter(product => 
                product.title.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm)
            );
            
            filteredProducts = filteredProducts.concat(matchedProducts);
        });

        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('border', 'p-4', 'rounded-lg', 'shadow-md');
            productElement.innerHTML += `
                <img src="../assets/images/Product/${product.image}" alt="${product.image}" class="mb-4">
                <h2 class="text-xl font-bold">${product.title}</h2>
                <p class="text-gray-700">$${product.price}</p>
                <p class="text-gray-500 mb-4">${product.description}</p>
                <a href="../views/details.html?=${product.id}" class="text-orange-500 hover:underline">View Details</a>
            `;
            productContainer.appendChild(productElement);
            // Apply hover animation
            addHoverAnimation(productElement);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
}
let Mypanier = JSON.parse(localStorage.getItem('ordreToCard')) || [];
document.getElementById('numbrecom').innerText=Mypanier.length;
document.getElementById('numbrecom2').innerText=Mypanier.length;
function filterProducts(number) {
    
    const productContainer = document.getElementById('product-list');
    const productContainer2 = document.getElementById('product-list2');
    productContainer.classList.remove("hidden");
    productContainer2.classList.add("hidden");
    productContainer.innerHTML = '';

    fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json")
    .then(res => res.json())
    .then(res => {
        res.categories[number].products.forEach(products => {
            const productElement = document.createElement('div');
            productElement.classList.add('border', 'p-4', 'rounded-lg', 'shadow-md');
            productElement.innerHTML += `
                <img src="../assets/images/Product/${products.image}" alt="${products.image}" class="mb-4">
                <h2 class="text-xl font-bold">${products.title}</h2>
                <p class="text-gray-700">$${products.price}</p>
                <p class="text-gray-500 mb-4">${products.description}</p>
                <a href="../views/details.html?=${products.id}" class="text-orange-500 hover:underline">View Details</a>
            `;
            productContainer.appendChild(productElement);
            // Apply hover animation
            addHoverAnimation(productElement);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
}

displayProducts();
