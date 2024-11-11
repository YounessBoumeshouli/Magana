let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Catalog-slideb");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }


  if (slideIndex === 1) {
    slides[0].style.display = "block";  
    slides[slides.length - 1].style.display = "block"; 
    slides[1].style.display = "block"; 
  } else if (slideIndex === slides.length) {
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 2].style.display = "block";
    slides[0].style.display = "block"; 
  } else {
    slides[slideIndex - 1].style.display = "block"; 
    slides[slideIndex].style.display = "block"; 
    slides[slideIndex + 1].style.display = "block"; 
  }

  dots[slideIndex - 1].className += " active";
  
  console.log("Current slide index:", slideIndex);
}
