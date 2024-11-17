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
let Mypanier = JSON.parse(localStorage.getItem('ordreToCard')) || [];
var panairid =document.getElementById("panier1");
var page =document.getElementById("page1");


 
page.innerHTML=`
        
<article class=" md:flex  hidden flex-col  md:flex-row justify-center items-center  md:w-11/12 w-full mb-1 ">
   <div class="w-11/12 border-2 h-8  md:h-10 md:justify-center md:w-3/12 flex  items-center"  style="width:27%"> 
   <lable class="w-full opacity-0"> </lable>
   </div>
   <div class="w-96  border-2  md:h-10 justify-center items-center md:border-l-0 md:flex hidden" style="width:43%">
   
   </div>
   <div class="w-full h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-l-0 md:border-r-0  md:h-10 md:justify-center hidden md:flex" style="width:99%">
        <lable class="w-34">Product</lable> 
   </div>
   <div class="w-full h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-r-0 md:justify-center md:w-8/12 md:h-10 hidden md:flex" style="width:71%">
        <lable class="">    Price  </lable>
       </div>
   <div class="w-full h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-r-0 md:justify-center  md:h-10 " style="width:99%">
         Quantity : 
       
   </div>
   <div class="w-9/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2  md:justify-center  md:h-10 " style="width:71%">
         subtotal: 
       
   </div>
</article>

`;
async function afiche(){
panairid.innerHTML="";

document.getElementById('numbrecom').innerText=Mypanier.length;
document.getElementById('numbrecom2').innerText=Mypanier.length;
    const response = await fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json");
    const categories = await response.json();
    categories.categories.forEach(category => {
        category.products.forEach(product => {
            Mypanier.forEach(produitlo =>{
                if (produitlo.id == product.id) {
                        panairid.innerHTML+=`
                                    <div class="border-0 border-t-2  flex flex-row h-96 w-full mb-10">
                                        <img src="../assets/images/Product/${product.image}" class=" w-20 h-20">
                                        <div class="flex flex-col justufy-between w-full ">
                                            <p class=" ml-10 text-blue-500      "> ${product.title}</p> 
                                            <button class=" ml-44  text-orange-500" onclick="suprimepainer(${produitlo.id})" >X </button>
                                            <p class="   ml-24  " >${produitlo.quantite}× $${product.price}</p>
                                            <p class="   ml-12   " >Subtotal: $${(produitlo.quantite*product.price).toFixed(4)}</p>
                                        </div>
                                    </div>
                        `;
                        page.innerHTML+=`
                        <article class="flex flex-col  md:flex-row justify-center items-center  md:w-11/12 w-full mb-1">
                                    <div class="w-11/12 border-2 h-14 md:h-32 md:justify-center md:w-3/12 flex  items-center">
                                        <button class="ml-3 md:ml-0 md:justify-center text-red-500 hover:text-white text-xl font-serif md:text-center hover:bg-red-500 rounded-3xl w-5" onclick="suprimepainer(${product.id})"> X </button>
                                    </div>
                                    <div class="w-96  border-2 h-14 md:h-32 justify-center items-center md:border-l-0 md:flex hidden  md:flex-col" id="hoverImg">
                                        <img src="../assets/images/Product/${product.image}" class="w-44 h-28 hover:bg-black ">
                          
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
                                            <button class="border-2 w-10 h-10 hover:bg-orange-500" onclick="incrimet(${produitlo.id})">+</button>
                                            <input type="text" class="w-10 border-2 border-l-0 border-r-0 text-center" value="${produitlo.quantite}" id="quantity${produitlo.id}">
                                            <button class="w-10 border-2 hover:bg-orange-500 " onclick="descrimet(${produitlo.id})">-</button>
                                        </div>
                                    </div>
                                    <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:justify-center md:w-8/12 md:h-32">
                                        <lable class="ml-3 text-lg font-serif md:hidden"> subtotal : </lable>
                                        <p class="mr-3 ">$${(produitlo.quantite*product.price).toFixed(4)}</p>
                                    </div>
                                </article>

                        `;
                }
            });
        })
     })


            if(Mypanier.length>0)
            {
               
            subtotal();
            page.innerHTML+=`
            <article class="border-2 h-14 w-11/12   md:ml-0   mt-0 flex justify-between "> 
                        <div>
                            <input class="w-32 mt-2 mb-3 rounded-md ml-3 border-2 h-10" placeholder="Coupon code" id="couponid">
                            <button class="ml-3 bg-orange-500 w-32 mt-2 mb-3 h-10 rounded-md hover:bg-black hover:text-white" onclick="coupon()" > Apply coupon </button>
                        </div>
                        <button class="mr-3 bg-orange-500 w-32 mt-2 mb-3 rounded-md h-10 hover:bg-black hover:text-white "  onclick="ubdate()"> Update cart </button>
                    </article>`;
            document.getElementById('panier1button').innerHTML=`
                            <div class="flex flex-row justify-between w-full text-white">
                                <button class="bg-orange-500 w-20 ml-3 rounded-xl h-8 hover:bg-black hover:text-white" onclick="pagePanier()">View cart </button>
                                <button class="bg-orange-500 mr-3 w-20 rounded-xl hover:bg-black hover:text-white ">Checkout</button>
                            </div>
            `  ;

            }
            else{
                page.innerHTML=`<h1 class="mt-12"> Your cart is currently empty</h1>
                                <img src="../assets/images/magana images/shopping-cart (1).png" alt="icon1" class="w-10 h-10 mt-4"  >
				  
                                <a class="mr-3 bg-orange-500 w-32 mt-2 mb-3 rounded-md mt-8 text-center hover:bg-black hover:text-white" href="catalogue.html"><p class="h-8"> shoop </p></a>
                `;
                document.getElementById('panier1button').innerHTML=`<h1 class="mt-12"> Your cart is currently empty</h1>`  ;
                document.getElementById("cartTotals").innerHTML=""
            }
            
}     
function carte(numbre){
    numbre = (+numbre).toFixed(2);
    document.getElementById('Subtotalprice').innerText=(numbre).toFixed(4);
    document.getElementById('totalprice').innerText=(numbre).toFixed(4);
    coupon();
}
afiche();
function pagePanier(){
    window.location.href = "panier.html";
}
function incrimet(index){	
    Mypanier.forEach(produit=>{
    var quantity ="quantity"+produit.id;
    if(index==produit.id){
        document.getElementById(quantity).value++;
    }
});
}
function somme(){
    let somme =0;
    Mypanier.forEach(produit => {
        somme += produit.quantite*produit.price;
    });
    return somme;
}
function descrimet(index){	
Mypanier.forEach(produit=>{
    var quantity ="quantity"+produit.id;
    if(index==produit.id){
        if(document.getElementById(quantity).value>0)
        document.getElementById(quantity).value--;
    }
});
}
var sub = 0;
async function subtotal() {
   var  sub=0;
    const response = await fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json");
    const categories = await response.json();
    Mypanier.forEach(produitlo => {
    categories.categories.forEach(category => {
        category.products.forEach(product => {
           
                if (produitlo.id == product.id) {
                    sub += product.price * produitlo.quantite;
                }

            });

        });

    });

    document.getElementById('Subtotalprice').innerText = (sub).toFixed(4);
    document.getElementById('totalprice').innerText=(sub).toFixed(4);
    localStorage.setItem("sub",sub);
    if(localStorage.getItem('coupon')){
        
    document.getElementById('Subtotalprice').innerText = localStorage.getItem('coupon');
    document.getElementById('totalprice').innerText=localStorage.getItem('coupon');
    }
    
}
 
