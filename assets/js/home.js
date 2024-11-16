let slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// if (window.location.pathname === '/wrong-url') {
//   // Redirect to the correct URL
//   window.location.replace('https://google.com');
// }
let img1  = document.getElementById("img1")
let HeaderContainer  = document.getElementById("HeaderContainer")
HeaderContainer.addEventListener('mousemove', function yo(u) {
      img1.className = "";
  console.log(u.clientX,u.clientY);
  let bottomImg = (u.clientY - 76)/6
  let rightImg = (u.clientX - 411)/6
  img1.classList.add("relative")
  let className = `bottom-[${bottomImg}px]`
  img1.classList.add(className)
  let className2 = `right-[${rightImg}px]`
  img1.classList.add(className2)

});
HeaderContainer.addEventListener('mouseover', function yo(u) {
  img1.className = "";

})


function showSlides(slideIndex) {
fetch("http://localhost:3000/categories")
.then(res=>res.json())
.then(res=>

  document.getElementById("CategoriesContainer").innerHTML = `
  <div class="flex justify-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
    <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex items-center justify-center w-64 h-64">
      <img src="./assets/images/Product/${res[slideIndex-1].products[0].image}" class="w-56 h-56 object-cover rounded-md">
    </div>
    <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex items-center justify-center w-64 h-64">
      <img src="./assets/images/Product/${res[slideIndex].products[0].image}" class="w-56 h-56 object-cover rounded-md">
    </div>
    <div class="CategoryWatch bg-white rounded-lg shadow-lg p-4 flex items-center justify-center w-64 h-64">
      <img src="./assets/images/Product/${res[slideIndex+1].products[0].image}" class="w-56 h-56 object-cover rounded-md">
    </div>
  </div>
`

) 
  
  console.log("Current slide index:", slideIndex);
}


function ShowBrand(){
  document.getElementById("BrandsContainer").innerHTML=""
  fetch("http://localhost:2000/DATA")
  .then(res=>res.json())
  .then(res=>
    dataHome(res)
    
   
  )
  
}
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

  <img src="./assets/images/Brand/${res[0].brands.brand1}">
  <img src="./assets/images/Brand/${res[0].brands.brand2}">
  <img src="./assets/images/Brand/${res[0].brands.brand3}">
  <img src="./assets/images/Brand/${res[0].brands.brand4}">
  <img src="./assets/images/Brand/${res[0].brands.brand5}">
  `
document.getElementById("news").innerHTML = `
  <!-- Left side featured news item (occupies 2 columns on large screens) -->
  <div class="col-span-1 lg:col-span-2 relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
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
      <div class="grid grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
        <!-- Top left image with text -->
        <div class="flex items-center justify-between  bg-red-200 rounded-lg shadow-lg p-8">
          <div class="text-left">
            <p class="text-sm text-orange-500 font-semibold">Classic Fussional Essenial</p>
            <h2 class="text-2xl font-bold text-gray-800">Classical Watch</h2>
            <a href="#" class="text-sm font-semibold text-gray-600 underline mt-4 inline-block">Shop Now</a>
          </div>
          <img src="./assets/images/Product/${res[0].Modals.modal}" class="w-40 h-auto object-contain" alt="Watch">
        </div>
    
        <!-- Top right image with text -->
        <div class="flex items-center justify-between bg-gray-50 rounded-lg shadow-lg p-8">
          <div class="text-left">
            <p class="text-sm text-orange-500 font-semibold">From $500</p>
            <h2 class="text-2xl font-bold text-gray-800">Watches for her</h2>
            <a href="#" class="text-sm font-semibold text-gray-600 underline mt-4 inline-block">More Details</a>
          </div>
          <img src="./assets/images/Product/${res[0].Modals.modal2}" class="w-40 h-auto object-contain" alt="Watch">
        </div>
    
        <!-- Bottom centered image with text -->
        <div class="col-span-2 flex items-center w-full justify-between bg-gray-50 rounded-lg shadow-lg p-8 mx-auto">
          <div class="text-left">
            <p class="text-sm text-orange-500 font-semibold">From $500</p>
            <h2 class="text-2xl font-bold text-gray-800">Watches for both</h2>
            <a href="#" class="text-sm font-semibold text-gray-600 underline mt-4 inline-block"> Explore now </a>
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
  
      res.forEach(category => {
        
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
        <div class="flex items-center justify-between bg-gray-50 rounded-lg shadow-lg p-8">
          <div class="text-left">
            <p class="text-sm text-orange-500 font-semibold">From $500</p>
            <h2 class="text-2xl font-bold text-gray-800">Watches for him</h2>
            <a href="#" class="text-sm font-semibold text-gray-600 underline mt-4 inline-block">More Details</a>
          </div>
          <img src="./assets/images/Product/${box[0].image}" class="w-40 h-auto object-contain" alt="Watch">
        </div>
    
        <!-- Top right image with text -->
        <div class="flex items-center justify-between bg-gray-50 rounded-lg shadow-lg p-8">
          <div class="text-left">
            <p class="text-sm text-orange-500 font-semibold">From $500</p>
            <h2 class="text-2xl font-bold text-gray-800">Watches for her</h2>
            <a href="#" class="text-sm font-semibold text-gray-600 underline mt-4 inline-block">More Details</a>
          </div>
          <img src="./assets/images/Product/${box[1].image}" class="w-40 h-auto object-contain" alt="Watch">
        </div>
    
        <!-- Bottom centered image with text -->
        <div class="col-span-2 flex items-center justify-between bg-gray-50 rounded-lg shadow-lg p-8 mx-auto">
          <div class="text-left">
            <p class="text-sm text-orange-500 font-semibold">From $500</p>
            <h2 class="text-2xl font-bold text-gray-800">Watches for both</h2>
            <a href="#" class="text-sm font-semibold text-gray-600 underline mt-4 inline-block">More Details</a>
          </div>
          <img src="./assets/images/Product/${box[2].image}" class="w-40 h-auto object-contain" alt="Watch">
        </div>
      </div>
    `;

}

function ShowPopularWatches(){
  
  fetch("http://localhost:3000/categories")
  .then(res=>res.json())
  .then(res=>

   showMAx(res)
  )
}


ShowPopularWatches();
