function fermepanier(){  
document.getElementById('panierid').style.display="none";
}
fermepanier(); 
var listee=document.getElementsByClassName("mod");
let opje1={id:1,image:"./../assets/images/Product/FossilMen.jpg",title: "Fossil Men's Grant Chronograph Leather Watch",price: 129.95,quantity:2}
let opje2={id: 17,image: "./../assets/images/Product/FossilWomen.jpg",title: "Fossil Women's Jacqueline Leather Watch",price: 109.99,quantity:1}
let opje3={id: 18,image: "./../assets/images/Product/Omega.jpg", title: "Omega Seamaster Diver 300M",price: 5200,quantity:3}
let Mypanier = JSON.parse(localStorage.getItem('panier')) || [];
console.log(Mypanier);
var id=0;
if (Mypanier.length !== 0){
   console.log(Mypanier)
}else{
    Mypanier.push(opje1);
Mypanier.push(opje2);
Mypanier.push(opje3);
}

localStorage.setItem('panier',JSON.stringify(Mypanier));
function afi(id){
Mypanier.forEach(produit =>{
if(produit.id==id){
console.log("oui");
}
})}
afi(0);
console.log("n");
// console.log(listee);
var panairid =document.getElementById("panier1");
var page =document.getElementById("page1");
// console.log(panairid);
function afiche(){
panairid.innerHTML="";
page.innerHTML="";
Mypanier.forEach(produit =>{
panairid.innerHTML+=`
            <div class="border-0 border-t-2  flex flex-row h-96 w-full mb-10">
                <img src="${produit.image}" class=" w-20 h-20">
                <div class="flex flex-col justufy-between w-full ">
                    <p class=" ml-10 text-blue-500      "> ${produit.title}</p> 
                    <button class=" ml-44  text-orange-500" onclick="suprimepainer(${produit.id})" >X </button>
                    <p class="   ml-24  " >${produit.quantity}× $${produit.price}</p>
                    <p class="   ml-12   " >Subtotal: $${(produit.quantity*produit.price).toFixed(4)}</p>
                </div>
            </div>
`;

page.innerHTML+=`
<article class="flex flex-col  md:flex-row justify-center items-center  md:w-11/12 w-full mb-1">
            <div class="w-11/12 border-2 h-14 md:h-32 md:justify-center md:w-3/12 flex  items-center">
                <button class="ml-3 md:ml-0 md:justify-center text-red-500 hover:text-white text-xl font-serif md:text-center hover:bg-red-500 rounded-3xl w-5" onclick="suprimepainer(${produit.id})"> X </button>
            </div>
            <div class="w-10/12  border-2 h-14 md:h-32 justify-center items-center md:border-l-0 md:flex hidden">
                <img src="${produit.image}" class="w-7/12 h-5/6">
            </div>
            <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-l-0 md:border-r-0 md:h-32  md:justify-center">
                <lable class="ml-3 text-lg font-serif md:hidden "> Product :  </lable>
                <p class="mx-auto text-blue-500 ">${produit.title}</p>
            </div>
            <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-r-0 md:justify-center md:w-8/12 md:h-32">
                <lable class="ml-3 text-lg font-serif md:hidden"> Price : </lable>
                <p class="mr-3 ">$${produit.price}</p>
            </div>
            <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:border-r-0 md:justify-center md:h-32 ">
                <label class="ml-3 font-serif text-lg md:hidden"> Quantity :</label>
                <div  class="flex  lg:mr-0 md:mr-0 mr-8  "> 
                    <button class="border-2 w-10 h-10 " onclick="incrimet(${produit.id})">+</button>
                    <input type="text" class="w-10 border-2 border-l-0 border-r-0 text-center" value="${produit.quantity}" id="quantity${produit.id}">
                    <button class="w-10 border-2" onclick="descrimet(${produit.id})">-</button>
                </div>
            </div>
            <div class="w-11/12 h-14 flex justify-between items-center border-2 border-t-0 md:border-t-2 md:justify-center md:w-8/12 md:h-32">
                <lable class="ml-3 text-lg font-serif md:hidden"> subtotal : </lable>
                <p class="mr-3 ">$${(produit.quantity*produit.price).toFixed(2)}</p>
            </div>
        </article> 
`;
document.getElementById("numbrecom").textContent=Mypanier.length;
});

if(Mypanier.length>0)
{
page.innerHTML+=`
<article class="border-2 h-14 w-11/12   md:ml-0   mt-0 flex justify-between "> 
            <div>
                <input class="w-32 mt-2 mb-3 rounded-md ml-3 border-2" placeholder="Coupon code" id="couponid">
                <button class="ml-3 bg-orange-500 w-32 mt-2 mb-3 rounded-md" onclick="coupon()" > Apply coupon </button>
            </div>
            <button class="mr-3 bg-orange-500 w-32 mt-2 mb-3 rounded-md"  onclick="ubdate()"> Update cart </button>
        </article>`;
document.getElementById('panier1button').innerHTML=`
				<div class="flex flex-row justify-between w-full text-white">
					<button class="bg-orange-500 w-20 ml-3 rounded-xl h-8 on" onclick="panier.html">View cart </button>
					<button class="bg-orange-500 mr-3 w-20 rounded-xl">Checkout</button>
				</div>
`  ;
if(localStorage.getItem("coupon")==null)
    carte(somme());
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

}
function carte(index){
    document.getElementById("cartTotals").innerHTML=`
<h1 class="text-4xl font-serif "> Cart totals </h1>
			<article class="">
				<table class="table-auto  w-full text-lg font-serif">
				  <thead >
				    <tr>
				    </tr>
				  </thead >
				  <tbody class="border-2">
				    <tr class="border-2">
				      <td class="w-8/12">Subtotal</td>
				      <td>${index}</td>
				      
				    </tr>
				    <tr class="border-2">
				      <td>Shipping</td>
				      <td>Free shipping <br> Shipping to Morocco</td>
				    </tr>
				    <tr>
				      <td>Total</td>
				      <td>${index}</td>
				    </tr>
				  </tbody>
				</table>
				<button class="bg-orange-500 w-full h-10 mt-3 rounded-md" id="ovrforme()"> 	Proceed to checkout </button>
			</article>
`  ; 
}
afiche();
function incrimet(index){	
// alert("produit.title");
Mypanier.forEach(produit=>{
    var quantity ="quantity"+produit.id;
    if(index==produit.id){
        document.getElementById(quantity).value++;
        // break;
    }
});
}
function somme(){
    let somme =0;
    Mypanier.forEach(produit => {
        somme += produit.quantity*produit.price;
    });
    return somme;
}
function descrimet(index){	
// alert("produit.title");
Mypanier.forEach(produit=>{
    var quantity ="quantity"+produit.id;
    if(index==produit.id){
        if(document.getElementById(quantity).value>0)
        document.getElementById(quantity).value--;
        // break;
    }
});
}
function ovrforme(){
document.getElementById("formRIB").classList.add("block");
}
function subtotal(){
var sub = 0;
Mypanier.forEach(produit=>{
    sub+=produit.price * produit.quantity;
})
return sub;
}
function coupon(){
    if(localStorage.getItem("coupon")!=""){
    if(document.getElementById("couponid").value == "09DD")
        localStorage.setItem("coupon",somme()*0.9);
    else 
    localStorage.setItem("coupon",somme());
    carte(localStorage.getItem("coupon"));
}

} 
function ubdate(){
    for(let i= 0 ;i<Mypanier.length;i++){
    var quantity ="quantity"+Mypanier[i].id;
    Mypanier[i].quantity=document.getElementById(quantity).value;
    if(Mypanier[i].quantity==0)
        Mypanier.splice(i,1);
    }
    localStorage.clear();
    localStorage.setItem("panier",JSON.stringify(Mypanier));
    afiche();
}
// panairid.innerHTML=`<article class="border-2 h-14 w-11/12   md:ml-0  border-t-0 flex justify-between "> 
//             <button class="ml-3 bg-orange-500 w-32 mt-2 mb-3 rounded-md"> on </button>
//             <button class="mr-3 bg-orange-500 w-32 mt-2 mb-3 rounded-md"> va </button>
//         </article>`;
function suprimepainer(index){
    // console.log(Mypanier);
    // Mypanier = Mypanier.filtre(produit=> produit.id !==index);
 for(let i = 0 ;i<Mypanier.length ;i++){
    if(index==Mypanier[i].id)
    Mypanier.splice(i,1);
    localStorage.clear();
    localStorage.setItem("panier",JSON.stringify(Mypanier));
    afiche();
    console.log(Mypanier);
}
} 
 bdocument.getElementById('logopanier').addEventListener('click',function(){

    // console.log(document.getElementById('panierid'));
    // if(document.getElementById('panierid').style.display=="flex")
        document.getElementById('panierid').style.display="flex";
    // else
    //  document.getElementById('panierid').style.display="flex";
     console.log("hi");
// console.log(document.getElementById('panierid').remove('hidden'));
// 
//     
});
console.log(document.getElementById('logopanier'));
