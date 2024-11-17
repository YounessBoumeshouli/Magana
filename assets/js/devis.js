let product =  JSON.parse(localStorage.getItem('ordreToCard'))
let subtotal =  JSON.parse(localStorage.getItem('sub'))
let Total =  JSON.parse(localStorage.getItem('coupon'))||subtotal
let informations =  JSON.parse(localStorage.getItem('deviesValide'))

let year =new Date().getFullYear()
let month =new Date().getMonth()
let day =new Date().getDay()
console.log(year,month,day)
document.getElementById("dateNow").innerText += year

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      
        window.print();
    }
});
productList = document.getElementById("productList");
document.getElementById("ClienName").innerHTML = informations.name
document.getElementById("ClienMail").innerHTML = informations.email
document.getElementById("ClienRib").innerHTML = informations.rib
document.getElementById("ClienAdresse").innerHTML = informations.city
document.getElementById("ClienAdresse2").innerHTML = informations.adrice
document.getElementById("discount").innerHTML = `${subtotal} $`
document.getElementById("Total").innerHTML = `${Total} $`
let coupon = document.getElementById("Coupon")

if (Total == subtotal) {
    coupon.innerHTML = "0% discount"
}else{
    coupon.innerHTML = "10% discount"
}

async function TelechargerLaPage(){
    const response =  await fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json")
    const promise = await response.json()
   ShowProducts(promise)
}
var i = 0
function ShowProducts(res){
    res.categories.forEach(category => {
        
        category.products.forEach(produit => { 

            product.forEach(p => {
                
              if (i < 7) {
                if (produit.id == p.id) {
                    i++
                    productList.innerHTML +=`
                 <tr class="border-b border-slate-200">
                            <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0 h-15">
                             <div class="font-medium text-slate-700 ">${produit.title}</div>
                             <div class="mt-0.5 text-slate-500 ">
                          <img src="../assets/images/Product/${produit.image}" alt="" class="w-12 ml-6">
                             </div>
                            </td>
                            <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                            ${p.quantite} unit
                            </td>
                            <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                             ${produit.rating.rate}
                            </td>
                            <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                             ${p.quantite*produit.price}$
                            </td>
                           </tr>
                
                `
                console.log(produit.image)
                }
              }else{
                  productList.innerHTML +="..."
              }
                
            });
          });
      
      })

     
      
}

function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}

setTimeout(addScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'),
html2pdf(document.body),localStorage.clear(),
window.location.href = "../index.html", 10000); 
