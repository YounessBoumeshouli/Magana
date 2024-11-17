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
                          
                    }
                });
            })
         })
    
    
                if(Mpanier.length>0)
                {
                   
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
    function suprimepainer(index){
        for(let i = 0 ;i<Mypanier.length ;i++)
            if(index==Mypanier[i].id)
                Mypanier.splice(i,1);
            localStorage.setItem("ordreToCard",JSON.stringify(Mypanier));
            subtotal();
            // console.log(Mypanier);
    
    location.reload();
    }

    async function subtotal() {
        var  sub=0;
         const response = await fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json");
         const categories = await response.json();
         Mypanier.forEach(produitlo => {
         categories.categories.forEach(category => {
             category.products.forEach(product => {
                
                     if (produitlo.id == product.id) {
                         sub += product.price * produitlo.quantite;
                         total = sub
     
                     }
     
                 });
     
             });
     
         });
     
         document.getElementById('Subtotalprice').innerText = (sub).toFixed(2);
         document.getElementById('totalprice').innerText=(sub).toFixed(2);
         localStorage.setItem("sub",sub);
         if(localStorage.getItem('coupon')){
             
         document.getElementById('Subtotalprice').innerText = (sub).toFixed(2);
         document.getElementById('totalprice').innerText=(total*0.9).toFixed(2);
         localStorage.setItem('coupon',total*0.9);
         }
         
     }