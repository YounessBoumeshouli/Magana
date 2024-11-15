
// let imgs = document.querySelectorAll('.dt-small-images');
// let mainImg = document.getElementById('dt-main-image');

// imgs.forEach(function (item) {
//     item.addEventListener('click', function () {
//         mainImg.src = this.src
//     })
// });


let decBtn = document.getElementById('dt-decrease-quantity');
    let incBtn = document.getElementById('dt-increase-quantity');
    let quantity = document.getElementById('dt-quantity');
    let addToCart = document.getElementById('dt-add-to-cart');
    
    
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

document.getElementById('dt-add-to-cart').addEventListener('click',function(){
            let toCart = {
                id : id ,
                quantite :document.getElementById('dt-quantity').value ,
            }
            let cart = JSON.parse(localStorage.getItem('ordreToCard')) || [];
            cart.push(toCart);
            localStorage.setItem('ordreToCard', JSON.stringify(cart));
            addToCart.href = `/views/panier.html`;  
              })
// console.log(id)


    fetch("http://localhost:4000/categories")
        .then(res => res.json())
        .then(res =>
            res.forEach(category => {

                category.products.forEach(product => {
        
                    if (id == product.id) {
                        document.getElementById('dt-img-principale').innerHTML = `<img  class="rounded-3xl" id="dt-main-image" src="../assets/images/Product/${product.image}" alt="L'image principale de la montre">`
                        document.getElementById('dt-img-complementaire1').innerHTML = `<img class="dt-small-images rounded-3xl" src="../assets/images/Product/${product.image1}"alt="La premiere image complémentaire de la montre ">`
                        document.getElementById('dt-img-complementaire2').innerHTML = `<img class="dt-small-images rounded-3xl" src="../assets/images/Product/${product.image2}"alt="La deuxieme image complémentaire de la montre ">`
                        document.getElementById('dt-img-complementaire3').innerHTML = `<img class="dt-small-images rounded-3xl" src="../assets/images/Product/${product.image3}"alt="La troisieme image complémentaire de la montre ">`
                        document.getElementById('dt-title').innerHTML = ` <h1>${product.title} </h1>`
                        document.getElementById('dt-descreption').innerHTML = `<P>${product.description} </P>`
                        document.getElementById('dt-price').innerHTML = `<P>$ ${product.price}  </P>`       
                    }
                });
        
            })
                )

        

















