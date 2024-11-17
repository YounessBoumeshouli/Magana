let slideIndex = 1;

let Vectorleft = document.getElementById("Vectorleft")
let Vectorright = document.getElementById("Vectorright")
var windowWidth
window.addEventListener("resize",function(){
   windowWidth = window.innerWidth
  console.log(windowWidth)
})
showSlides(slideIndex);
slideIndex = showSlides(slideIndex)
Vectorleft.addEventListener("click",function(){
  slideIndex--
  showSlides(slideIndex)
})
Vectorright.addEventListener("click",function(){
  slideIndex++
  showSlides(slideIndex)
})
let img1  = document.getElementById("img1")
let HeaderContainer  = document.getElementById("HeaderContainer")
HeaderContainer.addEventListener('mousemove', function yo(u) {
      img1.className = "";
 
  let bottomImg = (u.clientY - 76)/6
  let rightImg = (u.clientX - 411)/6
  img1.classList.add("relative")
  let className = `bottom-[${bottomImg}px]`
  img1.classList.add(className)
  let className2 = `right-[${rightImg}px]`
  img1.classList.add(className2)

});
HeaderContainer.addEventListener('mouseout', function yo(u) {
  img1.className = "";

})
function ButtonsResponsive(windowWidth,res){
  if(windowWidth > 600){
    if(slideIndex == 6){
      Vectorright.style.display = "none"
     
    }
  }else{
    console.log("width low",windowWidth)
    if(slideIndex == 8){
      
      Vectorright.style.display = "none"
      
    }
    if(slideIndex == 7){
      document.getElementById("CategoriesContainer").innerHTML = `
       <div class="flex justify-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
       <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center w-64 h-64 hidden lg:block"><a href="/views/details.html?id=${res.categories[slideIndex-1].products[0].id}">
  <img src="./assets/images/Product/${res.categories[slideIndex-1].products[0].image}" class="w-56 h-56 object-cover rounded-md WatchMove">
  <p class="text-center mt-4 text-xl font-bold text-gray-800">${res.categories[slideIndex-1].products[0].title}</p>
</a>
  </div>
        <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center w-64 h-64 hidden lg:block"><a href="/views/details.html?id=${res.categories[slideIndex].products[0].id}">
  <img src="./assets/images/Product/${res.categories[slideIndex].products[0].image}" class="w-56 h-56 object-cover rounded-md WatchMove">
  <p class="text-center mt-4 text-xl font-bold text-gray-800">${res.categories[slideIndex].products[0].title}</p>
</a>
  </div>
</div>
      `
        }
      if(slideIndex == 8){
        document.getElementById("CategoriesContainer").innerHTML = `
         <div class="flex justify-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
          <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center w-64 h-64 hidden lg:block">
          <a href="/views/details.html?id=${res.categories[slideIndex-1].products[0].id}">
  <img src="./assets/images/Product/${res.categories[slideIndex-1].products[0].image}" class="w-56 h-56 object-cover rounded-md WatchMove">
  <p class="text-center mt-4 text-xl font-bold text-gray-800">${res.categories[slideIndex-1].products[0].title}</p>
</a>
  </div>
</div>
        `
          }
    
  }
}

