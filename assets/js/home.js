let slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }



function showSlides(slideIndex) {
fetch("http://localhost:3000/categories")
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
  fetch("http://localhost:5000/brand")
  .then(res=>res.json()
  .then(res=>
    res[0].array.forEach(element => {
     
      console.log(element)
    });
  )
  )
 
  
}
ShowBrand()

