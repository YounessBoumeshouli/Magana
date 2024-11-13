let slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

if (window.location.pathname === '/wrong-url') {
  // Redirect to the correct URL
  window.location.replace('https://google.com');
}

function showSlides(slideIndex) {
fetch("http://localhost:7000/categories")
.then(res=>res.json())
.then(res=>

  document.getElementById("CategoriesContainer").innerHTML = `
  <div class="CategoryWatch">
      <img src="./assets/images/Product/${res[slideIndex-1].products[0].image} " class="w-24">
  </div>
  <div class="CategoryWatch">
      <img src="./assets/images/Product/${res[slideIndex].products[0].image} " class="w-24">
  </div>
  <div class="CategoryWatch">
      <img src="./assets/images/Product/${res[slideIndex+1].products[0].image} " class="w-24">
  </div>
  `

) 
  
  console.log("Current slide index:", slideIndex);
}


function ShowBrand(){
  document.getElementById("BrandsContainer").innerHTML=""
  fetch("http://localhost:2000/brand")
  .then(res=>res.json())
  .then(res=>
document.getElementById("BrandsContainer").innerHTML=`

<img src="./assets/images/Brand/${res[0].brand1}">
<img src="./assets/images/Brand/${res[0].brand2}">
<img src="./assets/images/Brand/${res[0].brand3}">
<img src="./assets/images/Brand/${res[0].brand4}">
<img src="./assets/images/Brand/${res[0].brand5}">
`
    
   
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


function showMAx(res){
  let Container = document.getElementById("PopularWatches")
      res.forEach(category => {
        
        category.products.forEach(produit => { 

              if(produit.rating&&produit.rating.rate>max)
                {
                      max = produit.rating.rate
                      IdOfmax = produit.id
                      box.push(IdOfmax)
                }
          });
      
      })
      // console.log(max)
      console.log(box)

      box.forEach(bix => {
        Container.innerHTML += `
      <p>${bix}</p>
      `
      });

}

function ShowPopularWatches(){
  
  fetch("http://localhost:7000/categories")
  .then(res=>res.json())
  .then(res=>

   showMAx(res)
  )
}


ShowPopularWatches();
