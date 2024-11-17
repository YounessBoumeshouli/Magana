let Mpanier = JSON.parse(localStorage.getItem('ordreToCard')) || [];
var panairid =document.getElementById("panier1");
var page = document.getElementById("page1");
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

async function afiche(){
    panairid.innerHTML="";
    
    document.getElementById('numbrecom').innerText=Mpanier.length;
    document.getElementById('numbrecom2').innerText=Mpanier.length;
        const response = await fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json");
        const categories = await response.json();
        categories.categories.forEach(category => {
            category.products.forEach(product => {
                Mpanier.forEach(produitlo =>{
                    if (produitlo.id == product.id) {
                            panairid.innerHTML+=`
                                        <div class="border-0 border-t-2  flex flex-row h-96 w-full mb-10">
                                            <img src="../assets/images/Product/${product.image}" class=" w-20 h-20">
                                            <div class="flex flex-col justufy-between w-full ">
                                                <p class=" ml-10 text-blue-500      "> ${product.title}</p> 
                                                <button class=" ml-44  text-orange-500" onclick="suprimepainer(${produitlo.id})" >X </button>
                                                <p class="   ml-24  " >${produitlo.quantite}× $${product.price}</p>
                                                <p class="   ml-12   " >Subtotal: $${(produitlo.quantite*product.price).toFixed(2)}</p>
                                            </div>
                                        </div>
                            `;
                            page.innerHTML+=`
                            <article class="flex flex-col  md:flex-row justify-center items-center  md:w-11/12 w-full mb-1">
                                        <div class="w-11/12 border-2 h-14 md:h-32 md:justify-center md:w-3/12 flex  items-center">
                                            <button class="ml-3 md:ml-0 md:justify-center text-red-500 hover:text-white text-xl font-serif md:text-center hover:bg-red-500 rounded-3xl w-5" onclick="suprimepainer(${product.id})"> X </button>
                                        </div>
                                        <div class="w-96  border-2 h-14 md:h-32 justify-center items-center md:border-l-0 md:flex hidden">
                                            <img src="../assets/images/Product/${product.image}" class="w-44 h-28">
                                        </div>
                                        <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-l-0 md:border-r-0 md:h-32  md:justify-center">
                                            <lable class="ml-3 text-lg font-serif md:hidden "> Product :  </lable>
                                            <p class="mx-auto text-blue-500 ">${product.title}</p>
                                        </div>
                                        <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-r-0 md:justify-center md:w-8/12 md:h-32">
                                            <lable class="ml-3 text-lg font-serif md:hidden"> Price : </lable>
                                            <p class="mr-3 ">$${product.price}</p>
                                        </div>
                                        <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-r-0 md:justify-center md:h-32 ">
                                            <label class="ml-3 font-serif text-lg md:hidden"> Quantity :</label>
                                            <div  class="flex  lg:mr-0 md:mr-0 mr-8  "> 
                                                <button class="border-2 w-10 h-10 " onclick="incrimet(${produitlo.id})">+</button>
                                                <input type="text" class="w-10 border-2 border-l-0 border-r-0 text-center" value="${produitlo.quantite}" id="quantity${produitlo.id}">
                                                <button class="w-10 border-2" onclick="descrimet(${produitlo.id})">-</button>
                                            </div>
                                        </div>
                                        <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:justify-center md:w-8/12 md:h-32">
                                            <lable class="ml-3 text-lg font-serif md:hidden"> subtotal : </lable>
                                            <p class="mr-3 ">$${(produitlo.quantite*product.price).toFixed(2)}</p>
                                        </div>
                                    </article>
    
                            `;
                    }
                });
            })
         })
    
    
                if(Mpanier.length>0)
                {
                   
                subtotal();
                page.innerHTML+=`
                <article class="border-2 h-14 w-11/12   md:ml-0   mt-0 flex justify-between "> 
                            <div>
                                <input class="w-32 mt-2 mb-3 rounded-md ml-3 border-2 h-10" placeholder="Coupon code" id="couponid">
                                <button class="ml-3 bg-orange-500 w-32 mt-2 mb-3 h-10 rounded-md" onclick="coupon()" > Apply coupon </button>
                            </div>
                            <button class="mr-3 bg-orange-500 w-32 mt-2 mb-3 rounded-md h-10 "  onclick="ubdate()"> Update cart </button>
                        </article>`;
                document.getElementById('panier1button').innerHTML=`
                                <div class="flex flex-row justify-between w-full text-white">
                                    <button class="bg-orange-500 w-20 ml-3 rounded-xl h-8 on" onclick="pagePanier()">View cart </button>
                                    <button class="bg-orange-500 mr-3 w-20 rounded-xl">Checkout</button>
                                </div>
                `  ;
    
                }
                else{
                    page.innerHTML=`<h1 class="mt-12"> Your cart is currently empty</h1>
                                    <a class="mr-3 bg-orange-500 w-32 mt-2 mb-3 rounded-md mt-8 text-center" href="catalogue.html"> shoop </a>
                    `;
                    document.getElementById('panier1button').innerHTML=`<h1 class="mt-12"> Your cart is currently empty</h1>`  ;
                    document.getElementById("cartTotals").innerHTML=""
                }
                
    }    
    function pagePanier(){
        window.location.href = "panier.html";
    }
    afiche()