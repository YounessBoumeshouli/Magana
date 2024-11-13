
let imgs = document.querySelectorAll('.dt-small-images');
let mainImg = document.getElementById('dt-main-image');

imgs.forEach(function (item) {
    item.addEventListener('click', function () {
        mainImg.src = this.src
    })
});
// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].addEventListener('click', function () {
//         mainImg.src = this.src
//     })

// }

let decBtn = document.getElementById('dt-decrease-quantity');
let incBtn = document.getElementById('dt-increase-quantity');
let quantity = document.getElementById('dt-quantity');
let addToCart = document.getElementById('dt-add-to-cart');
const price = 210;

decBtn.addEventListener('click', function () {
    quantity.value = quantity.value > 1 ? quantity.value - 1 : 1
});
incBtn.addEventListener('click', function () {
    quantity.value = +quantity.value + 1
});

addToCart.addEventListener('click', function () {
    alert(quantity.value * price + '$');
    quantity.value = '1'
})

el

let div = document.createElement('div');
div.innerHTML = `<h2></h2>`