function coupon(){
    console.log('copun');
    if(!(localStorage.getItem('coupon'))){
    if(document.getElementById("couponid").value == "09DD"){
       let cop = +localStorage.getItem('sub') * 0.9;
        localStorage.setItem('coupon',cop);
        location.reload();
        document.getElementById("couponid").style.border="solid 2px green";
    }
    else
        document.getElementById("couponid").style.border="solid 2px red";
    }
}

function ubdate(){
    for(let i= 0 ;i<Mypanier.length;i++){
    var quantity ="quantity"+Mypanier[i].id;
    Mypanier[i].quantite=document.getElementById(quantity).value;
    if(Mypanier[i].quantite==0)
        Mypanier.splice(i,1);
    }
    localStorage.setItem("ordreToCard",JSON.stringify(Mypanier));  
location.reload();
}
function suprimepainer(index){
    for(let i = 0 ;i<Mypanier.length ;i++)
        if(index==Mypanier[i].id)
            Mypanier.splice(i,1);
        localStorage.setItem("ordreToCard",JSON.stringify(Mypanier));
        subtotal();
        // console.log(Mypanier);

location.reload();
}

function payment(){
// console.log("payment")
    document.getElementById('Formulaire').classList.remove("hidden");
    document.getElementById('containermain').classList.add("hidden");
    document.querySelector('footer').classList.add("hidden");
    document.querySelector('header').classList.add("hidden");
}
const name2 = document.getElementById('nameid');
const email2 = document.getElementById('emailid');
const rib2 = document.getElementById('cardNumber');
const expirationDate2 = document.getElementById('expirationDate');
const cvv2 = document.getElementById('cvv');
const form = document.getElementById('checkoutForm');
const city2 = document.getElementById('cityid');
const adrice2 = document.getElementById('adriceid');

