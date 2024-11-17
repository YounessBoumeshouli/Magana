


let decBtn = document.getElementById('dt-decrease-quantity');
let incBtn = document.getElementById('dt-increase-quantity');
let quantity = document.getElementById('dt-quantity');
let addToCart = document.getElementById('dt-add-to-cart');

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

decBtn.addEventListener('click', function () {
    quantity.value = quantity.value > 1 ? quantity.value - 1 : 1
});
incBtn.addEventListener('click', function () {
    quantity.value = +quantity.value + 1
});

document.addEventListener('click', (e) => {

    let imgs = document.querySelectorAll('.dt-small-images');
    let mainImg = document.getElementById('dt-main-image');
    imgs.forEach(function (item) {
        item.addEventListener('click', function () {
            mainImg.src = this.src
        })
    });

})

let id = location.href.split("=")[1]

document.getElementById('dt-add-to-cart').addEventListener('click', function (e) {
    // e.preventDefault()
    let toCart = {
        id: id,
        quantite: document.getElementById('dt-quantity').value,
    }
    let cart = JSON.parse(localStorage.getItem('ordreToCard')) || [];

    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (toCart.id == cart[i].id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        cart.push(toCart);
    } else {
        cart[index].quantite = document.getElementById('dt-quantity').value;
        // cart[index].quantite =toCart.quantite;
    }
    localStorage.setItem('ordreToCard', JSON.stringify(cart));

    // addToCart.href = `/views/panier.html`;
})
let Mpanier = JSON.parse(localStorage.getItem('ordreToCard')) || [];
document.getElementById('numbrecom').innerText=Mpanier.length;
document.getElementById('numbrecom2').innerText=Mpanier.length;
    fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json")
        .then(res => res.json())
        .then(res =>
            res.categories.forEach(category => {

            category.products.forEach(product => {

                if (id == product.id) {
                    document.getElementById('dt-img-principale').innerHTML = `<img  class="rounded-3xl" id="dt-main-image" src="../assets/images/Product/${product.image}" alt="L'image principale de la montre">`
                    document.getElementById('dt-img-complementaire1').innerHTML = `<img class="dt-small-images rounded-3xl" src="../assets/images/Product/${product.image1}"alt="La premiere image complémentaire de la montre ">`
                    document.getElementById('dt-img-complementaire2').innerHTML = `<img class="dt-small-images rounded-3xl" src="../assets/images/Product/${product.image2}"alt="La deuxieme image complémentaire de la montre ">`
                    document.getElementById('dt-img-complementaire3').innerHTML = `<img class="dt-small-images rounded-3xl" src="../assets/images/Product/${product.image3}"alt="La troisieme image complémentaire de la montre ">`
                    document.getElementById('dt-title').innerHTML = ` <h1>${product.title} </h1>`
                    document.getElementById('dt-descreption').innerHTML = `<P>${product.description} </P>`
                    document.getElementById('dt-price').innerHTML = `<P>$ ${product.price}  </P>`

                    let localCart = JSON.parse(localStorage.getItem('ordreToCard')) || []
                    let filteredCart = localCart.filter((item) => item.id == product.id)

                    if (filteredCart.length > 0) {
                        document.getElementById('dt-quantity').value = `${filteredCart[0].quantite}`
                    }

                    showRating(Math.floor(product.rating.rate))
                }
            });

        })
    )

function showRating(nb) {
    const stars = document.getElementById('dt-star')
    console.log("ZZZZZZZZZZZZZZ");

    stars.innerHTML = '';
    for (let i = 0; i < nb; i++) {
        stars.innerHTML += `
                        <svg class="size-10 border-none" data-slot="icon" fill="#ea580c" stroke-width="0.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                          </svg>
                        `
    }
    for (let i = 0; i < 5 - nb; i++) {
        stars.innerHTML += `
                        <svg class="size-10" data-slot="icon" fill="none" stroke-width="0.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                          </svg>
                        `
    }
}




















