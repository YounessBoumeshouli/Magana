
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


let  originSrc=document.URL;
let splitSrc = full_url.split("?");
let id = splitSrc[splitSrc.length - 1] - 1;
let div = document.createElement= 'div' ;
div.innerHTML = `
<main class="md:mx-32 flex  flex-wrap md:flex-nowrap ">
        <section class="dt-watch-side grid grid-cols-3 md:w-1/2">
            <div class="col-span-3 w-full ">
                <img id="dt-main-image" src="../assets/images/Product/CasioMens.jpg" alt="L'image principale de la montre">
            </div>
            <div>
                <img class="dt-small-images" src="../assets/images/Product/CasioMens1.jpg" alt="La premiere image complémentaire de la montre ">
            </div>
            <div>
                <img class="dt-small-images" src="../assets/images/Product/CasioMens2.jpg" alt="La deuxieme image complémentaire de la montre ">
            </div>
            <div>
                <img class="dt-small-images" src="../assets/images/Product/CasioMens3.jpg" alt="La troisieme image complémentaire de la montre ">
            </div>
        </section>
        <section class="dt-watch-desc md:w-1/2 flex">
            <div class="flex flex-col justify-center">
                <div id="dt-title" class="font-bold text-4xl w-4/5 text-center mx-12 my-3	">
                    <h1>TAG Heuer Connected Calibre E4 45 mm </h1>
                </div>
                <div id="dt-descreption" class=" w-4/5 mx-10 my-3 ">
                    <P>une montre connectée de luxe avec un écran AMOLED haute définition, idéale pour les sportifs et
                        les
                        professionnels à la recherche d'une montre élégante et fonctionnelle.</P>
                </div>
                <div id="dt-star " class="mx-12 my-3">
                    <img src="../assets/images/Product/stars.png" alt=" Product stars">
                </div>
                <div id="dt-price-discount" class="mx-12 my-3 flex gap-8">
                    <div id="dt-price" class=" text-2xl font-bold">
                        <P>$210.00</P>
                    </div>
                    <div id="dt-discount">
                        <BUtton class="bg-black text-white text-2xl w-[85px] rounded-lg">50%</BUtton>

                    </div>
                </div>
                <div id="dt-quantity-addToCard" class="mx-10 my-3 flex items-center">
                    <label for="dt-decrease-quantity" class="sr-only">Diminuer la quantité</label>
                    <button id="dt-decrease-quantity" class=" border border-black text-center font-bold text-2xl w-10 h-10 rounded-s-md">-</button>
                    <label for="dt-quantity" class="sr-only">Quantité</label>
                    <input id="dt-quantity" class=" border border-black text-center font-bold text-2xl w-20 h-10" value="1" type="text"
                        min="1" max="10">
                        <label for="dt-increase-quantity" class="sr-only">Augmenter la quantité</label>
                    <button id="dt-increase-quantity" class=" border border-black text-center font-bold text-2xl w-10 h-10 rounded-e-md">+</button>
                    <button id="dt-add-to-cart" type="submit" class="bg-orange-600 text-black  text-center font-bold text-1xl w-[150px] h-10 rounded-md mx-12 hover:bg-orange-400 transition-all duration-500">Ajouter Au Panier</button>
                </div>

            </div>

        </section>


`