const paymentObjet = {
    name: /^[a-zA-Z\s]{6,20}$/, 
    email: /^[a-zA-Z\d._%+-]+@gmail\.com$/, 
    rib: /^[0-9]{16}$/, 
    expirationDate: /^(0[1-9]|1[0-2])\/\d{2}$/,
    cvv: /^[0-9]{3}$/,
    city: /^[a-zA-Z\s]{3,15}$/,
    adrice: /^[a-zA-Z0-9\s,-]{8,20}$/
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    // Validate fields
    if (paymentObjet.name.test(name2.value.trim())) {
        name2.style.border = "solid 2px green";
    } else {
        name2.style.border = "solid 2px red";
        valid = false;
    }

    if (paymentObjet.city.test(city2.value.trim())) {
        city2.style.border = "solid 2px green";
    } else {
        city2.style.border = "solid 2px red";
        valid = false;
    }

    if (paymentObjet.adrice.test(adrice2.value.trim())) {
        adrice2.style.border = "solid 2px green";
    } else {
        adrice2.style.border = "solid 2px red";
        valid = false;
    }

    if (paymentObjet.email.test(email2.value.trim())) {
        email2.style.border = "solid 2px green";
    } else {
        email2.style.border = "solid 2px red";
        valid = false;
    }

    if (paymentObjet.rib.test(rib2.value.trim())) {
        rib2.style.border = "solid 2px green";
    } else {
        rib2.style.border = "solid 2px red";
        valid = false;
    }

    if (paymentObjet.expirationDate.test(expirationDate2.value.trim())) {
        expirationDate2.style.border = "solid 2px green";
    } else {
        expirationDate2.style.border = "solid 2px red";
        valid = false;
    }

    if (paymentObjet.cvv.test(cvv2.value.trim())) {
        cvv2.style.border = "solid 2px green";
    } else {
        cvv2.style.border = "solid 2px red";
        valid = false;
    }

    if (valid) {
        let devi = {
            name: name2.value.trim(),
            email: email2.value.trim(),
            city: city2.value.trim(),
            adrice: adrice2.value.trim(),
            coupon: localStorage.getItem('coupon') || "",
            subtotal: localStorage.getItem('sub') || "",
            dat: (Date.now()).toString()
        };

        localStorage.clear();
        localStorage.setItem('deviesValide', JSON.stringify(devi));
        window.location.href = "devis.html";
    }
     else {
        // console.log("erore");
    }
});


// console.log((Date.now()).toString())

// document.getElementById('hoverImg').addEventListener('mouseover', function () {
//     console.log('hover');
//     document.getElementById('hoverImg').querySelector('img').classList.add('hidden'); 
// });
// document.getElementById('burger').addEventListener('click',function(){
//     if(document.getElementById('navbarMobil').classList.contains('hidden')){
//         document.getElementById('navbarMobil').classList.remove("hidden");
//         document.getElementById('navbarMobil').classList.add("flex");
//     }
//     else {
        
//         document.getElementById('navbarMobil').classList.remove("flex");
//         document.getElementById('navbarMobil').classList.add("hidden");

//     }
// });