function showSlides(slideIndex) {
fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json")
.then(res=>res.json())
.then(res=>
{

   Vectorleft.style.display = "block"
    Vectorright.style.display = "block"
    ButtonsResponsive(windowWidth,res)
  if(slideIndex ==1){
    Vectorleft.style.display = "none"
     
  }
  
  if(slideIndex <8){
    document.getElementById("CategoriesContainer").innerHTML = `
    <div class="flex justify-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
      <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center w-64 h-64 hidden lg:block">
      <a href="/views/details.html?id=${res.categories[slideIndex-1].products[0].id}">
  <img src="./assets/images/Product/${res.categories[slideIndex-1].products[0].image}" class="w-56 h-56 object-cover rounded-md WatchMove">
  <p class="text-center mt-4 text-xl font-bold text-gray-800">${res.categories[slideIndex-1].products[0].title}</p>
</a>
  </div>
      <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center w-64 h-64 hidden lg:block">
      <a href="/views/details.html?id=${res.categories[slideIndex].products[0].id}">
  <img src="./assets/images/Product/${res.categories[slideIndex].products[0].image}" class="w-56 h-56 object-cover rounded-md WatchMove">
  <p class="text-center mt-4 text-xl font-bold text-gray-800">${res.categories[slideIndex].products[0].title}</p>
</a>
  </div>
      <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center w-64 h-64 hidden lg:block">
      <a href="/views/details.html?id=${res.categories[slideIndex+1].products[0].id}">
  <img src="./assets/images/Product/${res.categories[slideIndex+1].products[0].image}" class="w-56 h-56 object-cover rounded-md WatchMove">
  <p class="text-center mt-4 text-xl font-bold text-gray-800">${res.categories[slideIndex+1].products[0].title}</p>
</a>
  </div>
    </div>
  `
  }else{
    document.getElementById("CategoriesContainer").innerHTML = `
    <div class="flex justify-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
     <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center w-64 h-64 hidden lg:block">
     <a href="/views/details.html?id=${res.categories[slideIndex-1].products[0].id}">
  <img src="./assets/images/Product/${res.categories[slideIndex-1].products[0].image}" class="w-56 h-56 object-cover rounded-md WatchMove">
  <p class="text-center mt-4 text-xl font-bold text-gray-800">${res.categories[slideIndex-1].products[0].title}</p>
</a>
  </div>
     
    </div>
  ` 
  }
  
    
 
  
}

) 
  
 return slideIndex
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

function ShowBrand(){
  document.getElementById("BrandsContainer").innerHTML=""
  fetch("https://younessboumeshouli.github.io/MaganaBrandsAPI/brand.json")
  .then(res=>res.json())
  .then(res=>
    dataHome(res.DATA)
    
   
  )
  
}
let Mypanier = JSON.parse(localStorage.getItem('ordreToCard')) || [];
document.getElementById('numbrecom').innerText=Mypanier.length;
document.getElementById('numbrecom2').innerText=Mypanier.length;
ShowBrand()

let HorizontalContainer = document.getElementById("ads");

HorizontalContainer.addEventListener("wheel", (event) => {
    event.preventDefault(); 
    HorizontalContainer.scrollLeft += event.deltaX; 
});

let IdOfmax
var max = 0
var box=[]

box.push()

function dataHome(res){
  document.getElementById("BrandsContainer").classList.add("flex")
  let modals = document.getElementById("PopularModals")
  document.getElementById("BrandsContainer").innerHTML=`

  <img src="./assets/images/Brand/${res[0].brands.brand1}"  class="max-w-[120px] w-full h-auto">
  <img src="./assets/images/Brand/${res[0].brands.brand2}"  class="max-w-[120px] w-full h-auto">
  <img src="./assets/images/Brand/${res[0].brands.brand3}"  class="max-w-[120px] w-full h-auto">
  <img src="./assets/images/Brand/${res[0].brands.brand4}"  class="max-w-[120px] w-full h-auto">
  <img src="./assets/images/Brand/${res[0].brands.brand5}"  class="max-w-[120px] w-full h-auto">

  `
document.getElementById("news").innerHTML = `
  <!-- Left side featured news item (occupies 2 columns on large screens) -->
  <div class="col-span-1 lg:col-span-2 relative bg-gray-100 rounded-lg overflow-hidden shadow-lg hidden md:block">
    <img src="./assets/images/Home-images/${res[0].news.news3.image}" class="w-full h-full object-cover rounded-lg border-4 ">
    <div class="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
      <p class="text-sm text-gray-500">${res[0].news.news3.date}</p>
      <h2 class="text-2xl font-bold">${res[0].news.news3.title}</h2>
      <p class="text-gray-700 mt-2">${res[0].news.news3.description}</p>
    </div>
    <span class="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">Watches</span>
  </div>

  <!-- Right side smaller news items (stacked vertically) -->
  <div class="flex flex-col gap-4">
    <!-- First small news item -->
    <div class="flex bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <img src="./assets/images/Home-images/${res[0].news.news1.image}" class="w-1/3 h-24 object-cover rounded-lg">
      <div class="ml-4">
        <span class="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">News Watches</span>
        <h3 class="text-lg font-semibold mt-2">${res[0].news.news1.title}</h3>
        <p class="text-sm text-gray-500">${res[0].news.news1.date}</p>
        <p class="text-gray-700 mt-1">${res[0].news.news1.description}</p>
      </div>
    </div>

    <!-- Second small news item -->
    <div class="flex bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <img src="./assets/images/Home-images/${res[0].news.news2.image}" class="w-1/3 h-24 object-cover rounded-lg">
      <div class="ml-4">
        <span class="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">Watches</span>
        <h3 class="text-lg font-semibold mt-2">${res[0].news.news2.title}</h3>
        <p class="text-sm text-gray-500">${res[0].news.news2.date}</p>
        <p class="text-gray-700 mt-1">${res[0].news.news2.description}</p>
      </div>
    </div>
  </div>
`;


modals.innerHTML = `
      <div class=" md:grid md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mb-4">
        <!-- Top left image with text -->
        <div class="flex flex-col items-center justify-between  bg-red-200 rounded-lg shadow-lg p-8" id="modal1">
          <div class="text-left w-full">
            <p class="text-sm text-white font-semibold">Classic Fussional Essenial</p>
            <h2 class="text-2xl font-bold text-gray-800">Classical Watch</h2>
            
          </div>
          <img src="./assets/images/Product/${res[0].Modals.modal}" class="w-40 h-auto object-contain" alt="Watch">
               <a href="/views/catalogue.html" class="bg-yellow-500 text-gray-800 px-2 mt-4  rounded-full  hover:bg-yellow-600">Shop Now</a>
        </div>
    
        <!-- Top right image with text -->
        <div class="flex items-center justify-between bg-gray-50 rounded-lg shadow-lg p-8 "id="modal2">
          <div class="text-left ">
            <p class="text-sm text-white font-semibold">From $500</p>
            <h2 class="text-2xl font-bold text-white">Watches for her</h2>
               <a href="/views/catalogue.html" class=" text-white mt-8 py-2 px-6 hover:bg-yellow-600">More Details</a>
           
          </div>
          <img src="./assets/images/Product/${res[0].Modals.modal2}" class="w-40 h-auto object-contain" alt="Watch">
        </div>
    
        <!-- Bottom centered image with text -->
        <div class="col-span-2 flex items-center w-full justify-between bg-gray-50 rounded-lg shadow-lg p-8 mx-auto"id="modal3">
          <div class="text-left">
            <p class="text-sm text-orange-500 font-semibold">From $500</p>
            <h2 class="text-2xl font-bold text-gray-800">Watches for both</h2>
              <a href="/views/catalogue.html" class="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full hover:bg-yellow-600">Explore More</a>
          </div>
       
          <img src="./assets/images/Product/${res[0].Modals.modal3}" class="w-40 h-auto object-contain" alt="Watch">
              
        </div>
      </div>
          
    `

  document.getElementById("ads").innerHTML = `


          
        <div class="w-full mx-auto  text-center  flex-none">
            <img src="./assets/images/Ads/cover.png" class="h-full">
        </div>
        <div class="w-full flex-none">
                  <img src="./assets/images/Ads/${res[0].Ads.Ad2}"class="w-full">
        </div>



  `



}
function showMAx(res){
  let Container = document.getElementById("best-sellers")
  
      res.categories.forEach(category => {
        
        category.products.forEach(produit => { 

              if(produit.rating&&produit.rating.rate>max)
                {
                      max = produit.rating.rate
                      IdOfmax = produit.id
                      src = produit.image
                      let objet = {
                        image:src,
                        id:IdOfmax
                      }
                      box.push(objet)
                      
                }
          });
      
      })
      // console.log(max)
      console.log(box)

      

      Container.innerHTML = `
      <div class="grid grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
        <!-- Top left image with text -->
        <div class="flex items-center justify-between bg-gray-50 rounded-lg shadow-lg p-8 overflow-hidden">
          <div class="text-left">
            <p class="text-sm text-orange-500 font-semibold">From $500</p>
            <h2 class="text-2xl font-bold text-gray-800">Watches for him</h2>
            <a href="/views/catalogue.html" class="text-sm font-semibold text-gray-600 underline mt-4 inline-block">More Details</a>
          </div>
          <img src="./assets/images/Product/${box[0].image}" class="w-40 h-auto object-contain scale-[1.8] rotate-[30deg]"  alt="Watch">
        </div>
    
        <!-- Top right image with text -->
        <div class="flex items-center justify-between bg-gray-50 rounded-lg shadow-lg p-8 overflow-hidden">
          <div class="text-left">
            <p class="text-sm text-orange-500 font-semibold">From $500</p>
            <h2 class="text-2xl font-bold text-gray-800">Watches for her</h2>
            <a href="/views/catalogue.html" class="text-sm font-semibold text-gray-600 underline mt-4 inline-block">More Details</a>
          </div>
          <img src="./assets/images/Product/${box[1].image}" class="w-40 h-auto object-contain scale-[1.8] rotate-[30deg]" alt="Watch">
        </div>
    `;

}

function ShowPopularWatches(){
  
  fetch("https://younessboumeshouli.github.io/MaganaProducts-API-/data.json")
  .then(res=>res.json())
  .then(res=>

   showMAx(res)
  )
}


ShowPopularWatches();

