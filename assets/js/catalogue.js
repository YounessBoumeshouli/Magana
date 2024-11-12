const products = [
    { id: 1, name: "Black Shadow", type: ["round"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 70, image: "watch 1.png" },
    { id: 2, name: "Orange Watch", type: ["round"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 15, image: "watch 2.png" },
    { id: 3, name: "Portable Square", type: ["square", "leather"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 15, image: "watch 3.png" },
    { id: 4, name: "Diamond Watches", type: ["round", "leather"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 210, image: "watch 4.png" },
    { id: 5, name: "Micfor", type: ["round", "classic", "leather"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 70, image: "watch 5.png" },
    { id: 6, name: "Rios Watch", type: ["classic", "leather", "square"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 540, image: "watch 6.png" },
    { id: 7, name: "Rolex v1", type: ["classic", "round"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 80, image: "watch 7.webp" },
    { id: 8, name: "Sekonda New", type: ["square"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 20, image: "watch 8.png" },
    { id: 9, name: "Sekonda Spirit", type: ["round"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 20, image: "watch 9.png" },
    { id: 10, name: "White Bird", type: ["classic"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 220, image: "watch 10.png" },
    { id: 11, name: "Robo Watch", type: ["square"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 80, image: "watch 11.png" },
    { id: 12, name: "Silver Watch", type: ["round"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 550, image: "watch 12.png" },
];

let currentPage = 1;
const itemsPerPage = 6;
let filteredProducts = products;

function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('border', 'p-4', 'rounded-lg', 'shadow-md');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="mb-4">
            <h2 class="text-xl font-bold">${product.name}</h2>
            <p class="text-gray-700">$${product.price}</p>
            <p class="text-gray-500 mb-4">${product.description}</p>
            <a href="product.html?id=${product.id}" class="text-orange-500 hover:underline">View Details</a>
        `;
        productContainer.appendChild(productElement);
    });

    // Update pagination controls visibility
    document.getElementById('prev-page').style.visibility = currentPage > 1 ? 'visible' : 'hidden';
    document.getElementById('next-page').style.visibility = (currentPage * itemsPerPage) < filteredProducts.length ? 'visible' : 'hidden';
}

function filterProducts(type) {
    currentPage = 1; // Reset to first page
    if (type === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.type.includes(type));
    }
    paginateProducts();
}

function searchProducts() {
    const query = document.getElementById('search').value.toLowerCase();
    currentPage = 1; // Reset to first page
    filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    paginateProducts();
}

function paginateProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);
    displayProducts(paginatedProducts);
}

function nextPage() {
    if ((currentPage * itemsPerPage) < filteredProducts.length) {
        currentPage++;
        paginateProducts();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        paginateProducts();
    }
}

// Initial display
paginateProducts();
