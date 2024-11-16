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

function  table (){
    if(Mypanier.length>0){
        page.innerHTML+=`
        
                                     <article class="flex flex-col  md:flex-row justify-center items-center  md:w-11/12 w-full mb-1">
                                        <div class="w-11/12 border-2 h-14 md:h-32 md:justify-center md:w-3/12 flex  items-center"> 
                                        </div>
                                        <div class="w-96  border-2 h-14 md:h-32 justify-center items-center md:border-l-0 md:flex hidden">
                                        </div>
                                        <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-l-0 md:border-r-0 md:h-32  md:justify-center">
                                            <lable class="ml-3 text-lg font-serif md:hidden "> Product :  </lable>
                                        </div>
                                        <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-r-0 md:justify-center md:w-8/12 md:h-32">
                                            <lable class="ml-3 text-lg font-serif md:hidden"> Price : </lable>
                                            </div>
                                        <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-r-0 md:justify-center md:h-32 ">
                                            <label class="ml-3 font-serif text-lg md:hidden"> Quantity :</label>
                                            
                                        </div>
                                        <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:justify-center md:w-8/12 md:h-32">
                                            <lable class="ml-3 text-lg font-serif md:hidden"> subtotal : </lable>
                                            </div>
                                    </article>
    
        `;
        console.loge( page);
    }
} 
 
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
// table();
document.getElementById('numbrecom').innerText=Mypanier.length;
    const response = await fetch("http://localhost:3000/categories");
    const categories = await response.json();
    categories.forEach(category => {
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
                                            <input type="number" class="w-10 border-2 border-l-0 border-r-0 text-center" value="${produitlo.quantite}" id="quantity${produitlo.id}">
                                            <button class="w-10 border-2" onclick="descrimet(${produitlo.id})">-</button>
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
                                <button class="bg-orange-500 w-20 ml-3 rounded-xl h-8 on" onclick="panier.html">View cart </button>
                                <button class="bg-orange-500 mr-3 w-20 rounded-xl">Checkout</button>
                            </div>
            `  ;
            if(localStorage.getItem("coupon")==null)
                carte((somme()).toFixed(2));
            else
                carte(localStorage.getItem("coupon"));
            }
            else{
                page.innerHTML=`<h1 class="mt-12"> Your cart is currently empty</h1>
                                <a class="mr-3 bg-orange-500 w-32 mt-2 mb-3 rounded-md mt-8 text-center" href="catalogue.html"> shoop </a>
                `;
                document.getElementById('panier1button').innerHTML=`<h1 class="mt-12"> Your cart is currently empty</h1>`  ;
                document.getElementById("cartTotals").innerHTML=""
            }
            subtotal();
            
}     
function carte(numbre){
    numbre = (+numbre).toFixed(2);
    document.getElementById('Subtotalprice').innerText=numbre;
    document.getElementById('totalprice').innerText=numbre;
    coupon();
}
afiche();

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
    const response = await fetch("http://localhost:3000/categories");
    const categories = await response.json();
    Mypanier.forEach(produitlo => {
    categories.forEach(category => {
        category.products.forEach(product => {
           
                if (produitlo.id == product.id) {
                    sub += product.price * produitlo.quantite;
                }

            });

        });

    });

    document.getElementById('Subtotalprice').innerText = sub;
    document.getElementById('totalprice').innerText=sub;
    localStorage.setItem("sub",sub);
    
}


let obj =JSON.parse(localStorage.getItem('coupon'))||[];
if (obj.length == 0) {

var cup ={numbr:0,total:0.0};
obj.push(cup);
localStorage.setItem("coupon",JSON.stringify(obj));

}
if(obj[0].numbr == 0){


    
    obj[0].total = localStorage.getItem('sub'); 
    console.log(document.getElementById('Subtotalprice'));
    localStorage.setItem("coupon",JSON.stringify(obj));
}
function coupon(){
   

    if(obj[0].numbr == 0){
    if(document.getElementById("couponid").value == "09DD"){
        obj[0].total = (sub*0.9).toFixed(2)    ;
        obj[0].numbr = 1;
    }
    }
    localStorage.setItem("coupon",JSON.stringify(obj));
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

